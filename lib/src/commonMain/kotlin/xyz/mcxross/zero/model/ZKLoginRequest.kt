/*
 * Copyright 2016 McXross. All Rights Reserved.
 *
 *Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
package xyz.mcxross.zero.model

import kotlinx.serialization.Serializable
import kotlinx.serialization.Transient
import xyz.mcxross.zero.Mysten.MYSTEN_LABS_PROVING_SERVICE_DEV_URL
import xyz.mcxross.zero.Mysten.MYSTEN_LABS_SALTING_SERVICE_URL
import xyz.mcxross.zero.service.DefaultProvingService
import xyz.mcxross.zero.service.DefaultSaltingService
import xyz.mcxross.zero.service.ProvingService
import xyz.mcxross.zero.service.SaltingService

@Serializable
data class ZKLoginRequest(
    val openIDServiceConfiguration: OpenIDServiceConfiguration,
    @Transient
    val saltingService: SaltingService? = DefaultSaltingService(MYSTEN_LABS_SALTING_SERVICE_URL),
    @Transient
    val provingService: ProvingService? = DefaultProvingService(MYSTEN_LABS_PROVING_SERVICE_DEV_URL)
)
