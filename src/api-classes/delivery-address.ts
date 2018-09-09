export interface DeliveryAddress{
  /** Delivery address name */
  Name: string
  /** Delivery address line 1 */
  Line1: string
  /** Delivery address line 2 */
  Line2: string
  /** Delivery address line 3 */
  Line3: string
  /** Delivery address line 4 */
  Line4: string
  /** Delivery address postcode */
  PostCode: string
  /** Delivery address country name */
  CountryName: string
  /** The delivery address country code in the ISO 3166-1 alpha-2 standard (except for Greece which is recorded as ‘EL’) */
  CountryCode: string
}