export interface Currency{
  /** The system-wide, unique ID number for the currency code (immutable) */
  CurrencyId: number
  /** The currency code in the ISO 4217 standard */
  CurrencyCode: string
  /** The exchange rate */
  ExchangeRate: number
}