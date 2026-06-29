library(tidyverse)
u <- read_csv("../slides-data/BGD2011_upzilla.csv") %>%
  select(upzilla, fert, urbnrr, mean_age, district) 
u

d <- read_csv("../slides-data/BGD2011_district.csv") %>%
  select(district, division, city_district, mean_yrschool)
d


x <- u %>%
  select(fert, urbnrr, mean_age, district) %>%
  left_join(d)
x

write_csv(x, "../slides-data/BGD2011_multilevel.csv")

m0 <- lm(fert ~ urbnrr + mean_age, data = x)
arm::display(m0)

m1 <- MASS::rlm(fert ~ urbnrr + mean_age, data = x) 
summary(m1)

m2 <- lm(fert ~ urbnrr + mean_age + district, data = x) 
arm::display(m2)

p2 <- coef(m2)

p2[1:5]

p2[length(p2) - 4:0]

m3 <- lm(fert ~ urbnrr + mean_age + district + mean_yrschool, data = x) 
p3 <- coef(m3)

p3[1:5]

p3[length(p3) - 4:0]

m4 <- lm(fert ~ urbnrr + mean_age + mean_yrschool + district , data = x) 
p4 <- coef(m4)

p4[1:5]

p4[length(p4) - 4:0]

# convert district to varying intercept in a multilevel model
library(lme4)
m5 <- lmer(fert ~ urbnrr + mean_age + (1 | district), data = x)
arm::display(m5)

# Lengthy output from `summary()` function for `lmer` models
summary(m5)

arm::display(m0)

library(broom.mixed)
tidy(m5, conf.int = TRUE)

tidy(m5, conf.int = TRUE)

library(performance)
icc(model = m5)

# lower BIC indicates better model fit
formula(m0)
glance(m0)$BIC

formula(m2)
glance(m2)$BIC

formula(m5)
glance(m5)$BIC

library(ggeffects)
ggpredict(model = m5, terms = c("mean_age", "urbnrr")) %>%
  plot()

ggpredict(model = m5, type = "random", terms = c("mean_age", "district",  "urbnrr")) |>
  plot(show_ci = FALSE) +
  scale_color_viridis_d() +
  guides(colour = "none")

ggpredict(model = m5, type = "random", 
          terms = c("mean_age", "urbnrr", "district[Bagerhat, Dhaka]")) %>%
  plot()

knitr::include_graphics("./07_multilevel1_files/figure-beamer/lmer-predict-1.pdf")
# knitr::include_graphics("./plot/lmer-predict-1.pdf")

knitr::include_graphics("./07_multilevel1_files/figure-beamer/lmer-predict-2.pdf")
# knitr::include_graphics("./plot/lmer-predict-2.pdf")

knitr::include_graphics("./07_multilevel1_files/figure-beamer/lmer-predict-3.pdf")
# knitr::include_graphics("./plot/lmer-predict-3.pdf")

# we cannot estimate both district, mean_yrschool and city_district
# with a standard regression model
p6 <- lm(fert ~ urbnrr + mean_age + district + mean_yrschool + city_district, 
         data = x) |>
  coef()
p6[1:4]
p6[length(p6) - 3:0]

m6 <- lmer(fert ~ urbnrr + mean_age + mean_yrschool + city_district + 
             (1 | district), data = x)
arm::display(m6)

tidy(m6, conf.int = TRUE) 

tidy(m5, effects = "ran_vals")

rr <- tidy(m5, effects = "ran_vals", conf.int = TRUE) %>%
  left_join(d, by = c("level" = "district")) %>%
  relocate(level, division) %>%
  arrange(estimate)
rr

ggplot(data = rr,
       mapping = aes(x = fct_inorder(level), y = estimate, colour = division,
                     ymin = conf.low, ymax = conf.high)) +
  geom_pointrange() +
  geom_hline(yintercept = 0, linetype = "dashed") +
  theme_bw() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

e5 <- tidy(m5, conf.int = TRUE, effects = "ran_vals") %>%
  left_join(d, by = c("level"="district"))

