//#define SEXY_TRACING_ENABLED
//#define SEXY_PERF_ENABLED
//#define SEXY_MEMTRACE

#include <string>
#include <fstream>
#include <ctime>
#include <cmath>

#include <SDL.h>

#include <iostream>
#include "SexyAppBase.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/widget/Widget.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
//#define SEXY_TRACING_ENABLED
//#define SEXY_PERF_ENABLED
//#define SEXY_MEMTRACE

#include <string>
#include <fstream>
#include <ctime>
#include <cmath>

#include <SDL.h>

#include <iostream>
#include "SexyAppBase.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/widget/Widget.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
//#define SEXY_TRACING_ENABLED
//#define SEXY_PERF_ENABLED
//#define SEXY_MEMTRACE

#include <string>
#include <fstream>
#include <ctime>
#include <cmath>

#include <SDL.h>

#include <iostream>
#include "SexyAppBase.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/widget/Widget.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
//#define SEXY_TRACING_ENABLED
//#define SEXY_PERF_ENABLED
//#define SEXY_MEMTRACE

#include <string>
#include <fstream>
#include <ctime>
#include <cmath>

#include <SDL.h>

#include <iostream>
#include "SexyAppBase.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/widget/Widget.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
//#define SEXY_TRACING_ENABLED
//#define SEXY_PERF_ENABLED
//#define SEXY_MEMTRACE

#include <string>
#include <fstream>
#include <unistd.h>
#include <time.h>
#include <math.h>

#include <SDL.h>


#include <iostream>
#include "SexyAppBase.h"
//#include "../SexyAppFramework/misc/SEHCatcher.h"
#include "SexyAppFramework/widget/WidgetManager.h"
#include "SexyAppFramework/widget/Widget.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "../SexyAppFramework/misc/KeyCodes.h"
#include "SexyAppFramework/graphics/GLInterface.h"
#include "SexyAppFramework/graphics/GLImage.h"
#include "SexyAppFramework/graphics/MemoryImage.h"
//#include "../SexyAppFramework/misc/HTTPTransfer.h"
#include "SexyAppFramework/widget/Dialog.h"
#include "SexyAppFramework/imagelib/ImageLib.h"
#include "sound/BassSoundManager.h"
#include "sound/BassSoundInstance.h"
#include "../SexyAppFramework/misc/Rect.h"
#include "../SexyAppFramework/misc/PropertiesParser.h"
#include "../SexyAppFramework/misc/PerfTimer.h"
#include "../SexyAppFramework/misc/MTRand.h"
#include "../SexyAppFramework/misc/ModVal.h"
//#include "SexyAppFramework/graphics/SysFont.h"
#include "../SexyAppFramework/misc/ResourceManager.h"
#include "sound/BassMusicInterface.h"
#include "../SexyAppFramework/misc/AutoCrit.h"
#include "../SexyAppFramework/misc/Debug.h"
#include "SexyAppFramework/paklib/PakInterface.h"
#include "sound/DummyMusicInterface.h"
#include "SexyAppFramework/fcaseopen/fcaseopen.h"

#include <fstream> // 引入文件流库
#include <sstream> // 引入字符串流库
#include <unordered_set> // 引入哈希集合以确保唯一性

#include "../SexyAppFramework/misc/memmgr.h"
#include "../SexyAppFramework/misc/RegEmu.h"

#include <filesystem>

using namespace Sexy;

SexyAppBase* Sexy::gSexyAppBase = NULL;

//SEHCatcher Sexy::gSEHCatcher;

//HMODULE gDDrawDLL = NULL;
//HMODULE gDSoundDLL = NULL;
//HMODULE gVersionDLL = NULL;

//typedef struct { UINT cbSize; DWORD dwTime; } LASTINPUTINFO;
static GLImage* gFPSImage = NULL;

//////////////////////////////////////////////////////////////////////////

/*
typedef HRESULT (WINAPI *SHGetFolderPathFunc)(HWND, int, HANDLE, DWORD, LPTSTR);
void* GetSHGetFolderPath(const char* theDLL, HMODULE* theMod)
{
	HMODULE aMod = LoadLibrary(theDLL);
	SHGetFolderPathFunc aFunc = NULL;

	if (aMod != NULL)
	{
		*((void**)&aFunc) = (void*)GetProcAddress(aMod, "SHGetFolderPathA");
		if (aFunc == NULL)
		{
			FreeLibrary(aMod);
			aMod = NULL;
		}
	}

	*theMod = aMod;
	return (void *)aFunc;
}
*/

//////////////////////////////////////////////////////////////////////////
SexyAppBase::SexyAppBase()
{
	gSexyAppBase = this;

	SDL_Init(SDL_INIT_TIMER);
	//mMutex = NULL;
	mNotifyGameMessage = 0;

#ifdef _DEBUG
	mOnlyAllowOneCopyToRun = false;
#else
	mOnlyAllowOneCopyToRun = true;
#endif

    // Initialize mTabletPC based on platform:
    // - Android/iOS: Touch devices, enable tablet mode for drag-and-drop planting and touch input
    // - PC: Traditional mouse/keyboard, disable tablet mode (can be detected later via SDL if needed)
#ifdef ANDROID
    // Android is a touch platform, enable tablet PC mode by default
	mTabletPC = true;
#elif defined(__APPLE__) || defined(__IOS__) || defined(TARGET_OS_IPHONE)
    // iOS/Apple platforms support touch, enable tablet PC mode by default
	mTabletPC = true;
#else
    // Default to false, can be detected later after SDL initialization
    mTabletPC = false;
#endif

#ifdef ANDROID
    mChangeDirTo = "/storage/emulated/0/Android/data/com.popcap.pvz/files/";
#else
	mChangeDirTo = "./";
#endif

	mNoDefer = false;
	mFullScreenPageFlip = true; // should we page flip in fullscreen?
	mTimeLoaded = SDL_GetTicks();
	mSEHOccured = false;
	mProdName = "Product";
	mTitle = __S("SexyApp");
	mShutdown = false;
	mExitToTop = false;
#ifdef ANDROID
	mWidth = 480;
	mHeight = 640;
#else
    mWidth = 640;
    mHeight = 480;
#endif
	mFullscreenBits = 16;
	mIsWindowed = true;
	mIsPhysWindowed = true;
	mFullScreenWindow = false;
	mPreferredX = -1;
	mPreferredY = -1;
	mAllowMonitorPowersave = true;
	//mHWnd = NULL;
	mGLInterface = NULL;
	mMusicInterface = NULL;
	//mInvisHWnd = NULL;
	mFrameTime = 10;
	mNonDrawCount = 0;
	mDrawCount = 0;
	mSleepCount = 0;
	mUpdateCount = 0;
	mUpdateAppState = 0;
	mUpdateAppDepth = 0;
	mPendingUpdatesAcc = 0.0;
	mUpdateFTimeAcc = 0.0;
	mHasPendingDraw = true;
	mIsDrawing = false;
	mLastDrawWasEmpty = false;
	mLastTimeCheck = 0;
	mUpdateMultiplier = 1;
	mPaused = false;
	mSoundManager = NULL;
	mCursorNum = CURSOR_POINTER;
	mMouseIn = false;
	mRunning = false;
	mActive = true;
	mProcessInTimer = false;
	mMinimized = false;
	mPhysMinimized = false;
	mIsDisabled = false;
	mLoaded = false;
	mYieldMainThread = false;
	mLoadingFailed = false;
	mLoadingThreadStarted = false;
	mAutoStartLoadingThread = true;
	mLoadingThreadCompleted = false;
	mCursorThreadRunning = false;
	mNumLoadingThreadTasks = 0;
	mCompletedLoadingThreadTasks = 0;
	mLastDrawTick = SDL_GetTicks();
	mNextDrawTick = SDL_GetTicks();
	mSysCursor = true;
	mForceFullscreen = false;
	mForceWindowed = false;
	mHasFocus = true;
	mCustomCursorsEnabled = false;
	mCustomCursorDirty = false;
	//mOverrideCursor = NULL;
	mIsOpeningURL = false;
	mInitialized = false;
	mLastShutdownWasGraceful = true;
	mReadFromRegistry = false;
	mSkipSignatureChecks = false;
	mCtrlDown = false;
	mAltDown = false;
	mAllowAltEnter = true;
	mStepMode = 0;
	mCleanupSharedImages = false;
	mStandardWordWrap = true;
	mbAllowExtendedChars = true;
	mEnableMaximizeButton = false;
	mWriteToSexyCache = true;
	mSexyCacheBuffers = false;

	mMusicVolume = 0.85;
	mSfxVolume = 0.85;
	mMuteCount = 0;
	mAutoMuteCount = 0;
	mMuteOnLostFocus = false;
	mCurHandleNum = 0;
	mFPSTime = 0;
	mFPSStartTick = SDL_GetTicks();
	mFPSFlipCount = 0;
	mFPSCount = 0;
	mFPSDirtyCount = 0;
	mShowFPS = false;
	mShowFPSMode = FPS_ShowFPS;
	mDrawTime = 0;
	mScreenBltTime = 0;
	mAlphaDisabled = false;
	mDebugKeysEnabled = false;
	mOldWndProc = 0;
	mNoSoundNeeded = false;
	mWantFMod = false;

	mSyncRefreshRate = 100;
	mVSyncUpdates = false;
	mVSyncBroken = false;
	mVSyncBrokenCount = 0;
	mVSyncBrokenTestStartTick = 0;
	mVSyncBrokenTestUpdates = 0;
	mWaitForVSync = false;
	mSoftVSyncWait = true;
	mUserChanged3DSetting = false;
	mAutoEnable3D = false;
	mTest3D = false;
	mMinVidMemory3D = 6;
	mRecommendedVidMemory3D = 14;
	mRelaxUpdateBacklogCount = 0;
	mWidescreenAware = false;
	mEnableWindowAspect = false;
	mWindowAspect.Set(4, 3);
	mIsWideWindow = false;

	mWindow = 0;
	mContext = 0;
	mSurface = 0;

	int i;

	for (i = 0; i < NUM_CURSORS; i++)
		mCursorImages[i] = NULL;

	for (i = 0; i < 256; i++)
		mAdd8BitMaxTable[i] = i;

	for (i = 256; i < 512; i++)
		mAdd8BitMaxTable[i] = 255;

	// Set default strings.  Init could read in overrides from partner.xml
	SetString("DIALOG_BUTTON_OK",		L"OK");
	SetString("DIALOG_BUTTON_CANCEL",	L"CANCEL");

	SetString("UPDATE_CHECK_TITLE",		L"Update Check");
	SetString("UPDATE_CHECK_BODY",		L"Checking if there are any updates available for this product ...");

	SetString("UP_TO_DATE_TITLE",		L"Up to Date");
	SetString("UP_TO_DATE_BODY",		L"There are no updates available for this product at this time.");
	SetString("NEW_VERSION_TITLE",		L"New Version");
	SetString("NEW_VERSION_BODY",		L"There is an update available for this product.  Would you like to visit the web site to download it?");

	mManualShutdown = false;

	mWidgetManager = new WidgetManager(this);
	mResourceManager = new ResourceManager(this);

	mPrimaryThreadId = 0;
}

SexyAppBase::~SexyAppBase()
{
	Shutdown();



	DialogMap::iterator aDialogItr = mDialogMap.begin();
	while (aDialogItr != mDialogMap.end())
	{
		mWidgetManager->RemoveWidget(aDialogItr->second);
		delete aDialogItr->second;
		++aDialogItr;
	}
	mDialogMap.clear();
	mDialogList.clear();

	/*
	if (mInvisHWnd != NULL)
	{
		HWND aWindow = mInvisHWnd;
		mInvisHWnd = NULL;
		SetWindowLongPtr(aWindow, GWLP_USERDATA, 0);
		DestroyWindow(aWindow);
	}
*/

	delete mWidgetManager;
	delete mResourceManager;
	delete gFPSImage;
	gFPSImage = NULL;

	SharedImageMap::iterator aSharedImageItr = mSharedImageMap.begin();
	while (aSharedImageItr != mSharedImageMap.end())
	{
		SharedImage* aSharedImage = &aSharedImageItr->second;
		//DBG_ASSERTE(aSharedImage->mRefCount == 0);
		delete aSharedImage->mImage;
		mSharedImageMap.erase(aSharedImageItr++);
	}

	delete mGLInterface;
	delete mMusicInterface;
	delete mSoundManager;

	/*
	if (mHWnd != NULL)
	{
		HWND aWindow = mHWnd;
		mHWnd = NULL;

		SetWindowLongPtr(aWindow, GWLP_USERDATA, 0);

		//char aStr[256];
		//sprintf(aStr, "HWND: %d\r\n", aWindow);
		//OutputDebugString(aStr);

		DestroyWindow(aWindow);
	}
	*/

	WaitForLoadingThread();

	//DestroyCursor(mHandCursor);
	//DestroyCursor(mDraggingCursor);

	gSexyAppBase = NULL;


	//if (mMutex != NULL)
		//::CloseHandle(mMutex);

	/*
	FreeLibrary(gDDrawDLL);
	FreeLibrary(gDSoundDLL);
	FreeLibrary(gVersionDLL);
	*/
}

/*
static BOOL CALLBACK ChangeDisplayWindowEnumProc(HWND hwnd, LPARAM lParam)
{
	typedef std::map<HWND,RECT> WindowMap;
	static WindowMap aMap;

	if (lParam==0 && aMap.find(hwnd)==aMap.end()) // record
	{
		RECT aRect;
		if (!IsIconic(hwnd) && IsWindowVisible(hwnd))
		{
			if (GetWindowRect(hwnd,&aRect))
			{
//				char aBuf[4096];
//				GetWindowText(hwnd,aBuf,4000);
//				DWORD aProcessId = 0;
//				GetWindowThreadProcessId(hwnd,&aProcessId);
//				SEXY_TRACE(StrFormat("%s %d - %d %d %d %d",aBuf,aProcessId,aRect.left,aRect.top,aRect.right,aRect.bottom).c_str());
				aMap[hwnd] = aRect;
			}
		}
	}
	else
	{
		WindowMap::iterator anItr = aMap.find(hwnd);
		if (anItr != aMap.end())
		{
			RECT &r = anItr->second;
			MoveWindow(hwnd,r.left,r.top,abs(r.right-r.left),abs(r.bottom-r.top),TRUE);
		}
	}
	return TRUE;
}
*/

void SexyAppBase::ClearUpdateBacklog(bool relaxForASecond)
{
	mLastTimeCheck = SDL_GetTicks();
	mUpdateFTimeAcc = 0.0;

	if (relaxForASecond)
		mRelaxUpdateBacklogCount = 1000;
}

bool SexyAppBase::AppCanRestore()
{
	return !mIsDisabled;
}






Dialog* SexyAppBase::NewDialog(int theDialogId, bool isModal, const SexyString& theDialogHeader, const SexyString& theDialogLines, const SexyString& theDialogFooter, int theButtonMode)
{
	Dialog* aDialog = new Dialog(NULL, NULL, theDialogId, isModal, theDialogHeader,	theDialogLines, theDialogFooter, theButtonMode);
	return aDialog;
}

Dialog* SexyAppBase::DoDialog(int theDialogId, bool isModal, const SexyString& theDialogHeader, const SexyString& theDialogLines, const SexyString& theDialogFooter, int theButtonMode)
{
	KillDialog(theDialogId);

	Dialog* aDialog = NewDialog(theDialogId, isModal, theDialogHeader, theDialogLines, theDialogFooter, theButtonMode);

	AddDialog(theDialogId, aDialog);

	return aDialog;
}


Dialog*	SexyAppBase::GetDialog(int theDialogId)
{
	DialogMap::iterator anItr = mDialogMap.find(theDialogId);

	if (anItr != mDialogMap.end())
		return anItr->second;

	return NULL;
}

bool SexyAppBase::KillDialog(int theDialogId, bool removeWidget, bool deleteWidget)
{
	DialogMap::iterator anItr = mDialogMap.find(theDialogId);

	if (anItr != mDialogMap.end())
	{
		Dialog* aDialog = anItr->second;

		// set the result to something else so DoMainLoop knows that the dialog is gone
		// in case nobody else sets mResult
		if (aDialog->mResult == -1)
			aDialog->mResult = 0;

		DialogList::iterator aListItr = std::find(mDialogList.begin(),mDialogList.end(),aDialog);
		if (aListItr != mDialogList.end())
			mDialogList.erase(aListItr);

		mDialogMap.erase(anItr);

		if (removeWidget || deleteWidget)
		mWidgetManager->RemoveWidget(aDialog);

		if (aDialog->IsModal())
		{
			ModalClose();
			mWidgetManager->RemoveBaseModal(aDialog);
		}

		if (deleteWidget)
		SafeDeleteWidget(aDialog);

		return true;
	}

	return false;
}

