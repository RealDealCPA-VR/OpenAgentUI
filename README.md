## aui-perf nightly record

_36 points · 2026-10-08T04:44:32.688Z to 2026-11-12T04:29:53.227Z · latest runner: AMD EPYC 9V45 96-Core Processor · Node v24.22.3_

| bench | latest | Δ7d | Δ30d | min | max | points |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 chunks from one source stream | 706.72µs | -35.7% | -17.1% ⚠︎ | 635.00µs | 1.433ms | 31 |
| accumulator › openagentui-stream: raw controller enqueue overhead › 10,000 controller.enqueue calls | 783.25µs | -37.6% | -16.2% ⚠︎ | 715.47µs | 1.550ms | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 16 deltas × 250 chars | 34.82µs | -44.4% | -22.7% ⚠︎ | 32.96µs | 78.94µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 250 deltas × 16 chars | 407.60µs | -38.0% | -14.5% ⚠︎ | 362.82µs | 810.15µs | 31 |
| accumulator › openagentui-stream: same 4000-char text, chunk size A/B › 4000 deltas × 1 char (per-token) | 6.149ms | -40.0% | -16.5% ⚠︎ | 5.720ms | 12.531ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 100 deltas | 172.32µs | -43.4% | -18.4% ⚠︎ | 157.97µs | 383.99µs | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 1000 deltas | 1.529ms | -39.8% | -16.7% ⚠︎ | 1.391ms | 3.159ms | 31 |
| accumulator › openagentui-stream: stream + accumulator per-delta cost (16-char deltas) › 4000 deltas | 6.136ms | -39.2% | -16.3% ⚠︎ | 5.591ms | 12.362ms | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 100 deltas | 6.46µs | -36.0% | -25.3% ⚠︎ | 5.92µs | 14.54µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 1000 deltas | 51.05µs | -42.4% | -24.7% ⚠︎ | 46.46µs | 122.92µs | 31 |
| accumulator › openagentui-stream: stream round trip baseline, no accumulator › 4000 deltas | 201.96µs | -42.4% | -23.0% ⚠︎ | 183.90µs | 485.35µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 10 static tools | 50.45µs | -31.9% | -3.5% | 46.47µs | 76.17µs | 31 |
| ai-sdk-toolkit › ai-sdk: convert fresh AISDKToolkit schemas › 100 static tools | 443.19µs | -38.3% | +4.9% | 405.26µs | 747.70µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 10 static tools | 5.96µs | -41.8% | -0.1% | 5.54µs | 11.05µs | 31 |
| ai-sdk-toolkit › ai-sdk: reuse converted AISDKToolkit schemas › 100 static tools | 49.77µs | -41.8% | +1.5% | 45.85µs | 90.23µs | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 100 deltas | 423.68µs | -46.2% | -39.3% ⚠︎ | 385.78µs | 1.273ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 1000 deltas | 3.696ms | -39.7% | -38.9% ⚠︎ | 3.432ms | 10.272ms | 31 |
| data-stream › openagentui-stream: data stream decode (16-char deltas) › 4000 deltas | 14.703ms | -39.3% | -39.0% ⚠︎ | 13.513ms | 40.641ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 100 deltas | 255.88µs | -38.3% | -39.1% ⚠︎ | 228.27µs | 717.50µs | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 1000 deltas | 2.388ms | -34.1% | -38.2% ⚠︎ | 2.016ms | 6.156ms | 31 |
| data-stream › openagentui-stream: data stream encode (16-char deltas) › 4000 deltas | 9.503ms | -34.1% | -38.5% ⚠︎ | 8.037ms | 24.634ms | 31 |
| external-message-conversion › core: external message reasoning continuations › 100 matches | 32.87µs | -42.4% | +7.4% | 30.11µs | 58.85µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 1000 matches | 343.99µs | -42.6% | +2.8% | 317.99µs | 645.76µs | 31 |
| external-message-conversion › core: external message reasoning continuations › 5000 matches | 1.893ms | -41.9% | +2.8% | 1.755ms | 3.498ms | 31 |
| external-message-conversion › core: external message tool results › 100 matches | 43.30µs | -48.9% | +0.8% | 40.51µs | 86.78µs | 31 |
| external-message-conversion › core: external message tool results › 1000 matches | 452.33µs | -48.3% | +3.3% | 416.72µs | 879.16µs | 31 |
| external-message-conversion › core: external message tool results › 5000 matches | 2.488ms | -46.5% | +4.3% | 2.265ms | 4.713ms | 31 |
| external-message-conversion › core: external message unique tool calls › 100 matches | 26.35µs | -50.2% | +1.1% | 24.02µs | 54.38µs | 31 |
| external-message-conversion › core: external message unique tool calls › 1000 matches | 250.69µs | -50.0% | +1.2% | 229.02µs | 519.28µs | 31 |
| external-message-conversion › core: external message unique tool calls › 5000 matches | 1.467ms | -46.8% | +2.7% | 1.338ms | 2.871ms | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 1 text parts | 0.16µs | -30.3% | +27.9% ⚠︎ | 0.13µs | 0.24µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 10 text parts | 0.27µs | -38.7% | +12.5% ⚠︎ | 0.24µs | 0.48µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike text parts › 100 text parts | 1.59µs | -35.9% | +6.1% | 1.42µs | 2.51µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 1 tool calls | 0.48µs | -34.7% | +11.6% ⚠︎ | 0.42µs | 0.80µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 10 tool calls | 2.42µs | -46.9% | +15.5% ⚠︎ | 2.03µs | 4.82µs | 31 |
| from-thread-message-like › core: fromThreadMessageLike tool calls › 100 tool calls | 20.92µs | -50.8% | +10.2% ⚠︎ | 18.00µs | 45.51µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 1000 items and patches | 98.14µs | -37.2% | +1.7% | 92.35µs | 168.10µs | 31 |
| interactable-array-patches › core: id-keyed interactable array patches › 5000 items and patches | 706.94µs | -35.3% | +3.1% | 638.75µs | 1.175ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown | 1.427ms | -45.7% | +0.0% | 1.257ms | 2.874ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 10 KB fenced Markdown deferred | 1.555ms | -45.9% | -1.6% | 1.441ms | 3.158ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown | 10.295ms | -41.7% | +5.5% | 9.369ms | 18.296ms | 31 |
| markdown-streaming › react-markdown: one token after an unchanged fenced code block › 100 KB fenced Markdown deferred | 11.128ms | -42.6% | -0.1% | 10.175ms | 19.818ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 1 paragraphs | 815.81µs | -46.6% | -14.2% ⚠︎ | 732.15µs | 1.786ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 10 paragraphs | 1.552ms | -49.1% | +1.9% | 1.363ms | 3.255ms | 31 |
| markdown-streaming › react-markdown: one token changed in the last paragraph, by message length › 50 paragraphs | 5.688ms | -40.1% | -4.6% | 5.234ms | 10.152ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 1 paragraphs deferred | 1.238ms | +2.7% | -5.2% | 1.142ms | 1.482ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 10 paragraphs deferred | 1.370ms | -28.9% | +5.5% | 1.167ms | 2.017ms | 31 |
| markdown-streaming › react-markdown: the same token with defer on › 50 paragraphs deferred | 2.921ms | -32.8% | -21.6% ⚠︎ | 2.493ms | 5.272ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 1000 character argument in 16-character deltas | 185.23µs | -33.0% | +4.7% | 164.45µs | 304.75µs | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 10000 character argument in 16-character deltas | 1.720ms | -22.0% | +3.5% | 1.459ms | 2.472ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 500 short object entries in 16-character deltas | 173.685ms | -45.8% | -0.6% | 168.933ms | 345.824ms | 31 |
| react-langgraph › react-langgraph: streamed tool argument accumulation › 50000 character argument in 16-character deltas | 8.500ms | -22.0% | +6.2% | 7.346ms | 12.109ms | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 10 stable messages | 1.40µs | -38.7% | +6.3% | 1.27µs | 2.45µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 1000 stable messages | 7.19µs | -19.6% | +16.0% ⚠︎ | 6.19µs | 11.01µs | 31 |
| react-pi-message-projection › react-pi: streaming tail projection › 5000 stable messages | 19.58µs | -42.0% | -4.2% | 18.08µs | 47.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 1 chunks | 3.41µs | -30.4% | +4.2% | 3.08µs | 6.18µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 100 KiB, 101 chunks | 14.10µs | -25.4% | +7.9% | 12.39µs | 25.59µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1 chunks | 32.35µs | -31.5% | +3.4% | 29.59µs | 57.87µs | 31 |
| sse-fragmentation › openagentui-stream: fragmented SSE events › 1024 KiB, 1025 chunks | 500.03µs | -27.4% | +13.3% ⚠︎ | 443.81µs | 699.44µs | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 10 messages | 3.677ms | -43.1% | -17.7% ⚠︎ | 2.746ms | 8.233ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 100 messages | 21.787ms | -41.7% | +4.6% | 17.633ms | 45.681ms | 31 |
| thread-scaling › external-store thread: mount+unmount by message count › 1000 messages | 285.080ms | -25.7% | +7.3% | 237.981ms | 430.807ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 10 messages | 300.91µs | -57.0% | -7.7% | 256.48µs | 772.71µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 100 messages | 494.44µs | -51.3% | +1.8% | 445.26µs | 1.249ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › 20 message window, 1000 messages | 2.944ms | -26.4% | +23.0% ⚠︎ | 2.161ms | 5.123ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 10 messages | 325.76µs | -50.6% | +18.3% ⚠︎ | 255.34µs | 754.69µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 100 messages | 1.100ms | -47.2% | +11.4% ⚠︎ | 984.70µs | 2.466ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages by id, 1000 messages | 37.354ms | +34.2% | +3.9% | 13.190ms | 41.901ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 10 messages | 295.97µs | -55.3% | +7.4% | 229.94µs | 762.51µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 100 messages | 828.40µs | -49.8% | -1.9% | 718.25µs | 1.837ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › all messages, 1000 messages | 16.917ms | -8.4% | -37.5% ⚠︎ | 9.325ms | 33.660ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 10 messages | 138.34µs | -57.1% | +15.1% ⚠︎ | 110.32µs | 366.94µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 100 messages | 242.96µs | -54.2% | -10.1% ⚠︎ | 219.94µs | 600.61µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › provider only, 1000 messages | 2.341ms | -28.6% | +20.0% ⚠︎ | 1.508ms | 3.763ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 10 messages | 10.61µs | -55.5% | +9.3% | 8.35µs | 25.23µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 100 messages | 20.93µs | -49.8% | +7.6% | 17.84µs | 42.95µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by layer › runtime only, 1000 messages | 141.66µs | -46.5% | +5.9% | 122.88µs | 275.65µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 10 messages | 308.38µs | -56.3% | -9.5% | 253.94µs | 807.82µs | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 100 messages | 748.76µs | -47.1% | +4.6% | 639.06µs | 1.684ms | 31 |
| thread-scaling › external-store thread: one token changed in the last message, by thread length › 1000 messages | 11.175ms | -29.4% | -34.2% ⚠︎ | 7.649ms | 27.010ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 1000 bytes | 160.16µs | -39.6% | -9.3% | 140.47µs | 312.26µs | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 10000 bytes | 1.391ms | -39.5% | -10.8% ⚠︎ | 1.263ms | 2.642ms | 31 |
| tool-args › openagentui-stream: accumulator tool arguments (16-char deltas) › 5000 bytes | 707.12µs | -39.6% | -10.7% ⚠︎ | 638.71µs | 1.347ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 1000 bytes | 198.09µs | -36.5% | -32.9% ⚠︎ | 176.39µs | 517.74µs | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 10000 bytes | 1.734ms | -34.2% | -31.6% ⚠︎ | 1.528ms | 4.225ms | 31 |
| tool-args › openagentui-stream: active-reader tool arguments (16-char deltas) › 5000 bytes | 865.10µs | -36.4% | -33.8% ⚠︎ | 790.67µs | 2.160ms | 31 |
| tool-args › openagentui-stream: complete accumulated arguments (single delta) › 10,000 array elements | 181.48µs | -45.9% | -0.0% | 166.26µs | 356.68µs | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 array entries | 15.060ms | -42.0% | +3.0% | 13.845ms | 27.242ms | 31 |
| tool-args › openagentui-stream: dense accumulated arguments (16-char deltas) › 2,000 object entries | 403.978ms | -39.6% | +3.8% | 371.567ms | 1177.339ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 1000 bytes | 164.05µs | -38.7% | -39.0% ⚠︎ | 140.00µs | 470.51µs | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 10000 bytes | 1.268ms | -37.7% | -39.3% ⚠︎ | 1.149ms | 3.593ms | 31 |
| tool-args › openagentui-stream: execute-only tool arguments (16-char deltas) › 5000 bytes | 659.73µs | -36.3% | -38.8% ⚠︎ | 602.33µs | 1.837ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRoot | 1.934ms | -44.5% | +4.3% | 1.848ms | 4.588ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootDeps | 1.907ms | -44.6% | +2.7% | 1.852ms | 4.331ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › createTapRootStable | 1.871ms | -44.8% | +2.5% | 1.802ms | 4.046ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › react | 2.068ms | -49.4% | -4.1% | 1.871ms | 4.909ms | 31 |
| tree › tree mount+unmount, 500 leaves x 10 hooks › tapRoot | 1.134ms | -44.7% | +2.8% | 1.074ms | 2.191ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRoot | 1.765ms | -46.0% | +0.3% | 1.650ms | 3.476ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootDeps | 1.720ms | -47.3% | -3.3% | 1.650ms | 3.367ms | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › createTapRootStable | 151.49µs | -35.5% | +0.5% | 143.50µs | 285.58µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › react | 82.89µs | -41.0% | +4.0% | 75.47µs | 142.80µs | 31 |
| tree › tree update: one leaf dispatch, 500 leaves x 10 hooks › tapRoot | 954.81µs | -44.9% | +7.2% | 868.75µs | 1.782ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › deps | 960.26µs | -48.8% | +3.5% | 862.32µs | 2.022ms | 31 |
| useResources › useResources mount+unmount, 500 children x 10 hooks › no-deps | 1.025ms | -51.1% | +4.2% | 927.24µs | 2.172ms | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › deps | 49.00µs | -43.7% | +9.2% | 41.75µs | 88.29µs | 31 |
| useResources › useResources: one child dispatch, 500 children x 10 hooks › no-deps | 790.10µs | -49.3% | +4.0% | 712.69µs | 1.613ms | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › deps | 44.25µs | -41.6% | +14.5% ⚠︎ | 36.56µs | 79.48µs | 31 |
| useResources › useResources: rebuild elements array, 500 children x 10 hooks › no-deps | 790.92µs | -48.1% | +5.9% | 743.36µs | 1.546ms | 31 |

informational; points come from different runners of the same class, so read trends, not single deltas.