e2 <- tidy(m2, conf.int = TRUE) %>%
  filter(str_detect(term, "district")) %>%
  mutate(center_shift = mean(estimate),
         estimate = estimate - center_shift,
         conf.low = conf.low - center_shift,
         conf.high = conf.high - center_shift) %>%
  rename(level = term,
         estimate_fix = estimate,
         conf.low_fix = conf.low,
         conf.high_fix = conf.high) %>%
  select(level, estimate_fix, conf.low_fix, conf.high_fix) %>%
  mutate(level = str_remove(level, "district"))

ee <- e5 %>%
  left_join(e2) %>%
  mutate(estimate_fix = ifelse(is.na(estimate_fix), 0, estimate_fix)) %>%
  arrange(estimate)

ee_long <- ee %>%
  rename(estimate_random = estimate, 
         conf.low_random = conf.low,
         conf.high_random = conf.high) %>%
  pivot_longer(
    cols = matches("^(estimate|conf\\.low|conf\\.high)_(random|fix)$"),
    names_to = c(".value", "model"),
    names_sep = "_"
  ) %>%
  mutate(model = recode(model, fix = "Fixed", random = "Random")) %>%
  arrange(desc(model), estimate)

ggplot(data = ee_long, 
       mapping = aes(x = fct_inorder(level), colour = model, alpha = model)) +
  geom_pointrange(mapping = aes(y = estimate, ymin = conf.low, ymax = conf.high),
                  position = position_dodge(width = 0.5)) +
  geom_hline(yintercept = 0, linetype = "dashed") +
  theme_bw() +
  scale_alpha_discrete(range = c(0.4, 0.8)) +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# base model for reference
arm::display(m0)

check_collinearity(m0)

par(oma = rep(0,4), mar = rep(0,4))

par(mfrow = c(2, 2))
plot(m0, ask = FALSE)

# convert district to varying intercept in a multilevel model
arm::display(m5)

library(GGally)
list("No District" = m0, "Fixed District" = m2, "Varying District" = m5) |>
  ggcoef_compare(include = -starts_with("district"), significance = NULL)

check_model(m5)

library(patchwork)
p <- m5 %>%
  check_model() %>%
  plot()

p + plot_layout(ncol = 4)

knitr::include_graphics("./07_multilevel1_files/figure-beamer/lmer-check-h-2.pdf")

check_model(m5, check = "reqq")

check_collinearity(m5)

library(tidyverse)

# Simulate dummy data
set.seed(1)
n_groups <- 10
n_per_group <- 20

dd <- expand_grid(group = factor(1:n_groups), id = 1:n_per_group) %>%
  mutate(
    x = rnorm(n_groups * n_per_group, mean = as.numeric(group), sd = 1),
    # Within-group trend: positive slope
    y = 0.75 * x + as.numeric(group) + rnorm(n_groups * n_per_group, sd = 1)
  )

# Add overall trend (negative) by shifting x
dd$x <- dd$x - as.numeric(dd$group) * 1.5

# Plot
ggplot(dd, aes(x = x, y = y)) +
  geom_point(alpha = 0.6) +
  # geom_smooth(method = "lm", se = FALSE, aes(group = group)) +  # within-group lines
  # geom_smooth(method = "lm", se = FALSE, colour = "black") +               # overall trend
  guides(color = FALSE) +
  theme_bw()

# Plot
ggplot(dd, aes(x = x, y = y)) +
  geom_point(alpha = 0.6) +
  # geom_smooth(method = "lm", se = FALSE, aes(group = group)) +  # within-group lines
  geom_smooth(method = "lm", se = FALSE, colour = "black") +               # overall trend
  guides(color = FALSE) +
  theme_bw()

# Plot
ggplot(dd, aes(x = x, y = y, color = group)) +
  geom_point(alpha = 0.6) +
  # geom_smooth(method = "lm", se = FALSE, aes(group = group)) +  # within-group lines
  geom_smooth(method = "lm", se = FALSE, colour = "black") +               # overall trend
  guides(color = FALSE) +
  theme_bw()

# Plot
ggplot(dd, aes(x = x, y = y, color = group)) +
  geom_point(alpha = 0.6) +
  geom_smooth(method = "lm", se = FALSE, aes(group = group)) +  # within-group lines
  geom_smooth(method = "lm", se = FALSE, colour = "black") +               # overall trend
  guides(color = FALSE) +
  theme_bw()
