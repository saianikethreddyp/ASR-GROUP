---
name: product-design-psychology
description: Product design psychology for UX decisions, interface design, user research, redesigns, and design critiques. Use when designing or reviewing flows, onboarding, forms, navigation, defaults, errors, notifications, metrics, roadmaps, or research through behavioral evidence rather than taste.
---

# Product Design Psychology

Use psychology to expose assumptions, not to decorate a recommendation with bias names. Treat every design decision as a hypothesis about what people will perceive, understand, feel, remember, or do.

This skill is an operational synthesis of Wouter de Bres's *Product Design Psychology*. Paraphrase the ideas. Link to the source when presenting its concepts; do not reproduce long passages.

## Choose The Mode

Infer the mode from the request:

- **Create:** shape a new product, feature, screen, or flow.
- **Audit:** find behavioral risks in an existing design or implementation.
- **Research:** design or critique interviews, usability tests, experiments, and synthesis.
- **Change:** assess a redesign, migration, adoption problem, or declining engagement.
- **Organization:** challenge a metric, roadmap item, meeting decision, rebuild, or ship decision.

If the artifact, target user, or desired outcome is missing and materially changes the answer, ask one focused question. Otherwise proceed and state assumptions.

## Evidence Standard

Prefer evidence in this order:

1. Observed user behavior in the real context
2. Behavioral data from a realistic prototype or product
3. Usability observation with representative users
4. Past behavior and concrete incidents
5. Stated preferences and future intentions
6. Team opinion, convention, and personal taste

Psychological principles identify risks; they do not prove that a specific user will behave a specific way. Phrase unsupported claims as hypotheses and pair them with a test.

Never use psychology to rationalize coercion. Defaults, framing, urgency, friction, and progress cues must support the user's informed goal. Choices should be truthful, intelligible, and reversible. Ask: **Would fully informed users feel helped or deceived?**

## Core Workflow

### 1. Define The Behavioral Outcome

Write one sentence:

> When [person in context] encounters [situation], they can [meaningful outcome] without [main obstacle].

Name the life outcome, not only the interface task. "Submit the form" is a task; "know whether the application was received and what happens next" is an outcome.

### 2. Make Assumptions Visible

For each important decision, record:

- The behavior it predicts
- Whose observed behavior supports it
- What the user already knows or habitually does
- What evidence would disprove it
- Whether it is reversible after shipping

Do not accept "intuitive," "clean," "best practice," or "users want" without specifying for whom and based on what evidence.

### 3. Inspect Four Minds

Run the four lenses below. Select the relevant diagnostics rather than reciting every principle.

#### The Designer's Mind

Check whether the team is distorting its own judgment:

- **False consensus:** assuming users share the team's knowledge or preferences.
- **Self-handicapping:** weakening a promising idea because a safer one is easier to defend.
- **Ego defense:** treating criticism of the design as criticism of the designer.
- **Processing fluency:** mistaking repeated exposure for clarity or quality.
- **Mere exposure:** calling familiarity "taste" without broad comparison.
- **Creativity myths:** waiting for inspiration instead of producing rough alternatives.
- **Threat rigidity:** narrowing options and silencing concerns under deadline pressure.
- **Design fixation:** generating variations of the first idea instead of different concepts.
- **Curse of knowledge:** silently filling interface gaps with project knowledge.
- **Confirmation bias:** running research to validate a preferred direction.

Use these interventions:

- Generate at least one concept that contradicts the first concept's core assumption.
- Compare the work with three credible alternatives.
- Run a pre-mortem: assume the design failed and list why.
- Record the team's first defensive response to criticism.
- Define disconfirming evidence before testing.
- Put the design in front of someone with no project context and do not coach them.

#### The Interface's Mind

Check what the mechanics communicate before users deliberate:

- **Thin slicing:** the first visual impression sets trust and quality expectations.
- **Choice architecture:** defaults, order, emphasis, and framing steer behavior.
- **Affordances and signifiers:** interactive elements must look interactive.
- **Learned schemas:** "intuitive" means compatible with a user's prior experience.
- **Cognitive load:** interpretation, memory, decisions, and jargon consume limited capacity.
- **Predictive processing:** inconsistent wording or behavior creates uncertainty and distrust.
- **Recognition over recall:** show options and context instead of requiring memory.
- **Peak-end rule:** the strongest moment and ending dominate remembered experience.
- **Goal gradient:** visible, honest progress can increase persistence.
- **Gestalt grouping:** spacing, similarity, alignment, and motion communicate structure.

Use these interventions:

- Run a five-second test for purpose, first action, and trust.
- Follow the path produced when users accept every default; identify whom it serves.
- Remove explanatory text and verify that controls still look actionable.
- Count choices, concepts to interpret, facts to remember, and steps to complete.
- Track one action across the product for consistent name, placement, and behavior.
- Cover the text and inspect whether layout still communicates hierarchy and grouping.
- Map the flow's emotional peak, failure point, completion state, and final message.

#### The User's Mind

Check what users bring before touching the product:

- **Outcome orientation:** users seek a life change, not completion of product tasks.
- **Present bias:** immediate effort outweighs abstract future value.
- **Intention-behavior gap:** sincere claims do not reliably predict action.
- **Affective primacy:** people feel first and explain afterward.
- **Loss aversion and reactance:** redesigns remove fluency, control, and familiar routines.
- **Cultural cognition:** density, hierarchy, context, and trust signals are learned locally.
- **Habit loops and endowment:** incumbents benefit from cues, routines, and ownership.
- **Choice overload:** options create scanning, learning, hesitation, and regret costs.
- **Attention scarcity:** interruptions compete with an already depleted attention budget.
- **Learned helplessness:** repeated failures without recovery teach users to stop trying.

