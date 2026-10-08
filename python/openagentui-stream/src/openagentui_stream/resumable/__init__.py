from contextlib import suppress

from openagentui_stream.resumable.context import (
    ResumableStreamContext,
    create_resumable_stream_context,
)
from openagentui_stream.resumable.errors import (
    DEFAULT_TTL_MS,
    ResumableStreamError,
    ResumableStreamErrorCode,
    validate_stream_id,
)
from openagentui_stream.resumable.response import (
    RESUMABLE_STREAM_ID_HEADER,
    create_resumable_openagentui_stream_response,
    create_resume_openagentui_stream_response,
)
from openagentui_stream.resumable.stores.in_memory import (
    create_in_memory_resumable_stream_store,
)
from openagentui_stream.resumable.types import (
    CancellationSignal,
    ResumableStreamAcquisition,
    ResumableStreamEntry,
    ResumableStreamLease,
    ResumableStreamRole,
    ResumableStreamStatus,
    ResumableStreamStore,
)

__all__ = [
    "CancellationSignal",
    "DEFAULT_TTL_MS",
    "RESUMABLE_STREAM_ID_HEADER",
    "ResumableStreamAcquisition",
    "ResumableStreamContext",
    "ResumableStreamEntry",
    "ResumableStreamError",
    "ResumableStreamErrorCode",
    "ResumableStreamLease",
    "ResumableStreamRole",
    "ResumableStreamStatus",
    "ResumableStreamStore",
    "create_in_memory_resumable_stream_store",
    "create_resumable_openagentui_stream_response",
    "create_resumable_stream_context",
    "create_resume_openagentui_stream_response",
    "validate_stream_id",
]

with suppress(ImportError):
    from openagentui_stream.resumable.stores.redis import (
        RedisLikeClient,
        RedisResumableStreamStore,
        create_redis_resumable_stream_store,
    )

    __all__ += [
        "RedisLikeClient",
        "RedisResumableStreamStore",
        "create_redis_resumable_stream_store",
    ]
