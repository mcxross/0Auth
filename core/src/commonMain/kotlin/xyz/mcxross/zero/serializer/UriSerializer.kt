package xyz.mcxross.zero.serializer

import com.eygraber.uri.Uri
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import xyz.mcxross.zero.extension.toUri

class UriSerializer : KSerializer<Uri> {
  override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("Uri", PrimitiveKind.STRING)

  override fun serialize(encoder: Encoder, value: Uri) {
    encoder.encodeString(value.toString())
  }

  override fun deserialize(decoder: Decoder): Uri {
    return decoder.decodeString().toUri()
  }
}