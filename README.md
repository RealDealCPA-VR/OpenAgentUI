## aui-perf nightly record

_33 points · 2026-10-08T04:44:32.688Z to 2026-11-09T04:31:08.674Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.2_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 679.85µs | -27.6% | -15.7% ⚠︎ | 635.00µs | 1.463ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 757.03µs | -29.9% | -14.2% ⚠︎ | 715.47µs | 1.578ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 34.15µs | -25.2% | -20.1% ⚠︎ | 32.96µs | 79.09µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 389.22µs | -26.0% | -18.2% ⚠︎ | 362.82µs | 815.65µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 5.979ms | -27.1% | -17.3% ⚠︎ | 5.720ms | 12.632ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 168.15µs | -28.4% | -17.5% ⚠︎ | 157.97µs | 385.26µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.529ms | -25.7% | -14.5% ⚠︎ | 1.391ms | 3.159ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 5.931ms | -27.2% | -18.3% ⚠︎ | 5.591ms | 12.362ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 6.21µs | -29.5% | -23.7% ⚠︎ | 5.92µs | 14.96µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 49.07µs | -32.4% | -24.1% ⚠︎ | 46.46µs | 126.55µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 192.53µs | -33.0% | -22.6% ⚠︎ | 183.90µs | 499.01µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 48.14µs | -22.9% | +0.6% | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 437.54µs | -22.0% | +8.8% | 405.26µs | 747.70µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.91µs | -24.0% | +1.4% | 5.54µs | 11.05µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 48.12µs | -24.0% | +2.2% | 45.85µs | 90.23µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 408.01µs | -31.1% | -39.2% ⚠︎ | 385.78µs | 1.273ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.645ms | -27.4% | -38.3% ⚠︎ | 3.432ms | 10.272ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 14.435ms | -27.9% | -38.1% ⚠︎ | 13.513ms | 41.163ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 255.89µs | -26.2% | -37.6% ⚠︎ | 228.27µs | 737.93µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.211ms | -28.6% | -39.6% ⚠︎ | 2.016ms | 6.315ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 8.750ms | -28.8% | -39.2% ⚠︎ | 8.037ms | 24.876ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 31.40µs | -27.6% | +6.2% | 30.11µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 336.62µs | -26.1% | +4.1% | 317.99µs | 619.94µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.822ms | -28.3% | +4.8% | 1.755ms | 3.392ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 41.48µs | -33.7% | +0.5% | 40.51µs | 86.47µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 419.80µs | -33.9% | -2.0% | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.374ms | -32.0% | +4.5% | 2.265ms | 4.713ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 25.74µs | -30.8% | +5.1% | 24.02µs | 53.39µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 253.47µs | -28.9% | +5.8% | 229.02µs | 516.13µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.431ms | -28.6% | +3.2% | 1.338ms | 2.844ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.13µs | -25.2% | +5.2% | 0.13µs | 0.24µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.24µs | -27.7% | -1.2% | 0.24µs | 0.48µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.50µs | -29.2% | +0.9% | 1.42µs | 2.51µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.43µs | -21.4% | +4.3% | 0.42µs | 0.80µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.18µs | -30.4% | +1.4% | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 19.48µs | -32.8% | +0.5% | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 96.70µs | -20.2% | +6.1% | 92.35µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 683.22µs | -21.8% | +7.5% | 638.75µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.377ms | -32.9% | +4.3% | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.510ms | -29.8% | -0.7% | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 9.431ms | -32.4% | +3.7% | 9.369ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 10.691ms | -29.2% | +0.2% | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 786.47µs | -21.5% | -10.5% ⚠︎ | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.475ms | -29.3% | +3.4% | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.307ms | -26.6% | -3.1% | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.177ms | -12.5% | -29.9% ⚠︎ | 1.124ms | 1.506ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.238ms | -14.3% | -11.5% ⚠︎ | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 3.137ms | -34.2% | -7.3% | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 176.33µs | -23.1% | +7.6% | 164.45µs | 304.75µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.601ms | -25.0% | +9.8% | 1.459ms | 2.472ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 199.733ms | -18.1% | +17.8% ⚠︎ | 168.933ms | 345.824ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 7.755ms | -21.0% | -1.5% | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.35µs | -29.7% | +9.0% | 1.27µs | 2.45µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 6.31µs | -34.5% | +3.9% | 6.19µs | 11.01µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 18.31µs | -45.6% | -8.2% | 18.08µs | 47.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.32µs | -19.3% | +3.5% | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 12.81µs | -23.0% | +5.3% | 12.39µs | 25.59µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 31.93µs | -19.3% | +6.5% | 29.59µs | 57.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 482.04µs | -21.7% | +10.6% ⚠︎ | 441.50µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.159ms | -28.9% | -9.3% | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 19.175ms | -22.3% | +2.7% | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 248.567ms | -17.8% | -3.0% | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 283.47µs | -40.6% | -6.8% | 256.48µs | 772.71µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 507.00µs | -33.9% | +13.2% ⚠︎ | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.556ms | -15.2% | +9.6% | 2.161ms | 5.123ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 274.92µs | -40.4% | -2.9% | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 984.70µs | -37.2% | -10.2% ⚠︎ | 984.70µs | 2.466ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 14.501ms | -35.4% | -48.5% ⚠︎ | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 272.78µs | -39.3% | +0.1% | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 765.01µs | -36.7% | -5.9% | 718.25µs | 1.837ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 14.543ms | -8.5% | -7.1% | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 123.21µs | -44.6% | +0.4% | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 236.34µs | -38.6% | -0.1% | 219.94µs | 600.61µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 1.687ms | -31.7% | +0.2% | 1.508ms | 3.763ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 9.37µs | -29.3% | +1.4% | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 19.50µs | -31.3% | +3.7% | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 126.01µs | -36.6% | -4.6% | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 291.26µs | -35.2% | -3.1% | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 707.36µs | -35.6% | +4.1% | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 8.068ms | -43.0% | -38.7% ⚠︎ | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 147.59µs | -27.3% | -15.7% ⚠︎ | 140.47µs | 316.46µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.328ms | -27.0% | -14.2% ⚠︎ | 1.263ms | 2.670ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 680.46µs | -25.9% | -13.6% ⚠︎ | 638.71µs | 1.367ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 190.78µs | -23.6% | -34.2% ⚠︎ | 176.39µs | 520.95µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.667ms | -24.4% | -31.1% ⚠︎ | 1.528ms | 4.225ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 850.94µs | -23.1% | -31.6% ⚠︎ | 790.67µs | 2.160ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 177.24µs | -26.5% | +0.6% | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 14.594ms | -29.8% | +2.3% | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 382.868ms | -16.2% | +3.6% | 371.567ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 160.97µs | -20.9% | -37.1% ⚠︎ | 140.00µs | 470.51µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.212ms | -27.7% | -40.4% ⚠︎ | 1.149ms | 3.593ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 629.71µs | -25.9% | -41.5% ⚠︎ | 602.33µs | 1.837ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.936ms | -29.1% | +4.3% | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.946ms | -29.6% | +9.1% | 1.852ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.893ms | -29.0% | +7.3% | 1.802ms | 4.046ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.070ms | -28.4% | +2.4% | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.158ms | -26.0% | +9.3% | 1.074ms | 2.191ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.768ms | -32.0% | +6.2% | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.789ms | -31.2% | +1.3% | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 148.64µs | -22.1% | -0.2% | 143.50µs | 285.58µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 79.29µs | -24.1% | +2.2% | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 958.07µs | -29.7% | +11.8% ⚠︎ | 868.75µs | 1.757ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 922.88µs | -35.5% | +3.4% | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.001ms | -35.5% | +8.2% | 927.24µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 45.46µs | -33.0% | +6.6% | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 856.35µs | -27.5% | +11.4% ⚠︎ | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 38.80µs | -34.2% | +5.4% | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 794.50µs | -33.0% | +2.0% | 741.79µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.
