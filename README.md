## aui-perf nightly record

_25 points · 2026-10-08T04:44:32.688Z to 2026-11-01T04:30:28.812Z · latest runner: AMD EPYC 7763 64-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 1.104ms | +1.9% |  | 635.00µs | 1.463ms | 25 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 1.274ms | +2.9% |  | 715.47µs | 1.578ms | 25 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 63.05µs | +2.2% |  | 32.96µs | 79.09µs | 25 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 663.60µs | +1.2% |  | 362.82µs | 846.98µs | 25 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 10.292ms | +1.5% |  | 5.720ms | 13.053ms | 25 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 316.41µs | +3.6% |  | 157.97µs | 385.26µs | 25 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 2.570ms | +0.3% |  | 1.391ms | 3.281ms | 25 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 10.141ms | +0.8% |  | 5.591ms | 13.004ms | 25 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 10.10µs | -0.2% |  | 5.92µs | 15.14µs | 25 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 88.82µs | -0.5% |  | 46.46µs | 126.55µs | 25 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 358.77µs | +1.6% |  | 183.90µs | 499.01µs | 25 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 73.49µs | -0.4% |  | 46.47µs | 76.17µs | 25 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 715.84µs | -2.4% |  | 402.17µs | 753.20µs | 25 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 10.07µs | -1.0% |  | 5.54µs | 11.01µs | 25 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 87.15µs | -0.7% |  | 45.85µs | 90.23µs | 25 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 788.38µs | -0.7% |  | 385.78µs | 1.273ms | 25 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 6.178ms | +1.2% |  | 3.432ms | 10.272ms | 25 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 24.433ms | +0.0% |  | 13.513ms | 41.163ms | 25 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 414.44µs | -0.9% |  | 228.27µs | 737.93µs | 25 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 3.619ms | -1.7% |  | 2.016ms | 6.315ms | 25 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 14.273ms | -2.9% |  | 8.037ms | 24.876ms | 25 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 56.69µs | -0.1% |  | 29.58µs | 58.39µs | 25 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 598.38µs | +0.0% |  | 317.99µs | 611.05µs | 25 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 3.275ms | -0.6% |  | 1.738ms | 3.397ms | 25 |
| external-message-conversion › core: external message tool results › 100 matches | 85.05µs | +0.9% |  | 40.51µs | 86.47µs | 25 |
| external-message-conversion › core: external message tool results › 1000 matches | 868.19µs | +1.3% |  | 416.72µs | 879.16µs | 25 |
| external-message-conversion › core: external message tool results › 5000 matches | 4.696ms | +1.7% |  | 2.265ms | 4.731ms | 25 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 52.72µs | -0.8% |  | 24.02µs | 53.39µs | 25 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 505.55µs | -0.9% |  | 229.02µs | 516.13µs | 25 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 2.757ms | -2.0% |  | 1.338ms | 2.844ms | 25 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.22µs | -2.0% |  | 0.13µs | 0.27µs | 25 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.45µs | +1.6% |  | 0.24µs | 0.52µs | 25 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 2.51µs | +1.0% |  | 1.42µs | 2.53µs | 25 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.73µs | -2.3% |  | 0.42µs | 0.84µs | 25 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 4.60µs | -1.7% |  | 2.03µs | 4.82µs | 25 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 43.03µs | -2.2% |  | 18.00µs | 45.51µs | 25 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 167.24µs | +5.1% |  | 91.13µs | 168.10µs | 25 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 1.095ms | +0.3% |  | 635.33µs | 1.175ms | 25 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 2.692ms | -2.6% |  | 1.257ms | 2.874ms | 25 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 2.974ms | -2.4% |  | 1.441ms | 3.158ms | 25 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 17.689ms | +0.7% |  | 9.092ms | 18.296ms | 25 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 19.080ms | +0.7% |  | 10.175ms | 19.818ms | 25 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 1.520ms | -12.8% |  | 732.15µs | 1.786ms | 25 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 3.102ms | -3.4% |  | 1.363ms | 3.255ms | 25 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 9.276ms | -3.5% |  | 5.234ms | 10.152ms | 25 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.197ms | +4.5% |  | 1.124ms | 1.678ms | 25 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.958ms | +9.7% |  | 1.167ms | 2.017ms | 25 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 4.629ms | -1.1% |  | 2.493ms | 5.272ms | 25 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 277.05µs | +2.6% |  | 163.93µs | 305.15µs | 25 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 2.189ms | +1.1% |  | 1.458ms | 2.495ms | 25 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 316.173ms | -3.2% |  | 168.933ms | 354.777ms | 25 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 10.871ms | +0.6% |  | 7.346ms | 12.037ms | 25 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 2.38µs | +5.0% |  | 1.24µs | 4.55µs | 25 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 9.14µs | +4.0% |  | 6.08µs | 21.65µs | 25 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 34.81µs | +1.5% |  | 18.08µs | 90.02µs | 25 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 4.89µs | +0.4% |  | 3.08µs | 6.18µs | 25 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 18.73µs | -1.4% |  | 12.17µs | 26.88µs | 25 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 46.98µs | +0.2% |  | 29.59µs | 60.24µs | 25 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 695.77µs | +10.2% |  | 435.95µs | 699.44µs | 25 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 6.727ms | -18.1% |  | 2.746ms | 8.233ms | 25 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 35.871ms | -15.8% |  | 17.633ms | 45.681ms | 25 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 382.562ms | -0.9% |  | 237.981ms | 430.807ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 709.84µs | -4.8% |  | 256.48µs | 784.19µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 1.045ms | +5.9% |  | 445.26µs | 1.249ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 4.175ms | -6.7% |  | 2.161ms | 5.579ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 696.14µs | +6.6% |  | 255.34µs | 754.69µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 2.184ms | +4.2% |  | 987.37µs | 2.602ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 34.826ms | +3.2% |  | 13.190ms | 41.901ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 707.41µs | +4.0% |  | 229.94µs | 762.51µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 1.706ms | +0.6% |  | 718.25µs | 2.048ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 20.023ms | -22.6% |  | 9.325ms | 33.660ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 332.90µs | -7.9% |  | 110.32µs | 366.94µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 573.54µs | +2.7% |  | 219.94µs | 624.09µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 3.537ms | +14.2% |  | 1.508ms | 4.209ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 25.23µs | +6.5% |  | 8.35µs | 25.23µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 41.43µs | +9.6% |  | 17.84µs | 42.45µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 275.65µs | +11.0% |  | 122.88µs | 275.65µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 718.67µs | +5.3% |  | 253.94µs | 807.82µs | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 1.394ms | -6.0% |  | 639.06µs | 1.684ms | 25 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 21.615ms | +7.3% |  | 7.649ms | 27.010ms | 25 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 264.75µs | +0.6% |  | 140.47µs | 322.08µs | 25 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 2.271ms | +0.5% |  | 1.263ms | 2.708ms | 25 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 1.146ms | -0.5% |  | 638.71µs | 1.382ms | 25 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 315.90µs | +2.0% |  | 176.39µs | 520.95µs | 25 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 2.635ms | +1.3% |  | 1.528ms | 4.267ms | 25 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 1.362ms | +3.6% |  | 790.67µs | 2.173ms | 25 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 335.27µs | +0.3% |  | 166.26µs | 356.68µs | 25 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 26.023ms | -1.0% |  | 13.845ms | 27.242ms | 25 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 658.248ms | +1.5% |  | 369.530ms | 1177.339ms | 25 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 267.02µs | +2.5% |  | 140.00µs | 470.51µs | 25 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.999ms | +2.1% |  | 1.149ms | 3.593ms | 25 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 1.048ms | +1.6% |  | 602.33µs | 1.837ms | 25 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 3.479ms | +2.5% |  | 1.848ms | 4.588ms | 25 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 3.493ms | +3.1% |  | 1.784ms | 4.331ms | 25 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 3.386ms | +2.9% |  | 1.764ms | 4.046ms | 25 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 4.032ms | -12.6% |  | 1.871ms | 4.909ms | 25 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 2.084ms | +1.8% |  | 1.060ms | 2.201ms | 25 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 3.351ms | +5.7% |  | 1.650ms | 3.351ms | 25 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 3.319ms | +5.4% |  | 1.650ms | 3.367ms | 25 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 238.50µs | -1.2% |  | 143.50µs | 296.51µs | 25 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 142.15µs | +2.6% |  | 75.47µs | 142.80µs | 25 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 1.722ms | +1.8% |  | 856.60µs | 1.768ms | 25 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 1.848ms | +0.4% |  | 862.32µs | 1.958ms | 25 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 2.087ms | +2.2% |  | 924.99µs | 2.133ms | 25 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 86.41µs | +13.3% |  | 41.75µs | 86.42µs | 25 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 1.533ms | +1.9% |  | 712.69µs | 1.581ms | 25 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 76.23µs | +18.6% |  | 36.56µs | 77.52µs | 25 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 1.481ms | +1.1% |  | 741.79µs | 1.546ms | 25 |

informational; points come from different runners of the same class, so read trends, not single deltas.
