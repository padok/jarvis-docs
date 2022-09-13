
# How to synchronize your devices

```
                           ┌─────┐     ┌─────┐     ┌─       ─┐
         ...               │     │     │     │     │   ...   │ ...
              ─────────────┘     └─────┘     └─────┘         └───────────
wavestate           0      │  1  │  0  │  1  │  0  │ 1     n │     0
pulse_count     UINT32_MAX │  0  │  0  │  1  │  1  │ 2     n │ UINT32_MAX
pulse_count (cont.) n      │ n+1 │ n+1 │ n+2 │ n+2 │n+3   n+m│    n+m
sync_rising_edge == true   ┴     │     ┴     │     ┴         │
sync_rising_edge == false        ┴           ┴               ┴
```

<!-- ```plantuml
@startuml
clock   "Wave"   as C0 with period 10
binary  "Binary"  as B
concise "Concise" as C
robust  "Robust"  as R
analog  "Analog"  as A


@0
C is Idle
R is Idle
A is 0

@5
B is high
C is Waiting
R is Processing
A is 3

@10
R is Waiting
A is 1
@enduml
``` -->