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

enum class Provider {
  GOOGLE {
    override fun url(): String = "https://accounts.google.com/o/oauth2/v2/auth"
  },
  FACEBOOK {
    override fun url(): String = "https://www.facebook.com/v17.0/dialog/oauth"
  },
  TWITCH {
    override fun url(): String = "https://id.twitch.tv/oauth2/authorize"
  };

  abstract fun url(): String
}
