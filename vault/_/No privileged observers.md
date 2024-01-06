In RL, we often talk about intelligent agents who enact policies under the eye of an omniscient interpreter that knows the environment and can reward the agent.

Humans are also intelligent agents, they operate in an environment, they enact policies, and they are rewarded. However, the real world famously lacks a privileged interpreter. The point of this THING is to describe a model which better captures how RL applies to humans.

![[NoInterpreterOrEnvironment.png|500]]

There are two things – the agent $A$ and the environment $E$. $E$ is simply a sensory feed – a stream of information that $A$ receives at a certain rate. To simplify the model, we’re going to assume $E$ arrives in discrete packets every interval $\delta t$. This interval is called a **tick**.

Thus the environment is actually $E(t)$, where $t$ represents the index of the tick in question.

At $t=0$, the agent already has a goodness function wherein some values of $E$ are favored, while others9 aren’t. For simplicity’s sake, let’s say this works using a **goodness function** $g(E)$.

The agent can act. To model this, let’s say that the agent can choose to take an action every tick. There is no intrinsic cost to an action. However, 


The agent has an **initialized configuration** $C(0)$ that some values of $E(t)$ are favored, while others aren’t. 

Thus the environment $E$ is actually $E(t)$, a function over

At the initial state, $A$ already has an internal configuration whereby some 

So, there are only two things – the agent and the environment. The agent receives sensory input from the environment at a specific and quantifiable rate $R_s$. The agent’s internal configuration changes based on the information, which is one indication learning is taking place.

Now, let’s make further assumptions.

1. The environment is much, much larger than the agent. It’s effectively infinite.
2.  



The agent determines the favorability of the environment, which it perceives as some change to the sensory input, and it will act to increase said favorability.

From this basic outline, we can deduce some ways in which 

**The agent can act.** That is, it can make measurable changes in the configuration of the environment. The agent perceives this as a change in the sensory feed. 

**However, the sensory feed changes by itself** as the configuration of the environment changes. 


Let’s make that claim a bit more specific. There are two things – the environment and the agent. The agent receives information from the environment. For simplicity, we can model this information as coming in discrete packets, with a quantifiable amount of information in each packet. We might imagine this information as being a single frame of video, for example.

The environment undergoes changes, which causes changes in the information. One of the agent’s instrumental goals is to understand the environment, which can be measured in the ability to predict the next



$R$, and that information causes changes in its internal configuration which we call learning.

The information $I$ is not static and changes as the environment undergoes changes in its configuration. 

The agent can take actions, which cause a respective change in the environment, which is perceived through a change in the sensory information. 

1. An action leads to a predicted change in the sensory input.
2. 



Before the agent can act and receive rewards, it must know the environment. It can do this through its senses, which allow it to absorb information at some maximum rate.

As the agent receives more information, its internal configuration changes 

We quantify the rate of information being sent to the agent as $S_E$. Before the agent can receive a reward, it must know

by introducing a simple model. There are two things – the environment and the agent. 

