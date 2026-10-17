## aui-perf nightly record

_10 points · 2026-10-08T04:44:32.688Z to 2026-10-17T04:38:42.230Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.0_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.078ms | +33.8% |  | 654.26µs | 1.463ms | 10 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.235ms | +40.0% |  | 737.35µs | 1.578ms | 10 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 62.44µs | +46.0% |  | 35.42µs | 79.09µs | 10 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 656.72µs | +38.0% |  | 399.78µs | 846.98µs | 10 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.122ms | +40.0% |  | 6.046ms | 13.053ms | 10 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 310.00µs | +52.1% |  | 166.31µs | 385.26µs | 10 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.546ms | +42.3% |  | 1.514ms | 3.281ms | 10 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.076ms | +38.9% |  | 5.927ms | 13.004ms | 10 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.05µs | +23.4% |  | 6.19µs | 15.14µs | 10 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.68µs | +37.2% |  | 50.20µs | 126.55µs | 10 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 350.43µs | +40.9% |  | 194.96µs | 499.01µs | 10 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.90µs | +54.5% |  | 46.51µs | 76.13µs | 10 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 721.70µs | +79.5% |  | 402.17µs | 753.20µs | 10 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.16µs | +74.4% |  | 5.82µs | 11.01µs | 10 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 85.64µs | +81.9% |  | 47.09µs | 90.22µs | 10 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 779.27µs | +16.1% |  | 403.21µs | 1.273ms | 10 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.023ms | +1.9% |  | 3.590ms | 10.272ms | 10 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 23.652ms | +1.4% |  | 14.130ms | 41.163ms | 10 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 411.83µs | +0.4% |  | 253.59µs | 737.93µs | 10 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.592ms | -1.9% |  | 2.269ms | 6.315ms | 10 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.762ms | +2.6% |  | 8.865ms | 24.876ms | 10 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 57.43µs | +94.2% |  | 29.58µs | 58.39µs | 10 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 606.90µs | +87.6% |  | 323.51µs | 611.05µs | 10 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.327ms | +91.4% |  | 1.738ms | 3.397ms | 10 |
| external-message-conversion › core: external message tool results › 100 matches | 83.69µs | +102.7% |  | 41.28µs | 83.83µs | 10 |
| external-message-conversion › core: external message tool results › 1000 matches | 847.13µs | +97.8% |  | 416.72µs | 853.92µs | 10 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.599ms | +102.4% |  | 2.272ms | 4.731ms | 10 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 51.82µs | +111.6% |  | 24.40µs | 53.09µs | 10 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 497.73µs | +107.8% |  | 236.13µs | 507.44µs | 10 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.748ms | +98.3% |  | 1.358ms | 2.775ms | 10 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.22µs | +76.2% |  | 0.13µs | 0.27µs | 10 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | +75.0% |  | 0.24µs | 0.52µs | 10 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.47µs | +66.0% |  | 1.49µs | 2.53µs | 10 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.74µs | +78.6% |  | 0.42µs | 0.84µs | 10 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.49µs | +108.7% |  | 2.10µs | 4.65µs | 10 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 41.88µs | +116.1% |  | 18.98µs | 43.52µs | 10 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 160.11µs | +75.7% |  | 91.13µs | 160.11µs | 10 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.069ms | +68.2% |  | 635.33µs | 1.069ms | 10 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.795ms | +111.6% |  | 1.321ms | 2.814ms | 10 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.100ms | +103.9% |  | 1.520ms | 3.100ms | 10 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.924ms | +97.1% |  | 9.092ms | 17.924ms | 10 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.106ms | +79.1% |  | 10.670ms | 19.495ms | 10 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.740ms | +98.0% |  | 878.78µs | 1.784ms | 10 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.188ms | +123.4% |  | 1.427ms | 3.195ms | 10 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.356ms | +70.9% |  | 5.246ms | 9.793ms | 10 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.157ms | -31.1% |  | 1.124ms | 1.678ms | 10 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.781ms | +27.4% |  | 1.290ms | 1.781ms | 10 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.630ms | +36.8% |  | 3.339ms | 4.760ms | 10 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 269.48µs | +64.4% |  | 163.93µs | 305.15µs | 10 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.185ms | +49.9% |  | 1.458ms | 2.495ms | 10 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 343.115ms | +102.4% |  | 169.554ms | 354.777ms | 10 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.797ms | +37.1% |  | 7.699ms | 12.037ms | 10 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.23µs | +80.6% |  | 1.24µs | 4.55µs | 10 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.03µs | +48.7% |  | 6.08µs | 21.65µs | 10 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 35.01µs | +75.5% |  | 19.39µs | 90.02µs | 10 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.87µs | +51.8% |  | 3.21µs | 6.01µs | 10 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.57µs | +52.6% |  | 12.17µs | 26.88µs | 10 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 46.95µs | +56.6% |  | 29.99µs | 60.24µs | 10 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 641.66µs | +47.2% |  | 435.95µs | 641.66µs | 10 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.724ms | +121.9% |  | 3.482ms | 7.724ms | 10 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 42.497ms | +127.7% |  | 18.667ms | 42.722ms | 10 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 391.202ms | +52.6% |  | 256.386ms | 393.630ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 750.01µs | +146.5% |  | 269.12µs | 784.19µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 989.67µs | +121.0% |  | 447.81µs | 1.131ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.086ms | +75.2% |  | 2.276ms | 5.579ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 646.80µs | +128.6% |  | 266.49µs | 679.97µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.088ms | +90.4% |  | 987.37µs | 2.602ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 24.440ms | -13.2% |  | 18.282ms | 41.901ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 703.71µs | +158.3% |  | 257.90µs | 758.11µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.732ms | +113.1% |  | 812.75µs | 2.048ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 15.336ms | -2.0% |  | 13.459ms | 33.660ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 345.80µs | +181.7% |  | 120.14µs | 359.26µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 550.11µs | +132.5% |  | 236.65µs | 624.09µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.381ms | +100.8% |  | 1.684ms | 4.209ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 23.25µs | +151.8% |  | 9.23µs | 23.58µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 36.75µs | +95.5% |  | 18.80µs | 37.94µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 233.85µs | +77.0% |  | 132.08µs | 238.00µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 702.64µs | +133.8% |  | 286.94µs | 805.74µs | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.446ms | +112.7% |  | 679.64µs | 1.598ms | 10 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 14.385ms | +9.3% |  | 13.163ms | 27.010ms | 10 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 259.84µs | +48.4% |  | 148.13µs | 322.08µs | 10 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.255ms | +45.7% |  | 1.360ms | 2.708ms | 10 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.148ms | +45.8% |  | 678.79µs | 1.382ms | 10 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 305.56µs | +5.4% |  | 178.73µs | 520.95µs | 10 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.604ms | +7.6% |  | 1.582ms | 4.267ms | 10 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.324ms | +6.3% |  | 795.51µs | 2.173ms | 10 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 356.68µs | +102.3% |  | 174.66µs | 356.68µs | 10 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.582ms | +86.3% |  | 14.272ms | 26.729ms | 10 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 669.450ms | +81.2% |  | 369.530ms | 793.101ms | 10 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 254.29µs | -0.6% |  | 140.00µs | 470.51µs | 10 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.942ms | -4.5% |  | 1.183ms | 3.593ms | 10 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.022ms | -5.1% |  | 611.24µs | 1.837ms | 10 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.527ms | +90.1% |  | 1.855ms | 4.272ms | 10 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.598ms | +101.7% |  | 1.784ms | 4.121ms | 10 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.493ms | +98.0% |  | 1.764ms | 4.046ms | 10 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.763ms | +135.7% |  | 2.020ms | 4.878ms | 10 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.087ms | +96.9% |  | 1.060ms | 2.201ms | 10 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.274ms | +96.6% |  | 1.665ms | 3.281ms | 10 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.234ms | +83.0% |  | 1.691ms | 3.276ms | 10 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 233.80µs | +57.0% |  | 148.91µs | 296.51µs | 10 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 139.08µs | +79.2% |  | 77.61µs | 141.27µs | 10 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.656ms | +93.4% |  | 856.60µs | 1.768ms | 10 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.869ms | +109.3% |  | 892.90µs | 1.958ms | 10 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.064ms | +123.2% |  | 924.99µs | 2.125ms | 10 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 77.00µs | +80.5% |  | 42.65µs | 83.30µs | 10 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.490ms | +93.9% |  | 755.99µs | 1.543ms | 10 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 65.32µs | +77.4% |  | 36.82µs | 73.49µs | 10 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.479ms | +89.9% |  | 741.79µs | 1.498ms | 10 |

informational; points come from different runners of the same class, so read trends, not single deltas.
