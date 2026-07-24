# ECON 440 College Fed Challenge Study Guide

Fall 2026 | Student reference

This guide defines the shared knowledge every presenter should possess. Research
desks create specialization, not permission to ignore the rest of the policy
problem.

## 1. The policy problem

For every issue, students should be able to answer four questions:

1. **State:** What do the most relevant data say now?
2. **Outlook:** Where is the variable likely to move over the near term?
3. **Mechanism:** Why should it move, and how would monetary policy affect it?
4. **Decision:** What does this imply for the stance, tools, and risk management
   of policy?

A list of indicators is not a diagnosis. A diagnosis makes a claim about the
economy's state, identifies the evidence that distinguishes it from plausible
alternatives, and explains why it matters for policy.

## 2. The Federal Reserve and the FOMC

Know the division of responsibilities:

- Congress sets the statutory framework and the dual mandate.
- The Federal Open Market Committee determines the stance of monetary policy.
- The Board of Governors and Reserve Banks perform additional supervisory,
  payments, lending, research, and public functions.
- The New York Fed's Open Market Trading Desk implements FOMC directives.

Be able to distinguish:

- the **target range for the federal funds rate** from the observed effective
  federal funds rate;
- the policy decision from its implementation;
- the FOMC statement, implementation note, minutes, Summary of Economic
  Projections, and press conference;
- the federal funds rate from other short-term rates, longer Treasury yields,
  private borrowing rates, and financial conditions; and
- the goals of policy from the intermediate prices and quantities through which
  policy operates.

Primary references:

- [Federal Reserve monetary policy](https://www.federalreserve.gov/monetarypolicy.htm)
- [FOMC calendars and information](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)
- [The Fed Explained](https://www.federalreserve.gov/aboutthefed/the-fed-explained.htm)

## 3. The ample-reserves operating framework

In the current framework, the Federal Reserve does not need to engineer a
precise daily quantity of scarce reserves to move the federal funds rate.
Administered rates help place a floor under overnight rates while the supply of
reserves remains ample.

Students should be able to explain the roles of:

- interest on reserve balances;
- the overnight reverse repurchase agreement facility;
- the standing repo facility;
- the discount window;
- reserve balances and banks' demand for them;
- Treasury General Account movements and other autonomous balance-sheet
  factors; and
- the Desk's open-market operations.

Study questions:

1. Why might the effective federal funds rate trade below interest on reserve
   balances?
2. How would declining reserves show up in money-market spreads?
3. What is the difference between policy tightening through the target range
   and balance-sheet runoff?
4. Why are reserve balances an asset of banks but a liability of the Federal
   Reserve?

Primary references:

- [Policy tools](https://www.federalreserve.gov/monetarypolicy/policytools.htm)
- [Policy implementation](https://www.newyorkfed.org/markets/domestic-market-operations/monetary-policy-implementation)
- [Ample-reserves basics](https://www.federalreserve.gov/econres/notes/feds-notes/implementing-monetary-policy-in-an-ample-reserves-regime-the-basics-note-1-of-3-20200701.html)

## 4. Reading real-time data

For every series, record:

- exact source and series name;
- units and seasonal-adjustment status;
- frequency and date range;
- transformation;
- release and retrieval dates;
- whether the observation is preliminary or revised; and
- the comparison that makes it meaningful.

Common transformations:

- monthly annualized growth: `((x_t / x_(t-1))^12 - 1) × 100`;
- three-month annualized growth: `((x_t / x_(t-3))^4 - 1) × 100`;
- 12-month inflation: `(x_t / x_(t-12) - 1) × 100`;
- percentage-point change: `rate_t - rate_(t-k)`; and
- basis-point change: `(rate_t - rate_(t-k)) × 100`.

Do not mix percent changes with percentage-point changes. Do not annualize a
rate already expressed at an annual rate. Check whether releases are revised
before telling a story about acceleration or turning points.

## 5. Inflation

### Measures

Know the differences among:

- CPI and PCE price indexes;
- headline and core inflation;
- 12-month, six-month, three-month, and monthly rates;
- market-based and survey measures of expectations; and
- broad measures versus component-level or distributional evidence.

### Diagnostic structure

Ask:

1. Is inflation above a mandate-consistent rate?
2. Is recent momentum different from the trailing 12-month rate?
3. Is pressure broad or concentrated?
4. Are goods, housing services, and nonhousing services telling the same story?
5. Do wages and productivity imply persistent unit-cost pressure?
6. Are expectations anchored across horizons and measures?
7. Which part reflects demand, supply, pass-through, or measurement lags?

Avoid declaring victory from one favorable month or declaring reacceleration
from one adverse component. Explain what evidence would make the change
persistent.

Primary sources:

- [BEA Personal Income and Outlays](https://www.bea.gov/data/income-saving/personal-income)
- [BLS CPI](https://www.bls.gov/cpi/)
- [New York Fed consumer expectations](https://www.newyorkfed.org/microeconomics/sce)
- [Cleveland Fed inflation expectations](https://www.clevelandfed.org/indicators-and-data/inflation-expectations)

## 6. Labor markets

Use both establishment and household evidence. Know:

- payroll growth and revisions;
- unemployment, participation, and employment-population ratios;
- prime-age measures;
- labor-force flows and unemployment duration;
- job openings, hires, and quits;
- initial unemployment-insurance claims;
- hours, temporary help, and wage measures; and
- differences across demographic groups, industries, and regions.

Diagnostic questions:

1. Is labor demand slowing, or is labor supply expanding?
2. Are unemployment changes driven by entry, job loss, or reemployment?
3. Is payroll growth concentrated?
4. Do vacancies, quits, wages, and hours corroborate the headline?
5. Is the market moving toward balance without a sharp contraction?

The unemployment rate is a ratio with both numerator and denominator effects.
Payroll growth can be positive while labor-market conditions soften.

Primary sources:

- [BLS Employment Situation](https://www.bls.gov/news.release/empsit.htm)
- [BLS JOLTS](https://www.bls.gov/jlt/)
- [Department of Labor claims](https://www.dol.gov/ui/data.pdf)
- [Atlanta Fed Wage Growth Tracker](https://www.atlantafed.org/chcs/wage-growth-tracker)

## 7. Activity, demand, and supply

Separate the level, growth rate, and composition of activity. Examine:

- real GDP and real final sales;
- gross domestic income;
- consumption and disposable income;
- business fixed investment and inventories;
- housing activity;
- industrial production;
- government purchases;
- trade; and
- productivity and potential supply.

Ask whether demand is above or below sustainable supply, not merely whether GDP
growth is positive. Reconcile spending data with income, production,
labor-market, and qualitative evidence. State how much weight is placed on
nowcasts and why.

Primary sources:

- [BEA GDP](https://www.bea.gov/data/gdp/gross-domestic-product)
- [BEA Personal Income and Outlays](https://www.bea.gov/data/income-saving/personal-income)
- [Federal Reserve industrial production](https://www.federalreserve.gov/releases/g17/)
- [Atlanta Fed GDPNow](https://www.atlantafed.org/cqer/research/gdpnow)

## 8. Credit and financial conditions

Monetary policy transmits through more than the federal funds rate. Track:

- Treasury yields and the expected path of short rates;
- real yields and inflation compensation;
- mortgage, auto, consumer, and business borrowing rates;
- corporate and municipal credit spreads;
- bank lending standards and demand;
- bank credit and deposit conditions;
- household debt service and delinquency;
- equity prices, exchange rates, and volatility; and
- market functioning and liquidity.

Distinguish:

- **price** of credit from **quantity** of credit;
- reduced demand from tighter supply;
- risk-free rates from risk premia;
- expected policy from a policy surprise; and
- financial tightening from financial stress.

Primary sources:

- [Federal Reserve H.15 interest rates](https://www.federalreserve.gov/releases/h15/)
- [Senior Loan Officer Opinion Survey](https://www.federalreserve.gov/data/sloos.htm)
- [Financial Accounts](https://www.federalreserve.gov/releases/z1/)
- [New York Fed household debt and credit](https://www.newyorkfed.org/microeconomics/hhdc)

## 9. Transmission and lags

Trace a policy change through a complete chain:

`policy instruments → expected path and financial prices → borrowing, saving,
wealth, exchange rates, and credit supply → aggregate demand and labor demand →
inflation`

At every arrow, identify:

- the behavior or market adjustment;
- the expected direction;
- an observable indicator;
- the likely lag;
- an offsetting force; and
- the group or sector most exposed.

The stance of policy cannot be inferred from the nominal policy rate alone.
Discuss inflation, the neutral rate, expectations, balance-sheet policy, credit
conditions, and the persistence of effects already in train.

## 10. Forecasting

A policy forecast is a transparent conditional judgment, not a collection of
point guesses.

### Baseline

Define:

- forecast horizon;
- policy-rate and financial-condition assumptions;
- fiscal, energy, and external assumptions;
- central paths for inflation, unemployment, growth, and relevant financial
  conditions; and
- ranges expressing meaningful uncertainty.

### Cross-variable consistency

Check whether:

- output and employment paths agree;
- labor-cost, productivity, and inflation stories agree;
- consumption is consistent with income, saving, wealth, and credit;
- financial conditions match the assumed policy path; and
- the inflation forecast follows from the stated demand and supply mechanisms.

### Benchmarks

Compare the team's forecast with multiple transparent external benchmarks, such
as the SEP, Survey of Professional Forecasters, market-implied paths, and
nowcasts. A difference is acceptable when students can explain its cause.

## 11. Risks and scenarios

A useful risk has:

1. a trigger;
2. a causal chain;
3. observable signposts;
4. an approximate horizon;
5. direction and plausible magnitude for key variables; and
6. a policy implication.

Do not create a list of bad things that might happen. Rank risks by probability,
impact, and policy asymmetry. Include upside and downside risks and explain
whether policy can wait for confirmation.

## 12. Policy recommendation

A complete recommendation states:

- the target range decision;
- balance-sheet and implementation choices if relevant;
- the diagnosis and forecast supporting the choice;
- why the recommendation is better than serious alternatives;
- how risks affect the decision;
- what future evidence would cause a change; and
- important distributional or financial-stability implications.

Avoid claiming that one meeting decision mechanically solves inflation or
employment. Policy works through expectations and lagged transmission, and the
decision is part of a path.

## 13. Chart standard

Every presentation chart should pass these questions:

1. What single claim does the chart support?
2. Is the source authoritative?
3. Are units, frequency, adjustment, transformation, and dates clear?
4. Is the comparison economically meaningful?
5. Does the scale exaggerate or hide variation?
6. Could a presenter explain every line, bar, shade, and annotation?
7. Is the chart legible on a normal screen?
8. Can another student reproduce it?

If a chart does not alter the diagnosis, forecast, risk assessment, or policy
choice, it probably does not belong in a 15-minute presentation.

## 14. Oral-answer protocol

Use a four-part structure:

1. **Answer:** State the conclusion in the first sentence.
2. **Reason:** Give the central mechanism.
3. **Evidence:** Cite one or two decisive facts or magnitudes.
4. **Condition:** State what would change the conclusion.

This is a reasoning structure, not a script. Students should vary the length and
order when the question demands it. If uncertain, identify exactly what is
unknown and how it would be resolved rather than inventing an answer.

## 15. Mastery check

Every presenter should be able to do the following without slides:

- explain the dual mandate and the FOMC's role;
- trace implementation in the ample-reserves framework;
- state the team's inflation, labor, activity, and credit diagnoses;
- reconstruct the forecast and its main assumptions;
- explain the top risks and signposts;
- defend the recommendation against at least two alternatives;
- interpret every chart and cite its source;
- answer a counterfactual data surprise;
- explain important distributional effects; and
- identify what evidence would change the team's view.