bool SexyAppBase::KillDialog(int theDialogId)
{
	return KillDialog(theDialogId,true,true);
}

bool SexyAppBase::KillDialog(Dialog* theDialog)
{
	return KillDialog(theDialog->mId);
}

int SexyAppBase::GetDialogCount()
{
	return mDialogMap.size();
}

void SexyAppBase::AddDialog(int theDialogId, Dialog* theDialog)
{
	KillDialog(theDialogId);

	if (theDialog->mWidth == 0)
	{
		// Set the dialog position ourselves
		int aWidth = mWidth/2;
		theDialog->Resize((mWidth - aWidth)/2, mHeight / 5, aWidth, theDialog->GetPreferredHeight(aWidth));
	}

	mDialogMap.insert(DialogMap::value_type(theDialogId, theDialog));
	mDialogList.push_back(theDialog);

	mWidgetManager->AddWidget(theDialog);
	if (theDialog->IsModal())
	{
		mWidgetManager->AddBaseModal(theDialog);
		ModalOpen();
	}
}

void SexyAppBase::AddDialog(Dialog* theDialog)
{
	AddDialog(theDialog->mId, theDialog);
}

void SexyAppBase::ModalOpen()
{
}

void SexyAppBase::ModalClose()
{
}

void SexyAppBase::DialogButtonPress(int theDialogId, int theButtonId)
{
	if (theButtonId == Dialog::ID_YES)
		ButtonPress(2000 + theDialogId);
	else if (theButtonId == Dialog::ID_NO)
		ButtonPress(3000 + theDialogId);
}

void SexyAppBase::DialogButtonDepress(int theDialogId, int theButtonId)
{
	if (theButtonId == Dialog::ID_YES)
		ButtonDepress(2000 + theDialogId);
	else if (theButtonId == Dialog::ID_NO)
		ButtonDepress(3000 + theDialogId);
}

void SexyAppBase::GotFocus()
{
}

void SexyAppBase::LostFocus()
{
}

void SexyAppBase::URLOpenFailed(const std::string& theURL)
{
	(void)theURL;
	mIsOpeningURL = false;
}

void SexyAppBase::URLOpenSucceeded(const std::string& theURL)
{
	(void)theURL;
	mIsOpeningURL = false;

	if (mShutdownOnURLOpen)
		Shutdown();
}

bool SexyAppBase::OpenURL(const std::string& theURL, bool shutdownOnOpen)
{
	if ((!mIsOpeningURL) || (theURL != mOpeningURL))
	{
		mShutdownOnURLOpen = shutdownOnOpen;
		mIsOpeningURL = true;
		mOpeningURL = theURL;
		mOpeningURLTime = SDL_GetTicks();

        /*
		if ((intptr_t) ShellExecuteA(NULL, "open", theURL.c_str(), NULL, NULL, SW_SHOWNORMAL) > 32)
		{
			return true;
		}
		else
		{
			URLOpenFailed(theURL);
			return false;
		}
        */
	}

	return true;
}

std::string SexyAppBase::GetProductVersion(const std::string& thePath)
{
	return "0";
	/*
	// Dynamically Load Version.dll
	typedef DWORD (APIENTRY *GetFileVersionInfoSizeFunc)(LPSTR lptstrFilename, LPDWORD lpdwHandle);
	typedef BOOL (APIENTRY *GetFileVersionInfoFunc)(LPSTR lptstrFilename, DWORD dwHandle, DWORD dwLen, LPVOID lpData);
	typedef BOOL (APIENTRY *VerQueryValueFunc)(const LPVOID pBlock, LPSTR lpSubBlock, LPVOID * lplpBuffer, PUINT puLen);

	static GetFileVersionInfoSizeFunc aGetFileVersionInfoSizeFunc = NULL;
	static GetFileVersionInfoFunc aGetFileVersionInfoFunc = NULL;
	static VerQueryValueFunc aVerQueryValueFunc = NULL;

	if (aGetFileVersionInfoSizeFunc==NULL)
	{
		aGetFileVersionInfoSizeFunc = (GetFileVersionInfoSizeFunc)GetProcAddress(gVersionDLL,"GetFileVersionInfoSizeA");
		aGetFileVersionInfoFunc = (GetFileVersionInfoFunc)GetProcAddress(gVersionDLL,"GetFileVersionInfoA");
		aVerQueryValueFunc = (VerQueryValueFunc)GetProcAddress(gVersionDLL,"VerQueryValueA");
	}

	// Get Product Version
	std::string aProductVersion;

	uint aSize = aGetFileVersionInfoSizeFunc((char*) thePath.c_str(), 0);
	if (aSize > 0)
	{
		uchar* aVersionBuffer = new uchar[aSize];
		aGetFileVersionInfoFunc((char*) thePath.c_str(), 0, aSize, aVersionBuffer);
		char* aBuffer;
		if (aVerQueryValueFunc(aVersionBuffer,
				  (char*)"\\StringFileInfo\\040904B0\\ProductVersion",
				  (void**) &aBuffer,
				  &aSize))
		{
			aProductVersion = aBuffer;
		}
		else if (aVerQueryValueFunc(aVersionBuffer,
				  (char*)"\\StringFileInfo\\040904E4\\ProductVersion",
				  (void**) &aBuffer,
				  &aSize))
		{
			aProductVersion = aBuffer;
		}

		delete[] aVersionBuffer;
	}

	return aProductVersion;
	*/
}

void SexyAppBase::WaitForLoadingThread()
{
    int ms = 20;
    while ((mLoadingThreadStarted) && (!mLoadingThreadCompleted))
        SDL_Delay(ms);
}

void SexyAppBase::SetCursorImage(int theCursorNum, Image* theImage)
{
	if ((theCursorNum >= 0) && (theCursorNum < NUM_CURSORS))
	{
		mCursorImages[theCursorNum] = theImage;
		EnforceCursor();
	}
}

double SexyAppBase::GetLoadingThreadProgress()
{
	if (mLoaded)
		return 1.0;
	if (!mLoadingThreadStarted)
		return 0.0;
	if (mNumLoadingThreadTasks == 0)
		return 0.0;
	return std::min(mCompletedLoadingThreadTasks / (double) mNumLoadingThreadTasks, 1.0);
}

bool SexyAppBase::RegistryWrite(const std::string& theValueName, uint32_t theType, const uchar* theValue, uint32_t theLength)
{
	if (mRegKey.length() == 0)
		return false;


	//HKEY aGameKey;

	std::string aKeyName = RemoveTrailingSlash("SOFTWARE\\" + mRegKey);
	std::string aValueName;

	int aSlashPos = (int) theValueName.rfind('\\');
	if (aSlashPos != -1)
	{
		aKeyName += "\\" + theValueName.substr(0, aSlashPos);
		aValueName = theValueName.substr(aSlashPos + 1);
	}
	else
	{
		aValueName = theValueName;
	}

	/*
	int aResult = RegOpenKeyExA(HKEY_CURRENT_USER, aKeyName.c_str(), 0, KEY_WRITE, &aGameKey);
	if (aResult != ERROR_SUCCESS)
	{
		uint32_t aDisp;
		aResult = RegCreateKeyExA(HKEY_CURRENT_USER, aKeyName.c_str(), 0, (char *)"Key", REG_OPTION_NON_VOLATILE,
			KEY_ALL_ACCESS, NULL, &aGameKey, &aDisp);
	}

	if (aResult != ERROR_SUCCESS)
	{
		return false;
	}

	RegSetValueExA(aGameKey, aValueName.c_str(), 0, theType, theValue, theLength);
	RegCloseKey(aGameKey);
	*/

	if (!regemu::RegistryWrite(aKeyName, aValueName, theType, theValue, theLength))
	{
		return false;
	}

	return true;
}

bool SexyAppBase::RegistryWriteString(const std::string& theValueName, const std::string& theString)
{
	return RegistryWrite(theValueName, regemu::REGEMU_SZ, (uchar*) theString.c_str(), theString.length());
}

bool SexyAppBase::RegistryWriteInteger(const std::string& theValueName, int theValue)
{
	return RegistryWrite(theValueName, regemu::REGEMU_DWORD, (uchar*) &theValue, sizeof(int));
}

bool SexyAppBase::RegistryWriteBoolean(const std::string& theValueName, bool theValue)
{
	int aValue = theValue ? 1 : 0;
	return RegistryWrite(theValueName, regemu::REGEMU_DWORD, (uchar*) &aValue, sizeof(int));
}

bool SexyAppBase::RegistryWriteData(const std::string& theValueName, const uchar* theValue, uint32_t theLength)
{
	return RegistryWrite(theValueName, regemu::REGEMU_BINARY, (uchar*) theValue, theLength);
}

void SexyAppBase::WriteToRegistry()
{
	RegistryWriteInteger("MusicVolume", (int) (mMusicVolume * 100));
	RegistryWriteInteger("SfxVolume", (int) (mSfxVolume * 100));
	RegistryWriteInteger("Muted", (mMuteCount - mAutoMuteCount > 0) ? 1 : 0);
	RegistryWriteInteger("ScreenMode", mIsWindowed ? 0 : 1);
	RegistryWriteInteger("PreferredX", mPreferredX);
	RegistryWriteInteger("PreferredY", mPreferredY);
	RegistryWriteInteger("CustomCursors", mCustomCursorsEnabled ? 1 : 0);
	RegistryWriteInteger("InProgress", 0);
	RegistryWriteBoolean("WaitForVSync", mWaitForVSync);
}

bool SexyAppBase::RegistryEraseKey(const SexyString& _theKeyName)
{
	std::string theKeyName = SexyStringToStringFast(_theKeyName);
	if (mRegKey.length() == 0)
		return false;
	
	std::string aKeyName = RemoveTrailingSlash("SOFTWARE\\" + mRegKey) + "\\" + theKeyName;

	if (!regemu::RegistryEraseKey(aKeyName))
	{
		return false;
	}

	return true;
}

void SexyAppBase::RegistryEraseValue(const SexyString& _theValueName)
{
	std::string theValueName = SexyStringToStringFast(_theValueName);
	if (mRegKey.length() == 0)
		return;

	//HKEY aGameKey;
	std::string aKeyName = RemoveTrailingSlash("SOFTWARE\\" + mRegKey);
	std::string aValueName;

	int aSlashPos = (int) theValueName.rfind('\\');
	if (aSlashPos != -1)
	{
		aKeyName += "\\" + theValueName.substr(0, aSlashPos);
		aValueName = theValueName.substr(aSlashPos + 1);
	}
	else
	{
		aValueName = theValueName;
	}

	/*
	int aResult = RegOpenKeyExA(HKEY_CURRENT_USER, aKeyName.c_str(), 0, KEY_WRITE, &aGameKey);
	if (aResult == ERROR_SUCCESS)
	{
		RegDeleteValueA(aGameKey, aValueName.c_str());
		RegCloseKey(aGameKey);
	}
	*/

	regemu::RegistryEraseValue(aKeyName, aValueName);
}

/*
bool SexyAppBase::RegistryGetSubKeys(const std::string& theKeyName, StringVector* theSubKeys)
{
	theSubKeys->clear();

	if (mRegKey.length() == 0)
		return false;

	if (mPlayingDemoBuffer)
	{
		if (mManualShutdown)
			return true;

		PrepareDemoCommand(true);
		mDemoNeedsCommand = true;

		DBG_ASSERTE(!mDemoIsShortCmd);
		DBG_ASSERTE(mDemoCmdNum == DEMO_REGISTRY_GETSUBKEYS);

		bool success = mDemoBuffer.ReadNumBits(1, false) != 0;
		if (!success)
			return false;

		int aNumKeys = mDemoBuffer.ReadLong();

		for (int i = 0; i < aNumKeys; i++)
			theSubKeys->push_back(mDemoBuffer.ReadString());

		return true;
	}
	else
	{
		HKEY aKey;

		std::string aKeyName = RemoveTrailingSlash(RemoveTrailingSlash("SOFTWARE\\" + mRegKey) + "\\" + theKeyName);
		int aResult = RegOpenKeyExA(HKEY_CURRENT_USER, aKeyName.c_str(), 0, KEY_READ, &aKey);

		if (aResult == ERROR_SUCCESS)
		{
			for (int anIdx = 0; ; anIdx++)
			{
				char aStr[1024];

				aResult = RegEnumKeyA(aKey, anIdx, aStr, 1024);
				if (aResult != ERROR_SUCCESS)
					break;

				theSubKeys->push_back(aStr);
			}

			RegCloseKey(aKey);

			if (mRecordingDemoBuffer)
			{
				WriteDemoTimingBlock();
				mDemoBuffer.WriteNumBits(0, 1);
				mDemoBuffer.WriteNumBits(DEMO_REGISTRY_GETSUBKEYS, 5);
				mDemoBuffer.WriteNumBits(1, 1); // success
				mDemoBuffer.WriteLong(theSubKeys->size());

				for (int i = 0; i < (int) theSubKeys->size(); i++)
					mDemoBuffer.WriteString((*theSubKeys)[i]);
			}

			return true;
		}
		else
		{
			if (mRecordingDemoBuffer)
			{
				WriteDemoTimingBlock();
				mDemoBuffer.WriteNumBits(0, 1);
				mDemoBuffer.WriteNumBits(DEMO_REGISTRY_GETSUBKEYS, 5);
				mDemoBuffer.WriteNumBits(0, 1); // failure
			}

			return false;
		}
	}
}
*/

bool SexyAppBase::RegistryRead(const std::string& theValueName, uint32_t* theType, uchar* theValue, uint32_t* theLength)
{
	return RegistryReadKey(theValueName, theType, theValue, theLength);
}

bool SexyAppBase::RegistryReadKey(const std::string& theValueName, uint32_t* theType, uchar* theValue, uint32_t* theLength)
{
	if (mRegKey.length() == 0)
		return false;
		
	std::string aKeyName = RemoveTrailingSlash("SOFTWARE\\" + mRegKey);
	std::string aValueName;

	int aSlashPos = (int) theValueName.rfind('\\');
	if (aSlashPos != -1)
	{
		aKeyName += "\\" + theValueName.substr(0, aSlashPos);
		aValueName = theValueName.substr(aSlashPos + 1);
	}
	else
	{
		aValueName = theValueName;
	}		

	if (regemu::RegistryRead(aKeyName, aValueName, (uint32_t*)theType, theValue, (uint32_t*)theLength))
	{
		return true;
	}
	
	return false;
}

// aStr isn't initialised lmao
bool SexyAppBase::RegistryReadString(const std::string& theKey, std::string* theString)
{
	char aStr[1024];

	uint32_t aType;
	uint32_t aLen = sizeof(aStr) - 1;
	if (!RegistryRead(theKey, &aType, (uchar*) aStr, &aLen))
		return false;

	if (aType != regemu::REGEMU_SZ)
		return false;

	aStr[aLen] = 0;

	*theString = aStr;
	return true;
}

bool SexyAppBase::RegistryReadInteger(const std::string& theKey, int* theValue)
{
	uint32_t aType;
	uint32_t aLong;
	uint32_t aLen = 4;
	if (!RegistryRead(theKey, &aType, (uchar*) &aLong, &aLen))
		return false;

	if (aType != regemu::REGEMU_DWORD)
		return false;

	*theValue = aLong;
	return true;
}

bool SexyAppBase::RegistryReadBoolean(const std::string& theKey, bool* theValue)
{
	int aValue;
	if (!RegistryReadInteger(theKey, &aValue))
		return false;

	*theValue = aValue != 0;
	return true;
}

bool SexyAppBase::RegistryReadData(const std::string& theKey, uchar* theValue, uint32_t* theLength)
{
	uint32_t aType;
	if (!RegistryRead(theKey, &aType, (uchar*) theValue, theLength))
		return false;

	if (aType != regemu::REGEMU_BINARY)
		return false;

	return true;
}

