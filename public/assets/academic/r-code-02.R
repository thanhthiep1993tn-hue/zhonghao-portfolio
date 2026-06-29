# library(tidyverse)
# library(readxl)
# library(countrycode)
# 
# d0 <- read_excel(path = "../data/WPP2024_GEN_F01_DEMOGRAPHIC_INDICATORS_COMPACT.xlsx", skip = 16,
#                  guess_max = 1e5, na = "...") %>%
#   select(3, 6, 11, 13, 22, 27, 30, 35, 48, 64) %>%
#   rename(name = 1,
#          iso3c = 2,
#          year = 3,
#          pop = 4,
#          growth_rate = 5,
#          tfr = 6,
#          sex_ratio = 7,
#          e0 = 8,
#          imr = 9,
#          net = 10) %>%
#   drop_na()
# d0
# 
# d1 <- read_excel(path = "../data/WPP2024_F01_LOCATIONS.XLSX", skip = 16) %>%
#   select(5, 13, 17, 19, 29, 32:34) %>%
#   rename(iso3c = 1,
#          region_sub = 2,
#          region_sdg = 3,
#          region_geo = 4) %>%
#   drop_na(iso3c) %>%
#   rowwise() %>%
#   mutate(grp_income = sum(c_across(5:8), na.rm = TRUE),
#          grp_income = case_match(grp_income,
#            1500 ~ "low",
#            1501 ~ "lower-middle",
#            1502 ~ "upper-middle",
#            1503 ~ "upper"
#          )) %>%
#   select(-(5:8)) %>%
#   ungroup()
# d1
# 
# un_latest <- d0 %>%
#   filter(year == 2023) %>%
#   left_join(d1) %>%
#   select(-year) %>%
#   drop_na(grp_income) %>%
#   relocate(1:2, region_geo, grp_income) %>%
#   select(-net, -e0, -growth_rate) %>%
#   select(-region_sub, -region_sdg)
# write_csv(un_latest, "../data/ggplot_un_latest.csv")
# 
# # un_eas <- d0 %>%
# #   left_join(d1) %>%
# #   filter(region_sub == "Eastern Asia") %>%
# #   mutate(name = countryname(sourcevar = name),
# #          pop = pop * 1000) %>%
# #   select(-contains("region"), -contains("grp"), -e0, -growth_rate, -net)
# # write_csv(un_eas, "../data/ggplot_un_eas.csv")
# 
# un_sa <- d0 %>%
#   left_join(d1) %>%
#   filter(region_sub == "Southern Asia") %>%
#   mutate(name = countryname(sourcevar = name),
#          pop = pop * 1000) %>%
#   select(-contains("region"), -contains("grp"), -e0, -growth_rate, -net)
# write_csv(un_sa, "../data/ggplot_un_sa.csv")
# 

library(tidyverse)
un_latest <- read_csv("../data/ggplot_un_latest.csv")

library(tidyverse)
un_latest

# i dont know why but wasted a lot of time trying to get the code chunk working below... just call the pdf and be done with it
# par(mar = rep(2, 4))
par(mfrow = c(1,2))
# left 
plot(x = un_latest$tfr, y = un_latest$imr)
# right
hist(x = un_latest$tfr)

# # left
# plot(x = un_latest$tfr, y = un_latest$imr)
# # right
# hist(x = un_latest$tfr)








# library(tidyverse)
# # left
# ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
#   geom_point()
# # right
# ggplot(data = un_latest, mapping = aes(x = tfr)) +
#   geom_histogram()

library(patchwork)
p1 <- ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
  geom_point()
p2 <- ggplot(data = un_latest, mapping = aes(x = tfr)) +
  geom_histogram()
p1 + p2



# # left: one discrete variable
# ggplot(data = un_latest, mapping = aes(x = grp_income)) +
#   geom_bar()
# # right: one continuous variable
# ggplot(data = un_latest, mapping = aes(x = tfr)) +
#   geom_histogram()

p1 <- ggplot(data = un_latest, mapping = aes(x = grp_income)) +
  geom_bar()
p2 <- ggplot(data = un_latest, mapping = aes(x = tfr)) +
  geom_histogram()
p1 + p2

# # left: one continuous variable
# ggplot(data = un_latest, mapping = aes(x = tfr)) +
#   geom_density()
# # right: one continuous variable
# ggplot(data = un_latest, mapping = aes(x = tfr)) +
#   geom_freqpoly()

p1 <- ggplot(data = un_latest, mapping = aes(x = tfr)) +
  geom_density()
