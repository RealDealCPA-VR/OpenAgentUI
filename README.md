## aui-perf nightly record

_18 points · 2026-10-08T04:44:32.688Z to 2026-10-25T04:40:10.954Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.1_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.095ms | +1.0% |  | 654.26µs | 1.463ms | 18 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.250ms | +1.0% |  | 730.41µs | 1.578ms | 18 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 61.66µs | -1.2% |  | 33.67µs | 79.09µs | 18 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 654.99µs | -1.8% |  | 381.94µs | 846.98µs | 18 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.123ms | -1.0% |  | 5.726ms | 13.053ms | 18 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 310.81µs | +1.3% |  | 160.69µs | 385.26µs | 18 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.550ms | -1.0% |  | 1.453ms | 3.281ms | 18 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.122ms | -0.9% |  | 5.703ms | 13.004ms | 18 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.20µs | +1.0% |  | 6.19µs | 15.14µs | 18 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.93µs | +0.3% |  | 50.11µs | 126.55µs | 18 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 353.64µs | +0.8% |  | 193.82µs | 499.01µs | 18 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 72.29µs | -1.9% |  | 46.51µs | 76.13µs | 18 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 709.37µs | -3.1% |  | 402.17µs | 753.20µs | 18 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.16µs | +0.1% |  | 5.82µs | 11.01µs | 18 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 88.15µs | +5.0% |  | 47.09µs | 90.23µs | 18 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 778.56µs | -0.8% |  | 403.21µs | 1.273ms | 18 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.022ms | -0.3% |  | 3.484ms | 10.272ms | 18 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.001ms | +1.4% |  | 14.032ms | 41.163ms | 18 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 416.68µs | +0.7% |  | 248.74µs | 737.93µs | 18 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.574ms | +0.0% |  | 2.204ms | 6.315ms | 18 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.252ms | +0.3% |  | 8.865ms | 24.876ms | 18 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.86µs | +1.2% |  | 29.58µs | 58.39µs | 18 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 599.66µs | +0.2% |  | 323.51µs | 611.05µs | 18 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.314ms | +2.4% |  | 1.738ms | 3.397ms | 18 |
| external-message-conversion › core: external message tool results › 100 matches | 84.02µs | +1.0% |  | 41.28µs | 86.47µs | 18 |
| external-message-conversion › core: external message tool results › 1000 matches | 857.69µs | -0.9% |  | 416.72µs | 876.68µs | 18 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.617ms | -0.7% |  | 2.272ms | 4.731ms | 18 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.38µs | +2.1% |  | 24.40µs | 53.15µs | 18 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 501.63µs | +1.3% |  | 236.13µs | 510.27µs | 18 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.797ms | +3.3% |  | 1.358ms | 2.814ms | 18 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.23µs | +4.3% |  | 0.13µs | 0.27µs | 18 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.44µs | +0.8% |  | 0.24µs | 0.52µs | 18 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.48µs | +2.4% |  | 1.49µs | 2.53µs | 18 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.73µs | -0.7% |  | 0.42µs | 0.84µs | 18 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.66µs | +3.2% |  | 2.10µs | 4.82µs | 18 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 43.01µs | +2.5% |  | 18.98µs | 45.51µs | 18 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 168.10µs | +2.4% |  | 91.13µs | 168.10µs | 18 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.090ms | +5.6% |  | 635.33µs | 1.145ms | 18 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.774ms | +0.4% |  | 1.321ms | 2.874ms | 18 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 3.087ms | +0.8% |  | 1.520ms | 3.158ms | 18 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.559ms | +0.2% |  | 9.092ms | 18.024ms | 18 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.397ms | +2.6% |  | 10.423ms | 19.495ms | 18 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.694ms | -3.5% |  | 878.78µs | 1.786ms | 18 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.199ms | +2.9% |  | 1.427ms | 3.255ms | 18 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.588ms | +3.4% |  | 5.246ms | 9.793ms | 18 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.152ms | +0.9% |  | 1.124ms | 1.678ms | 18 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.775ms | -1.4% |  | 1.229ms | 1.826ms | 18 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.495ms | +0.2% |  | 2.555ms | 4.760ms | 18 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 278.88µs | +2.3% |  | 163.93µs | 305.15µs | 18 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.266ms | +3.2% |  | 1.458ms | 2.495ms | 18 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 312.521ms | -8.5% |  | 169.554ms | 354.777ms | 18 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.938ms | +0.7% |  | 7.613ms | 12.037ms | 18 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.27µs | -1.4% |  | 1.24µs | 4.55µs | 18 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.11µs | +0.8% |  | 6.08µs | 21.65µs | 18 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 36.44µs | +8.0% |  | 18.90µs | 90.02µs | 18 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.88µs | +0.2% |  | 3.21µs | 6.01µs | 18 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 19.40µs | +6.4% |  | 12.17µs | 26.88µs | 18 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 47.07µs | +0.0% |  | 29.99µs | 60.24µs | 18 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 631.51µs | -0.5% |  | 435.95µs | 689.42µs | 18 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 7.282ms | -1.1% |  | 3.482ms | 8.233ms | 18 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 41.876ms | -1.3% |  | 18.667ms | 45.681ms | 18 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 395.959ms | +1.6% |  | 256.386ms | 430.807ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 703.43µs | -8.5% |  | 269.12µs | 784.19µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 964.11µs | -6.8% |  | 447.81µs | 1.249ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.474ms | +8.0% |  | 2.276ms | 5.579ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 645.17µs | -3.0% |  | 266.49µs | 754.69µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.312ms | -3.2% |  | 987.37µs | 2.602ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 38.532ms | +53.8% |  | 14.171ms | 41.901ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 736.29µs | -3.4% |  | 257.90µs | 762.51µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.675ms | -5.9% |  | 812.75µs | 2.048ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 26.917ms | +53.5% |  | 9.325ms | 33.660ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 357.66µs | +0.4% |  | 120.14µs | 366.94µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 534.36µs | -11.0% |  | 236.65µs | 624.09µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.109ms | -11.3% |  | 1.684ms | 4.209ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 24.72µs | +4.0% |  | 9.23µs | 24.72µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 38.02µs | +1.0% |  | 18.80µs | 38.42µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 232.70µs | -1.1% |  | 128.33µs | 248.27µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 807.82µs | +1.5% |  | 286.94µs | 807.82µs | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.455ms | +3.3% |  | 679.64µs | 1.598ms | 18 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 18.873ms | +20.0% |  | 7.649ms | 27.010ms | 18 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 261.99µs | +0.1% |  | 147.29µs | 322.08µs | 18 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.265ms | +0.8% |  | 1.350ms | 2.708ms | 18 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.159ms | +0.3% |  | 662.96µs | 1.382ms | 18 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 310.08µs | +1.2% |  | 178.73µs | 520.95µs | 18 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.623ms | +0.3% |  | 1.576ms | 4.267ms | 18 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.337ms | +1.1% |  | 795.51µs | 2.173ms | 18 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 332.69µs | -1.5% |  | 173.91µs | 356.68µs | 18 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.832ms | +3.0% |  | 14.131ms | 27.242ms | 18 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 663.599ms | +1.0% |  | 369.530ms | 1171.337ms | 18 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 258.77µs | +1.3% |  | 140.00µs | 470.51µs | 18 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.947ms | +0.2% |  | 1.179ms | 3.593ms | 18 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.014ms | -0.7% |  | 602.33µs | 1.837ms | 18 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.410ms | -2.1% |  | 1.855ms | 4.272ms | 18 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.376ms | -3.2% |  | 1.784ms | 4.121ms | 18 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.301ms | -1.8% |  | 1.764ms | 4.046ms | 18 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.779ms | -2.1% |  | 2.020ms | 4.909ms | 18 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.993ms | -3.7% |  | 1.060ms | 2.201ms | 18 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.219ms | -0.1% |  | 1.665ms | 3.319ms | 18 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.191ms | +0.4% |  | 1.683ms | 3.276ms | 18 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 231.78µs | -4.9% |  | 148.91µs | 296.51µs | 18 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 141.25µs | +2.0% |  | 77.61µs | 141.34µs | 18 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.692ms | -1.1% |  | 856.60µs | 1.768ms | 18 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.882ms | +2.6% |  | 892.90µs | 1.958ms | 18 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.133ms | +4.3% |  | 924.99µs | 2.133ms | 18 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 77.36µs | -0.5% |  | 42.65µs | 83.30µs | 18 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.581ms | +6.7% |  | 755.99µs | 1.581ms | 18 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 64.40µs | -0.5% |  | 36.82µs | 73.49µs | 18 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.546ms | +6.0% |  | 741.79µs | 1.546ms | 18 |

informational; points come from different runners of the same class, so read trends, not single deltas.
