## aui-perf nightly record

_15 points · 2026-10-08T04:44:32.688Z to 2026-10-22T04:40:58.579Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.1_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.116ms | +70.5% |  | 654.26µs | 1.463ms | 15 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.274ms | +72.7% |  | 730.41µs | 1.578ms | 15 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 63.37µs | +78.9% |  | 33.67µs | 79.09µs | 15 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 664.53µs | +66.2% |  | 381.94µs | 846.98µs | 15 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.307ms | +70.5% |  | 5.726ms | 13.053ms | 15 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 313.90µs | +88.7% |  | 160.69µs | 385.26µs | 15 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.579ms | +70.4% |  | 1.453ms | 3.281ms | 15 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.150ms | +71.3% |  | 5.703ms | 13.004ms | 15 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.23µs | +65.2% |  | 6.19µs | 15.14µs | 15 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 89.89µs | +79.1% |  | 50.11µs | 126.55µs | 15 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 356.18µs | +82.7% |  | 193.82µs | 499.01µs | 15 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 71.80µs | +54.4% |  | 46.51µs | 76.13µs | 15 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 717.66µs | +64.8% |  | 402.17µs | 753.20µs | 15 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.36µs | +73.4% |  | 5.82µs | 11.01µs | 15 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 90.23µs | +69.7% |  | 47.09µs | 90.23µs | 15 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 801.82µs | +98.9% |  | 403.21µs | 1.273ms | 15 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.101ms | +69.9% |  | 3.484ms | 10.272ms | 15 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.592ms | +74.0% |  | 14.032ms | 41.163ms | 15 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 402.68µs | +58.8% |  | 248.74µs | 737.93µs | 15 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.620ms | +59.6% |  | 2.204ms | 6.315ms | 15 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.600ms | +64.7% |  | 8.865ms | 24.876ms | 15 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 57.33µs | +87.8% |  | 29.58µs | 58.39µs | 15 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 605.48µs | +81.9% |  | 323.51µs | 611.05µs | 15 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.332ms | +85.1% |  | 1.738ms | 3.397ms | 15 |
| external-message-conversion › core: external message tool results › 100 matches | 86.47µs | +104.0% |  | 41.28µs | 86.47µs | 15 |
| external-message-conversion › core: external message tool results › 1000 matches | 876.68µs | +110.4% |  | 416.72µs | 876.68µs | 15 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.668ms | +101.8% |  | 2.272ms | 4.731ms | 15 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.95µs | +117.1% |  | 24.40µs | 53.09µs | 15 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 503.21µs | +113.1% |  | 236.13µs | 508.00µs | 15 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.781ms | +104.8% |  | 1.358ms | 2.781ms | 15 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | +73.1% |  | 0.13µs | 0.27µs | 15 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.43µs | +71.0% |  | 0.24µs | 0.52µs | 15 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.51µs | +66.3% |  | 1.49µs | 2.53µs | 15 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.75µs | +71.2% |  | 0.42µs | 0.84µs | 15 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.82µs | +118.9% |  | 2.10µs | 4.82µs | 15 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 45.51µs | +131.9% |  | 18.98µs | 45.51µs | 15 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 160.89µs | +63.3% |  | 91.13µs | 166.26µs | 15 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.083ms | +56.2% |  | 635.33µs | 1.145ms | 15 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.874ms | +113.7% |  | 1.321ms | 2.874ms | 15 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.158ms | +107.3% |  | 1.520ms | 3.158ms | 15 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 18.024ms | +90.2% |  | 9.092ms | 18.024ms | 15 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.383ms | +77.6% |  | 10.423ms | 19.495ms | 15 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.786ms | +83.4% |  | 878.78µs | 1.786ms | 15 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.220ms | +120.4% |  | 1.427ms | 3.255ms | 15 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.413ms | +79.4% |  | 5.246ms | 9.793ms | 15 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.147ms | -19.5% |  | 1.124ms | 1.678ms | 15 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.657ms | +20.3% |  | 1.229ms | 1.799ms | 15 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.380ms | +31.2% |  | 2.555ms | 4.760ms | 15 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 286.00µs | +55.2% |  | 163.93µs | 305.15µs | 15 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.265ms | +29.3% |  | 1.458ms | 2.495ms | 15 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 321.508ms | +77.5% |  | 169.554ms | 354.777ms | 15 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 12.010ms | +56.0% |  | 7.613ms | 12.037ms | 15 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.33µs | +74.8% |  | 1.24µs | 4.55µs | 15 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.67µs | +52.6% |  | 6.08µs | 21.65µs | 15 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 38.31µs | +97.0% |  | 18.90µs | 90.02µs | 15 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.88µs | +47.4% |  | 3.21µs | 6.01µs | 15 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.60µs | +42.0% |  | 12.17µs | 26.88µs | 15 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.07µs | +48.9% |  | 29.99µs | 60.24µs | 15 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 689.42µs | +52.6% |  | 435.95µs | 689.42µs | 15 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 8.233ms | +111.9% |  | 3.482ms | 8.233ms | 15 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 45.681ms | +131.9% |  | 18.667ms | 45.681ms | 15 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 430.807ms | +56.7% |  | 256.386ms | 430.807ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 742.96µs | +153.7% |  | 269.12µs | 784.19µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.249ms | +177.0% |  | 447.81µs | 1.249ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.299ms | +88.9% |  | 2.276ms | 5.579ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 754.69µs | +183.2% |  | 266.49µs | 754.69µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.048ms | +88.4% |  | 987.37µs | 2.602ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 36.729ms | +89.8% |  | 14.171ms | 41.901ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 682.49µs | +133.0% |  | 257.90µs | 762.51µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.655ms | +91.6% |  | 812.75µs | 2.048ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 24.522ms | +82.2% |  | 9.325ms | 33.660ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 366.94µs | +185.9% |  | 120.14µs | 366.94µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 552.52µs | +115.1% |  | 236.65µs | 624.09µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.763ms | +70.0% |  | 1.684ms | 4.209ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 23.45µs | +134.6% |  | 9.23µs | 24.13µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 38.42µs | +97.5% |  | 18.80µs | 38.42µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 233.73µs | +73.1% |  | 128.33µs | 238.00µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 691.19µs | +116.0% |  | 286.94µs | 805.74µs | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.474ms | +103.8% |  | 679.64µs | 1.598ms | 15 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 22.092ms | +29.7% |  | 7.649ms | 27.010ms | 15 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 265.90µs | +79.5% |  | 147.29µs | 322.08µs | 15 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.274ms | +67.2% |  | 1.350ms | 2.708ms | 15 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.159ms | +70.7% |  | 662.96µs | 1.382ms | 15 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 313.37µs | +75.3% |  | 178.73µs | 520.95µs | 15 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.627ms | +66.1% |  | 1.576ms | 4.267ms | 15 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.334ms | +67.7% |  | 795.51µs | 2.173ms | 15 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 337.16µs | +93.0% |  | 173.91µs | 356.68µs | 15 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 27.242ms | +89.4% |  | 14.131ms | 27.242ms | 15 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 671.067ms | +75.0% |  | 369.530ms | 793.101ms | 15 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 259.00µs | +85.0% |  | 140.00µs | 470.51µs | 15 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.949ms | +64.8% |  | 1.179ms | 3.593ms | 15 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.028ms | +68.2% |  | 602.33µs | 1.837ms | 15 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.444ms | +70.8% |  | 1.855ms | 4.272ms | 15 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.468ms | +76.9% |  | 1.784ms | 4.121ms | 15 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.392ms | +80.8% |  | 1.764ms | 4.046ms | 15 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.909ms | +141.2% |  | 2.020ms | 4.909ms | 15 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.055ms | +82.9% |  | 1.060ms | 2.201ms | 15 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.319ms | +87.2% |  | 1.665ms | 3.319ms | 15 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.229ms | +82.5% |  | 1.683ms | 3.276ms | 15 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 237.50µs | +56.7% |  | 148.91µs | 296.51µs | 15 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 141.34µs | +76.1% |  | 77.61µs | 141.34µs | 15 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.662ms | +77.5% |  | 856.60µs | 1.768ms | 15 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.826ms | +93.6% |  | 892.90µs | 1.958ms | 15 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.081ms | +107.6% |  | 924.99µs | 2.125ms | 15 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 80.51µs | +67.6% |  | 42.65µs | 83.30µs | 15 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.507ms | +99.3% |  | 755.99µs | 1.543ms | 15 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 67.01µs | +72.3% |  | 36.82µs | 73.49µs | 15 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.454ms | +87.8% |  | 741.79µs | 1.499ms | 15 |

informational; points come from different runners of the same class, so read trends, not single deltas.