p2 <- ggplot(data = un_latest, mapping = aes(x = tfr)) +
  geom_freqpoly()
p1 + p2



# # left: both continuous variable
# ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
#   geom_point()
# # right: both continuous variable
# ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
#   geom_density2d()

p1 <- ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
  geom_point()
p2 <- ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
  geom_density2d()
p1 + p2

# # left: one continuous, one discrete variable
# ggplot(data = un_latest, mapping = aes(x = tfr, y = grp_income)) +
#   geom_boxplot()
# # right: one continuous, one discrete variable
# ggplot(data = un_latest, mapping = aes(x = tfr, y = grp_income)) +
#   geom_violin()

p1 <- ggplot(data = un_latest, mapping = aes(x = tfr, y = grp_income)) +
  geom_boxplot()
p2 <- ggplot(data = un_latest, mapping = aes(x = tfr, y = grp_income)) +
  geom_violin()
p1 + p2

# un_chn <- d0 %>%
#   filter(name == "China") %>%
#   mutate(year = as.integer(year))
# un_chn
# write_csv(un_chn, "../data/ggplot_un_chn.csv")

un_chn <- read_csv("../data/ggplot_un_chn.csv")

un_chn

# # left
# ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
#   geom_col()
# # right
# ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
#   geom_area()

p1 <- ggplot(data = un_chn, mapping = aes(x = year, y = tfr))+
  geom_col()

p2 <- ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
  geom_area()
p1 + p2

# # left
# ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
#   geom_line()
# # right
# ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
#   geom_step()

p1 <- ggplot(data = un_chn, mapping = aes(x = year, y = tfr))+
  geom_line()

p2 <- ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
  geom_step()
p1 + p2



# # left: follows order on x-axis (if x is not time can cause problem)
# ggplot(data = un_chn, mapping = aes(x = tfr, y = imr)) +
#   geom_line()
# # right: follows order in data
# ggplot(data = un_chn, mapping = aes(x = tfr, y = imr)) +
#   geom_path()

p1 <- ggplot(data = un_chn, mapping = aes(x = tfr, y = imr))+
  geom_line()

p2 <- ggplot(data = un_chn, mapping = aes(x = tfr, y = imr)) +
  geom_path()
p1 + p2

ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
  geom_density2d() +
  geom_point() +
  geom_smooth()

# add a layer of red points for latest un_chn data - more on aesthetics later!
ggplot(data = un_latest, mapping = aes(x = tfr, y = imr, label = name)) +
  geom_density2d() +
  geom_point() +
  geom_point(data = un_latest[un_latest$iso3c == "CHN",], colour = "red")


ggplot(data = un_latest, mapping = aes(x = tfr, y = imr)) +
  geom_density2d() +
  geom_point() +
  geom_smooth() +
  geom_vline(xintercept = 2.1) +
  # use mapping when applying a function to a column in the data
  geom_hline(mapping = aes(yintercept = mean(imr)))

# NA

un_sa <- read_csv("../data/ggplot_un_sa.csv")
un_sa

# southern asia: line through all points
ggplot(data = un_sa, mapping = aes(x = year, y = tfr)) +
  geom_line()

# southern asia: line for each country (identified by name)
ggplot(data = un_sa, mapping = aes(x = year, y = tfr, group = name)) +
  geom_line()

# southern asia: set colour from a continuous variable
ggplot(data = un_sa, mapping = aes(x = tfr, y = imr, colour = name)) +
  geom_point()

# southern asia: set colour from continuous variable
ggplot(data = un_sa, mapping = aes(x = tfr, y = imr, colour = year)) +
  geom_point()

# southern asia: set colour and linetype from discrete variable
ggplot(data = un_sa,
       mapping = aes(x = tfr, y = imr, colour = name, linetype = name)) +
  geom_path()

# southern asia: set colour from discrete and alpha from a continuous variable
ggplot(data = un_sa,
       mapping = aes(x = tfr, y = imr, colour = name, alpha = year)) +
  geom_path() +
  # to fit legend on my slides
  theme(legend.box = "horizontal")

# southern asia: set colour and size from data, set alpha to 0.5 for all.
ggplot(data = un_sa,
       mapping = aes(x = tfr, y = imr, colour = name, size = pop/1e6)) +
  # all points with the same transparency
  geom_point(alpha = 0.5) +
  theme(legend.box = "horizontal")

# stack position (default for geom_bar())
ggplot(data = un_latest, mapping = aes(x = grp_income, fill = region_geo)) +
  geom_bar()

# dodge position
ggplot(data = un_latest, mapping = aes(x = grp_income, fill = region_geo)) +
  geom_bar(position = "dodge")