void SexyAppBase::ReadFromRegistry()
{
	mReadFromRegistry = true;
	mRegKey = SexyStringToString(GetString("RegistryKey", StringToSexyString(mRegKey)));

	if (mRegKey.length() == 0)
		return;

	regemu::SetRegFile("config.regemu");

	int anInt;
	if (RegistryReadInteger("MusicVolume", &anInt))
		mMusicVolume = anInt / 100.0;

	if (RegistryReadInteger("SfxVolume", &anInt))
		mSfxVolume = anInt / 100.0;

	if (RegistryReadInteger("Muted", &anInt))
		mMuteCount = anInt;

	if (RegistryReadInteger("ScreenMode", &anInt))
		mIsWindowed = anInt == 0;

	RegistryReadInteger("PreferredX", &mPreferredX);
	RegistryReadInteger("PreferredY", &mPreferredY);

	if (RegistryReadInteger("CustomCursors", &anInt))
		EnableCustomCursors(anInt != 0);

	RegistryReadBoolean("WaitForVSync", &mWaitForVSync);

	if (RegistryReadInteger("InProgress", &anInt))
		mLastShutdownWasGraceful = anInt == 0;

	RegistryWriteInteger("InProgress", 1);
}

bool SexyAppBase::WriteBytesToFile(const std::string& theFileName, const void *theData, unsigned long theDataLen)
{
	MkDir(GetFileDir(theFileName));
	FILE* aFP = fcaseopen(theFileName.c_str(), "w+b");

	if (aFP == NULL)
	{
		return false;
	}

	fwrite(theData, 1, theDataLen, aFP);
	fclose(aFP);

	if (mSexyCacheBuffers && mWriteToSexyCache)
	{
		GetFullPath(theFileName);
		/*
		unsigned char* aSetData = (unsigned char*)gSexyCache->AllocSetData(GetFullPath(theFileName), "Buffer", theDataLen + 1);
		if (aSetData)
		{
			*aSetData = 1;
			memcpy(aSetData, theData, theDataLen);
			gSexyCache->SetData(aSetData);
			gSexyCache->FreeSetData(aSetData);
			gSexyCache->SetFileDeps(GetFullPath(theFileName), "Buffer", GetFullPath(theFileName));
		}
		*/
	}

	return true;
}

bool SexyAppBase::WriteBufferToFile(const std::string& theFileName, const Buffer* theBuffer)
{
	return WriteBytesToFile(theFileName,theBuffer->GetDataPtr(),theBuffer->GetDataLen());
}

bool SexyAppBase::ReadBufferFromFile(const std::string& theFileName, Buffer* theBuffer)
{
	PFILE* aFP = p_fopen(theFileName.c_str(), "rb");

	if (aFP == NULL)
	{
		return false;
	}
	
	p_fseek(aFP, 0, SEEK_END);
	int aFileSize = p_ftell(aFP);
	p_fseek(aFP, 0, SEEK_SET);
	
	uchar* aData = new uchar[aFileSize];

	p_fread(aData, 1, aFileSize, aFP);
	p_fclose(aFP);

	theBuffer->Clear();
	theBuffer->SetData(aData, aFileSize);

	delete [] aData;

	return true;
}

bool SexyAppBase::FileExists(const std::string& theFileName)
{
	PFILE* aFP = p_fopen(theFileName.c_str(), "rb");

	if (aFP == NULL)		
		return false;		
	
	p_fclose(aFP);
	return true;
}

bool SexyAppBase::EraseFile(const std::string& theFileName)
{
	return remove(theFileName.c_str()) == 0;
}

void SexyAppBase::SEHOccured()
{
	SetMusicVolume(0);
	//::ShowWindow(mHWnd, SW_HIDE);
	mSEHOccured = true;
	EnforceCursor();
}

std::string SexyAppBase::GetGameSEHInfo()
{
	int aSecLoaded = (SDL_GetTicks() - mTimeLoaded) / 1000;

	char aTimeStr[16];
	sprintf(aTimeStr, "%02d:%02d:%02d", (aSecLoaded/60/60), (aSecLoaded/60)%60, aSecLoaded%60);

	char aThreadIdStr[16];
	sprintf(aThreadIdStr, "%lX", mPrimaryThreadId);

	std::string anInfoString =
		"Product: " + mProdName + "\r\n" +
		"Version: " + mProductVersion + "\r\n";

	anInfoString +=
		"Time Loaded: " + std::string(aTimeStr) + "\r\n"
		"Fullscreen: " + (mIsWindowed ? std::string("No") : std::string("Yes")) + "\r\n"
		"Primary ThreadId: " + aThreadIdStr + "\r\n";

	return anInfoString;
}


void SexyAppBase::GetSEHWebParams(DefinesMap*){}

void SexyAppBase::ShutdownHook()
{
}

void SexyAppBase::Shutdown()
{
	if ((mPrimaryThreadId != 0) && ((void*)SDL_GetThreadID != mPrimaryThreadId))
	{
		mLoadingFailed = true;
	}
	else if (!mShutdown)
	{
		mExitToTop = true;
		mShutdown = true;
		ShutdownHook();

		// Blah
		/*
		while (mCursorThreadRunning)
		{
			Sleep(10);
		}
		*/

		if (mMusicInterface != NULL)
			mMusicInterface->StopAllMusic();

		/*
		if ((!mIsPhysWindowed) && (mGLInterface != NULL) && (mDDInterface->mDD != NULL))
		{
			mDDInterface->mDD->RestoreDisplayMode();
		}

		if (mHWnd != NULL)
		{
			ShowWindow(mHWnd, SW_HIDE);
		}
		*/

		RestoreScreenResolution();

		if (mReadFromRegistry)
			WriteToRegistry();

		//ImageLib::CloseJPEG2000();
	}
}

void SexyAppBase::RestoreScreenResolution()
{
    /*
	if (mFullScreenWindow)
	{
		EnumWindows(ChangeDisplayWindowEnumProc,0); // get any windows that appeared while we were running
		ChangeDisplaySettings(NULL,0);
		EnumWindows(ChangeDisplayWindowEnumProc,1); // restore window pos
		mFullScreenWindow = false;
	}
    */
}

void SexyAppBase::DoExit(int theCode)
{
	RestoreScreenResolution();
	exit(theCode);
}

void SexyAppBase::UpdateFrames()
{
	mUpdateCount++;

	if (!mMinimized)
	{
		if (mWidgetManager->UpdateFrame())
			++mFPSDirtyCount;
	}

	mMusicInterface->Update();
	CleanSharedImages();
}

void SexyAppBase::DoUpdateFramesF(float theFrac)
{
	if ((mVSyncUpdates) && (!mMinimized))
		mWidgetManager->UpdateFrameF(theFrac);
}

bool SexyAppBase::DoUpdateFrames()
{
	SEXY_AUTO_PERF("SexyAppBase::DoUpdateFrames");

	if ((mLoadingThreadCompleted) && (!mLoaded))
	{
		//::SetThreadPriority(::GetCurrentThread(), THREAD_PRIORITY_NORMAL);
		mLoaded = true;
		mYieldMainThread = false;
		LoadingThreadCompleted();
	}

	UpdateFrames();
	return true;
}

bool gIsFailing = false;

void SexyAppBase::Redraw(Rect* theClipRect)
{
	SEXY_AUTO_PERF("SexyAppBase::Redraw");

	// Do mIsDrawing check because we could enter here at a bad time if any windows messages
	//  are processed during WidgetManager->Draw
	if ((mIsDrawing) || (mShutdown))
		return;


	static DWORD aRetryTick = 0;
	mGLInterface->Redraw(theClipRect);
	/*
	if (!mGLInterface->Redraw(theClipRect))
	{
		//gD3DInterfacePreDrawError = false; // this predraw error happens naturally when ddraw is failing
		if (!gIsFailing)
		{
			//gDebugStream << GetTickCount() << " Redraw failed!" << std::endl;
			gIsFailing = true;
		}

		WINDOWPLACEMENT aWindowPlacement;
		ZeroMemory(&aWindowPlacement, sizeof(aWindowPlacement));
		aWindowPlacement.length = sizeof(aWindowPlacement);
		::GetWindowPlacement(mHWnd, &aWindowPlacement);

		DWORD aTick = SDL_GetTicks();
		//if ((mActive || (aTick-aRetryTick>1000 && mIsPhysWindowed)) && (aWindowPlacement.showCmd != SW_SHOWMINIMIZED) && (!mMinimized))
		if ((mActive || (aTick-aRetryTick>1000 && mIsPhysWindowed)) && (!mMinimized))
		{
			aRetryTick = aTick;

			mWidgetManager->mImage = NULL;

			// Re-check resolution at this point, because we hit here when you change your resolution.

			if (((mWidth >= GetSystemMetrics(SM_CXFULLSCREEN)) || (mHeight >= GetSystemMetrics(SM_CYFULLSCREEN))) && (mIsWindowed))
			{
				if (mForceWindowed)
				{
					Popup(GetString("PLEASE_SET_COLOR_DEPTH", __S("Please set your desktop color depth to 16 bit.")));
					Shutdown();
					return;
				}
				mForceFullscreen = true;

				SwitchScreenMode(false);
				return;
			}


			int aResult = InitGLInterface();

			//gDebugStream << GetTickCount() << " ReInit..." << std::endl;

			if ((mIsWindowed) && (aResult == DDInterface::RESULT_INVALID_COLORDEPTH))
			{
				//gDebugStream << GetTickCount() << "ReInit Invalid Colordepth" << std::endl;
				if (!mActive) // don't switch to full screen if not active app
					return;

				SwitchScreenMode(false);
				mForceFullscreen = true;
				return;
			}
			else if (aResult == DDInterface::RESULT_3D_FAIL)
			{
				Set3DAcclerated(false);
				return;
			}
			else if (aResult != DDInterface::RESULT_OK)
			{
				//gDebugStream << GetTickCount() << " ReInit Failed" << std::endl;
				//Fail("Failed to initialize DirectDraw");
				//Sleep(1000);

				return;
			}
			if (!aResult) return;

			ReInitImages();

			mWidgetManager->mImage = mGLInterface->GetScreenImage();
			mWidgetManager->MarkAllDirty();

			mLastTime = SDL_GetTicks();
		}
	}
	else
	{
		if (gIsFailing)
		{
			//gDebugStream << GetTickCount() << " Redraw succeeded" << std::endl;
			gIsFailing = false;
			aRetryTick = 0;
		}
	}
	*/

	mFPSFlipCount++;
}

///////////////////////////// FPS Stuff
static PerfTimer gFPSTimer;
static int gFrameCount;
static int gFPSDisplay;
static bool gForceDisplay = false;
static void CalculateFPS()
{
	gFrameCount++;

	/*
	static SysFont aFont(gSexyAppBase,"Tahoma",8);
	if (gFPSImage==NULL)
	{
		gFPSImage = new GLImage(gSexyAppBase->mGLInterface);
		gFPSImage->Create(50,aFont.GetHeight()+4);
		gFPSImage->SetImageMode(false,false);
		gFPSImage->SetVolatile(true);
		gFPSImage->mPurgeBits = false;
		//gFPSImage->mWantDDSurface = true;
		gFPSImage->PurgeBits();
	}

	if (gFPSTimer.GetDuration() >= 1000 || gForceDisplay)
	{
		gFPSTimer.Stop();
		if (!gForceDisplay)
			gFPSDisplay = (int)(gFrameCount*1000/gFPSTimer.GetDuration() + 0.5f);
		else
		{
			gForceDisplay = false;
			gFPSDisplay = 0;
		}

		gFPSTimer.Start();
		gFrameCount = 0;

		Graphics aDrawG(gFPSImage);
		aDrawG.SetFont(&aFont);
		SexyString aFPS = StrFormat(__S("FPS: %d"), gFPSDisplay);
		aDrawG.SetColor(0x000000);
		aDrawG.FillRect(0,0,gFPSImage->GetWidth(),gFPSImage->GetHeight());
		aDrawG.SetColor(0xFFFFFF);
		aDrawG.DrawString(aFPS,2,aFont.GetAscent());
		//gFPSImage->mKeepBits = false;
		//gFPSImage->GenerateDDSurface();
		gFPSImage->mBitsChangedCount++;
	}
	*/
}

///////////////////////////// FPS Stuff to draw mouse coords
static void FPSDrawCoords(int theX, int theY)
{
	/*
	static SysFont aFont(gSexyAppBase,"Tahoma",8);
	if (gFPSImage==NULL)
	{
		gFPSImage = new GLImage(gSexyAppBase->mGLInterface);
		gFPSImage->Create(50,aFont.GetHeight()+4);
		gFPSImage->SetImageMode(false,false);
		gFPSImage->SetVolatile(true);
		gFPSImage->mPurgeBits = false;
		//gFPSImage->mWantDDSurface = true;
		gFPSImage->PurgeBits();
	}

	Graphics aDrawG(gFPSImage);
	aDrawG.SetFont(&aFont);
	SexyString aFPS = StrFormat(__S("%d,%d"),theX,theY);
	aDrawG.SetColor(0x000000);
	aDrawG.FillRect(0,0,gFPSImage->GetWidth(),gFPSImage->GetHeight());
	aDrawG.SetColor(0xFFFFFF);
	aDrawG.DrawString(aFPS,2,aFont.GetAscent());
	gFPSImage->mBitsChangedCount++;
	*/
}


bool SexyAppBase::DrawDirtyStuff()
{
	SEXY_AUTO_PERF("SexyAppBase::DrawDirtyStuff");
	MTAutoDisallowRand aDisallowRand;

	if (gIsFailing) // just try to reinit
	{
		Redraw(NULL);
		mHasPendingDraw = false;
		mLastDrawWasEmpty = true;
		return false;
	}

	if (mShowFPS)
	{
		switch(mShowFPSMode)
		{
			case FPS_ShowFPS: CalculateFPS(); break;
			case FPS_ShowCoords:
				if (mWidgetManager!=NULL)
					FPSDrawCoords(mWidgetManager->mLastMouseX, mWidgetManager->mLastMouseY);
				break;
		}

	}

	DWORD aStartTime = SDL_GetTicks();

	mIsDrawing = true;
	bool drewScreen = mWidgetManager->DrawScreen();
	mIsDrawing = false;

	if ((drewScreen || (aStartTime - mLastDrawTick >= 1000) || (mCustomCursorDirty)) &&
		((int) (aStartTime - mNextDrawTick) >= 0))
	{
		mLastDrawWasEmpty = false;

		mDrawCount++;

		DWORD aMidTime = SDL_GetTicks();

		mFPSCount++;
		mFPSTime += aMidTime - aStartTime;

		mDrawTime += aMidTime - aStartTime;

		if (mShowFPS)
		{
			Graphics g(mGLInterface->GetScreenImage());
			g.DrawImage(gFPSImage,mWidth-gFPSImage->GetWidth()-10,mHeight-gFPSImage->GetHeight()-10);

		}

		/*
		if (mWaitForVSync && mIsPhysWindowed && mSoftVSyncWait)
		{
			DWORD aTick = SDL_GetTicks();
			if (aTick-mLastDrawTick < mGLInterface->mMillisecondsPerFrame)
				Sleep(mDDInterface->mMillisecondsPerFrame - (aTick-mLastDrawTick));
		}
		*/

		DWORD aPreScreenBltTime = SDL_GetTicks();
		mLastDrawTick = aPreScreenBltTime;

		Redraw(NULL);

		// This is our one UpdateFTimeAcc if we are vsynched
		UpdateFTimeAcc();

		DWORD aEndTime = SDL_GetTicks();

		mScreenBltTime = aEndTime - aPreScreenBltTime;

#ifdef _DEBUG
		/*if (mFPSTime >= 5000) // Show FPS about every 5 seconds
		{
			uint32_t aTickNow = GetTickCount();

			OutputDebugString(StrFormat(__S("Theoretical FPS: %d\r\n"), (int) (mFPSCount * 1000 / mFPSTime)).c_str());
			OutputDebugString(StrFormat(__S("Actual      FPS: %d\r\n"), (mFPSFlipCount * 1000) / max((aTickNow - mFPSStartTick), 1)).c_str());
			OutputDebugString(StrFormat(__S("Dirty Rate     : %d\r\n"), (mFPSDirtyCount * 1000) / max((aTickNow - mFPSStartTick), 1)).c_str());

			mFPSTime = 0;
			mFPSCount = 0;
			mFPSFlipCount = 0;
			mFPSStartTick = aTickNow;
			mFPSDirtyCount = 0;
		}*/
#endif

		if ((mLoadingThreadStarted) && (!mLoadingThreadCompleted))
		{
			int aTotalTime = aEndTime - aStartTime;

			mNextDrawTick += 35 + std::max(aTotalTime, 15);

			if ((int) (aEndTime - mNextDrawTick) >= 0)
				mNextDrawTick = aEndTime;

			/*char aStr[256];
			sprintf(aStr, "Next Draw Time: %d\r\n", mNextDrawTick);
			OutputDebugString(aStr);*/
		}
		else
			mNextDrawTick = aEndTime;

		mHasPendingDraw = false;
		mCustomCursorDirty = false;

		return true;
	}
	else
	{
		mHasPendingDraw = false;
		mLastDrawWasEmpty = true;
		return false;
	}
}


