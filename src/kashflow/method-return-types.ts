import {AccountOverview} from '../api-classes/account-overview'
import {AgedDebtorsCreditors} from '../api-classes/aged-debtors-creditors'
import {BalanceSheet} from '../api-classes/balance-sheet'
import {BankAccount} from '../api-classes/bank-account'
import {BankOverview} from '../api-classes/bank-overview'
import {BankTransaction} from '../api-classes/bank-transaction'
import {BankTXType} from '../api-classes/bank-tx-type'
import {BasicDataSet} from '../api-classes/basic-data-set'
import {CompanyDetails} from '../api-classes/company-details'
import {Currency} from '../api-classes/currencies'
import {Customer} from '../api-classes/customer'
import {CustomerBalance} from '../api-classes/customer-balance'
import {Invoice} from '../api-classes/invoice'
import {InvoiceNote} from '../api-classes/invoice-note'
import {JournalEntry} from '../api-classes/journal-entry'
import {NominalCode} from '../api-classes/nominal-code'
import {NominalCodeExtended} from '../api-classes/nominal-code-extended'
import {Payment} from '../api-classes/payment'
import {PaymentMethod} from '../api-classes/payment-method'
import {Product} from '../api-classes/product'
import {ProductsFull} from '../api-classes/products-full'
import {ProfitAndLoss} from '../api-classes/profit-and-loss'
import {Project} from '../api-classes/project'
import {ReceiptAttachment} from '../api-classes/receipt-attachment'
import {ReceiptNote} from '../api-classes/receipt-note'
import {SubProduct} from '../api-classes/sub-product'
import {Supplier} from '../api-classes/supplier'
import {TransactionInformation} from '../api-classes/transaction-information'
import {VATReport} from '../api-classes/vat-report'

export interface MethodReturnTypes{
  AddOrUpdateSubProduct: number
  AllocateAdvancePaymentToInvoice: number
  AllocateAdvancePaymentToReceipt: number
  applyCreditNoteToInvoice: boolean
  AttachFileToReceipt: number
  AutoAuthIP: number
  ConvertQuoteToInvoice: Invoice
  CreateBankAccount: number
  DeleteBankTransaction: number
  DeleteCustomer: number
  DeleteInvoice: number
  DeleteInvoiceByID: number
  DeleteInvoiceLine: number
  DeleteInvoiceLineWithInvoiceID: number
  DeleteInvoicePayment: undefined
  DeleteJournal: number
  DeleteJournalByID: number
  DeleteQuote: number
  DeleteQuoteByID: number
  DeleteQuoteLine: number
  DeleteQuoteLineWithQuoteID: number
  DeleteReceipt: number
  DeleteReceiptAttachment: number
  DeleteReceiptByID: number
  DeleteReceiptLine: number
  DeleteReceiptLineWithReceiptID: number
  DeleteReceiptPayment: number
  EmailInvoice: undefined
  GetAccountOverview: AccountOverview
  GetAgedCreditors: AgedDebtorsCreditors[]
  GetAgedDebtors: AgedDebtorsCreditors[]
  GetBalanceSheet: BalanceSheet
  GetBankAccounts: BankAccount[]
  GetBankOverview: BankOverview[]
  GetBankTransactions: BankTransaction[]
  GetBankTxTypes: BankTXType[]
  GetCompanyDetails: CompanyDetails
  GetCurrencies: Currency[]
  GetCustomer: Customer
  GetCustomerAdvancePayments: BankTransaction[]
  GetCustomerBalance: CustomerBalance
  GetCustomerByEmail: Customer
  GetCustomerByID: Customer
  GetCustomerCurrency: string
  GetCustomers: {
    Customer: Customer[]
  }
  GetCustomersByPostcode: Customer[]
  GetCustomersModifiedSince: Customer[]
  GetCustomerSources: BasicDataSet[]
  GetCustomerVATNumber: string
  GetDigitaCSVFile: string
  GetIncomeByCustomer: BasicDataSet[]
  GetInvoice: Invoice
  GetInvoiceByID: Invoice
  GetInvoiceNotes: InvoiceNote[]
  GetInvoicePayment: Payment[]
  GetInvoices_Overdue: Invoice[]
  GetInvoices_Recent: Invoice[]
  GetInvoices_Unpaid: Invoice[]
  GetInvoicesByDateRange: Invoice[]
  GetInvoicesForCustomer: Invoice[]
  GetInvPayMethods: PaymentMethod[]
  GetJournal: JournalEntry
  GetJournals: JournalEntry[]
  GetKPIs: BasicDataSet[]
  GetMonthlyProfitAndLoss: ProfitAndLoss[]
  GetNominalCodes: NominalCode[]
  GetNominalCodesExtended: NominalCodeExtended[]
  GetNominalLedger: TransactionInformation[]
  GetPaypalLink: string
  GetProducts: Product[]
  GetProductsWithSubProducts: ProductsFull[]
  GetProfitAndLoss: ProfitAndLoss
  GetProjectById: Project
  GetProjectByName: Project
  GetProjectByRef: Project
  GetProjects: BasicDataSet[]
  GetProjects_Full: Project[]
  GetQuoteByID: Invoice
  GetQuoteByNumber: Invoice
  GetQuotes: Invoice[]
  GetQuotes_Recent: Invoice[]
  GetQuotesForCustomer: Invoice[]
  GetReceipt: Invoice
  GetReceiptAttachments: ReceiptAttachment[]
  GetReceiptNotes: ReceiptNote[]
  GetReceiptPayment: Payment[]
  GetReceipts: Invoice[]
  GetReceipts_Recent: Invoice[]
  GetReceiptsForSupplier: Invoice[]
  GetReceiptsWithPaging: Invoice[]
  GetRecPayMethods: PaymentMethod[]
  GetRemoteLoginURL: string
  GetSubProductByCode: SubProduct
  GetSubProductByID: SubProduct
  GetSubProducts: SubProduct[]
  GetSupplier: Supplier
  GetSupplierByID: Supplier
  GetSupplierCurrency: string
  GetSuppliers: Supplier[]
  GetSupplierVATNumber: string
  GetTrialBalance: NominalCode[]
  GetVATRates: BasicDataSet[]
  GetVATReport: VATReport
  InsertBankTransaction: number
  InsertCustomer: number
  InsertInvoice: number
  InsertInvoiceLine: number
  InsertInvoiceLineWithInvoiceNumber: number
  InsertInvoiceNote: boolean
  InsertInvoicePayment: number
  InsertJournal: number
  InsertNominalCode: number
  InsertOrUpdateProject: number
  InsertQuote: number
  InsertQuoteLine: number
  InsertReceipt: number
  InsertReceiptLine: number
  InsertReceiptLineFromNumber: number
  InsertReceiptNote: boolean
  InsertReceiptPayment: number
  InsertSupplier: number
  isStillQuote: boolean
  isUserVATRegistered: boolean
  PrintInvoice: string
  SetCustomerCurrency: number
  SetCustomerVATNumber: number
  SetSupplierCurrency: number
  SetSupplierVATNumber: number
  UpdateBankTransaction: number
  UpdateCustomer: string
  UpdateInvoice: undefined
  UpdateInvoiceHeader: undefined
  UpdateJournal: number
  UpdateJournalHeader: number
  UpdateQuote: number
  UpdateQuoteHeader: number
  UpdateReceipt: number
  UpdateReceiptHeader: number
  UpdateSupplier: number
  VCFToCustomerObjects: Customer[]
}