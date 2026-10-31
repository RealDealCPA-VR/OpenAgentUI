## aui-perf nightly record

_24 points · 2026-10-08T04:44:32.688Z to 2026-10-31T04:30:08.470Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.100ms | +1.4% |  | 635.00µs | 1.463ms | 24 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.267ms | +2.1% |  | 715.47µs | 1.578ms | 24 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 61.75µs | -1.1% |  | 32.96µs | 79.09µs | 24 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 656.59µs | -1.5% |  | 362.82µs | 846.98µs | 24 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.124ms | -1.7% |  | 5.720ms | 13.053ms | 24 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 310.75µs | -0.3% |  | 157.97µs | 385.26µs | 24 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.542ms | -1.7% |  | 1.391ms | 3.281ms | 24 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.115ms | -1.6% |  | 5.591ms | 13.004ms | 24 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.18µs | +1.0% |  | 5.92µs | 15.14µs | 24 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.81µs | -0.4% |  | 46.46µs | 126.55µs | 24 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 351.76µs | +0.2% |  | 183.90µs | 499.01µs | 24 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.96µs | +4.8% |  | 46.47µs | 76.17µs | 24 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 720.63µs | +1.2% |  | 402.17µs | 753.20µs | 24 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.20µs | -0.8% |  | 5.54µs | 11.01µs | 24 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 87.49µs | -2.5% |  | 45.85µs | 90.23µs | 24 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 791.92µs | +0.4% |  | 385.78µs | 1.273ms | 24 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.151ms | +1.4% |  | 3.432ms | 10.272ms | 24 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.432ms | +1.1% |  | 13.513ms | 41.163ms | 24 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 406.42µs | -0.4% |  | 228.27µs | 737.93µs | 24 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.620ms | +0.3% |  | 2.016ms | 6.315ms | 24 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.751ms | +0.5% |  | 8.037ms | 24.876ms | 24 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 57.03µs | +0.4% |  | 29.58µs | 58.39µs | 24 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 597.87µs | -1.9% |  | 317.99µs | 611.05µs | 24 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.324ms | +0.9% |  | 1.738ms | 3.397ms | 24 |
| external-message-conversion › core: external message tool results › 100 matches | 84.49µs | +0.6% |  | 40.51µs | 86.47µs | 24 |
| external-message-conversion › core: external message tool results › 1000 matches | 860.72µs | -0.0% |  | 416.72µs | 879.16µs | 24 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.672ms | +0.1% |  | 2.265ms | 4.731ms | 24 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 53.39µs | +0.8% |  | 24.02µs | 53.39µs | 24 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 516.13µs | +1.9% |  | 229.02µs | 516.13µs | 24 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.812ms | +1.7% |  | 1.338ms | 2.844ms | 24 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.22µs | +0.1% |  | 0.13µs | 0.27µs | 24 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.44µs | +0.4% |  | 0.24µs | 0.52µs | 24 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.47µs | +0.3% |  | 1.42µs | 2.53µs | 24 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | +0.3% |  | 0.42µs | 0.84µs | 24 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.60µs | -0.9% |  | 2.03µs | 4.82µs | 24 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 42.79µs | -1.7% |  | 18.00µs | 45.51µs | 24 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 165.68µs | +1.9% |  | 91.13µs | 168.10µs | 24 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.175ms | +6.1% |  | 635.33µs | 1.175ms | 24 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.628ms | -4.7% |  | 1.257ms | 2.874ms | 24 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.937ms | -4.4% |  | 1.441ms | 3.158ms | 24 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.653ms | +2.3% |  | 9.092ms | 18.296ms | 24 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.702ms | +3.9% |  | 10.175ms | 19.818ms | 24 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.484ms | -15.8% |  | 732.15µs | 1.786ms | 24 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.058ms | -2.9% |  | 1.363ms | 3.255ms | 24 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.628ms | +3.3% |  | 5.234ms | 10.152ms | 24 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.233ms | +6.7% |  | 1.124ms | 1.678ms | 24 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.952ms | +6.9% |  | 1.167ms | 2.017ms | 24 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 5.272ms | +17.0% |  | 2.493ms | 5.272ms | 24 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 273.28µs | +1.8% |  | 163.93µs | 305.15µs | 24 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.176ms | -1.0% |  | 1.458ms | 2.495ms | 24 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 316.929ms | +0.4% |  | 168.933ms | 354.777ms | 24 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.875ms | +0.9% |  | 7.346ms | 12.037ms | 24 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.32µs | +4.0% |  | 1.24µs | 4.55µs | 24 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.22µs | +2.9% |  | 6.08µs | 21.65µs | 24 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 36.35µs | +5.8% |  | 18.08µs | 90.02µs | 24 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.88µs | -0.5% |  | 3.08µs | 6.18µs | 24 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 19.14µs | +3.8% |  | 12.17µs | 26.88µs | 24 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.14µs | -0.3% |  | 29.59µs | 60.24µs | 24 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 693.94µs | +9.1% |  | 435.95µs | 699.44µs | 24 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.422ms | -16.9% |  | 2.746ms | 8.233ms | 24 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 35.203ms | -17.1% |  | 17.633ms | 45.681ms | 24 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 382.495ms | -4.2% |  | 237.981ms | 430.807ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 694.13µs | -2.5% |  | 256.48µs | 784.19µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.000ms | +6.1% |  | 445.26µs | 1.249ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.103ms | +3.3% |  | 2.161ms | 5.579ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 663.37µs | +0.3% |  | 255.34µs | 754.69µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.113ms | -4.3% |  | 987.37µs | 2.602ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 27.349ms | -3.7% |  | 13.190ms | 41.901ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 696.65µs | +6.7% |  | 229.94µs | 762.51µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.655ms | -2.9% |  | 718.25µs | 2.048ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 18.759ms | -8.7% |  | 9.325ms | 33.660ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 339.70µs | -1.5% |  | 110.32µs | 366.94µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 534.60µs | +0.4% |  | 219.94µs | 624.09µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.678ms | +13.8% |  | 1.508ms | 4.209ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.63µs | +7.6% |  | 8.35µs | 24.95µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 42.45µs | +15.3% |  | 17.84µs | 42.45µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 264.12µs | +14.0% |  | 122.88µs | 264.12µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 700.31µs | +5.2% |  | 253.94µs | 807.82µs | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.417ms | -5.6% |  | 639.06µs | 1.684ms | 24 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 15.294ms | -11.4% |  | 7.649ms | 27.010ms | 24 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 265.22µs | -3.6% |  | 140.47µs | 322.08µs | 24 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.276ms | -0.3% |  | 1.263ms | 2.708ms | 24 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.164ms | +0.2% |  | 638.71µs | 1.382ms | 24 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 314.25µs | +0.8% |  | 176.39µs | 520.95µs | 24 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.623ms | +0.6% |  | 1.528ms | 4.267ms | 24 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.354ms | +1.0% |  | 790.67µs | 2.173ms | 24 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 330.12µs | -3.5% |  | 166.26µs | 356.68µs | 24 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.833ms | +3.0% |  | 13.845ms | 27.242ms | 24 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 1177.339ms | +0.5% |  | 369.530ms | 1177.339ms | 24 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 261.85µs | +1.4% |  | 140.00µs | 470.51µs | 24 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.987ms | +0.9% |  | 1.149ms | 3.593ms | 24 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.034ms | +0.7% |  | 602.33µs | 1.837ms | 24 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.624ms | +5.3% |  | 1.848ms | 4.588ms | 24 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.605ms | +5.1% |  | 1.784ms | 4.331ms | 24 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.502ms | +5.2% |  | 1.764ms | 4.046ms | 24 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.117ms | -14.8% |  | 1.871ms | 4.909ms | 24 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.126ms | +4.1% |  | 1.060ms | 2.201ms | 24 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.342ms | +2.4% |  | 1.650ms | 3.342ms | 24 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.367ms | +6.6% |  | 1.650ms | 3.367ms | 24 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 241.15µs | +0.4% |  | 143.50µs | 296.51µs | 24 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 142.80µs | +1.7% |  | 75.47µs | 142.80µs | 24 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.742ms | +0.7% |  | 856.60µs | 1.768ms | 24 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.836ms | -1.5% |  | 862.32µs | 1.958ms | 24 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.028ms | -1.9% |  | 924.99µs | 2.133ms | 24 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 85.78µs | +8.7% |  | 41.75µs | 86.42µs | 24 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.466ms | -1.2% |  | 712.69µs | 1.581ms | 24 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 77.52µs | +17.3% |  | 36.56µs | 77.52µs | 24 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.452ms | +0.1% |  | 741.79µs | 1.546ms | 24 |

informational; points come from different runners of the same class, so read trends, not single deltas.
