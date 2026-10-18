## aui-perf nightly record

_11 points · 2026-10-08T04:44:32.688Z to 2026-10-18T04:39:23.116Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.084ms | -25.9% |  | 654.26µs | 1.463ms | 11 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.237ms | -21.6% |  | 737.35µs | 1.578ms | 11 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 62.40µs | -21.1% |  | 35.42µs | 79.09µs | 11 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 667.19µs | -18.2% |  | 399.78µs | 846.98µs | 11 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.229ms | -19.0% |  | 6.046ms | 13.053ms | 11 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 306.94µs | -20.3% |  | 166.31µs | 385.26µs | 11 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.575ms | -18.4% |  | 1.514ms | 3.281ms | 11 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.209ms | -17.4% |  | 5.927ms | 13.004ms | 11 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.10µs | -32.5% |  | 6.19µs | 15.14µs | 11 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.68µs | -29.9% |  | 50.20µs | 126.55µs | 11 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 350.85µs | -29.7% |  | 194.96µs | 499.01µs | 11 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.69µs | +3.0% |  | 46.51µs | 76.13µs | 11 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 732.09µs | +3.7% |  | 402.17µs | 753.20µs | 11 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.15µs | -1.9% |  | 5.82µs | 11.01µs | 11 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 83.93µs | -1.3% |  | 47.09µs | 90.22µs | 11 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 784.81µs | -38.0% |  | 403.21µs | 1.273ms | 11 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.041ms | -41.2% |  | 3.590ms | 10.272ms | 11 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 23.659ms | -42.5% |  | 14.130ms | 41.163ms | 11 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 413.58µs | -44.0% |  | 253.59µs | 737.93µs | 11 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.572ms | -43.4% |  | 2.269ms | 6.315ms | 11 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.208ms | -42.9% |  | 8.865ms | 24.876ms | 11 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.18µs | +1.5% |  | 29.58µs | 58.39µs | 11 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 598.19µs | +2.4% |  | 323.51µs | 611.05µs | 11 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.236ms | +1.4% |  | 1.738ms | 3.397ms | 11 |
| external-message-conversion › core: external message tool results › 100 matches | 83.14µs | -0.3% |  | 41.28µs | 83.83µs | 11 |
| external-message-conversion › core: external message tool results › 1000 matches | 865.87µs | +1.4% |  | 416.72µs | 865.87µs | 11 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.647ms | +0.8% |  | 2.272ms | 4.731ms | 11 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 51.31µs | -1.2% |  | 24.40µs | 53.09µs | 11 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 495.11µs | -1.1% |  | 236.13µs | 507.44µs | 11 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.708ms | -0.3% |  | 1.358ms | 2.775ms | 11 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.22µs | -0.5% |  | 0.13µs | 0.27µs | 11 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | -0.6% |  | 0.24µs | 0.52µs | 11 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.42µs | -1.1% |  | 1.49µs | 2.53µs | 11 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | -1.7% |  | 0.42µs | 0.84µs | 11 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.51µs | -3.0% |  | 2.10µs | 4.65µs | 11 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 41.95µs | -3.6% |  | 18.98µs | 43.52µs | 11 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 164.11µs | +8.0% |  | 91.13µs | 164.11µs | 11 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.032ms | +1.0% |  | 635.33µs | 1.069ms | 11 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.763ms | -1.8% |  | 1.321ms | 2.814ms | 11 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.061ms | -0.9% |  | 1.520ms | 3.100ms | 11 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.530ms | -0.6% |  | 9.092ms | 17.924ms | 11 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 18.912ms | -3.0% |  | 10.670ms | 19.495ms | 11 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.756ms | +2.9% |  | 878.78µs | 1.784ms | 11 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.110ms | -1.0% |  | 1.427ms | 3.195ms | 11 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.273ms | +0.9% |  | 5.246ms | 9.793ms | 11 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.142ms | +1.5% |  | 1.124ms | 1.678ms | 11 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.799ms | +5.3% |  | 1.290ms | 1.799ms | 11 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.485ms | -2.7% |  | 3.339ms | 4.760ms | 11 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 272.67µs | -0.8% |  | 163.93µs | 305.15µs | 11 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.195ms | +0.3% |  | 1.458ms | 2.495ms | 11 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 341.492ms | +0.5% |  | 169.554ms | 354.777ms | 11 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.861ms | +3.1% |  | 7.699ms | 12.037ms | 11 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.30µs | +1.1% |  | 1.24µs | 4.55µs | 11 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.04µs | +3.8% |  | 6.08µs | 21.65µs | 11 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 33.75µs | -0.3% |  | 19.39µs | 90.02µs | 11 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.87µs | -0.4% |  | 3.21µs | 6.01µs | 11 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.23µs | -2.8% |  | 12.17µs | 26.88µs | 11 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.06µs | +0.2% |  | 29.99µs | 60.24µs | 11 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 634.81µs | +0.0% |  | 435.95µs | 641.66µs | 11 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.366ms | -3.4% |  | 3.482ms | 7.724ms | 11 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 42.442ms | -0.7% |  | 18.667ms | 42.722ms | 11 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 389.759ms | +1.2% |  | 256.386ms | 393.630ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 768.63µs | +8.5% |  | 269.12µs | 784.19µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.035ms | +0.6% |  | 447.81µs | 1.131ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.144ms | -3.6% |  | 2.276ms | 5.579ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 665.11µs | +5.3% |  | 266.49µs | 679.97µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.389ms | +13.4% |  | 987.37µs | 2.602ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 25.048ms | +1.8% |  | 18.282ms | 41.901ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 762.51µs | +9.0% |  | 257.90µs | 762.51µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.780ms | +3.0% |  | 812.75µs | 2.048ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 17.531ms | -2.2% |  | 13.459ms | 33.660ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 356.41µs | +0.9% |  | 120.14µs | 359.26µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 600.61µs | +10.2% |  | 236.65µs | 624.09µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.506ms | +23.0% |  | 1.684ms | 4.209ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 23.76µs | +0.8% |  | 9.23µs | 23.76µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 37.64µs | -0.8% |  | 18.80µs | 37.94µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 235.36µs | +0.5% |  | 132.08µs | 238.00µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 796.27µs | +18.9% |  | 286.94µs | 805.74µs | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.408ms | +2.8% |  | 679.64µs | 1.598ms | 11 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 15.731ms | +2.9% |  | 13.163ms | 27.010ms | 11 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 261.60µs | -17.3% |  | 148.13µs | 322.08µs | 11 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.247ms | -15.8% |  | 1.360ms | 2.708ms | 11 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.156ms | -15.4% |  | 678.79µs | 1.382ms | 11 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 306.29µs | -41.2% |  | 178.73µs | 520.95µs | 11 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.615ms | -37.3% |  | 1.582ms | 4.267ms | 11 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.322ms | -38.4% |  | 795.51µs | 2.173ms | 11 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 337.70µs | -3.0% |  | 174.66µs | 356.68µs | 11 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.052ms | -1.1% |  | 14.272ms | 26.729ms | 11 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 656.997ms | -2.4% |  | 369.530ms | 793.101ms | 11 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 255.37µs | -44.9% |  | 140.00µs | 470.51µs | 11 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.943ms | -45.0% |  | 1.183ms | 3.593ms | 11 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.021ms | -44.0% |  | 611.24µs | 1.837ms | 11 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.484ms | +2.6% |  | 1.855ms | 4.272ms | 11 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.488ms | +2.8% |  | 1.784ms | 4.121ms | 11 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.360ms | +2.3% |  | 1.764ms | 4.046ms | 11 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.879ms | +4.3% |  | 2.020ms | 4.879ms | 11 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.070ms | +1.8% |  | 1.060ms | 2.201ms | 11 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.222ms | +1.8% |  | 1.665ms | 3.281ms | 11 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.177ms | +0.6% |  | 1.691ms | 3.276ms | 11 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 243.75µs | +5.1% |  | 148.91µs | 296.51µs | 11 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 138.55µs | -1.9% |  | 77.61µs | 141.27µs | 11 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.710ms | +1.2% |  | 856.60µs | 1.768ms | 11 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.834ms | +0.3% |  | 892.90µs | 1.958ms | 11 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.044ms | +2.4% |  | 924.99µs | 2.125ms | 11 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 77.78µs | +1.6% |  | 42.65µs | 83.30µs | 11 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.482ms | +0.5% |  | 755.99µs | 1.543ms | 11 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 64.73µs | +0.5% |  | 36.82µs | 73.49µs | 11 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.458ms | +0.5% |  | 741.79µs | 1.498ms | 11 |

informational; points come from different runners of the same class, so read trends, not single deltas.
