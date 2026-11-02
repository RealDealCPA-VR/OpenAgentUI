## aui-perf nightly record

_26 points · 2026-10-08T04:44:32.688Z to 2026-11-02T04:30:53.524Z · latest runner: AMD EPYC 9V74 80-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 938.70µs | -14.3% |  | 635.00µs | 1.463ms | 26 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.080ms | -13.6% |  | 715.47µs | 1.578ms | 26 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 45.66µs | -26.0% |  | 32.96µs | 79.09µs | 26 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 526.29µs | -19.6% |  | 362.82µs | 846.98µs | 26 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 8.206ms | -18.9% |  | 5.720ms | 13.053ms | 26 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 234.90µs | -24.4% |  | 157.97µs | 385.26µs | 26 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.057ms | -19.3% |  | 1.391ms | 3.281ms | 26 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 8.144ms | -19.5% |  | 5.591ms | 13.004ms | 26 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 8.82µs | -13.5% |  | 5.92µs | 15.14µs | 26 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 72.60µs | -18.4% |  | 46.46µs | 126.55µs | 26 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 287.58µs | -18.7% |  | 183.90µs | 499.01µs | 26 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 62.47µs | -13.6% |  | 46.47µs | 76.17µs | 26 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 561.03µs | -20.9% |  | 402.17µs | 753.20µs | 26 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 7.77µs | -23.5% |  | 5.54µs | 11.01µs | 26 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 63.31µs | -28.2% |  | 45.85µs | 90.23µs | 26 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 591.81µs | -24.0% |  | 385.78µs | 1.273ms | 26 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 5.024ms | -16.6% |  | 3.432ms | 10.272ms | 26 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 20.031ms | -16.5% |  | 13.513ms | 41.163ms | 26 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 346.68µs | -16.8% |  | 228.27µs | 737.93µs | 26 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.096ms | -13.4% |  | 2.016ms | 6.315ms | 26 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 12.289ms | -13.8% |  | 8.037ms | 24.876ms | 26 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 43.37µs | -23.7% |  | 29.58µs | 58.39µs | 26 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 455.45µs | -24.0% |  | 317.99µs | 611.05µs | 26 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 2.542ms | -23.3% |  | 1.738ms | 3.397ms | 26 |
| external-message-conversion › core: external message tool results › 100 matches | 62.61µs | -25.5% |  | 40.51µs | 86.47µs | 26 |
| external-message-conversion › core: external message tool results › 1000 matches | 635.30µs | -25.9% |  | 416.72µs | 879.16µs | 26 |
| external-message-conversion › core: external message tool results › 5000 matches | 3.489ms | -24.4% |  | 2.265ms | 4.731ms | 26 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 37.17µs | -29.0% |  | 24.02µs | 53.39µs | 26 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 356.74µs | -28.9% |  | 229.02µs | 516.13µs | 26 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.004ms | -28.4% |  | 1.338ms | 2.844ms | 26 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.18µs | -22.2% |  | 0.13µs | 0.27µs | 26 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.33µs | -24.0% |  | 0.24µs | 0.52µs | 26 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.12µs | -14.4% |  | 1.42µs | 2.53µs | 26 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.55µs | -24.7% |  | 0.42µs | 0.84µs | 26 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 3.13µs | -32.7% |  | 2.03µs | 4.82µs | 26 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 28.99µs | -32.6% |  | 18.00µs | 45.51µs | 26 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 121.12µs | -27.9% |  | 91.13µs | 168.10µs | 26 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 874.21µs | -19.8% |  | 635.33µs | 1.175ms | 26 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.053ms | -26.0% |  | 1.257ms | 2.874ms | 26 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.151ms | -30.3% |  | 1.441ms | 3.158ms | 26 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 13.946ms | -20.6% |  | 9.092ms | 18.296ms | 26 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 15.091ms | -22.2% |  | 10.175ms | 19.818ms | 26 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.002ms | -40.9% |  | 732.15µs | 1.786ms | 26 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 2.085ms | -34.8% |  | 1.363ms | 3.255ms | 26 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 7.235ms | -24.5% |  | 5.234ms | 10.152ms | 26 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.345ms | +16.7% |  | 1.124ms | 1.678ms | 26 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.446ms | -18.6% |  | 1.167ms | 2.017ms | 26 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.768ms | +6.1% |  | 2.493ms | 5.272ms | 26 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 229.29µs | -17.8% |  | 163.93µs | 305.15µs | 26 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.135ms | -5.8% |  | 1.458ms | 2.495ms | 26 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 243.965ms | -21.9% |  | 168.933ms | 354.777ms | 26 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 9.813ms | -10.3% |  | 7.346ms | 12.037ms | 26 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.92µs | -15.4% |  | 1.24µs | 4.55µs | 26 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.64µs | +5.8% |  | 6.08µs | 21.65µs | 26 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 33.63µs | -7.7% |  | 18.08µs | 90.02µs | 26 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.12µs | -15.6% |  | 3.08µs | 6.18µs | 26 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 16.63µs | -14.3% |  | 12.17µs | 26.88µs | 26 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 39.55µs | -16.0% |  | 29.59µs | 60.24µs | 26 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 615.28µs | -2.6% |  | 435.95µs | 699.44µs | 26 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 4.442ms | -39.0% |  | 2.746ms | 8.233ms | 26 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 24.666ms | -41.1% |  | 17.633ms | 45.681ms | 26 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 302.385ms | -23.6% |  | 237.981ms | 430.807ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 477.60µs | -32.1% |  | 256.48µs | 784.19µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 767.18µs | -20.4% |  | 445.26µs | 1.249ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 3.014ms | -32.6% |  | 2.161ms | 5.579ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 461.53µs | -28.5% |  | 255.34µs | 754.69µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.567ms | -32.2% |  | 987.37µs | 2.602ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 22.442ms | -41.8% |  | 13.190ms | 41.901ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 449.65µs | -38.9% |  | 229.94µs | 762.51µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.209ms | -27.8% |  | 718.25µs | 2.048ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 15.895ms | -40.9% |  | 9.325ms | 33.660ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 222.35µs | -37.8% |  | 110.32µs | 366.94µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 384.69µs | -28.0% |  | 219.94µs | 624.09µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.471ms | -20.5% |  | 1.508ms | 4.209ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 13.25µs | -46.4% |  | 8.35µs | 25.23µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 28.36µs | -25.4% |  | 17.84µs | 42.45µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 198.82µs | -14.6% |  | 122.88µs | 275.65µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 449.13µs | -44.4% |  | 253.94µs | 807.82µs | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.098ms | -24.5% |  | 639.06µs | 1.684ms | 26 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 14.167ms | -24.9% |  | 7.649ms | 27.010ms | 26 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 202.93µs | -22.5% |  | 140.47µs | 322.08µs | 26 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.820ms | -19.6% |  | 1.263ms | 2.708ms | 26 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 917.90µs | -20.8% |  | 638.71µs | 1.382ms | 26 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 249.65µs | -19.5% |  | 176.39µs | 520.95µs | 26 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.204ms | -16.0% |  | 1.528ms | 4.267ms | 26 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.107ms | -17.2% |  | 790.67µs | 2.173ms | 26 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 241.00µs | -27.6% |  | 166.26µs | 356.68µs | 26 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 20.796ms | -22.5% |  | 13.845ms | 27.242ms | 26 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 456.789ms | -31.2% |  | 369.530ms | 1177.339ms | 26 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 203.48µs | -21.4% |  | 140.00µs | 470.51µs | 26 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.677ms | -13.9% |  | 1.149ms | 3.593ms | 26 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 850.10µs | -16.1% |  | 602.33µs | 1.837ms | 26 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 2.729ms | -20.0% |  | 1.848ms | 4.588ms | 26 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 2.764ms | -18.1% |  | 1.784ms | 4.331ms | 26 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 2.667ms | -19.2% |  | 1.764ms | 4.046ms | 26 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.891ms | -39.5% |  | 1.871ms | 4.909ms | 26 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.565ms | -21.5% |  | 1.060ms | 2.201ms | 26 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 2.601ms | -19.2% |  | 1.650ms | 3.351ms | 26 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 2.600ms | -18.5% |  | 1.650ms | 3.367ms | 26 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 190.85µs | -17.7% |  | 143.50µs | 296.51µs | 26 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 104.48µs | -26.0% |  | 75.47µs | 142.80µs | 26 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.363ms | -19.4% |  | 856.60µs | 1.768ms | 26 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.430ms | -24.0% |  | 862.32µs | 1.958ms | 26 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.552ms | -27.2% |  | 924.99µs | 2.133ms | 26 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 67.81µs | -12.4% |  | 41.75µs | 86.42µs | 26 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.182ms | -25.2% |  | 712.69µs | 1.581ms | 26 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 59.02µs | -8.4% |  | 36.56µs | 77.52µs | 26 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.185ms | -23.3% |  | 741.79µs | 1.546ms | 26 |

informational; points come from different runners of the same class, so read trends, not single deltas.
