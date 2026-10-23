## aui-perf nightly record

_16 points · 2026-10-08T04:44:32.688Z to 2026-10-23T04:41:40.036Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.1_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.085ms | +13.7% |  | 654.26µs | 1.463ms | 16 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.241ms | +14.4% |  | 730.41µs | 1.578ms | 16 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 62.45µs | +30.7% |  | 33.67µs | 79.09µs | 16 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 666.63µs | +23.1% |  | 381.94µs | 846.98µs | 16 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.298ms | +20.9% |  | 5.726ms | 13.053ms | 16 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 311.62µs | +30.7% |  | 160.69µs | 385.26µs | 16 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.586ms | +23.1% |  | 1.453ms | 3.281ms | 16 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.275ms | +23.0% |  | 5.703ms | 13.004ms | 16 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.08µs | +11.6% |  | 6.19µs | 15.14µs | 16 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 89.20µs | +20.4% |  | 50.11µs | 126.55µs | 16 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 351.02µs | +21.1% |  | 193.82µs | 499.01µs | 16 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 70.56µs | +13.9% |  | 46.51µs | 76.13µs | 16 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 712.35µs | +19.0% |  | 402.17µs | 753.20µs | 16 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.29µs | +29.8% |  | 5.82µs | 11.01µs | 16 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 89.74µs | +41.9% |  | 47.09µs | 90.23µs | 16 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 789.12µs | +30.4% |  | 403.21µs | 1.273ms | 16 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.065ms | +16.1% |  | 3.484ms | 10.272ms | 16 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.174ms | +16.6% |  | 14.032ms | 41.163ms | 16 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 407.86µs | +17.7% |  | 248.74µs | 737.93µs | 16 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.610ms | +12.8% |  | 2.204ms | 6.315ms | 16 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.672ms | +11.4% |  | 8.865ms | 24.876ms | 16 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.80µs | +26.1% |  | 29.58µs | 58.39µs | 16 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 609.38µs | +29.8% |  | 323.51µs | 611.05µs | 16 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.293ms | +28.6% |  | 1.738ms | 3.397ms | 16 |
| external-message-conversion › core: external message tool results › 100 matches | 84.01µs | +32.8% |  | 41.28µs | 86.47µs | 16 |
| external-message-conversion › core: external message tool results › 1000 matches | 860.76µs | +35.5% |  | 416.72µs | 876.68µs | 16 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.667ms | +31.4% |  | 2.272ms | 4.731ms | 16 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.97µs | +39.8% |  | 24.40µs | 53.09µs | 16 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 506.52µs | +41.6% |  | 236.13µs | 508.00µs | 16 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.766ms | +37.6% |  | 1.358ms | 2.781ms | 16 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.22µs | +20.3% |  | 0.13µs | 0.27µs | 16 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | +27.3% |  | 0.24µs | 0.52µs | 16 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.47µs | +13.4% |  | 1.49µs | 2.53µs | 16 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | +26.2% |  | 0.42µs | 0.84µs | 16 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.64µs | +48.0% |  | 2.10µs | 4.82µs | 16 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 43.53µs | +51.8% |  | 18.98µs | 45.51µs | 16 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 162.51µs | +33.1% |  | 91.13µs | 166.26µs | 16 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.107ms | +32.3% |  | 635.33µs | 1.145ms | 16 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.758ms | +27.6% |  | 1.321ms | 2.874ms | 16 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.072ms | +36.3% |  | 1.520ms | 3.158ms | 16 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.254ms | +19.7% |  | 9.092ms | 18.024ms | 16 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 18.962ms | +25.1% |  | 10.423ms | 19.495ms | 16 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.763ms | +52.5% |  | 878.78µs | 1.786ms | 16 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.151ms | +37.8% |  | 1.427ms | 3.255ms | 16 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.316ms | +28.6% |  | 5.246ms | 9.793ms | 16 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.155ms | -10.4% |  | 1.124ms | 1.678ms | 16 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.826ms | +11.0% |  | 1.229ms | 1.826ms | 16 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.504ms | -3.6% |  | 2.555ms | 4.760ms | 16 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 268.56µs | +6.4% |  | 163.93µs | 305.15µs | 16 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.197ms | -2.5% |  | 1.458ms | 2.495ms | 16 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 315.661ms | +17.5% |  | 169.554ms | 354.777ms | 16 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.778ms | -2.1% |  | 7.613ms | 12.037ms | 16 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.23µs | +11.9% |  | 1.24µs | 4.55µs | 16 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 8.97µs | -12.6% |  | 6.08µs | 21.65µs | 16 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 34.36µs | -4.1% |  | 18.90µs | 90.02µs | 16 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.90µs | +18.5% |  | 3.21µs | 6.01µs | 16 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.44µs | +5.3% |  | 12.17µs | 26.88µs | 16 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.30µs | +19.4% |  | 29.99µs | 60.24µs | 16 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 635.95µs | +7.0% |  | 435.95µs | 689.42µs | 16 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.728ms | +52.8% |  | 3.482ms | 8.233ms | 16 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 42.480ms | +52.1% |  | 18.667ms | 45.681ms | 16 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 399.331ms | +23.2% |  | 256.386ms | 430.807ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 712.05µs | +27.0% |  | 269.12µs | 784.19µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 942.38µs | +8.2% |  | 447.81µs | 1.249ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 3.973ms | +5.5% |  | 2.276ms | 5.579ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 661.66µs | +28.0% |  | 266.49µs | 754.69µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.208ms | +24.4% |  | 987.37µs | 2.602ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 28.397ms | -32.2% |  | 14.171ms | 41.901ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 652.79µs | +31.1% |  | 257.90µs | 762.51µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.705ms | +25.0% |  | 812.75µs | 2.048ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 20.540ms | -39.0% |  | 9.325ms | 33.660ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 345.04µs | +28.9% |  | 120.14µs | 366.94µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 532.39µs | +10.2% |  | 236.65µs | 624.09µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.233ms | -4.1% |  | 1.684ms | 4.209ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 22.90µs | +72.9% |  | 9.23µs | 24.13µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 36.81µs | +38.8% |  | 18.80µs | 38.42µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 231.69µs | +26.9% |  | 128.33µs | 238.00µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 665.51µs | +47.6% |  | 286.94µs | 805.74µs | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.501ms | +27.5% |  | 679.64µs | 1.598ms | 16 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 17.270ms | -36.1% |  | 7.649ms | 27.010ms | 16 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 275.15µs | +33.1% |  | 147.29µs | 322.08µs | 16 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.283ms | +23.7% |  | 1.350ms | 2.708ms | 16 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.162ms | +24.2% |  | 662.96µs | 1.382ms | 16 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 311.88µs | +21.9% |  | 178.73µs | 520.95µs | 16 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.608ms | +16.7% |  | 1.576ms | 4.267ms | 16 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.341ms | +18.4% |  | 795.51µs | 2.173ms | 16 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 342.10µs | +36.3% |  | 173.91µs | 356.68µs | 16 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.062ms | +20.7% |  | 14.131ms | 27.242ms | 16 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 1171.337ms | +151.5% |  | 369.530ms | 1171.337ms | 16 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 258.30µs | +21.3% |  | 140.00µs | 470.51µs | 16 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.969ms | +18.5% |  | 1.179ms | 3.593ms | 16 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.027ms | +18.6% |  | 602.33µs | 1.837ms | 16 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.443ms | +14.9% |  | 1.855ms | 4.272ms | 16 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.430ms | +19.2% |  | 1.784ms | 4.121ms | 16 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.330ms | +21.0% |  | 1.764ms | 4.046ms | 16 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.833ms | +41.9% |  | 2.020ms | 4.909ms | 16 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.043ms | +23.7% |  | 1.060ms | 2.201ms | 16 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.263ms | +21.0% |  | 1.665ms | 3.319ms | 16 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.160ms | +18.3% |  | 1.683ms | 3.276ms | 16 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 240.19µs | +20.2% |  | 148.91µs | 296.51µs | 16 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 140.35µs | +33.5% |  | 77.61µs | 141.34µs | 16 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.730ms | +23.0% |  | 856.60µs | 1.768ms | 16 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.864ms | +28.6% |  | 892.90µs | 1.958ms | 16 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.068ms | +29.7% |  | 924.99µs | 2.125ms | 16 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 78.93µs | +26.8% |  | 42.65µs | 83.30µs | 16 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.483ms | +20.8% |  | 755.99µs | 1.543ms | 16 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 66.06µs | +32.1% |  | 36.82µs | 73.49µs | 16 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.451ms | +21.9% |  | 741.79µs | 1.499ms | 16 |

informational; points come from different runners of the same class, so read trends, not single deltas.