Use these interventions:

- Find the first moment of felt value and reduce everything before it.
- Validate demand with behavior that has a real cost: payment, setup, return use, or migration.
- Ask for the first feeling before asking users to explain it.
- Audit what a redesign moves, removes, renames, or makes slower.
- Test in the target culture; translation alone is insufficient.
- Observe the existing trigger, routine, workaround, and reward in context.
- Reserve emphasis and interruption for information worth the attention cost.
- Trigger every failure state and require a specific, immediate recovery action.

#### The Organization's Mind

Check whether the system rewards the wrong decision:

- **Authority bias:** rank makes opinion feel like evidence.
- **Groupthink:** early public reactions anchor discussion and suppress objections.
- **Planning fallacy and rebuild bias:** a blank slate looks simple because its constraints are imaginary.
- **Goodhart's law:** targeted metrics become proxies teams can improve while harming users.
- **Escalation of commitment:** roadmap promises outlive the assumptions behind them.
- **Sunk-cost fallacy:** past investment is used to justify future cost.
- **Organizational amnesia:** teams preserve decisions but lose the reasoning behind them.
- **Problem framing:** excellent execution can solve the wrong problem.
- **Motivated research:** method and synthesis bend toward the desired answer.
- **Manipulative choice architecture:** behavioral insight serves the metric against user intent.

Use these interventions:

- Ask whether a leader's reaction comes from evidence, a constraint, or intuition.
- Collect private written judgments before group discussion.
- Preserve objections and rejected alternatives in a decision log.
- Require five evidenced problems with a shared rebuild-only cause before a redesign.
- Ask for the worst user-harming way a metric could increase.
- Re-evaluate roadmap work as if deciding today with no prior commitment.
- Judge the artifact as if no money or time had already been spent.
- Search prior attempts and recover why they succeeded or failed.
- Reframe the problem at least three ways before selecting a solution.

### 4. Prioritize Findings

Rank findings by:

1. **User harm:** blocks goals, removes agency, deceives, or causes irreversible loss.
2. **Reach:** how many relevant users and journeys encounter it.
3. **Frequency:** how often it recurs.
4. **Evidence:** observed behavior outranks theoretical concern.
5. **Reversibility:** cheap-to-test changes should be tested before expensive commitments.

Do not assign fake numerical precision. Use `critical`, `high`, `medium`, or `low`, and explain the behavior at risk.

### 5. Turn Claims Into Tests

For each important recommendation, provide:

- **Hypothesis:** what user behavior should change and why.
- **Signal:** the observable behavior that supports or rejects it.
- **Method:** the smallest realistic test.
- **Participants/context:** who must be represented and under what conditions.
- **Decision rule:** what result means keep, revise, or stop.
- **Guardrail:** what must not worsen while the target metric improves.

Avoid leading questions such as "Do you like it?" Prefer observation and prompts such as "What would you do next?", "What did you expect?", and "Show me how you do this today."

## Fast Audits

Use the smallest audit that fits the request.

### First-Use Audit

1. Five-second purpose and trust test
2. First obvious action
3. First moment of value
4. Commitment requested before value
5. Recall, jargon, and decision load
6. Completion and next-step clarity

### Redesign Audit

1. Existing user habits and memorized positions
2. Removed, moved, renamed, or slowed capabilities
3. Migration and relearning cost
4. Compensating user benefit
5. Staged rollout, coexistence, and rollback
6. Evidence that targeted repair cannot solve the root cause

### Research Audit

1. Decision the research will change
2. Disconfirming result defined in advance
3. Representative participants and context
4. Behavior observed, not only intention reported
5. Non-leading prompts
6. Surprises and contradictions preserved in synthesis

### Ethical Influence Audit

1. User's informed goal
2. Behavior the design steers
3. Default path and beneficiary
4. Truthfulness and visibility of tradeoffs
5. Ability to decline, undo, or recover
6. User reaction if the mechanism and motive were disclosed

## Output Format

For a design critique or audit, lead with findings rather than theory:

```markdown
## Behavioral Outcome
[One sentence]

## Findings
### [Severity] [Concrete issue]
- Observation: [what the design does]
- Behavioral risk: [what users may perceive, feel, or do]
- Evidence: [observed evidence or "hypothesis"]
- Recommendation: [smallest useful change]
- Test: [method and decision rule]

## Strengths To Preserve
[Mechanics that already support user goals]

## Open Assumptions
[Important unknowns, ordered by risk]
```

For new design work, produce:

1. Behavioral outcome
2. User context and existing behavior
3. Key assumptions and disconfirming evidence
4. Recommended flow or interface mechanics
5. Failure and recovery states
6. Ethical check
7. Validation plan

Name a psychological principle only when it clarifies the mechanism. A useful finding says what the user encounters and what may happen next; an unhelpful finding merely lists bias names.

## Final Quality Check

Before finishing, verify:

- The recommendation serves a user outcome, not only task completion or a metric.
- Claims distinguish observed evidence from hypotheses.
- A first-time user is not expected to share team knowledge.
- The design favors recognition, visible action, consistency, and recovery.
- Immediate value appears before disproportionate commitment.
- Existing habits, losses, culture, and attention context are considered.
- Defaults and persuasion support informed user intent.
- The proposed test could genuinely overturn the recommendation.
- The organization can reverse course if the evidence changes.

## Source

Based on all 41 chapters of [*Product Design Psychology*](https://productdesignpsychology.com/) by Wouter de Bres. Consult the original book for the author's full explanations and examples.
