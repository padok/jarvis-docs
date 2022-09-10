
# How to synchronize your devices

```c
    // ######################################################### Generate pulses
    //
    //                            ┌─────┐     ┌─────┐     ┌─       ─┐
    //          ...               │     │     │     │     │   ...   │ ...
    //               ─────────────┘     └─────┘     └─────┘         └───────────
    // wavestate           0      │  1  │  0  │  1  │  0  │ 1     n │     0
    // pulse_count     UINT32_MAX │  0  │  0  │  1  │  1  │ 2     n │ UINT32_MAX
    // pulse_count (cont.) n      │ n+1 │ n+1 │ n+2 │ n+2 │n+3   n+m│    n+m
    // sync_rising_edge == true   ┴     │     ┴     │     ┴         │
    // sync_rising_edge == false        ┴           ┴               ┴
    //
```


