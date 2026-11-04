## aui-perf nightly record

_28 points · 2026-10-08T04:44:32.688Z to 2026-11-04T04:31:01.788Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.098ms | +13.8% |  | 635.00µs | 1.463ms | 28 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.255ms | +12.4% |  | 715.47µs | 1.578ms | 28 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 62.63µs | +17.6% |  | 32.96µs | 79.09µs | 28 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 657.86µs | +11.5% |  | 362.82µs | 846.98µs | 28 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.240ms | +11.3% |  | 5.720ms | 13.053ms | 28 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 304.39µs | +16.9% |  | 157.97µs | 385.26µs | 28 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.540ms | +10.4% |  | 1.391ms | 3.281ms | 28 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.099ms | +11.4% |  | 5.591ms | 13.004ms | 28 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.09µs | +8.5% |  | 5.92µs | 15.14µs | 28 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.60µs | +16.2% |  | 46.46µs | 126.55µs | 28 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 350.52µs | +16.7% |  | 183.90µs | 499.01µs | 28 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 74.06µs | +10.5% |  | 46.47µs | 76.17µs | 28 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 718.47µs | +4.8% |  | 402.17µs | 753.20µs | 28 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.25µs | +4.7% |  | 5.54µs | 11.05µs | 28 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 85.55µs | +14.5% |  | 45.85µs | 90.23µs | 28 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 787.04µs | +23.6% |  | 385.78µs | 1.273ms | 28 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.126ms | +22.1% |  | 3.432ms | 10.272ms | 28 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.227ms | +24.4% |  | 13.513ms | 41.163ms | 28 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 414.77µs | +22.5% |  | 228.27µs | 737.93µs | 28 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.625ms | +16.0% |  | 2.016ms | 6.315ms | 28 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.425ms | +17.8% |  | 8.037ms | 24.876ms | 28 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 57.11µs | +6.4% |  | 29.58µs | 58.85µs | 28 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 599.63µs | +14.8% |  | 317.99µs | 611.65µs | 28 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.258ms | +14.2% |  | 1.738ms | 3.397ms | 28 |
| external-message-conversion › core: external message tool results › 100 matches | 84.82µs | +10.5% |  | 40.51µs | 86.47µs | 28 |
| external-message-conversion › core: external message tool results › 1000 matches | 875.14µs | +13.5% |  | 416.72µs | 879.16µs | 28 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.652ms | +10.7% |  | 2.265ms | 4.731ms | 28 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.89µs | +12.4% |  | 24.02µs | 53.39µs | 28 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 501.59µs | +15.1% |  | 229.02µs | 516.13µs | 28 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.754ms | +13.9% |  | 1.338ms | 2.844ms | 28 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | -2.9% |  | 0.13µs | 0.27µs | 28 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.45µs | +6.9% |  | 0.24µs | 0.52µs | 28 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.49µs | +11.4% |  | 1.42µs | 2.53µs | 28 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.73µs | -7.8% |  | 0.42µs | 0.84µs | 28 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.56µs | +14.8% |  | 2.03µs | 4.82µs | 28 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 42.55µs | +18.1% |  | 18.00µs | 45.51µs | 28 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 156.25µs | +1.6% |  | 91.13µs | 168.10µs | 28 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.093ms | +13.1% |  | 635.33µs | 1.175ms | 28 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.626ms | +11.0% |  | 1.257ms | 2.874ms | 28 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.876ms | +11.7% |  | 1.441ms | 3.158ms | 28 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.655ms | +27.0% |  | 9.092ms | 18.296ms | 28 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.380ms | +24.7% |  | 10.175ms | 19.818ms | 28 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.527ms | -11.8% |  | 732.15µs | 1.786ms | 28 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.051ms | +2.7% |  | 1.363ms | 3.255ms | 28 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.500ms | +12.5% |  | 5.234ms | 10.152ms | 28 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.206ms | +1.9% |  | 1.124ms | 1.678ms | 28 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.927ms | -4.4% |  | 1.167ms | 2.017ms | 28 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.348ms | -15.7% |  | 2.493ms | 5.272ms | 28 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 276.25µs | +5.9% |  | 163.93µs | 305.15µs | 28 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.204ms | -10.8% |  | 1.458ms | 2.495ms | 28 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 320.444ms | +3.8% |  | 168.933ms | 354.777ms | 28 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.896ms | +1.5% |  | 7.346ms | 12.109ms | 28 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.28µs | +4.5% |  | 1.24µs | 4.55µs | 28 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 8.94µs | -15.2% |  | 6.08µs | 21.65µs | 28 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 33.79µs | -19.3% |  | 18.08µs | 90.02µs | 28 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.90µs | -20.8% |  | 3.08µs | 6.18µs | 28 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.89µs | -13.9% |  | 12.17µs | 26.88µs | 28 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.19µs | -18.5% |  | 29.59µs | 60.24µs | 28 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 689.18µs | +27.6% |  | 435.95µs | 699.44µs | 28 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.463ms | +4.0% |  | 2.746ms | 8.233ms | 28 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 37.401ms | +19.3% |  | 17.633ms | 45.681ms | 28 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 383.700ms | +20.6% |  | 237.981ms | 430.807ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 700.15µs | +40.0% |  | 256.48µs | 784.19µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.016ms | +11.1% |  | 445.26µs | 1.249ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.001ms | -3.3% |  | 2.161ms | 5.579ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 660.01µs | +33.9% |  | 255.34µs | 754.69µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.083ms | -15.5% |  | 987.37µs | 2.602ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 27.832ms | +41.0% |  | 13.190ms | 41.901ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 661.72µs | +47.9% |  | 229.94µs | 762.51µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.652ms | -6.7% |  | 718.25µs | 2.048ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 18.466ms | +24.0% |  | 9.325ms | 33.660ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 322.58µs | +40.7% |  | 110.32µs | 366.94µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 530.29µs | +16.0% |  | 219.94µs | 624.09µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.277ms | +10.5% |  | 1.508ms | 4.209ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 23.81µs | +58.5% |  | 8.35µs | 25.23µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 41.73µs | +41.4% |  | 17.84µs | 42.45µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 264.58µs | +29.2% |  | 122.88µs | 275.65µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 705.51µs | +31.4% |  | 253.94µs | 807.82µs | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.415ms | -16.0% |  | 639.06µs | 1.684ms | 28 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 15.823ms | +35.0% |  | 7.649ms | 27.010ms | 28 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 265.38µs | +13.3% |  | 140.47µs | 322.08µs | 28 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.298ms | +9.3% |  | 1.263ms | 2.708ms | 28 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.172ms | +9.4% |  | 638.71µs | 1.382ms | 28 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 311.80µs | +17.7% |  | 176.39µs | 520.95µs | 28 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.634ms | +12.7% |  | 1.528ms | 4.267ms | 28 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.360ms | +13.1% |  | 790.67µs | 2.173ms | 28 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 335.16µs | +6.1% |  | 166.26µs | 356.68µs | 28 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 25.980ms | +7.8% |  | 13.845ms | 27.242ms | 28 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 668.995ms | -18.3% |  | 369.530ms | 1177.339ms | 28 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 267.54µs | +20.0% |  | 140.00µs | 470.51µs | 28 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 2.036ms | +18.9% |  | 1.149ms | 3.593ms | 28 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.035ms | +15.1% |  | 602.33µs | 1.837ms | 28 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.484ms | -24.1% |  | 1.848ms | 4.588ms | 28 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.439ms | -20.6% |  | 1.784ms | 4.331ms | 28 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.389ms | -15.6% |  | 1.764ms | 4.046ms | 28 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.090ms | +5.2% |  | 1.871ms | 4.909ms | 28 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.050ms | +4.8% |  | 1.060ms | 2.201ms | 28 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.268ms | +15.9% |  | 1.650ms | 3.351ms | 28 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.263ms | +16.3% |  | 1.650ms | 3.367ms | 28 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 234.99µs | -6.8% |  | 143.50µs | 296.51µs | 28 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 140.49µs | +21.2% |  | 75.47µs | 142.80µs | 28 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.732ms | +12.4% |  | 856.60µs | 1.768ms | 28 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.877ms | +12.4% |  | 862.32µs | 2.022ms | 28 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.095ms | +16.2% |  | 924.99µs | 2.172ms | 28 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 87.07µs | +15.8% |  | 41.75µs | 87.07µs | 28 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.559ms | +19.9% |  | 712.69µs | 1.613ms | 28 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 75.83µs | +8.8% |  | 36.56µs | 77.52µs | 28 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.524ms | +21.4% |  | 741.79µs | 1.546ms | 28 |

informational; points come from different runners of the same class, so read trends, not single deltas.