void SexyAppBase::BeginPopup()
{
	/*
	if (!mIsPhysWindowed)
	{
		if (mDDInterface && mDDInterface->mDD)
		{
			mDDInterface->mDD->FlipToGDISurface();
			mNoDefer = true;
		}
	}
	*/
}

void SexyAppBase::EndPopup()
{
	if (!mIsPhysWindowed)
		mNoDefer = false;

	ClearUpdateBacklog();
	ClearKeysDown();

	if (mWidgetManager->mDownButtons)
	{
		mWidgetManager->DoMouseUps();
		//ReleaseCapture();
	}
}

int SexyAppBase::MsgBox(const std::string& theText, const std::string& theTitle, int theFlags)
{
//	if (mDDInterface && mDDInterface->mDD)
//		mDDInterface->mDD->FlipToGDISurface();
	/*
	if (IsScreenSaver())
	{
		LogScreenSaverError(theText);
		return IDOK;
	}
	*/

	BeginPopup();
	//int aResult = MessageBoxA(mHWnd, theText.c_str(), theTitle.c_str(), theFlags);
	printf("%s\n===\n%s\n", theTitle.c_str(), theText.c_str());


	EndPopup();

	return 0;
}

int SexyAppBase::MsgBox(const std::wstring& theText, const std::wstring& theTitle, int theFlags)
{
//	if (mDDInterface && mDDInterface->mDD)
//		mDDInterface->mDD->FlipToGDISurface();
	/*
	if (IsScreenSaver())
	{
		LogScreenSaverError(WStringToString(theText));
		return IDOK;
	}
	*/

	BeginPopup();
	//int aResult = MessageBoxW(mHWnd, theText.c_str(), theTitle.c_str(), theFlags);
	wprintf(L"%s\n===\n%s\n", theTitle.c_str(), theText.c_str());

#ifdef __SWITCH__
	std::wstring_convert<std::codecvt_utf8<wchar_t> > cv;
	ErrorApplicationConfig c;
	errorApplicationCreate(&c, cv.to_bytes(theTitle).c_str(), cv.to_bytes(theText).c_str());
	errorApplicationShow(&c);
#endif

	EndPopup();

	return 0;
}

void SexyAppBase::Popup(const std::string& theString)
{
	BeginPopup();
	if (!mShutdown)
		printf("FATAL ERROR\n===\n%s\n", theString.c_str());

#ifdef __SWITCH__
	ErrorApplicationConfig c;
	errorApplicationCreate(&c, "Fatal error", theString.c_str());
	errorApplicationShow(&c);
#endif

	EndPopup();
}

void SexyAppBase::Popup(const std::wstring& theString)
{
	BeginPopup();
	if (!mShutdown)
		wprintf(L"FATAL ERROR\n===\n%s\n", theString.c_str());

#ifdef __SWITCH__
	std::wstring_convert<std::codecvt_utf8<wchar_t> > cv;
	ErrorApplicationConfig c;
	errorApplicationCreate(&c, "Fatal error", cv.to_bytes(theString).c_str());
	errorApplicationShow(&c);
#endif

	EndPopup();
}

void SexyAppBase::SafeDeleteWidget(Widget* theWidget)
{
	WidgetSafeDeleteInfo aWidgetSafeDeleteInfo;
	aWidgetSafeDeleteInfo.mUpdateAppDepth = mUpdateAppDepth;
	aWidgetSafeDeleteInfo.mWidget = theWidget;
	mSafeDeleteList.push_back(aWidgetSafeDeleteInfo);
}

/*
BOOL CALLBACK EnumCloseThing2(HWND hwnd, LPARAM lParam)
{
	//CloseWindow(hwnd);
	char aClassName[256];
	if (GetClassNameA(hwnd, aClassName, 256) != 0)
	{
		if (strcmp(aClassName, "Internet Explorer_Server") == 0)
		{
			DestroyWindow(hwnd);
		}
		else
		{
			EnumChildWindows(hwnd, EnumCloseThing2, lParam);
		}
	}

	return TRUE;
}

BOOL CALLBACK EnumCloseThing(HWND hwnd, LPARAM lParam)
{
	//CloseWindow(hwnd);
	char aClassName[256];
	if (GetClassNameA(hwnd, aClassName, 256) != 0)
	{
		if (strcmp(aClassName, "AmWBC_WClass") == 0)
		{
			EnumChildWindows(hwnd, EnumCloseThing2, lParam);
		}
	}

	return TRUE;
}

static INT_PTR CALLBACK MarkerListDialogProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
	(void)lParam;
	switch (msg)
	{
		case WM_INITDIALOG:
		{
			HWND aListBox = GetDlgItem(hwnd,100);

			DWORD       dwExtent = 0;
			HDC         hDCListBox;
			HFONT       hFontOld, hFontNew;
			TEXTMETRIC  tm;
			RECT aRect;
			SIZE aSize;

			hDCListBox = GetDC(aListBox);
			hFontNew = (HFONT)SendMessage(aListBox, WM_GETFONT, 0, 0);
			hFontOld = (HFONT)SelectObject(hDCListBox, hFontNew);
			GetTextMetrics(hDCListBox, (LPTEXTMETRIC)&tm);
			GetClientRect(hwnd, &aRect);
			MoveWindow(aListBox,10,10,aRect.right-aRect.left-20,aRect.bottom-aRect.top-20,FALSE);
			for (SexyAppBase::DemoMarkerList::iterator anItr = gSexyAppBase->mDemoMarkerList.begin(); anItr != gSexyAppBase->mDemoMarkerList.end(); ++anItr)
			{
				if (anItr->second <= gSexyAppBase->mUpdateCount)
					continue;

				int aTotalSeconds = (gSexyAppBase->mDemoLength - anItr->second)*gSexyAppBase->mFrameTime/1000;
				int aSeconds = aTotalSeconds%60;
				int aMinutes = (aTotalSeconds/60)%60;
				int anHours = (aTotalSeconds/3600);

				SexyString aStr = StrFormat(__S("%s (%02d:%02d:%02d)"), anItr->first.c_str(),anHours,aMinutes,aSeconds);
				GetTextExtentPoint32(hDCListBox, aStr.c_str(), aStr.length(), &aSize);
				dwExtent = std::max (aSize.cx + tm.tmAveCharWidth, (LONG)dwExtent);
				SendMessage(aListBox, LB_SETHORIZONTALEXTENT, dwExtent, 0);
				LRESULT anIndex = SendMessage(aListBox, LB_ADDSTRING, 0, (LPARAM)aStr.c_str());
				SendMessage(aListBox, LB_SETITEMDATA, anIndex, anItr->second);
			}

			SelectObject(hDCListBox, hFontOld);
			ReleaseDC(aListBox, hDCListBox);

			return TRUE;
		}

		case WM_CLOSE:
			EndDialog(hwnd,0);
			return TRUE;

		case WM_COMMAND:
			if (HIWORD(wParam)==LBN_DBLCLK)
			{
				HWND aListBox = GetDlgItem(hwnd,100);

				int anIndex = SendMessage(aListBox,LB_GETCURSEL,0,0);
				if (anIndex >= 0)
				{
					int anUpdateTime = SendMessage(aListBox,LB_GETITEMDATA,anIndex,0);
					if (anUpdateTime > gSexyAppBase->mUpdateCount)
					{
						gSexyAppBase->mFastForwardToUpdateNum = anUpdateTime;
						EndDialog(hwnd,0);
					}
				}
				return TRUE;
			}
			break;

	}

	return FALSE;
}

static LPWORD lpdwAlign ( LPWORD lpIn)
{
    uint32_t ul;

    ul = (uint32_t)(intptr_t)lpIn;
    ul +=3;
    ul >>=2;
    ul <<=2;
    return (LPWORD)(intptr_t)ul;
}
*/


/*
static INT_PTR CALLBACK JumpToTimeDialogProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
	(void)lParam;
	switch (msg)
	{
		case WM_INITDIALOG:
		{
			HWND anEdit = GetDlgItem(hwnd,100);
			HKEY aGameKey;
			std::string aKeyName = RemoveTrailingSlash("SOFTWARE\\" + gSexyAppBase->mRegKey);
			if (RegOpenKeyExA(HKEY_CURRENT_USER, aKeyName.c_str(), 0, KEY_READ | KEY_WRITE, &aGameKey) == ERROR_SUCCESS)
			{
				char aBuf[1024];
				DWORD aLength = 1000;
				DWORD aType = REG_SZ;
				if (RegQueryValueExA(aGameKey, "DemoJumpTime", 0, &aType, (uchar*) aBuf, &aLength) == ERROR_SUCCESS)
				{
					aBuf[aLength] = 0;
					SetWindowTextA(anEdit,aBuf);
					SendMessage(anEdit,EM_SETSEL,0,-1);
				}
				RegCloseKey(aGameKey);
			}
			return TRUE;
		}
		break;

		case WM_CLOSE:
			EndDialog(hwnd,0);
			return TRUE;

		case WM_COMMAND:
			if (HIWORD(wParam)==BN_CLICKED)
			{
				if (LOWORD(wParam)==IDOK)
				{
					char aBuf[512];
					HWND anEdit = GetDlgItem(hwnd,100);
					GetWindowTextA(anEdit,aBuf,500);

					HKEY aGameKey;
					std::string aKeyName = RemoveTrailingSlash("SOFTWARE\\" + gSexyAppBase->mRegKey);
					if (RegOpenKeyExA(HKEY_CURRENT_USER, aKeyName.c_str(), 0, KEY_READ | KEY_WRITE, &aGameKey) == ERROR_SUCCESS)
					{
						RegSetValueExA(aGameKey, "DemoJumpTime", 0, REG_SZ, (const BYTE*)aBuf, strlen(aBuf)+1);
						RegCloseKey(aGameKey);
					}

					int aTime = 0;
					char *aPtr = strtok(aBuf,":");
					while (aPtr != NULL)
					{
						aTime *= 60;
						aTime += atoi(aPtr);
						aPtr = strtok(NULL,":");
					}
					aTime++;

					int aNumFrames = aTime*1000/gSexyAppBase->mFrameTime;
					gSexyAppBase->mFastForwardToUpdateNum = gSexyAppBase->mDemoLength - aNumFrames;


				}

				EndDialog(hwnd,0);
				return TRUE;
			}
			break;
	}

	return FALSE;
}
*/



static DWORD gPowerSaveTick = 0;

void SexyAppBase::HandleNotifyGameMessage(int theType)
{
	/*
	if (theType==0) // bring to front message
	{
		WINDOWPLACEMENT aWindowPlacement;
		aWindowPlacement.length = sizeof(WINDOWPLACEMENT);
		GetWindowPlacement(mHWnd, &aWindowPlacement);

		if (aWindowPlacement.showCmd == SW_SHOWMINIMIZED)
			ShowWindow(mHWnd, SW_RESTORE);

		::SetForegroundWindow(mHWnd);
	}
	*/
}

void SexyAppBase::RehupFocus()
{
	bool wantHasFocus = mActive && !mMinimized;

	if (wantHasFocus != mHasFocus)
	{
		mHasFocus = wantHasFocus;

		if (mHasFocus)
		{
			if (mMuteOnLostFocus)
				Unmute(true);

			mWidgetManager->GotFocus();
			GotFocus();
		}
		else
		{
			if (mMuteOnLostFocus)
				Mute(true);

			mWidgetManager->LostFocus();
			LostFocus();

			//ReleaseCapture();
			mWidgetManager->DoMouseUps();
		}
	}
}

void SexyAppBase::ClearKeysDown()
{
	if (mWidgetManager != NULL) // fix stuck alt-key problem
	{
		for (int aKeyNum = 0; aKeyNum < 0xFF; aKeyNum++)
			mWidgetManager->mKeyDown[aKeyNum] = false;
	}
	mCtrlDown = false;
	mAltDown = false;
}


int aNumBigMoveMessages = 0;
int aNumSmallMoveMessages = 0;
int aNumTimerMessages = 0;

// Required unused in release mode

void SexyAppBase::ShowMemoryUsage()
{
	/*
	DWORD aTotal = 0;
	DWORD aFree = 0;

	if (mDDInterface->mDD7 != NULL)
	{
		DDSCAPS2 aCaps;
		ZeroMemory(&aCaps,sizeof(aCaps));
		aCaps.dwCaps = DDSCAPS_VIDEOMEMORY;
		mDDInterface->mDD7->GetAvailableVidMem(&aCaps,&aTotal,&aFree);
	}

	MemoryImageSet::iterator anItr = mMemoryImageSet.begin();
	typedef std::pair<int,int> FormatUsage;
	typedef std::map<PixelFormat,FormatUsage> FormatMap;
	FormatMap aFormatMap;
	int aTextureMemory = 0;
	while (anItr != mMemoryImageSet.end())
	{
		MemoryImage* aMemoryImage = *anItr;
		if (aMemoryImage->mD3DData != NULL)
		{
			TextureData *aData = (TextureData*)aMemoryImage->mD3DData;
			aTextureMemory += aData->mTexMemSize;

			FormatUsage &aUsage = aFormatMap[aData->mPixelFormat];
			aUsage.first++;
			aUsage.second += aData->mTexMemSize;
		}

		++anItr;
	}

	std::string aStr;

	const char *aDesc;
	if (Is3DAccelerationRecommended())
		aDesc = "Recommended";
	else if (Is3DAccelerationSupported())
		aDesc = "Supported";
	else
		aDesc = "Unsupported";

	aStr += StrFormat("3D-Mode is %s (3D is %s on this system)\r\n\r\n",Is3DAccelerated()?"On":"Off",aDesc);

	aStr += StrFormat("Num Images: %d\r\n",(int)mMemoryImageSet.size());
	aStr += StrFormat("Num Sounds: %d\r\n",mSoundManager->GetNumSounds());
	aStr += StrFormat("Video Memory: %s/%s KB\r\n", SexyStringToString(CommaSeperate((aTotal-aFree)/1024)).c_str(), SexyStringToString(CommaSeperate(aTotal/1024)).c_str());
	aStr += StrFormat("Texture Memory: %s KB\r\n",CommaSeperate(aTextureMemory/1024).c_str());

	FormatUsage aUsage = aFormatMap[PixelFormat_A8R8G8B8];
	aStr += StrFormat("A8R8G8B8: %d - %s KB\r\n",aUsage.first,SexyStringToString(CommaSeperate(aUsage.second/1024)).c_str());
	aUsage = aFormatMap[PixelFormat_A4R4G4B4];
	aStr += StrFormat("A4R4G4B4: %d - %s KB\r\n",aUsage.first,SexyStringToString(CommaSeperate(aUsage.second/1024)).c_str());
	aUsage = aFormatMap[PixelFormat_R5G6B5];
	aStr += StrFormat("R5G6B5: %d - %s KB\r\n",aUsage.first,SexyStringToString(CommaSeperate(aUsage.second/1024)).c_str());
	aUsage = aFormatMap[PixelFormat_Palette8];
	aStr += StrFormat("Palette8: %d - %s KB\r\n",aUsage.first,SexyStringToString(CommaSeperate(aUsage.second/1024)).c_str());

	MsgBox(aStr,"Video Stats",MB_OK);
	mLastTime = SDL_GetTicks();
	*/
}

