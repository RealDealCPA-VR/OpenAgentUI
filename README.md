## aui-perf nightly record

_9 points · 2026-10-08T04:44:32.688Z to 2026-10-16T04:39:34.232Z · latest runner: AMD EPYC 9V74 80-Core Processor · Node v24.22.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 954.51µs | -32.5% |  | 654.26µs | 1.463ms | 9 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.085ms | -29.4% |  | 737.35µs | 1.578ms | 9 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 47.78µs | -38.6% |  | 35.42µs | 79.09µs | 9 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 541.61µs | -36.1% |  | 399.78µs | 846.98µs | 9 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 8.515ms | -34.8% |  | 6.046ms | 13.053ms | 9 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 238.51µs | -37.0% |  | 166.31µs | 385.26µs | 9 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.101ms | -36.0% |  | 1.514ms | 3.281ms | 9 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 8.354ms | -35.8% |  | 5.927ms | 13.004ms | 9 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 9.03µs | -40.4% |  | 6.19µs | 15.14µs | 9 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 74.09µs | -39.0% |  | 50.20µs | 126.55µs | 9 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 289.81µs | -40.3% |  | 194.96µs | 499.01µs | 9 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 61.95µs | -18.6% |  | 46.51µs | 76.13µs | 9 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 598.63µs | -20.5% |  | 402.17µs | 753.20µs | 9 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 7.92µs | -28.1% |  | 5.82µs | 11.01µs | 9 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 63.24µs | -29.9% |  | 47.09µs | 90.22µs | 9 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 605.11µs | -48.7% |  | 403.21µs | 1.273ms | 9 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.226ms | -46.8% |  | 3.590ms | 10.272ms | 9 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 20.727ms | -44.9% |  | 14.130ms | 41.163ms | 9 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 346.66µs | -50.7% |  | 253.59µs | 737.93µs | 9 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.200ms | -47.1% |  | 2.269ms | 6.315ms | 9 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 13.174ms | -45.2% |  | 8.865ms | 24.876ms | 9 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 45.03µs | -22.9% |  | 29.58µs | 58.39µs | 9 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 469.57µs | -23.2% |  | 323.51µs | 611.05µs | 9 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 2.560ms | -24.6% |  | 1.738ms | 3.397ms | 9 |
| external-message-conversion › core: external message tool results › 100 matches | 63.26µs | -23.9% |  | 41.28µs | 83.83µs | 9 |
| external-message-conversion › core: external message tool results › 1000 matches | 635.02µs | -25.5% |  | 416.72µs | 853.92µs | 9 |
| external-message-conversion › core: external message tool results › 5000 matches | 3.552ms | -24.9% |  | 2.272ms | 4.731ms | 9 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 37.90µs | -26.3% |  | 24.40µs | 53.09µs | 9 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 357.76µs | -27.0% |  | 236.13µs | 507.44µs | 9 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.010ms | -27.4% |  | 1.358ms | 2.775ms | 9 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.19µs | -30.9% |  | 0.13µs | 0.27µs | 9 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.34µs | -34.1% |  | 0.24µs | 0.52µs | 9 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.17µs | -13.9% |  | 1.49µs | 2.53µs | 9 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.58µs | -30.9% |  | 0.42µs | 0.84µs | 9 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 3.13µs | -32.4% |  | 2.10µs | 4.65µs | 9 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 28.67µs | -30.9% |  | 18.98µs | 43.52µs | 9 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 122.11µs | -23.2% |  | 91.13µs | 159.76µs | 9 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 837.04µs | -15.9% |  | 635.33µs | 1.049ms | 9 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.161ms | -18.6% |  | 1.321ms | 2.814ms | 9 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.255ms | -24.7% |  | 1.520ms | 3.090ms | 9 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 14.414ms | -12.9% |  | 9.092ms | 17.638ms | 9 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 15.152ms | -14.7% |  | 10.670ms | 19.495ms | 9 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.156ms | -35.2% |  | 878.78µs | 1.784ms | 9 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.286ms | -28.4% |  | 1.427ms | 3.195ms | 9 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 7.246ms | -26.0% |  | 5.246ms | 9.793ms | 9 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.290ms | +9.3% |  | 1.124ms | 1.678ms | 9 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.644ms | -3.8% |  | 1.290ms | 1.720ms | 9 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.671ms | +7.6% |  | 3.339ms | 4.760ms | 9 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 252.31µs | -17.3% |  | 163.93µs | 305.15µs | 9 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.253ms | -9.7% |  | 1.458ms | 2.495ms | 9 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 268.549ms | -24.3% |  | 169.554ms | 354.777ms | 9 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 11.009ms | -8.5% |  | 7.699ms | 12.037ms | 9 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.99µs | -56.3% |  | 1.24µs | 4.55µs | 9 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 10.26µs | -52.6% |  | 6.08µs | 21.65µs | 9 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 35.85µs | -60.2% |  | 19.39µs | 90.02µs | 9 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.14µs | -31.2% |  | 3.21µs | 6.01µs | 9 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 17.51µs | -34.9% |  | 12.17µs | 26.88µs | 9 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 39.61µs | -34.3% |  | 29.99µs | 60.24µs | 9 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 594.54µs | +1.5% |  | 435.95µs | 634.74µs | 9 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 5.057ms | -26.5% |  | 3.482ms | 7.626ms | 9 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 27.923ms | -33.7% |  | 18.667ms | 42.722ms | 9 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 324.238ms | -9.5% |  | 256.386ms | 393.630ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 560.51µs | -28.5% |  | 269.12µs | 784.19µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 871.24µs | -23.0% |  | 447.81µs | 1.131ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 3.766ms | -32.5% |  | 2.276ms | 5.579ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 516.87µs | -24.0% |  | 266.49µs | 679.97µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.775ms | -31.8% |  | 987.37µs | 2.602ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 41.901ms | +8.7% |  | 18.282ms | 41.901ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 497.90µs | -34.3% |  | 257.90µs | 758.11µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.364ms | -33.4% |  | 812.75µs | 2.048ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 33.660ms | +4.1% |  | 13.459ms | 33.660ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 267.64µs | -24.7% |  | 120.14µs | 359.26µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 483.18µs | -22.6% |  | 236.65µs | 624.09µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.370ms | -19.9% |  | 1.684ms | 4.209ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 13.24µs | -33.0% |  | 9.23µs | 23.58µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 26.53µs | -20.7% |  | 18.80µs | 37.94µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 182.63µs | -22.9% |  | 132.08µs | 238.00µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 450.74µs | -44.1% |  | 286.94µs | 805.74µs | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.178ms | -26.3% |  | 679.64µs | 1.598ms | 9 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 27.010ms | +2.3% |  | 13.163ms | 27.010ms | 9 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 206.65µs | -35.8% |  | 148.13µs | 322.08µs | 9 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.846ms | -31.8% |  | 1.360ms | 2.708ms | 9 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 936.10µs | -32.3% |  | 678.79µs | 1.382ms | 9 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 255.95µs | -50.5% |  | 178.73µs | 520.95µs | 9 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.234ms | -47.6% |  | 1.582ms | 4.267ms | 9 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.132ms | -47.9% |  | 795.51µs | 2.173ms | 9 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 250.99µs | -24.7% |  | 174.66µs | 348.09µs | 9 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 21.589ms | -16.1% |  | 14.272ms | 26.729ms | 9 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 465.660ms | -41.3% |  | 369.530ms | 793.101ms | 9 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 212.92µs | -52.5% |  | 140.00µs | 470.51µs | 9 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.661ms | -51.8% |  | 1.183ms | 3.593ms | 9 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 865.61µs | -51.1% |  | 611.24µs | 1.837ms | 9 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.997ms | -22.2% |  | 1.855ms | 4.272ms | 9 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.877ms | -25.1% |  | 1.784ms | 4.121ms | 9 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.753ms | -27.3% |  | 1.764ms | 4.046ms | 9 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 3.406ms | -26.0% |  | 2.020ms | 4.878ms | 9 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.651ms | -25.0% |  | 1.060ms | 2.201ms | 9 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 2.697ms | -17.8% |  | 1.665ms | 3.281ms | 9 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 2.671ms | -18.5% |  | 1.691ms | 3.276ms | 9 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 199.79µs | -32.6% |  | 148.91µs | 296.51µs | 9 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 105.10µs | -9.7% |  | 77.61µs | 141.27µs | 9 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.406ms | -20.5% |  | 856.60µs | 1.768ms | 9 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.450ms | -26.0% |  | 892.90µs | 1.958ms | 9 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.594ms | -25.0% |  | 924.99µs | 2.125ms | 9 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 62.24µs | -25.3% |  | 42.65µs | 83.30µs | 9 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.227ms | -19.3% |  | 755.99µs | 1.543ms | 9 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 50.02µs | -31.9% |  | 36.82µs | 73.49µs | 9 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.190ms | -18.6% |  | 741.79µs | 1.498ms | 9 |

informational; points come from different runners of the same class, so read trends, not single deltas.
