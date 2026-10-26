## aui-perf nightly record

_19 points · 2026-10-08T04:44:32.688Z to 2026-10-26T04:43:14.658Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.1_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 660.69µs | -39.1% |  | 654.26µs | 1.463ms | 19 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 740.72µs | -40.1% |  | 730.41µs | 1.578ms | 19 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 35.23µs | -43.5% |  | 33.67µs | 79.09µs | 19 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 386.17µs | -42.1% |  | 381.94µs | 846.98µs | 19 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 6.000ms | -41.3% |  | 5.726ms | 13.053ms | 19 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 168.76µs | -45.0% |  | 160.69µs | 385.26µs | 19 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.495ms | -42.0% |  | 1.453ms | 3.281ms | 19 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 5.869ms | -42.5% |  | 5.703ms | 13.004ms | 19 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 6.26µs | -38.0% |  | 6.19µs | 15.14µs | 19 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 50.08µs | -43.5% |  | 50.08µs | 126.55µs | 19 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 194.33µs | -44.6% |  | 193.82µs | 499.01µs | 19 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 46.47µs | -36.9% |  | 46.47µs | 76.13µs | 19 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 423.41µs | -42.2% |  | 402.17µs | 753.20µs | 19 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.83µs | -42.5% |  | 5.82µs | 11.01µs | 19 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 50.20µs | -40.2% |  | 47.09µs | 90.23µs | 19 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 395.44µs | -49.6% |  | 395.44µs | 1.273ms | 19 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.515ms | -41.8% |  | 3.484ms | 10.272ms | 19 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 13.645ms | -42.3% |  | 13.645ms | 41.163ms | 19 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 241.09µs | -41.7% |  | 241.09µs | 737.93µs | 19 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.067ms | -42.1% |  | 2.067ms | 6.315ms | 19 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 9.206ms | -35.2% |  | 8.865ms | 24.876ms | 19 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 31.18µs | -44.5% |  | 29.58µs | 58.39µs | 19 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 332.26µs | -44.5% |  | 323.51µs | 611.05µs | 19 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.821ms | -43.7% |  | 1.738ms | 3.397ms | 19 |
| external-message-conversion › core: external message tool results › 100 matches | 44.20µs | -46.8% |  | 41.28µs | 86.47µs | 19 |
| external-message-conversion › core: external message tool results › 1000 matches | 436.62µs | -49.6% |  | 416.72µs | 876.68µs | 19 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.329ms | -49.9% |  | 2.272ms | 4.731ms | 19 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 25.58µs | -50.1% |  | 24.40µs | 53.15µs | 19 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 242.11µs | -51.1% |  | 236.13µs | 510.27µs | 19 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.388ms | -48.8% |  | 1.358ms | 2.814ms | 19 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs | -41.9% |  | 0.13µs | 0.27µs | 19 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.25µs | -41.5% |  | 0.24µs | 0.52µs | 19 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.54µs | -36.5% |  | 1.49µs | 2.53µs | 19 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.43µs | -41.5% |  | 0.42µs | 0.84µs | 19 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.30µs | -49.0% |  | 2.10µs | 4.82µs | 19 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 20.69µs | -50.7% |  | 18.98µs | 45.51µs | 19 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 92.95µs | -43.4% |  | 91.13µs | 168.10µs | 19 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 642.80µs | -37.7% |  | 635.33µs | 1.145ms | 19 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.390ms | -49.7% |  | 1.321ms | 2.874ms | 19 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.583ms | -48.3% |  | 1.520ms | 3.158ms | 19 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.396ms | -46.4% |  | 9.092ms | 18.024ms | 19 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.695ms | -43.4% |  | 10.423ms | 19.495ms | 19 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 927.13µs | -47.2% |  | 878.78µs | 1.786ms | 19 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.498ms | -51.8% |  | 1.427ms | 3.255ms | 19 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.537ms | -40.3% |  | 5.246ms | 9.793ms | 19 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.348ms | +18.0% |  | 1.124ms | 1.678ms | 19 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.255ms | -30.2% |  | 1.229ms | 1.826ms | 19 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.604ms | -19.6% |  | 2.555ms | 4.760ms | 19 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 178.34µs | -34.6% |  | 163.93µs | 305.15µs | 19 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.613ms | -26.5% |  | 1.458ms | 2.495ms | 19 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 179.287ms | -47.5% |  | 169.554ms | 354.777ms | 19 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.724ms | -28.9% |  | 7.613ms | 12.037ms | 19 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.28µs | -44.5% |  | 1.24µs | 4.55µs | 19 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.31µs | -30.2% |  | 6.08µs | 21.65µs | 19 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 19.22µs | -43.1% |  | 18.90µs | 90.02µs | 19 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.28µs | -32.6% |  | 3.21µs | 6.01µs | 19 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 13.12µs | -28.0% |  | 12.17µs | 26.88µs | 19 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.11µs | -33.9% |  | 29.99µs | 60.24µs | 19 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 447.27µs | -29.5% |  | 435.95µs | 689.42µs | 19 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.709ms | -49.6% |  | 3.482ms | 8.233ms | 19 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 19.528ms | -54.0% |  | 18.667ms | 45.681ms | 19 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 270.082ms | -30.7% |  | 256.386ms | 430.807ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 292.97µs | -61.9% |  | 269.12µs | 784.19µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 455.47µs | -56.0% |  | 447.81µs | 1.249ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.277ms | -45.0% |  | 2.276ms | 5.579ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 287.61µs | -56.8% |  | 266.49µs | 754.69µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.068ms | -55.3% |  | 987.37µs | 2.602ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 19.319ms | -22.9% |  | 14.171ms | 41.901ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 280.72µs | -63.2% |  | 257.90µs | 762.51µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 796.46µs | -55.3% |  | 796.46µs | 2.048ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 16.129ms | -8.0% |  | 9.325ms | 33.660ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 123.28µs | -65.4% |  | 120.14µs | 366.94µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 240.74µs | -59.9% |  | 236.65µs | 624.09µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.738ms | -50.4% |  | 1.684ms | 4.209ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 9.42µs | -60.4% |  | 9.23µs | 24.72µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 19.63µs | -47.9% |  | 18.80µs | 38.42µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 130.40µs | -44.6% |  | 128.33µs | 248.27µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 318.57µs | -60.0% |  | 286.94µs | 807.82µs | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 719.62µs | -48.9% |  | 679.64µs | 1.598ms | 19 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 11.935ms | -24.1% |  | 7.649ms | 27.010ms | 19 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 145.07µs | -44.5% |  | 145.07µs | 322.08µs | 19 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.313ms | -41.5% |  | 1.313ms | 2.708ms | 19 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 653.73µs | -43.5% |  | 653.73µs | 1.382ms | 19 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 185.63µs | -39.4% |  | 178.73µs | 520.95µs | 19 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.607ms | -38.5% |  | 1.576ms | 4.267ms | 19 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 814.72µs | -38.4% |  | 795.51µs | 2.173ms | 19 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 174.29µs | -48.4% |  | 173.91µs | 356.68µs | 19 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.161ms | -45.6% |  | 14.131ms | 27.242ms | 19 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 391.928ms | -40.3% |  | 369.530ms | 1171.337ms | 19 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 152.46µs | -40.3% |  | 140.00µs | 470.51µs | 19 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.206ms | -37.9% |  | 1.179ms | 3.593ms | 19 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 615.92µs | -39.7% |  | 602.33µs | 1.837ms | 19 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.848ms | -47.0% |  | 1.848ms | 4.272ms | 19 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.931ms | -44.6% |  | 1.784ms | 4.121ms | 19 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.802ms | -46.4% |  | 1.764ms | 4.046ms | 19 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.142ms | -56.1% |  | 2.020ms | 4.909ms | 19 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.132ms | -45.3% |  | 1.060ms | 2.201ms | 19 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.775ms | -44.9% |  | 1.665ms | 3.319ms | 19 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.754ms | -44.8% |  | 1.683ms | 3.276ms | 19 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 152.96µs | -37.2% |  | 148.91µs | 296.51µs | 19 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 80.97µs | -41.6% |  | 77.61µs | 141.34µs | 19 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 888.83µs | -48.0% |  | 856.60µs | 1.768ms | 19 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 936.80µs | -48.9% |  | 892.90µs | 1.958ms | 19 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.013ms | -50.5% |  | 924.99µs | 2.133ms | 19 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 44.65µs | -42.6% |  | 42.65µs | 83.30µs | 19 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 777.64µs | -47.5% |  | 755.99µs | 1.581ms | 19 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 38.36µs | -40.7% |  | 36.82µs | 73.49µs | 19 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 760.40µs | -47.9% |  | 741.79µs | 1.546ms | 19 |

informational; points come from different runners of the same class, so read trends, not single deltas.