bool SexyAppBase::DebugKeyDown(int theKey)
{
	if ((theKey == 'R') && (mWidgetManager->mKeyDown[KEYCODE_MENU]))
	{
/*
#ifndef RELEASEFINAL
		if (ReparseModValues())
			PlaySoundA("c:\\windows\\media\\Windows XP Menu Command.wav", NULL, SND_ASYNC);
		else
		{
			for (int aKeyNum = 0; aKeyNum < 0xFF; aKeyNum++) // prevent alt from getting stuck
				mWidgetManager->mKeyDown[aKeyNum] = false;
		}
#endif
*/
	}
	/*
	else if (theKey == VK_F3)
	{
		if(mWidgetManager->mKeyDown[KEYCODE_SHIFT])
		{
			mShowFPS = true;
			if (++mShowFPSMode >= Num_FPS_Types)
				mShowFPSMode = 0;
		}
		else
			mShowFPS = !mShowFPS;

		mWidgetManager->MarkAllDirty();

		if (mShowFPS)
		{
			gFPSTimer.Start();
			gFrameCount = 0;
			gFPSDisplay = 0;
			gForceDisplay = true;
		}
	}
	else if (theKey == VK_F8)
	{
		if(mWidgetManager->mKeyDown[KEYCODE_SHIFT])
		{
			Set3DAcclerated(!Is3DAccelerated());

			char aBuf[512];
			sprintf(aBuf,"3D-Mode: %s",Is3DAccelerated()?"ON":"OFF");
			MsgBox(aBuf,"Mode Switch",MB_OK);
			mLastTime = SDL_GetTicks();
		}
		else
			ShowMemoryUsage();

		return true;
	}
	else if (theKey == VK_F10)
	{
#ifndef RELEASEFINAL
		if (mWidgetManager->mKeyDown[KEYCODE_CONTROL])
		{
			if (mUpdateMultiplier==0.25)
				mUpdateMultiplier = 1.0;
			else
				mUpdateMultiplier = 0.25;
		}
		else if(mWidgetManager->mKeyDown[KEYCODE_SHIFT])
		{
			mStepMode = 0;
			ClearUpdateBacklog();
		}
		else
			mStepMode = 1;
#endif

		return true;
	}
	else if (theKey == VK_F11)
	{
		if (mWidgetManager->mKeyDown[KEYCODE_SHIFT])
			DumpProgramInfo();
		else
			TakeScreenshot();

		return true;
	}
	else if (theKey == VK_F2)
	{
		bool isPerfOn = !SexyPerf::IsPerfOn();
		if (isPerfOn)
		{
//			MsgBox("Perf Monitoring: ON", "Perf Monitoring", MB_OK);
			ClearUpdateBacklog();
			SexyPerf::BeginPerf();
		}
		else
		{
			SexyPerf::EndPerf();
			MsgBox(SexyPerf::GetResults().c_str(), "Perf Results", MB_OK);
			ClearUpdateBacklog();
		}
	}
	else
		return false;
	*/

	return false;
}

/*
bool SexyAppBase::DebugKeyDownAsync(int theKey, bool ctrlDown, bool altDown)
{
	return false;
}
*/

void SexyAppBase::CloseRequestAsync()
{
}

void SexyAppBase::Done3dTesting()
{
}

// return file name that you want to upload
std::string	SexyAppBase::NotifyCrashHook()
{
	return "";
}

void SexyAppBase::DeleteNativeImageData()
{
	MemoryImageSet::iterator anItr = mMemoryImageSet.begin();
	while (anItr != mMemoryImageSet.end())
	{
		MemoryImage* aMemoryImage = *anItr;
		aMemoryImage->DeleteNativeData();
		++anItr;
	}
}

void SexyAppBase::DeleteExtraImageData()
{
	AutoCrit anAutoCrit(mGLInterface->mCritSect);
	MemoryImageSet::iterator anItr = mMemoryImageSet.begin();
	while (anItr != mMemoryImageSet.end())
	{
		MemoryImage* aMemoryImage = *anItr;
		aMemoryImage->DeleteExtraBuffers();
		++anItr;
	}
}

void SexyAppBase::ReInitImages()
{
	MemoryImageSet::iterator anItr = mMemoryImageSet.begin();
	while (anItr != mMemoryImageSet.end())
	{
		MemoryImage* aMemoryImage = *anItr;
		aMemoryImage->ReInit();
		++anItr;
	}
}


void SexyAppBase::LoadingThreadProc()
{
}

void SexyAppBase::LoadingThreadCompleted()
{
}

int SexyAppBase::LoadingThreadProcStub(void *theArg)
{
	SexyAppBase* aSexyApp = (SexyAppBase*) theArg;

	aSexyApp->LoadingThreadProc();

	printf("Resource Loading Time: %d\r\n", (SDL_GetTicks() - aSexyApp->mTimeLoaded));

	aSexyApp->mLoadingThreadCompleted = true;
	return 0;
}

void SexyAppBase::StartLoadingThread()
{
    if (!mLoadingThreadStarted)
    {
        mYieldMainThread = true;
        mLoadingThreadStarted = true;

        // 创建线程并分离
        SDL_Thread* thread = SDL_CreateThread(LoadingThreadProcStub, "LoadingThread", this);
        if (thread) {
            SDL_DetachThread(thread);
        }
    }
}

void SexyAppBase::CursorThreadProc()
{
	/*
	::SetThreadPriority(::GetCurrentThread(), THREAD_PRIORITY_ABOVE_NORMAL);

	POINT aLastCursorPos = {0, 0};
	int aLastDrawCount = 0;

	while (!mShutdown)
	{
//		if (mProcessInTimer)
//			PostMessage(mHWnd,WM_TIMER,101,0);

		POINT aCursorPos;

		if (mPlayingDemoBuffer)
		{
			aCursorPos.x = mLastDemoMouseX;
			aCursorPos.y = mLastDemoMouseY;
		}
		else
		{
			::GetCursorPos(&aCursorPos);
			::ScreenToClient(mHWnd, &aCursorPos);
		}

		if (aLastDrawCount != mDrawCount)
		{
			// We did a draw so we may have committed a pending mNextCursorX/Y
			aLastCursorPos.x = mGLInterface->mCursorX;
			aLastCursorPos.y = mGLInterface->mCursorY;
		}

		if ((aCursorPos.x != aLastCursorPos.x) ||
			(aCursorPos.y != aLastCursorPos.y))
		{
			DWORD aTimeNow = SDL_GetTicks();
			if (aTimeNow - mNextDrawTick > mGLInterface->mMillisecondsPerFrame + 5)
			{
				// Do the special drawing if we are rendering at less than full framerate
				mGLInterface->SetCursorPos(aCursorPos.x, aCursorPos.y);
				aLastCursorPos = aCursorPos;
			}
			else
			{
				// Set them up to get assigned in the next screen redraw
				mGLInterface->mNextCursorX = aCursorPos.x;
				mGLInterface->mNextCursorY = aCursorPos.y;
			}
		}

		Sleep(10);
	}

	mCursorThreadRunning = false;
	*/
}

void SexyAppBase::CursorThreadProcStub(void *theArg)
{
	/*
	CoInitialize(NULL);
	SexyAppBase* aSexyApp = (SexyAppBase*) theArg;
	aSexyApp->CursorThreadProc();
	*/
}

void SexyAppBase::StartCursorThread()
{
	/*
	if (!mCursorThreadRunning)
	{
		mCursorThreadRunning = true;
		::SetThreadPriority(::GetCurrentThread(), THREAD_PRIORITY_ABOVE_NORMAL);
		_beginthread(CursorThreadProcStub, 0, this);
	}
	*/
}

void SexyAppBase::SwitchScreenMode(bool wantWindowed, bool is3d, bool force)
{
	if (mForceFullscreen)
		wantWindowed = false;

	if (mIsWindowed == wantWindowed && !force)
	{
		Set3DAcclerated(is3d);
		return;
	}

	// Set 3d acceleration preference
	Set3DAcclerated(is3d,false);

	// Always make the app windowed when playing demos, in order to
	//  make it easier to track down bugs.  We place this after the
	//  sanity check just so things get re-initialized and stuff
	//if (mPlayingDemoBuffer)
	//	wantWindowed = true;

	mIsWindowed = wantWindowed;

	MakeWindow();

	// We need to do this check to allow IE to get focus instead of
	//  stealing it away for ourselves
	if (!mIsOpeningURL)
	{
		//::ShowWindow(mHWnd, SW_NORMAL);
		//::SetForegroundWindow(mHWnd);
	}
	else
	{
		// Show it but don't activate it
		//::ShowWindow(mHWnd, SW_SHOWNOACTIVATE);
	}

	if (mSoundManager!=NULL)
	{
		//mSoundManager->SetCooperativeWindow(mHWnd);
	}

	mLastTime = SDL_GetTicks();
}

void SexyAppBase::SwitchScreenMode(bool wantWindowed)
{
	SwitchScreenMode(wantWindowed, Is3DAccelerated());
}

void SexyAppBase::SwitchScreenMode()
{
	SwitchScreenMode(mIsWindowed, Is3DAccelerated(), true);
}

void SexyAppBase::SetAlphaDisabled(bool isDisabled)
{
	if (mAlphaDisabled != isDisabled)
	{
		mAlphaDisabled = isDisabled;
		mGLInterface->SetVideoOnlyDraw(mAlphaDisabled);
		mWidgetManager->mImage = mGLInterface->GetScreenImage();
		mWidgetManager->MarkAllDirty();
	}
}

void SexyAppBase::EnforceCursor()
{
	// Handle error state or mouse not in window
	if ((mSEHOccured) || (!mMouseIn))
	{
		SDL_Cursor* aCursor = SDL_CreateSystemCursor(SDL_SYSTEM_CURSOR_ARROW);
		if (aCursor)
		{
			SDL_SetCursor(aCursor);
			SDL_ShowCursor(SDL_ENABLE);
		}
		mSysCursor = true;
		return;
	}

	// Check if we should use custom cursor image (game-drawn cursor)
	if ((mCursorImages[mCursorNum] != NULL) &&
		((mCustomCursorsEnabled) || (mCursorNum == CURSOR_CUSTOM)))
	{
		// Using custom cursor, hide system cursor so game can draw its own
		SDL_ShowCursor(SDL_DISABLE);
		mSysCursor = false;
		return;
	}

	// Use SDL system cursor based on cursor type
	SDL_SystemCursor aSystemCursor = SDL_SYSTEM_CURSOR_ARROW;
	bool shouldShowCursor = true;

	switch (mCursorNum)
	{
	case CURSOR_POINTER:
		aSystemCursor = SDL_SYSTEM_CURSOR_ARROW;
		break;
	case CURSOR_HAND:
		aSystemCursor = SDL_SYSTEM_CURSOR_HAND;
		break;
	case CURSOR_TEXT:
		aSystemCursor = SDL_SYSTEM_CURSOR_IBEAM;
		break;
	case CURSOR_DRAGGING:
		aSystemCursor = SDL_SYSTEM_CURSOR_SIZEALL;
		break;
	case CURSOR_CIRCLE_SLASH:
		aSystemCursor = SDL_SYSTEM_CURSOR_NO;
		break;
	case CURSOR_SIZEALL:
		aSystemCursor = SDL_SYSTEM_CURSOR_SIZEALL;
		break;
	case CURSOR_SIZENESW:
		aSystemCursor = SDL_SYSTEM_CURSOR_SIZENESW;
		break;
	case CURSOR_SIZENS:
		aSystemCursor = SDL_SYSTEM_CURSOR_SIZENS;
		break;
	case CURSOR_SIZENWSE:
		aSystemCursor = SDL_SYSTEM_CURSOR_SIZENWSE;
		break;
	case CURSOR_SIZEWE:
		aSystemCursor = SDL_SYSTEM_CURSOR_SIZEWE;
		break;
	case CURSOR_WAIT:
		aSystemCursor = SDL_SYSTEM_CURSOR_WAIT;
		break;
	case CURSOR_CUSTOM:
	case CURSOR_NONE:
		SDL_ShowCursor(SDL_DISABLE);
		mSysCursor = false;
		return;
	default:
		aSystemCursor = SDL_SYSTEM_CURSOR_ARROW;
		break;
	}

	// Set the system cursor
	SDL_Cursor* aCursor = SDL_CreateSystemCursor(aSystemCursor);
	if (aCursor)
	{
		SDL_SetCursor(aCursor);
		if (shouldShowCursor)
		{
			SDL_ShowCursor(SDL_ENABLE);
		}
		mSysCursor = true;
	}
}

void SexyAppBase::ProcessSafeDeleteList()
{
	MTAutoDisallowRand aDisallowRand;

	WidgetSafeDeleteList::iterator anItr = mSafeDeleteList.begin();
	while (anItr != mSafeDeleteList.end())
	{
		WidgetSafeDeleteInfo* aWidgetSafeDeleteInfo = &(*anItr);
		if (mUpdateAppDepth <= aWidgetSafeDeleteInfo->mUpdateAppDepth)
		{
			delete aWidgetSafeDeleteInfo->mWidget;
			anItr = mSafeDeleteList.erase(anItr);
		}
		else
			++anItr;
	}
}

void SexyAppBase::UpdateFTimeAcc()
{
	DWORD aCurTime = SDL_GetTicks();

	if (mLastTimeCheck != 0)
	{
		int aDeltaTime = aCurTime - mLastTimeCheck;

		mUpdateFTimeAcc = std::min(mUpdateFTimeAcc + aDeltaTime, 200.0);

		if (mRelaxUpdateBacklogCount > 0)
			mRelaxUpdateBacklogCount = std::max(mRelaxUpdateBacklogCount - aDeltaTime, 0);
	}

	mLastTimeCheck = aCurTime;
}

//int aNumCalls = 0;
//DWORD aLastCheck = 0;