# fill position
ggplot(data = un_latest, mapping = aes(x = grp_income, fill = region_geo)) +
  geom_bar(position = "fill")

# NA



try({
# how can we plot a bar for tfr in every period?... this gives an error...
ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
  geom_bar()
})

try({
# only one variable?... but this is not what we want...
ggplot(data = un_chn, mapping = aes(x = tfr)) +
  geom_bar()
})

# un_chn: identity stat
ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
  geom_bar(stat = "identity")

# geom_bar() with identity stat is the same as geom_col()
ggplot(data = un_chn, mapping = aes(x = year, y = tfr)) +
  geom_col()



# southern asia: fix coordinates: 1 coord unit of imr (y) same as 0.01 tfr (x)
ggplot(data = un_sa,
       mapping = aes(x = tfr, y = imr, colour = name, alpha = year)) +
  geom_path() +
  coord_fixed(ratio = 0.01) +
  # to fit legend on my slides
  theme(legend.box = "horizontal")

# southern asia flip coordinates: x is y, y is x
ggplot(data = un_sa,
       mapping = aes(x = tfr, y = imr, colour = name, alpha = year)) +
  geom_path() +
  coord_flip() +
  # to fit legend on my slides
  theme(legend.box = "horizontal")

# log y axes
ggplot(data = un_sa,
       mapping = aes(x = tfr, y = imr, colour = name, alpha = year)) +
  geom_path() +
  coord_trans(y = "log") +
  # to fit legend on my slides
  theme(legend.box = "horizontal")

# polar coordinates: x is now the angle in circle and y is distance from centre
ggplot(data = un_sa,
       mapping = aes(x = tfr, y = imr, colour = name, alpha = year)) +
  geom_path() +
  coord_polar() +
  # to fit legend on my slides
  theme(legend.box = "horizontal")

# ggplot(data = un_latest, mapping = aes(x = grp_income)) +
#   geom_bar()
# 
# ggplot(data = un_latest, mapping = aes(x = "", fill = grp_income)) +
#   geom_bar(position = "fill")
# 
# ggplot(data = un_latest, mapping = aes(x = "", fill = grp_income)) +
#   geom_bar(position = "fill") +
#   coord_polar(theta = "y")
g1 <- ggplot(data = un_latest, mapping = aes(x = grp_income)) +
  geom_bar()

g2 <- ggplot(data = un_latest, mapping = aes(x = "", fill = grp_income)) +
  geom_bar(position = "fill")

g3 <- ggplot(data = un_latest, mapping = aes(x = "", fill = grp_income)) +
  geom_bar(position = "fill") +
  coord_polar(theta = "y")

library(patchwork)
g1 + g2 +g3 + plot_layout(nrow = 1)

# directly create the data to be used in the pie chart
un_latest_dev <- count(x = un_latest, grp_income)
un_latest_dev

# library(ggforce)
# # pie chart
# p1 <- ggplot(data = un_latest_dev) +
#   geom_arc_bar(mapping = aes(fill = grp_income, amount = n,
#                              x0 = 0, y0 = 0, r0 = 0, r = 1),
#                stat = "pie")
# # donut chart
# p2 <- ggplot(data = un_latest_dev) +
#   geom_arc_bar(mapping = aes(fill = grp_income, amount = n,
#                              x0 = 0, y0 = 0, r0 = 0.8, r = 1),
#                stat = "pie") +
#   theme_void() + # remove grid lines and axis
#   coord_fixed() # ensure circle rather than oval

library(ggforce)
# pie chart
p1 <- ggplot(data = un_latest_dev) +
  geom_arc_bar(mapping = aes(fill = grp_income, amount = n, 
                             x0 = 0, y0 = 0, r0 = 0, r = 1),
               stat = "pie") 
# donut chart
p2 <- ggplot(data = un_latest_dev) +
  geom_arc_bar(mapping = aes(fill = grp_income, amount = n, 
                             x0 = 0, y0 = 0, r0 = 0.8, r = 1),
               stat = "pie") +
  theme_void() + # remove grid lines and axis
  coord_fixed() # ensure circle rather than oval
library(patchwork)
p1 + p2 + plot_layout(nrow = 1)

# southern asia: facet_wrap() function for each country (name)
ggplot(data = un_sa, mapping = aes(x = year, y = tfr, colour = name)) +
  geom_line() +
  facet_wrap(facets = "name") +
  # to fit legend on my slides
  theme(legend.box = "horizontal")

