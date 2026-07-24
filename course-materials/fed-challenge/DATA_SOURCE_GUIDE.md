# ECON 440 Data Source Guide

This guide is a curated starting point for student research. It favors primary
government and Federal Reserve sources. Values on the course website should not
be hard-coded as "current"; students must check the latest release, note the
vintage, and record any transformation they apply.

## Core release calendar

| Publisher | Calendar | Why it matters |
| --- | --- | --- |
| Federal Reserve Board | [Board calendar](https://www.federalreserve.gov/newsevents/calendar.htm) | FOMC meetings, Beige Book, minutes, and statistical releases |
| BLS | [2026 release calendar](https://www.bls.gov/schedule/2026/) | CPI, Employment Situation, JOLTS, ECI, productivity, and PPI |
| BEA | [Release schedule](https://www.bea.gov/news/schedule) | GDP, personal income and outlays, PCE inflation, trade, and regional accounts |
| Census Bureau | [Economic indicators calendar](https://www.census.gov/economic-indicators/calendar-listview.html) | Retail sales, housing, durable goods, construction, and trade |

## Federal Reserve and policy

| Resource | Use |
| --- | --- |
| [FOMC calendars and materials](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm) | Statements, implementation notes, minutes, press conferences, and SEP materials |
| [Monetary Policy Report](https://www.federalreserve.gov/monetarypolicy/mpr_default.htm) | Semiannual synthesis of policy and economic conditions |
| [Beige Book](https://www.federalreserve.gov/monetarypolicy/beige-book-default.htm) | Qualitative regional evidence before FOMC meetings |
| [Policy tools](https://www.federalreserve.gov/monetarypolicy/policytools.htm) | Official descriptions of administered rates, operations, and facilities |
| [Federal Reserve balance sheet](https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm) | H.4.1 balance-sheet levels and composition |
| [FOMC participants](https://www.federalreserve.gov/monetarypolicy/fomc.htm) | Committee structure, membership, and communications |

## General data access

| Resource | Strength | Caution |
| --- | --- | --- |
| [FRED](https://fred.stlouisfed.org/) | Fast access, transformations, charts, and series from many official publishers | Record the original publisher and series definition; FRED is an aggregator |
| [ALFRED](https://alfred.stlouisfed.org/) | Historical vintages and revision analysis | A vintage observation may differ from the latest revised value |
| [Federal Reserve Data Download Program](https://www.federalreserve.gov/datadownload/) | Board statistical releases | Check Board notices about migration or changes to download tools |

## Prices and inflation

| Measure or tool | Primary source | Notes |
| --- | --- | --- |
| CPI and components | [BLS CPI](https://www.bls.gov/cpi/) | Consumer out-of-pocket prices; examine headline, core, shelter, goods, and services |
| PCE price index | [BEA PCE prices](https://www.bea.gov/data/personal-consumption-expenditures-price-index) | FOMC's primary inflation measure; weights adjust with spending patterns |
| Producer prices | [BLS PPI](https://www.bls.gov/ppi/) | Pipeline and margin pressures; not a direct forecast of CPI or PCE |
| Import/export prices | [BLS MXP](https://www.bls.gov/mxp/) | External price pressure and exchange-rate pass-through |
| Inflation expectations | [New York Fed SCE](https://www.newyorkfed.org/microeconomics/sce) | Household expectations; compare horizons and distributions |
| Market inflation compensation | [Federal Reserve H.15](https://www.federalreserve.gov/releases/h15/) | Nominal and inflation-indexed yields; breakevens include risk and liquidity premia |
| Inflation nowcasts | [Cleveland Fed](https://www.clevelandfed.org/indicators-and-data/inflation-nowcasting) | Model-based estimates before CPI/PCE releases; label as nowcasts, not official values |

Recommended transformations:

- 12-month percent change for medium-term context.
- 3- or 6-month annualized change for recent momentum, with volatility caveats.
- Contribution or component analysis when explaining changes.
- Both headline and core measures; neither is automatically the "right" measure
  for every question.

## Labor market

| Measure or tool | Primary source | Notes |
| --- | --- | --- |
| Employment Situation | [BLS current release](https://www.bls.gov/news.release/empsit.nr0.htm) | Payrolls, unemployment, participation, hours, and wages from two surveys |
| CES payroll data | [BLS CES](https://www.bls.gov/ces/) | Establishment survey; track revisions, diffusion, hours, and earnings |
| CPS household data | [BLS CPS](https://www.bls.gov/cps/) | Employment status and demographic detail |
| JOLTS | [BLS JOLTS](https://www.bls.gov/jlt/) | Vacancies, hires, quits, and layoffs; released with a lag |
| Employment Cost Index | [BLS ECI](https://www.bls.gov/eci/) | Composition-controlled labor-cost growth |
| Weekly claims | [Department of Labor](https://www.dol.gov/ui/data.pdf) | High-frequency layoffs signal; noisy and affected by seasonal patterns |
| State and metro labor data | [BLS LAUS](https://www.bls.gov/lau/) | Geographic variation in labor-market conditions |

Analytical cautions:

- Do not combine household- and establishment-survey concepts as if identical.
- Separate population growth effects from changes in participation or demand.
- Discuss payroll revisions and sampling uncertainty.
- Use demographic breakouts when they illuminate slack, inclusion, or policy
  transmission—not as an isolated appendix.

## Output, spending, and income

| Measure or tool | Primary source | Notes |
| --- | --- | --- |
| GDP and GDI | [BEA GDP](https://www.bea.gov/data/gdp/gross-domestic-product) | Use expenditure contributions and final sales; compare GDP with GDI |
| Personal income and outlays | [BEA personal income](https://www.bea.gov/data/income-saving/personal-income) | Income, consumption, saving, and PCE prices |
| Retail sales | [Census monthly retail trade](https://www.census.gov/retail/index.html) | Nominal spending on goods; not total consumption |
| Industrial production | [Federal Reserve G.17](https://www.federalreserve.gov/releases/g17/) | Manufacturing, mining, utilities, and capacity utilization |
| Housing starts and permits | [Census new residential construction](https://www.census.gov/construction/nrc/) | Interest-sensitive residential supply pipeline |
| Durable goods | [Census manufacturers' shipments](https://www.census.gov/manufacturing/m3/) | Volatile; separate transportation and core capital-goods measures |
| GDPNow | [Atlanta Fed GDPNow](https://www.atlantafed.org/cqer/research/gdpnow) | Mechanical current-quarter nowcast; not an official Atlanta Fed forecast |

Analytical cautions:

- State whether growth is annualized quarterly, year-over-year, or a contribution.
- Distinguish nominal from real values.
- Avoid reading one volatile monthly release as a trend.
- GDP revisions can be material; preserve the vintage used in the team's forecast.

## Credit and financial conditions

| Measure or tool | Primary source | Notes |
| --- | --- | --- |
| Treasury and money-market rates | [Federal Reserve H.15](https://www.federalreserve.gov/releases/h15/) | Policy transmission and yield curve |
| Bank balance sheets | [Federal Reserve H.8](https://www.federalreserve.gov/releases/h8/) | Weekly loans, securities, deposits, and borrowings |
| Lending standards | [Senior Loan Officer Opinion Survey](https://www.federalreserve.gov/data/sloos.htm) | Bank-reported standards, terms, and demand |
| Consumer credit | [Federal Reserve G.19](https://www.federalreserve.gov/releases/g19/) | Revolving and nonrevolving credit |
| Delinquencies and charge-offs | [Federal Reserve data](https://www.federalreserve.gov/releases/chargeoff/) | Credit performance by loan category |
| Mortgage rates | [Freddie Mac PMMS](https://www.freddiemac.com/pmms) | Primary mortgage-market rates |
| Corporate spreads | [FRED ICE BofA series](https://fred.stlouisfed.org/categories/32348) | Market credit compensation; verify index definition |
| Financial Accounts | [Federal Reserve Z.1](https://www.federalreserve.gov/releases/z1/) | Sector balance sheets and flows |

Analytical cautions:

- Monetary-policy stance and financial conditions are related but not identical.
- Interest rates reflect expected policy, term premia, inflation compensation, and
  risk—not only current policy.
- Bank credit quantities can reflect both supply and demand.
- Use levels and changes; a historically high level can coexist with recent easing.

## Supply, trade, and external conditions

| Measure or tool | Primary source | Notes |
| --- | --- | --- |
| International trade | [BEA international trade](https://www.bea.gov/data/intl-trade-investment/international-trade-goods-and-services) | Exports, imports, and contribution to GDP |
| Exchange rates | [Federal Reserve H.10](https://www.federalreserve.gov/releases/h10/) | Bilateral and broad dollar measures |
| Supply-chain pressure | [New York Fed GSCPI](https://www.newyorkfed.org/research/policy/gscpi) | Composite gauge; not an official FOMC estimate |
| Commodity prices | [EIA petroleum data](https://www.eia.gov/petroleum/) | Energy supply and price context |
| World Economic Outlook | [IMF WEO](https://www.imf.org/en/Publications/WEO) | International forecast comparison; less timely than market indicators |

## Forecast benchmarks and policy calibration

| Resource | Use | Caution |
| --- | --- | --- |
| [FOMC SEP](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm) | Participant forecast ranges and medians | Conditional projections, not a staff forecast or Committee commitment |
| [Survey of Professional Forecasters](https://www.philadelphiafed.org/surveys-and-data/real-time-data-research/survey-of-professional-forecasters) | Consensus and uncertainty benchmarks | Quarterly frequency and survey timing |
| [Blue Chip / private forecasts] | Comparison benchmark if access is available | Document paywall, date, and forecast vintage |
| [New York Fed Survey of Primary Dealers](https://www.newyorkfed.org/markets/primarydealer_survey_questions) | Expectations around policy and balance sheet | Survey questions and published summaries vary by meeting |
| [Atlanta Fed Taylor Rule Utility](https://www.atlantafed.org/cqer/research/taylor-rule) | Explore policy-rule sensitivity | Results depend heavily on rule, gaps, coefficients, and neutral rate |
| [New York Fed natural-rate estimates](https://www.newyorkfed.org/research/policy/rstar) | Longer-run neutral-rate evidence | Estimates are model-dependent and revised |

Students should never present a model output or market price as the correct policy
answer. Use benchmarks to expose assumptions and explain differences.

## Source-log minimum fields

For each series, chart, or table record:

1. Publisher.
2. Release or database.
3. Exact series/table name and identifier.
4. URL.
5. Observation period.
6. Retrieval date and time.
7. Data vintage.
8. Units and frequency.
9. Seasonal-adjustment status.
10. Transformation and formula.
11. Revisions or breaks in series.
12. Student owner and verifier.

## Evidence hierarchy

Prefer:

1. Original statistical agency or Federal Reserve release.
2. Original database/table documentation.
3. Reserve Bank research products with transparent methods.
4. Established forecast surveys and market measures.
5. Reputable reporting for context, not as the sole source of a quantitative
   claim.

Avoid unsourced charts, screenshots without provenance, aggregator summaries that
hide definitions, and social-media claims that cannot be traced to primary data.