bool SexyAppBase::Process(bool allowSleep)
{
	/*DWORD aTimeNow = GetTickCount();
	if (aTimeNow - aLastCheck >= 10000)
	{
		OutputDebugString(StrFormat(__S("FUpdates: %d\n"), aNumCalls).c_str());
		aLastCheck = aTimeNow;
		aNumCalls = 0;
	}*/

	if (mLoadingFailed)
		Shutdown();

	bool isVSynched = (mVSyncUpdates) && (!mLastDrawWasEmpty) && (!mVSyncBroken) &&
		((!mIsPhysWindowed) || (mIsPhysWindowed && mWaitForVSync && !mSoftVSyncWait));
	double aFrameFTime;
	double anUpdatesPerUpdateF;

	if (mVSyncUpdates)
	{
		aFrameFTime = (1000.0 / mSyncRefreshRate) / mUpdateMultiplier;
		anUpdatesPerUpdateF = (float) (1000.0 / (mFrameTime * mSyncRefreshRate));
	}
	else
	{
		aFrameFTime = mFrameTime / mUpdateMultiplier;
		anUpdatesPerUpdateF = 1.0;
	}

	// Make sure we're not paused
	if ((!mPaused) && (mUpdateMultiplier > 0))
	{
		uint32_t aStartTime = SDL_GetTicks();

		// uint32_t aCurTime = aStartTime; // Unused
		int aCumSleepTime = 0;

		// When we are VSynching, only calculate this FTimeAcc right after drawing

		if (!isVSynched)
			UpdateFTimeAcc();

		// mNonDrawCount is used to make sure we draw the screen at least
		// 10 times per second, even if it means we have to slow down
		// the updates to make it draw 10 times per second in "game time"

		bool didUpdate = false;

		if (mUpdateAppState == UPDATESTATE_PROCESS_1)
		{
			if ((++mNonDrawCount < (int) ceil(10*mUpdateMultiplier)) || (!mLoaded))
			{
				bool doUpdate = false;

				if (isVSynched)
				{
					// Synch'ed to vertical refresh, so update as soon as possible after draw
					doUpdate = (!mHasPendingDraw) || (mUpdateFTimeAcc >= (int) (aFrameFTime * 0.75));
				}
				else if (mUpdateFTimeAcc >= aFrameFTime)
				{
					doUpdate = true;
				}

				if (doUpdate)
				{
					// Do VSyncBroken test.  This test fails if we're in fullscreen and
					// "don't vsync" has been forced in Advanced settings up Display Properties
					if (mUpdateMultiplier == 1.0)
					{
						mVSyncBrokenTestUpdates++;
						if (mVSyncBrokenTestUpdates >= (DWORD) ((1000+mFrameTime-1)/mFrameTime))
						{
							// It has to be running 33% fast to be "broken" (25% = 1/0.800)
							if (aStartTime - mVSyncBrokenTestStartTick <= 800)
							{
								// The test has to fail 3 times in a row before we decide that
								//  vsync is broken overall
								mVSyncBrokenCount++;
								if (mVSyncBrokenCount >= 3)
									mVSyncBroken = true;
							}
							else
								mVSyncBrokenCount = 0;

							mVSyncBrokenTestStartTick = aStartTime;
							mVSyncBrokenTestUpdates = 0;
						}
					}

					bool hadRealUpdate = DoUpdateFrames();
					if (hadRealUpdate)
						mUpdateAppState = UPDATESTATE_PROCESS_2;

					mHasPendingDraw = true;
					didUpdate = true;
				}
			}
		}
		else if (mUpdateAppState == UPDATESTATE_PROCESS_2)
		{
			mUpdateAppState = UPDATESTATE_PROCESS_DONE;

			mPendingUpdatesAcc += anUpdatesPerUpdateF;
			mPendingUpdatesAcc -= 1.0;
			ProcessSafeDeleteList();

			// Process any extra updates
			while (mPendingUpdatesAcc >= 1.0)
			{
				++mNonDrawCount;
				bool hasRealUpdate = DoUpdateFrames();
				DBG_ASSERTE(hasRealUpdate);

				if (!hasRealUpdate)
					break;

				ProcessSafeDeleteList();
				mPendingUpdatesAcc -= 1.0;
			}

			//aNumCalls++;
			DoUpdateFramesF((float) anUpdatesPerUpdateF);
			ProcessSafeDeleteList();

			// Don't let mUpdateFTimeAcc dip below 0
			//  Subtract an extra 0.2ms, because sometimes refresh rates have some
			//  fractional component that gets truncated, and it's better to take off
			//  too much to keep our timing tending toward occuring right after
			//  redraws
			if (isVSynched)
				mUpdateFTimeAcc = std::max(mUpdateFTimeAcc - aFrameFTime - 0.2f, 0.0);
			else
				mUpdateFTimeAcc -= aFrameFTime;

			if (mRelaxUpdateBacklogCount > 0)
				mUpdateFTimeAcc = 0;

			didUpdate = true;
		}

		if (!didUpdate)
		{
			mUpdateAppState = UPDATESTATE_PROCESS_DONE;

			mNonDrawCount = 0;

			if (mHasPendingDraw)
			{
				DrawDirtyStuff();
			}
			else
			{
				// Let us take into account the time it took to draw dirty stuff
				int aTimeToNextFrame = (int) (aFrameFTime - mUpdateFTimeAcc);
				if (aTimeToNextFrame > 0)
				{
					if (!allowSleep)
						return false;

					// Wait till next processing cycle
					++mSleepCount;

                    SDL_Delay(aTimeToNextFrame);

                    aCumSleepTime += aTimeToNextFrame;
				}
			}
		}

		if (mYieldMainThread)
		{
			// This is to make sure that the title screen doesn't take up any more than
			// 1/3 of the processor time

			uint32_t anEndTime = SDL_GetTicks();
			int anElapsedTime = (anEndTime - aStartTime) - aCumSleepTime;
			int aLoadingYieldSleepTime = std::min(250, (anElapsedTime * 2) - aCumSleepTime);

			if (aLoadingYieldSleepTime >= 0)
			{
				if (!allowSleep)
					return false;
                SDL_Delay(aLoadingYieldSleepTime);
			}
		}
	}

	ProcessSafeDeleteList();
	return true;
}

void SexyAppBase::DoMainLoop()
{
	while (!mShutdown)
	{
		if (mExitToTop)
			mExitToTop = false;
		UpdateApp();
	}
}

bool SexyAppBase::UpdateAppStep(bool* updated)
{
	if (updated != NULL)
		*updated = false;

	if (mExitToTop)
		return false;

	if (mUpdateAppState == UPDATESTATE_PROCESS_DONE)
		mUpdateAppState = UPDATESTATE_MESSAGES;

	mUpdateAppDepth++;

	// We update in two stages to avoid doing a Process if our loop termination
	//  condition has already been met by processing windows messages
	if (mUpdateAppState == UPDATESTATE_MESSAGES)
	{
		/*
		MSG msg;
		while ((PeekMessage(&msg, NULL, 0, 0, PM_REMOVE)) && (!mShutdown))
		{
			TranslateMessage(&msg);
			DispatchMessage(&msg);
		}
		*/

		if (!ProcessDeferredMessages(true))
		{
			mUpdateAppState = UPDATESTATE_PROCESS_1;
		}
	}
	else
	{
		// Process changes state by itself
		if (mStepMode)
		{
			if (mStepMode==2)
			{
                SDL_Delay(mFrameTime);
				mUpdateAppState = UPDATESTATE_PROCESS_DONE; // skip actual update until next step
			}
			else
			{
				mStepMode = 2;
				DoUpdateFrames();
				DoUpdateFramesF(1.0f);
				DrawDirtyStuff();
			}
		}
		else
		{
			int anOldUpdateCnt = mUpdateCount;
			Process();
			if (updated != NULL)
				*updated = mUpdateCount != anOldUpdateCnt;
		}
	}

	mUpdateAppDepth--;

	return true;
}

bool SexyAppBase::UpdateApp()
{
	bool updated;
	for (;;)
	{
		if (!UpdateAppStep(&updated))
			return false;
		if (updated)
			return true;
	}
}

int SexyAppBase::InitGLInterface()
{
    // 预初始化钩子
    PreGLInterfaceInitHook();

    // 删除之前的图像数据
    DeleteNativeImageData();

    // 确保GLInterface已正确创建
    if (mGLInterface == nullptr)
    {
        std::cerr << "mGLInterface is not initialized." << std::endl;
        return -1; // 返回错误代码，表示初始化失败
    }

    // 调用GLInterface的初始化
    int aResult = mGLInterface->Init(mIsPhysWindowed);
    if (aResult < 0)
    {
        std::cerr << "Failed to initialize GLInterface." << std::endl;
        return aResult; // 返回GLInterface初始化错误码
    }


    mScreenBounds.mX = (mWidth - mGLInterface->mWidth) / 2;
    mScreenBounds.mY = (mHeight - mGLInterface->mHeight) / 2;

    mScreenBounds.mWidth = mGLInterface->mWidth;
    mScreenBounds.mHeight = mGLInterface->mHeight;

    // 调整小部件管理器的大小
    mWidgetManager->Resize(mScreenBounds, mGLInterface->mPresentationRect);

    // 后初始化钩子
    PostGLInterfaceInitHook();

    return aResult; // 返回初始化结果
}


void SexyAppBase::PreTerminate()
{
}

void SexyAppBase::Start()
{
	if (mShutdown)
		return;

	StartCursorThread();

	if (mAutoStartLoadingThread)
		StartLoadingThread();

	//::ShowWindow(mHWnd, SW_SHOW);
	//::SetFocus(mHWnd);

	//timeBeginPeriod(1);

	//int aCount = 0; // unused
	//int aSleepCount = 0; // unused

	DWORD aStartTime = SDL_GetTicks();

	mRunning = true;
	mLastTime = aStartTime;
	mLastUserInputTick = aStartTime;
	mLastTimerTime = aStartTime;

	DoMainLoop();
	ProcessSafeDeleteList();

	mRunning = false;

	WaitForLoadingThread();

	printf("Seconds       = %g\r\n", (SDL_GetTicks() - aStartTime) / 1000.0);
	//printf("Count         = %d\r\n", aCount);
	printf("Sleep Count   = %d\r\n", mSleepCount);
	printf("Update Count  = %d\r\n", mUpdateCount);
	printf("Draw Count    = %d\r\n", mDrawCount);
	printf("Draw Time     = %d\r\n", mDrawTime);
	printf("Screen Blt    = %d\r\n", mScreenBltTime);
	if (mDrawTime+mScreenBltTime > 0)
	{
		printf("Avg FPS       = %d\r\n", (mDrawCount*1000)/(mDrawTime+mScreenBltTime));
	}

	//timeEndPeriod(1);

	PreTerminate();

	WriteToRegistry();
}

/*
bool SexyAppBase::CheckSignature(const Buffer& theBuffer, const std::string& theFileName)
{
	(void)theBuffer;(void)theFileName;
	// Add your own signature checking code here
	return false;
}
*/

bool SexyAppBase::LoadProperties(const std::string& theFileName, bool required, bool checkSig)
{
	Buffer aBuffer;
	if (!ReadBufferFromFile(theFileName, &aBuffer))
	{
		if (!required)
			return true;
		else
		{
			Popup(GetString("UNABLE_OPEN_PROPERTIES", __S("Unable to open properties file ")) + StringToSexyString(theFileName));
			return false;
		}
	}
	if (checkSig)
	{
		//if (!CheckSignature(aBuffer, theFileName))
		//{
			//Popup(GetString("PROPERTIES_SIG_FAILED", __S("Signature check failed on ")) + StringToSexyString(theFileName + "'"));
			//return false;
		//}
	}

	PropertiesParser aPropertiesParser(this);

	// Load required language-file properties
		if (!aPropertiesParser.ParsePropertiesBuffer(aBuffer))
		{
			Popup(aPropertiesParser.GetErrorText());
			return false;
		}
		else
			return true;
}

bool SexyAppBase::LoadProperties()
{
	// Load required language-file properties
	return LoadProperties("properties/default.xml", true, false);
}

void SexyAppBase::LoadResourceManifest()
{
	if (!mResourceManager->ParseResourcesFile("properties/resources.xml"))
		ShowResourceError(true);
}

void SexyAppBase::ShowResourceError(bool doExit)
{
	Popup(mResourceManager->GetErrorText());
	if (doExit)
		DoExit(0);
}

bool SexyAppBase::GetBoolean(const std::string& theId)
{
	StringBoolMap::iterator anItr = mBoolProperties.find(theId);
	DBG_ASSERTE(anItr != mBoolProperties.end());

	if (anItr != mBoolProperties.end())
		return anItr->second;
	else
		return false;
}

bool SexyAppBase::GetBoolean(const std::string& theId, bool theDefault)
{
	StringBoolMap::iterator anItr = mBoolProperties.find(theId);

	if (anItr != mBoolProperties.end())
		return anItr->second;
	else
		return theDefault;
}

int SexyAppBase::GetInteger(const std::string& theId)
{
	StringIntMap::iterator anItr = mIntProperties.find(theId);
	DBG_ASSERTE(anItr != mIntProperties.end());

	if (anItr != mIntProperties.end())
		return anItr->second;
	else
		return false;
}

int SexyAppBase::GetInteger(const std::string& theId, int theDefault)
{
	StringIntMap::iterator anItr = mIntProperties.find(theId);

	if (anItr != mIntProperties.end())
		return anItr->second;
	else
		return theDefault;
}

double SexyAppBase::GetDouble(const std::string& theId)
{
	StringDoubleMap::iterator anItr = mDoubleProperties.find(theId);
	DBG_ASSERTE(anItr != mDoubleProperties.end());

	if (anItr != mDoubleProperties.end())
		return anItr->second;
	else
		return false;
}

double SexyAppBase::GetDouble(const std::string& theId, double theDefault)
{
	StringDoubleMap::iterator anItr = mDoubleProperties.find(theId);

	if (anItr != mDoubleProperties.end())
		return anItr->second;
	else
		return theDefault;
}

SexyString SexyAppBase::GetString(const std::string& theId)
{
	StringWStringMap::iterator anItr = mStringProperties.find(theId);
	DBG_ASSERTE(anItr != mStringProperties.end());

	if (anItr != mStringProperties.end())
		return WStringToSexyString(anItr->second);
	else
		return __S("");
}

SexyString SexyAppBase::GetString(const std::string& theId, const SexyString& theDefault)
{
	StringWStringMap::iterator anItr = mStringProperties.find(theId);

	if (anItr != mStringProperties.end())
		return WStringToSexyString(anItr->second);
	else
		return theDefault;
}

StringVector SexyAppBase::GetStringVector(const std::string& theId)
{
	StringStringVectorMap::iterator anItr = mStringVectorProperties.find(theId);
	DBG_ASSERTE(anItr != mStringVectorProperties.end());

	if (anItr != mStringVectorProperties.end())
		return anItr->second;
	else
		return StringVector();
}

void SexyAppBase::SetString(const std::string& theId, const std::wstring& theValue)
{
	std::pair<StringWStringMap::iterator, bool> aPair = mStringProperties.insert(StringWStringMap::value_type(theId, theValue));
	if (!aPair.second) // Found it, change value
		aPair.first->second = theValue;
}


void SexyAppBase::SetBoolean(const std::string& theId, bool theValue)
{
	std::pair<StringBoolMap::iterator, bool> aPair = mBoolProperties.insert(StringBoolMap::value_type(theId, theValue));
	if (!aPair.second) // Found it, change value
		aPair.first->second = theValue;
}

void SexyAppBase::SetInteger(const std::string& theId, int theValue)
{
	std::pair<StringIntMap::iterator, bool> aPair = mIntProperties.insert(StringIntMap::value_type(theId, theValue));
	if (!aPair.second) // Found it, change value
		aPair.first->second = theValue;
}

void SexyAppBase::SetDouble(const std::string& theId, double theValue)
{
	std::pair<StringDoubleMap::iterator, bool> aPair = mDoubleProperties.insert(StringDoubleMap::value_type(theId, theValue));
	if (!aPair.second) // Found it, change value
		aPair.first->second = theValue;
}


void SexyAppBase::PreDisplayHook()
{
}

void SexyAppBase::PreGLInterfaceInitHook()
{
}

void SexyAppBase::PostGLInterfaceInitHook()
{
}

bool SexyAppBase::ChangeDirHook(const char *theIntendedPath)
{
	(void)theIntendedPath;
	return false;
}

MusicInterface* SexyAppBase::CreateMusicInterface()
{
	if (mNoSoundNeeded)
		return new DummyMusicInterface();
	else
		return new BassMusicInterface(nullptr);
}

void SexyAppBase::InitPropertiesHook()
{
}

void SexyAppBase::InitHook()
{
}