# facet_wrap() function using one row and restrict label width
ggplot(data = un_sa, mapping = aes(x = year, y = tfr, colour = name)) +
  geom_line() +
  facet_wrap(facets = vars(name), nrow = 1) +
  # drop country name guide
  guides(colour = "none")

# facet_wrap() function with different y axis limits
ggplot(data = un_sa, mapping = aes(x = year, y = tfr, colour = name)) +
  geom_line() +
  facet_wrap(facets = vars(name), scales = "free_y") +
  guides(colour = "none")

# facet_wrap() function scatter plot
ggplot(data = un_latest,
       mapping = aes(x = tfr, y = imr, colour = name)) +
  geom_point() +
  facet_wrap(facets = vars(region_geo)) +
  guides(colour = "none")

# facet_wrap() function scatter plot using income group
ggplot(data = un_latest,
       mapping = aes(x = tfr, y = imr, colour = name)) +
  geom_point() +
  facet_wrap(facets = vars(grp_income)) +
  guides(colour = "none")

# all data: facet_wrap() function scatter plot with x and y scales free
ggplot(data = un_latest,
       mapping = aes(x = tfr, y = imr, colour = name)) +
  geom_point() +
  facet_wrap(facets = "grp_income", scales = "free") +
  guides(colour = "none")

# facet_grid() function scatter plot using income group and region
ggplot(data = un_latest,
       mapping = aes(x = tfr, y = imr, colour = name)) +
  geom_point() +
  facet_grid(row = vars(grp_income), col = vars(region_geo)) +
  guides(colour = "none")

# ... alter labels and free grid scales
ggplot(data = un_latest,
       mapping = aes(x = tfr, y = imr, colour = name)) +
  geom_point() +
  facet_grid(row = vars(grp_income), col = vars(region_geo),
             scales = "free", labeller = label_wrap_gen(20)) +
  guides(colour = "none") +
  # rotate income group labels to fit the legend on my slides
  theme(strip.text.y = element_text(angle = 0))

# NA





ggplot(data = un_latest,
       mapping = aes(x = tfr, y = imr, shape = grp_income, colour = region_geo)) +
  geom_point() +
  scale_shape_manual(values = 15:20) +
  scale_color_brewer(palette = "Dark2") +
  scale_x_continuous(breaks = seq(from = 1, to= 8, by = 1)) +
  scale_y_log10() +
  # to fit legend on my slides
  theme(legend.box = "horizontal")

ggplot(data = un_sa, mapping = aes(x = year, y = name, fill = sex_ratio)) +
  geom_tile(colour = "grey") +
  scale_fill_gradient2(low="pink", high="skyblue", mid="white", midpoint = 105) 

ggplot(data = un_latest, mapping = aes(x = tfr, y = grp_income, colour = grp_income)) +
  geom_violin() +
  labs(title = "Total Fertility Rates 2021",
       subtitle = "Most upper-income countries have fertility rates below 2.",
       caption = "Data: UN World Population Prospects 2022",
       x = "Total Fertility Rate", y = "Income Group") +
  guides(colour = "none")



# change theme
ggplot(data = un_latest, mapping = aes(x = tfr, y = grp_income, colour = grp_income)) +
  geom_violin() +
  theme_bw()



ggplot(data = un_latest, mapping = aes(x = tfr, y = grp_income, fill = grp_income)) +
  geom_violin() +
  labs(x = "Total Fertility Rate", fill = "Income Group") +
  theme(panel.background = element_rect(fill = "white"),
        legend.background = element_rect(colour = "grey"),
        axis.line = element_line(size = 0),
        legend.title = element_text(face = "italic"),
        axis.text.y = element_blank(),
        axis.title.y = element_blank())

# # save a plot to an object
# g <- ggplot(data = un_latest, mapping = aes(x = grp_income, fill = region_geo)) +
#   geom_bar()
# # plot g with the black and white theme
# g + theme_bw()

g <- ggplot(data = un_latest, mapping = aes(x = grp_income, fill = region_geo)) +
  geom_bar()
# saves the last plot from RStudio as a PNG
ggsave(filename = "./plot/myplot.png", width = 10, height = 5, unit = "cm", scale = 2, plot = g + theme_bw())
# saves the plot from object g as a PDF
ggsave(filename = "./plot/myplot.pdf", width = 10, height = 5, unit = "cm", plot = g)

# # saves the last plot from RStudio as a PNG
# ggsave(filename = "myplot.png", width = 10, height = 5, unit = "cm", scale = 2)
# # saves the plot from object g as a PDF
# ggsave(filename = "myplot.pdf", width = 10, height = 5, unit = "cm", plot = g)

# NA
