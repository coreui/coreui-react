/**
 * Copyright (c) 2013-present, creativeLabs Lukasz Holeczek.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { vi } from 'vitest'

// @testing-library/dom gates its fake-timer handling in `waitFor` on a global
// `jest`; without it `waitFor` never advances Vitest's fake timers and hangs.
;(globalThis as unknown as { jest: typeof vi }).jest = vi