void SexyAppBase::Init()
{
	mPrimaryThreadId = (void*)SDL_ThreadID;

	if (mShutdown)
		return;

	/*
	if (gDDrawDLL==NULL || gDSoundDLL==NULL)
	{
		MessageBox(NULL,
						GetString("APP_REQUIRES_DIRECTX", __S("This application requires DirectX to run.  You can get DirectX at http://www.microsoft.com/directx")).c_str(),
						GetString("YOU_NEED_DIRECTX", __S("You need DirectX")).c_str(),
						MB_OK | MB_ICONERROR);
		DoExit(0);
	}
	*/

	InitPropertiesHook();
	ReadFromRegistry();

	/*
	if (CheckForVista())
	{
		HMODULE aMod;
		SHGetFolderPathFunc aFunc = (SHGetFolderPathFunc)GetSHGetFolderPath("shell32.dll", &aMod);
		if (aFunc == NULL || aMod == NULL)
			// SHGetFolderPathFunc is shadowed!
			// SHGetFolderPathFunc aFunc = (SHGetFolderPathFunc)GetSHGetFolderPath("shfolder.dll", &aMod);
			aFunc = (SHGetFolderPathFunc)GetSHGetFolderPath("shfolder.dll", &aMod);

		if (aMod != NULL)
		{
			char aPath[MAX_PATH];
			aFunc(NULL, CSIDL_COMMON_APPDATA, NULL, SHGFP_TYPE_CURRENT, aPath);

			std::string aDataPath = RemoveTrailingSlash(aPath) + "/" + mFullCompanyName + "/" + mProdName;
			SetAppDataFolder(aDataPath + "/");
			//MkDir(aDataPath);
			//AllowAllAccess(aDataPath);
			if (mDemoFileName.length() < 2)
			{
				mDemoFileName = GetAppDataFolder() + mDemoFileName;
			}

			FreeLibrary(aMod);
		}
	}
	*/



	//if(gHInstance==NULL)
		//gHInstance = (HINSTANCE)GetModuleHandle(NULL);

	// Change directory
	if (!ChangeDirHook(mChangeDirTo.c_str()))
		chdir(mChangeDirTo.c_str());

	char aPath[512];
	getcwd(aPath, 512);
	strcat(aPath, "/savedata/");
	SetAppDataFolder(aPath);


    //gPakInterface->AddPakFile("main.pak", 0); // 设置 main.pak 的优先级为 99


// 假设 gPakInterface 和 GetPakFolder()、MkDir() 已经定义好
    char aPakPath[512];
    getcwd(aPakPath, sizeof(aPakPath));
    strcat(aPakPath, "/paks/");
    SetPakFolder(aPakPath);

    if (std::filesystem::exists(GetPakFolder())) {
        std::vector<std::string> pakList; // 存储 pak_list.txt 中的文件名
        std::ifstream pakListFile("paks/pak_list.txt"); // 打开 pak_list.txt 文件

        if (pakListFile.is_open()) {
            std::string line;
            // 读取每一行并检查文件是否存在
            while (std::getline(pakListFile, line)) {
                if (std::filesystem::exists(line)) {
                    pakList.push_back(line); // 只添加存在的文件
                }
            }
            pakListFile.close();
        }

        std::unordered_set<std::string> pakListSet(pakList.begin(), pakList.end()); // 使用集合快速查找
        std::unordered_set<std::string> addedPakFiles; // 存储已经添加的文件路径

        std::reverse(pakList.begin(), pakList.end());
        int priority = 0;

        // 首先，遍历 paks/ 文件夹中的所有文件，添加未在 pak_list.txt 中且尚未添加的 .pak 文件
        for (const auto &entry : std::filesystem::directory_iterator(GetPakFolder())) {
            // 检查是否为常规文件且扩展名为 .pak
            if (entry.is_regular_file() && entry.path().extension() == ".pak") {
                // 获取相对于根目录的路径
                std::string pakFilePath = std::filesystem::relative(entry.path(), mChangeDirTo).string();
                std::replace(pakFilePath.begin(), pakFilePath.end(), '\\', '/');

                // 确保该文件不在 pak_list 中且尚未添加
                if (pakListSet.find(pakFilePath) == pakListSet.end() && addedPakFiles.insert(pakFilePath).second) {
                    // 添加文件到接口并增加优先级
                    gPakInterface->AddPakFile(pakFilePath, priority++); // 直接使用当前优先级
                }
            }
        }

       // 然后，遍历 pak_list 中的文件，添加已经存在的 .pak 文件
        for (const auto &pakFileName : pakList) {
            if (addedPakFiles.insert(pakFileName).second) { // 检查是否已经添加过
                gPakInterface->AddPakFile(pakFileName, priority); // 使用相对路径添加文件
                priority++; // 增加优先级
            }
        }

        // 更新 pak_list.txt
        std::ofstream outputPakListFile("paks/pak_list.txt", std::ios::out | std::ios::trunc); // 打开文件进行写入
        if (outputPakListFile.is_open()) {
            // 写入已添加的 PAK 文件
            for (const auto& pakFile : addedPakFiles) {
                outputPakListFile << pakFile << std::endl; // 写入每个添加的 PAK 文件
            }
            outputPakListFile.close(); // 关闭文件
        }

    } else {
        MkDir(GetPakFolder());
    }


    // Create a message we can use to talk to ourselves inter-process
	//mNotifyGameMessage = RegisterWindowMessage((__S("Notify") + StringToSexyString(mProdName)).c_str());

	// Create a globally unique mutex
	/*
	mMutex = CreateMutex(NULL, TRUE, (StringToSexyString(mProdName) + __S("Mutex")).c_str());
	if (::GetLastError() == ERROR_ALREADY_EXISTS)
		HandleGameAlreadyRunning();
	*/

	mRandSeed = SDL_GetTicks();
	SRand(mRandSeed);


	srand(SDL_GetTicks());

	mIsWideWindow = false;

	// Let app do something before showing window, or switching to fullscreen mode
	// NOTE: Moved call to PreDisplayHook above mIsWindowed and GetSystemsMetrics
	// checks because the checks below use values that could change in PreDisplayHook.
	// PreDisplayHook must call mWidgetManager->Resize if it changes mWidth or mHeight.
	PreDisplayHook();

	mWidgetManager->Resize(Rect(0, 0, mWidth, mHeight), Rect(0, 0, mWidth, mHeight));

	/*
	// Check to see if we CAN run windowed or not...
	if (mIsWindowed && !mFullScreenWindow)
	{
		// How can we be windowed if our screen isn't even big enough?
		if ((mWidth >= GetSystemMetrics(SM_CXFULLSCREEN)) ||
			(mHeight >= GetSystemMetrics(SM_CYFULLSCREEN)))
		{
			mIsWindowed = false;
			mForceFullscreen = true;
		}
	}

	if (mFullScreenWindow) // change resoultion using ChangeDisplaySettings
	{
		EnumWindows(ChangeDisplayWindowEnumProc,0); // record window pos
		DEVMODE dm;
		EnumDisplaySettings(NULL, ENUM_CURRENT_SETTINGS, &dm );

		// Switch resolutions
		if (dm.dmPelsWidth!=(unsigned int)mWidth || dm.dmPelsHeight!=(unsigned int)mHeight || (dm.dmBitsPerPel!=16 && dm.dmBitsPerPel!=32))
		{
			dm.dmPelsWidth = mWidth;
			dm.dmPelsHeight = mHeight;
			dm.dmFields = DM_PELSWIDTH | DM_PELSHEIGHT | DM_DISPLAYFREQUENCY;

			if (dm.dmBitsPerPel!=16 && dm.dmBitsPerPel!=32) // handle 24-bit/256 color case
			{
				dm.dmBitsPerPel = 16;
				dm.dmFields |= DM_BITSPERPEL;
			}

			if (ChangeDisplaySettings(&dm,CDS_FULLSCREEN)!=DISP_CHANGE_SUCCESSFUL)
			{
				mFullScreenWindow = false;
				mIsWindowed = false;
			}
		}
	}
	*/

	MakeWindow();

	if (mSoundManager == NULL)
		mSoundManager = new BassSoundManager(nullptr);

	SetSfxVolume(mSfxVolume);

	mMusicInterface = CreateMusicInterface();

	SetMusicVolume(mMusicVolume);


	InitHook();

	InitInput();

	mInitialized = true;
}

void SexyAppBase::HandleGameAlreadyRunning()
{
	if(mOnlyAllowOneCopyToRun)
	{
		/*
		// Notify the other window and then shut ourselves down
		if (mNotifyGameMessage != 0)
			PostMessage(HWND_BROADCAST, mNotifyGameMessage, 0, 0);
		*/

		DoExit(0);
	}
}

void SexyAppBase::CopyToClipboard(const std::string& theString)
{
	/*
	HGLOBAL				aGlobalHandle;
	char*				theData;
	WCHAR*				theWData;

	if (OpenClipboard(mHWnd))
	{
		EmptyClipboard();

		aGlobalHandle = GlobalAlloc(GMEM_MOVEABLE | GMEM_DDESHARE, theString.length()+1);
		theData = (char*) GlobalLock(aGlobalHandle);
		strcpy(theData, theString.c_str());
		GlobalUnlock(aGlobalHandle);
		SetClipboardData(CF_TEXT, aGlobalHandle);
		SetClipboardData(CF_OEMTEXT, aGlobalHandle);
		SetClipboardData(CF_LOCALE, aGlobalHandle);

		int aSize = MultiByteToWideChar(CP_ACP, MB_PRECOMPOSED, theString.c_str(), theString.length(), NULL, 0);
		aGlobalHandle = GlobalAlloc(GMEM_MOVEABLE | GMEM_DDESHARE, (aSize + 1) * sizeof(WCHAR));
		theWData = (WCHAR*) GlobalLock(aGlobalHandle);
		MultiByteToWideChar(CP_ACP, MB_PRECOMPOSED, theString.c_str(), theString.length(), theWData, aSize);
		theWData[aSize] = '\0';
		GlobalUnlock(aGlobalHandle);
		SetClipboardData(CF_UNICODETEXT, aGlobalHandle);

		CloseClipboard();
	}
	*/
}

std::string	SexyAppBase::GetClipboard()
{
	/*
	HGLOBAL				aGlobalHandle;
	std::string			aString;

	if (!mPlayingDemoBuffer)
	{
		if (OpenClipboard(mHWnd))
		{
			aGlobalHandle = GetClipboardData(CF_TEXT);
			if (aGlobalHandle != NULL)
			{
				char* theData = (char*) GlobalLock(aGlobalHandle);
				if (theData != NULL)
				{
					aString = theData;
					GlobalUnlock(aGlobalHandle);
				}
			}

			CloseClipboard();
		}
	}

	DemoSyncString(&aString);

	return aString;
	*/
	return "";
}

void SexyAppBase::SetCursor(int theCursorNum)
{
	mCursorNum = theCursorNum;
	EnforceCursor();
}

int SexyAppBase::GetCursor()
{
	return mCursorNum;
}

void SexyAppBase::EnableCustomCursors(bool enabled)
{
	mCustomCursorsEnabled = enabled;
	EnforceCursor();
}

Sexy::GLImage* SexyAppBase::GetImage(const std::string& theFileName, bool commitBits)
{
	ImageLib::Image* aLoadedImage = ImageLib::GetImage(theFileName, true);

	if (aLoadedImage == NULL)
		return NULL;

	GLImage* anImage = new GLImage(mGLInterface);
	anImage->mFilePath = theFileName;
	anImage->SetBits(aLoadedImage->GetBits(), aLoadedImage->GetWidth(), aLoadedImage->GetHeight(), commitBits);
	anImage->mFilePath = theFileName;
	delete aLoadedImage;

	return anImage;
}

Sexy::GLImage* SexyAppBase::CreateCrossfadeImage(Sexy::Image* theImage1, const Rect& theRect1, Sexy::Image* theImage2, const Rect& theRect2, double theFadeFactor)
{
	MemoryImage* aMemoryImage1 = dynamic_cast<MemoryImage*>(theImage1);
	MemoryImage* aMemoryImage2 = dynamic_cast<MemoryImage*>(theImage2);

	if ((aMemoryImage1 == NULL) || (aMemoryImage2 == NULL))
		return NULL;

	if ((theRect1.mX < 0) || (theRect1.mY < 0) ||
		(theRect1.mX + theRect1.mWidth > theImage1->GetWidth()) ||
		(theRect1.mY + theRect1.mHeight > theImage1->GetHeight()))
	{
		DBG_ASSERTE("Crossfade Rect1 out of bounds");
		return NULL;
	}

	if ((theRect2.mX < 0) || (theRect2.mY < 0) ||
		(theRect2.mX + theRect2.mWidth > theImage2->GetWidth()) ||
		(theRect2.mY + theRect2.mHeight > theImage2->GetHeight()))
	{
		DBG_ASSERTE("Crossfade Rect2 out of bounds");
		return NULL;
	}

	int aWidth = theRect1.mWidth;
	int aHeight = theRect1.mHeight;

	GLImage* anImage = new GLImage(mGLInterface);
	anImage->Create(aWidth, aHeight);

	uint32_t* aDestBits = anImage->GetBits();
	uint32_t* aSrcBits1 = aMemoryImage1->GetBits();
	uint32_t* aSrcBits2 = aMemoryImage2->GetBits();

	int aSrc1Width = aMemoryImage1->GetWidth();
	int aSrc2Width = aMemoryImage2->GetWidth();
	uint32_t aMult = (int) (theFadeFactor*256);
	uint32_t aOMM = (256 - aMult);

	for (int y = 0; y < aHeight; y++)
	{
		uint32_t* s1 = &aSrcBits1[(y+theRect1.mY)*aSrc1Width+theRect1.mX];
		uint32_t* s2 = &aSrcBits2[(y+theRect2.mY)*aSrc2Width+theRect2.mX];
		uint32_t* d = &aDestBits[y*aWidth];

		for (int x = 0; x < aWidth; x++)
		{
			uint32_t p1 = *s1++;
			uint32_t p2 = *s2++;

			//p1 = 0;
			//p2 = 0xFFFFFFFF;

			*d++ =
				((((p1 & 0x000000FF)*aOMM + (p2 & 0x000000FF)*aMult)>>8) & 0x000000FF) |
				((((p1 & 0x0000FF00)*aOMM + (p2 & 0x0000FF00)*aMult)>>8) & 0x0000FF00) |
				((((p1 & 0x00FF0000)*aOMM + (p2 & 0x00FF0000)*aMult)>>8) & 0x00FF0000) |
				((((p1 >> 24)*aOMM + (p2 >> 24)*aMult)<<16) & 0xFF000000);
		}
	}

	anImage->BitsChanged();

	return anImage;
}

void SexyAppBase::ColorizeImage(Image* theImage, const Color& theColor)
{
	MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);

	if (aSrcMemoryImage == NULL)
		return;

	uint32_t* aBits;
	int aNumColors;

	if (aSrcMemoryImage->mColorTable == NULL)
	{
		aBits = aSrcMemoryImage->GetBits();
		aNumColors = theImage->GetWidth()*theImage->GetHeight();
	}
	else
	{
		aBits = aSrcMemoryImage->mColorTable;
		aNumColors = 256;
	}

	if ((theColor.mAlpha <= 255) && (theColor.mRed <= 255) &&
		(theColor.mGreen <= 255) && (theColor.mBlue <= 255))
	{
		for (int i = 0; i < aNumColors; i++)
		{
			uint32_t aColor = aBits[i];

			aBits[i] =
				((((aColor & 0xFF000000) >> 8) * theColor.mAlpha) & 0xFF000000) |
				((((aColor & 0x00FF0000) * theColor.mRed) >> 8) & 0x00FF0000) |
				((((aColor & 0x0000FF00) * theColor.mGreen) >> 8) & 0x0000FF00)|
				((((aColor & 0x000000FF) * theColor.mBlue) >> 8) & 0x000000FF);
		}
	}
	else
	{
		for (int i = 0; i < aNumColors; i++)
		{
			uint32_t aColor = aBits[i];

			int aAlpha = ((aColor >> 24) * theColor.mAlpha) / 255;
			int aRed = (((aColor >> 16) & 0xFF) * theColor.mRed) / 255;
			int aGreen = (((aColor >> 8) & 0xFF) * theColor.mGreen) / 255;
			int aBlue = ((aColor & 0xFF) * theColor.mBlue) / 255;

			if (aAlpha > 255)
				aAlpha = 255;
			if (aRed > 255)
				aRed = 255;
			if (aGreen > 255)
				aGreen = 255;
			if (aBlue > 255)
				aBlue = 255;

			aBits[i] = (aAlpha << 24) | (aRed << 16) | (aGreen << 8) | (aBlue);
		}
	}

	aSrcMemoryImage->BitsChanged();
}

GLImage* SexyAppBase::CreateColorizedImage(Image* theImage, const Color& theColor)
{
	MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);

	if (aSrcMemoryImage == NULL)
		return NULL;

	GLImage* anImage = new GLImage(mGLInterface);

	anImage->Create(theImage->GetWidth(), theImage->GetHeight());

	uint32_t* aSrcBits;
	uint32_t* aDestBits;
	int aNumColors;

	if (aSrcMemoryImage->mColorTable == NULL)
	{
		aSrcBits = aSrcMemoryImage->GetBits();
		aDestBits = anImage->GetBits();
		aNumColors = theImage->GetWidth()*theImage->GetHeight();
	}
	else
	{
		aSrcBits = aSrcMemoryImage->mColorTable;
		aDestBits = anImage->mColorTable = new uint32_t[256];
		aNumColors = 256;

		anImage->mColorIndices = new uchar[anImage->mWidth*theImage->mHeight];
		memcpy(anImage->mColorIndices, aSrcMemoryImage->mColorIndices, anImage->mWidth*theImage->mHeight);
	}

	if ((theColor.mAlpha <= 255) && (theColor.mRed <= 255) &&
		(theColor.mGreen <= 255) && (theColor.mBlue <= 255))
	{
		for (int i = 0; i < aNumColors; i++)
		{
			uint32_t aColor = aSrcBits[i];

			aDestBits[i] =
				((((aColor & 0xFF000000) >> 8) * theColor.mAlpha) & 0xFF000000) |
				((((aColor & 0x00FF0000) * theColor.mRed) >> 8) & 0x00FF0000) |
				((((aColor & 0x0000FF00) * theColor.mGreen) >> 8) & 0x0000FF00)|
				((((aColor & 0x000000FF) * theColor.mBlue) >> 8) & 0x000000FF);
		}
	}
	else
	{
		for (int i = 0; i < aNumColors; i++)
		{
			uint32_t aColor = aSrcBits[i];

			int aAlpha = ((aColor >> 24) * theColor.mAlpha) / 255;
			int aRed = (((aColor >> 16) & 0xFF) * theColor.mRed) / 255;
			int aGreen = (((aColor >> 8) & 0xFF) * theColor.mGreen) / 255;
			int aBlue = ((aColor & 0xFF) * theColor.mBlue) / 255;

			if (aAlpha > 255)
				aAlpha = 255;
			if (aRed > 255)
				aRed = 255;
			if (aGreen > 255)
				aGreen = 255;
			if (aBlue > 255)
				aBlue = 255;

			aDestBits[i] = (aAlpha << 24) | (aRed << 16) | (aGreen << 8) | (aBlue);
		}
	}

	anImage->BitsChanged();

	return anImage;
}

