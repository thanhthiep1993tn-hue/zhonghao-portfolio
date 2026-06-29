# 0. Load required packages
library(tidyverse)
library(lme4)
library(performance)
library(broom.mixed)
library(ggeffects)

# ─────────────────────────────────────────────
# PART 1: Data and simple exploration
# ─────────────────────────────────────────────

# 1. Load the sleepstudy dataset (from lme4) and examine its structure and documentation
data(sleepstudy)
str(sleepstudy)
?sleepstudy

# 2. Visualise the raw data using ggplot() to plot the Reaction by Days for each Subject
#    Hint: use geom_line() and geom_point() and a facet for each Subject
ggplot(data = #####, mapping = #####) +
  facet_wrap(#####) +
  geom_line() +
  geom_point()

# 3. Choose the correct statement about the sleepstudy data structure:
#    Mark your chosen answers by placing an X before the correct one
# a.   Reaction is measured repeatedly within subjects.
# b.   Each subject has only one observation.
# c.   Days is a grouping factor.
# d.   There is no within-subject variation.

# ─────────────────────────────────────────────
# PART 2: Random intercept model
# ─────────────────────────────────────────────

# 1. Fit a random intercept model: Reaction ~ Days + (1 | Subject)
m1 <- #####
summary(m1)

# 2. Display the model summary for random parameters using the tidy() function in the 
#    broom.mixed package
#    Hint: make sure you have the broom.mixed package installed and loaded


# 3. Choose the correct statements about the standard errors in the sleepstudy model:
#    Mark your chosen answers by placing an X before the correct ones.
#
# a. X The standard deviation of the random intercept reflects how much subjects differ in their baseline reaction times.  
# b.   The standard deviation of the residual reflects variation between subjects.  
# c. X The residual standard deviation reflects within-subject variation not explained by the model.  
# d.   A larger random intercept SD means the fixed effect of Days is weaker.  
# e. X The total variability in reaction time is a combination of between-subject (random intercept) and within-subject (residual) variation.  

# 4. Visualise fitted lines per subject using the ggpredict() function. Ensure you 
#    a) Set type = "random" to get subject-specific predictions,
#    a) show data points and hide confidence intervals,
#    b) use viridis color scale, and
#    c) hide legend for color.





# 5. Calculate the ICC from the random intercept model (m1)


# 6. Choose the correct statements about the intraclass correlation (ICC) from m1:
#    Mark your chosen answers by placing an X before the correct ones
#
# a.   An unadjusted ICC of 0.424 means that about 42% of the variation in Reaction times
#        is explained by subject-level differences (after accounting for fixed effects).
# b.   The ICC shows the strength of the fixed effect of Days.
# c.   An adjusted ICC of 0.589 means that about 59% of the variation in Reaction times
#        is explained by subject-level differences (after accounting for fixed effects).
# d.   The unadjusted ICC is always larger than the adjusted ICC.
# e.   A higher ICC indicates stronger clustering of repeated measures within subjects.
  
# 7. Calculate a fixed effects model regressing Reaction ~ Days + Subject
m0 <- #####
summary(m0)

# 8. Compare the fixed effects model (m0) and random intercept model (m1) using BIC
#    from the glance() function in the broom package



# 9. Which model is preferred based on BIC?
#    Mark your chosen answers by placing an   before the correct ones
#
# a.   Random intercept model (m1) has lower BIC and is preferred.
# b.   Fixed effects model (m0) has higher BIC and is preferred.

# ─────────────────────────────────────────────
# PART 3: Random intercept and slope model
# ─────────────────────────────────────────────

# 1. Fit random intercept and slope model for the effect of Days varying by Subject
m2 <- #####
summary(m2)

# 2. Display the model summary for random parameters using the tidy() function in the 
#    broom.mixed package


# 3 Choose the correct statements about the random parameters from m2:
#     Mark your chosen answers by placing an X before the correct ones
#
# a. X The slope SD shows that subjects vary in how strongly Reaction changes with Days.
# b.   The residual SD represents between-subject variation in baseline reaction times.
# c.   The correlation between intercept and slope means subjects with higher baselines
#        always have declining slopes.
# d. X The correlation between intercept and slope suggests only a weak tendency for 
#        higher-baseline subjects to have slightly steeper slopes.

# 4. Adapt the previous ggpredict() code to visualise subject-specific fitted lines from m2





# 5. Check the assumptions of normality for the random intercepts and slopes in 
#    model m3 using the check_model() function from the performance package


# 6. Fit a new model m3, that fixes the Subject slopes to be uncorrelated with intercept
#    Hint: see the slide on random effects specification in multilevel2.pdf
m3 <- #####

# 7. Display the model summary for random parameters using the tidy() function in the 
#    broom.mixed package


# 8. Compare models m1, m2 and m3 using BIC




# 9. Which model is preferred based on BIC?
#    Mark your chosen answers by placing an   before the correct ones
#
# a.   Random intercept and slope model with uncorrelated effects (m3) has lowest BIC and is preferred.
# b.   Random intercept model (m1) has highest BIC and is preferred.
# c.   Random intercept and slope model with correlated effects (m2) has lowest BIC and is preferred.