GLImage* SexyAppBase::CopyImage(Image* theImage, const Rect& theRect)
{
	GLImage* anImage = new GLImage(mGLInterface);

	anImage->Create(theRect.mWidth, theRect.mHeight);

	Graphics g(anImage);
	g.DrawImage(theImage, -theRect.mX, -theRect.mY);

	anImage->CopyAttributes(theImage);

	return anImage;
}

GLImage* SexyAppBase::CopyImage(Image* theImage)
{
	return CopyImage(theImage, Rect(0, 0, theImage->GetWidth(), theImage->GetHeight()));
}

void SexyAppBase::MirrorImage(Image* theImage)
{
	MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);

	uint32_t* aSrcBits = aSrcMemoryImage->GetBits();

	int aPhysSrcWidth = aSrcMemoryImage->mWidth;
	for (int y = 0; y < aSrcMemoryImage->mHeight; y++)
	{
		uint32_t* aLeftBits = aSrcBits + (y * aPhysSrcWidth);
		uint32_t* aRightBits = aLeftBits + (aPhysSrcWidth - 1);

		for (int x = 0; x < (aPhysSrcWidth >> 1); x++)
		{
			uint32_t aSwap = *aLeftBits;

			*(aLeftBits++) = *aRightBits;
			*(aRightBits--) = aSwap;
		}
	}

	aSrcMemoryImage->BitsChanged();
}

void SexyAppBase::FlipImage(Image* theImage)
{
	MemoryImage* aSrcMemoryImage = dynamic_cast<MemoryImage*>(theImage);

	uint32_t* aSrcBits = aSrcMemoryImage->GetBits();

	int aPhysSrcHeight = aSrcMemoryImage->mHeight;
	int aPhysSrcWidth = aSrcMemoryImage->mWidth;
	for (int x = 0; x < aPhysSrcWidth; x++)
	{
		uint32_t* aTopBits    = aSrcBits + x;
		uint32_t* aBottomBits = aTopBits + (aPhysSrcWidth * (aPhysSrcHeight - 1));

		for (int y = 0; y < (aPhysSrcHeight >> 1); y++)
		{
			uint32_t aSwap = *aTopBits;

			*aTopBits = *aBottomBits;
			aTopBits += aPhysSrcWidth;
			*aBottomBits = aSwap;
			aBottomBits -= aPhysSrcWidth;
		}
	}

	aSrcMemoryImage->BitsChanged();
}

void SexyAppBase::RotateImageHue(Sexy::MemoryImage *theImage, int theDelta)
{
	while (theDelta < 0)
		theDelta += 256;

	int aSize = theImage->mWidth * theImage->mHeight;
	uint32_t *aPtr = theImage->GetBits();
	for (int i=0; i<aSize; i++)
	{
		uint32_t aPixel = *aPtr;
		int alpha = aPixel&0xff000000;
		int r = (aPixel>>16)&0xff;
		int g = (aPixel>>8) &0xff;
		int b = aPixel&0xff;

		int maxval = std::max(r, std::max(g, b));
		int minval = std::min(r, std::min(g, b));
		int h = 0;
		int s = 0;
		int l = (minval+maxval)/2;
		int delta = maxval - minval;

		if (delta != 0)
		{
			s = (delta * 256) / ((l <= 128) ? (minval + maxval) : (512 - maxval - minval));

			if (r == maxval)
				h = (g == minval ? 1280 + (((maxval-b) * 256) / delta) :  256 - (((maxval - g) * 256) / delta));
			else if (g == maxval)
				h = (b == minval ?  256 + (((maxval-r) * 256) / delta) :  768 - (((maxval - b) * 256) / delta));
			else
				h = (r == minval ?  768 + (((maxval-g) * 256) / delta) : 1280 - (((maxval - r) * 256) / delta));

			h /= 6;
		}

		h += theDelta;
		if (h >= 256)
			h -= 256;

		double v= (l < 128) ? (l * (255+s))/255 :
				(l+s-l*s/255);

		int y = (int) (2*l-v);

		int aColorDiv = (6 * h) / 256;
		int x = (int)(y+(v-y)*((h - (aColorDiv * 256 / 6)) * 6)/255);
		if (x > 255)
			x = 255;

		int z = (int) (v-(v-y)*((h - (aColorDiv * 256 / 6)) * 6)/255);
		if (z < 0)
			z = 0;

		switch (aColorDiv)
		{
			case 0: r = (int) v; g = x; b = y; break;
			case 1: r = z; g= (int) v; b = y; break;
			case 2: r = y; g= (int) v; b = x; break;
			case 3: r = y; g = z; b = (int) v; break;
			case 4: r = x; g = y; b = (int) v; break;
			case 5: r = (int) v; g = y; b = z; break;
			default: r = (int) v; g = x; b = y; break;
		}

		*aPtr++ = alpha | (r<<16) | (g << 8) | (b);

	}

	theImage->BitsChanged();
}

uint32_t SexyAppBase::HSLToRGB(int h, int s, int l)
{
	int r;
	int g;
	int b;

	double v= (l < 128) ? (l * (255+s))/255 :
			(l+s-l*s/255);

	int y = (int) (2*l-v);

	int aColorDiv = (6 * h) / 256;
	int x = (int)(y+(v-y)*((h - (aColorDiv * 256 / 6)) * 6)/255);
	if (x > 255)
		x = 255;

	int z = (int) (v-(v-y)*((h - (aColorDiv * 256 / 6)) * 6)/255);
	if (z < 0)
		z = 0;

	switch (aColorDiv)
	{
		case 0: r = (int) v; g = x; b = y; break;
		case 1: r = z; g= (int) v; b = y; break;
		case 2: r = y; g= (int) v; b = x; break;
		case 3: r = y; g = z; b = (int) v; break;
		case 4: r = x; g = y; b = (int) v; break;
		case 5: r = (int) v; g = y; b = z; break;
		default: r = (int) v; g = x; b = y; break;
	}

	return 0xFF000000 | (r << 16) | (g << 8) | (b);
}

uint32_t SexyAppBase::RGBToHSL(int r, int g, int b)
{
	int maxval = std::max(r, std::max(g, b));
	int minval = std::min(r, std::min(g, b));
	int hue = 0;
	int saturation = 0;
	int luminosity = (minval+maxval)/2;
	int delta = maxval - minval;

	if (delta != 0)
	{
		saturation = (delta * 256) / ((luminosity <= 128) ? (minval + maxval) : (512 - maxval - minval));

		if (r == maxval)
			hue = (g == minval ? 1280 + (((maxval-b) * 256) / delta) :  256 - (((maxval - g) * 256) / delta));
		else if (g == maxval)
			hue = (b == minval ?  256 + (((maxval-r) * 256) / delta) :  768 - (((maxval - b) * 256) / delta));
		else
			hue = (r == minval ?  768 + (((maxval-g) * 256) / delta) : 1280 - (((maxval - r) * 256) / delta));

		hue /= 6;
	}

	return 0xFF000000 | (hue) | (saturation << 8) | (luminosity << 16);
}

void SexyAppBase::HSLToRGB(const uint32_t* theSource, uint32_t* theDest, int theSize)
{
	for (int i = 0; i < theSize; i++)
	{
		uint32_t src = theSource[i];
		theDest[i] = (src & 0xFF000000) | (HSLToRGB((src & 0xFF), (src >> 8) & 0xFF, (src >> 16) & 0xFF) & 0x00FFFFFF);
	}
}

void SexyAppBase::RGBToHSL(const uint32_t* theSource, uint32_t* theDest, int theSize)
{
	for (int i = 0; i < theSize; i++)
	{
		uint32_t src = theSource[i];
		theDest[i] = (src & 0xFF000000) | (RGBToHSL(((src >> 16) & 0xFF), (src >> 8) & 0xFF, (src & 0xFF)) & 0x00FFFFFF);
	}
}

void SexyAppBase::PrecacheAdditive(MemoryImage* theImage)
{
	theImage->GetRLAdditiveData(mGLInterface);
}

void SexyAppBase::PrecacheAlpha(MemoryImage* theImage)
{
	theImage->GetRLAlphaData();
}

void SexyAppBase::PrecacheNative(MemoryImage* theImage)
{
	theImage->GetNativeAlphaData(mGLInterface);
}


void SexyAppBase::PlaySample(int theSoundNum)
{
	if (!mSoundManager)
		return;

	SoundInstance* aSoundInstance = mSoundManager->GetSoundInstance(theSoundNum);
	if (aSoundInstance != NULL)
	{
		aSoundInstance->Play(false, true);
	}
}


void SexyAppBase::PlaySample(int theSoundNum, int thePan)
{
	if (!mSoundManager)
		return;

	SoundInstance* aSoundInstance = mSoundManager->GetSoundInstance(theSoundNum);
	if (aSoundInstance != NULL)
	{
		aSoundInstance->SetPan(thePan);
		aSoundInstance->Play(false, true);
	}
}

bool SexyAppBase::IsMuted()
{
	return mMuteCount > 0;
}

void SexyAppBase::Mute(bool autoMute)
{
	mMuteCount++;
	if (autoMute)
		mAutoMuteCount++;

	SetMusicVolume(mMusicVolume);
	SetSfxVolume(mSfxVolume);
}

void SexyAppBase::Unmute(bool autoMute)
{
	if (mMuteCount > 0)
	{
		mMuteCount--;
		if (autoMute)
			mAutoMuteCount--;
	}

	SetMusicVolume(mMusicVolume);
	SetSfxVolume(mSfxVolume);
}


double SexyAppBase::GetMusicVolume()
{
	return mMusicVolume;
}

void SexyAppBase::SetMusicVolume(double theVolume)
{
	mMusicVolume = theVolume;

	if (mMusicInterface != NULL)
		mMusicInterface->SetVolume((mMuteCount > 0) ? 0.0 : mMusicVolume);
}

double SexyAppBase::GetSfxVolume()
{
	return mSfxVolume;
}

void SexyAppBase::SetSfxVolume(double theVolume)
{
	mSfxVolume = theVolume;

	if (mSoundManager != NULL)
		mSoundManager->SetVolume((mMuteCount > 0) ? 0.0 : mSfxVolume);
}

double SexyAppBase::GetMasterVolume()
{
	return mSoundManager->GetMasterVolume();
}

void SexyAppBase::SetMasterVolume(double theMasterVolume)
{
	mSfxVolume = theMasterVolume;
	mSoundManager->SetMasterVolume(mSfxVolume);
}

void SexyAppBase::AddMemoryImage(MemoryImage* theMemoryImage)
{
	AutoCrit anAutoCrit(mGLInterface->mCritSect);
	mMemoryImageSet.insert(theMemoryImage);
}

void SexyAppBase::RemoveMemoryImage(MemoryImage* theMemoryImage)
{
	AutoCrit anAutoCrit(mGLInterface->mCritSect);
	MemoryImageSet::iterator anItr = mMemoryImageSet.find(theMemoryImage);
	if (anItr != mMemoryImageSet.end())
		mMemoryImageSet.erase(anItr);

	Remove3DData(theMemoryImage);
}

void SexyAppBase::Remove3DData(MemoryImage* theMemoryImage)
{
	if (mGLInterface)
		mGLInterface->Remove3DData(theMemoryImage);
}


bool SexyAppBase::Is3DAccelerated()
{
	//return mDDInterface->mIs3D;
	return true;
}

bool SexyAppBase::Is3DAccelerationSupported()
{
	/*
	if (mDDInterface->mD3DTester)
		return mDDInterface->mD3DTester->Is3DSupported();
	else
		return false;
	*/
	return true;
}

bool SexyAppBase::Is3DAccelerationRecommended()
{
	/*
	if (mDDInterface->mD3DTester)
		return mDDInterface->mD3DTester->Is3DRecommended();
	else
		return false;
	*/
	return true;
}


void SexyAppBase::Set3DAcclerated(bool is3D, bool reinit)
{
	/*
	if (mDDInterface->mIs3D == is3D)
		return;

	mUserChanged3DSetting = true;
	mDDInterface->mIs3D = is3D;

	if (reinit)
	{
		int aResult = InitGLInterface();

		if (is3D && aResult != DDInterface::RESULT_OK)
		{
			Set3DAcclerated(false, reinit);
			return;
		}
		else if (aResult != DDInterface::RESULT_OK)
		{
			Popup(GetString("FAILED_INIT_DIRECTDRAW", __S("Failed to initialize DirectDraw: ")) + StringToSexyString(DDInterface::ResultToString(aResult) + " " + mDDInterface->mErrorString));
			DoExit(1);
		}

		ReInitImages();

		mWidgetManager->mImage = mDDInterface->GetScreenImage();
		mWidgetManager->MarkAllDirty();
	}
	*/
}

SharedImageRef SexyAppBase::SetSharedImage(const std::string& theFileName, const std::string& theVariant, GLImage* theImage, bool* isNew)
{
	std::string anUpperFileName = StringToUpper(theFileName);
	std::string anUpperVariant = StringToUpper(theVariant);

	std::pair<SharedImageMap::iterator, bool> aResultPair;
	SharedImageRef aSharedImageRef;

	{
		AutoCrit anAutoCrit(mGLInterface->mCritSect);
		aResultPair = mSharedImageMap.insert(SharedImageMap::value_type(SharedImageMap::key_type(anUpperFileName, anUpperVariant), SharedImage()));
		aSharedImageRef = &aResultPair.first->second;
	}

	if (isNew != NULL)
		*isNew = aResultPair.second;

	if (aResultPair.second)
	{
		aSharedImageRef.mSharedImage->mImage = theImage;
	}

	return aSharedImageRef;
}

SharedImageRef SexyAppBase::GetSharedImage(const std::string& theFileName, const std::string& theVariant, bool* isNew)
{
	std::string anUpperFileName = StringToUpper(theFileName);
	std::string anUpperVariant = StringToUpper(theVariant);

	std::pair<SharedImageMap::iterator, bool> aResultPair;
	SharedImageRef aSharedImageRef;

	{
		AutoCrit anAutoCrit(mGLInterface->mCritSect);
		aResultPair = mSharedImageMap.insert(SharedImageMap::value_type(SharedImageMap::key_type(anUpperFileName, anUpperVariant), SharedImage()));
		aSharedImageRef = &aResultPair.first->second;
	}

	if (isNew != NULL)
		*isNew = aResultPair.second;

	if (aResultPair.second)
	{
		// Pass in a '!' as the first char of the file name to create a new image
		if ((theFileName.length() > 0) && (theFileName[0] == '!'))
			aSharedImageRef.mSharedImage->mImage = new GLImage(mGLInterface);
		else
			aSharedImageRef.mSharedImage->mImage = GetImage(theFileName,false);
	}

	return aSharedImageRef;
}

void SexyAppBase::CleanSharedImages()
{
	AutoCrit anAutoCrit(mGLInterface->mCritSect);

	if (mCleanupSharedImages)
	{
		// Delete shared images with reference counts of 0
		// This doesn't occur in ~SharedImageRef because sometimes we can not only access the image
		//  through the SharedImageRef returned by GetSharedImage, but also by calling GetSharedImage
		//  again with the same params -- so we can have instances where we do the 'final' deref on
		//  an image but immediately re-request it via GetSharedImage
		SharedImageMap::iterator aSharedImageItr = mSharedImageMap.begin();
		while (aSharedImageItr != mSharedImageMap.end())
		{
			SharedImage* aSharedImage = &aSharedImageItr->second;
			if (aSharedImage->mRefCount == 0)
			{
				delete aSharedImage->mImage;
				mSharedImageMap.erase(aSharedImageItr++);
			}
			else
				++aSharedImageItr;
		}

		mCleanupSharedImages = false;
	}
}
