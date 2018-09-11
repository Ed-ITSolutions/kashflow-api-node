import {KFBoolean} from '../api-classes/support'


import {BankTransaction} from '../api-classes/bank-transaction'
import {Customer} from '../api-classes/customer'
import {Invoice} from '../api-classes/invoice'
import {InvoiceLine} from '../api-classes/invoice-line'
import {JournalEntry} from '../api-classes/journal-entry'
import {Payment} from '../api-classes/payment'
import {Project} from '../api-classes/project'
import {SubProduct} from '../api-classes/sub-product'
import {Supplier} from '../api-classes/supplier'

export interface MethodDataTypes{
  AddOrUpdateSubProduct: {
    sp: SubProduct
  }
  AllocateAdvancePaymentToInvoice: {
    /** The invoice number to apply the advance payment to. */
    InvoiceNumber: number
    /** The bank transaction id of the advance payment. */
    BankTxId: number
  }
  AllocateAdvancePaymentToReceipt: {
    /** The receipt number to apply the advance payment to. */
    ReceiptNumber: number
    /** The bank transaction id of the advance payment. */
    BankTxId: number
  }
  applyCreditNoteToInvoice: {
    /** The invoice id to which you wish to apply the credit note */
    InvoiceID: number
    /** The id of the Credit Note (a negative-value invoice) to apply to the invoice */
    CreditNodeID: number
  }
  AttachFileToReceipt: {
    /** An integer value representing the receipt no. */
    ReceiptNo: number
    /** A base64 encoded string of the file to be attached. */
    Base64String: string
    /** 
     * The content type of the file to be attached.
     * e.g. “plain/text“
     */
    ContentType: string
    /** The name and extension of the file to be attached. */
    Filename: string
    /**
     * The extension of the file to be attached.
     * e.g. “txt” or “pdf“
     */
    FileExtension: string
    /**
     * The size of the file in bytes.
     * e.g. “510“
     */
    FileSize: string
  }
  AutoAuthIP: {
    /** The name of your application. This is used in the comment for the IP listing so the user knows which application added the IP address */
    appName: string
    /** This is the AutoAuthKey mentioned above. It should be provided to you by the user. The AutoAuthKey is a hex string in the format: 1234ABCD-1234 */
    AutoAuthKey: string
  }
  ConvertQuoteToInvoice: {
    /** The ID of the quote you wish to convert */
    QuoteID: number
    /** The ID of the customer you want the invoice assigned to. Leave it as 0 and it’ll be assigned to the same customer as the quote. */
    CustomerID: number
    /** Set to 1 if you want a line on the invoice saying “Based on Quote Number x” */
    CopyQuoteReference: KFBoolean
    /** If set to 1 then the quote will be deleted once the invoice has been created */
    deleteQuoteAfterconversion: KFBoolean
  }
  CreateBankAccount: {
    AccountName: string
    NominalCode: number
  }
  DeleteBankTransaction: {
    /** An integer representing the unique transaction id */
    TransationID: number
  }
  DeleteCustomer: {
    /** The unique customer code */
    CustomerID: number
  }
  DeleteInvoice: {
    /** The invoice number */
    InvoiceNumber: number
  }
  DeleteInvoiceByID: {
    /** The unique invoice id */
    InvoiceID: number
  }
  DeleteInvoiceLine: {
    /** An integer representing the invoice line id */
    InvoiceLineID: number
    /** An integer representing the invoice number */
    InvoiceNumber: number
  }
  DeleteInvoiceLineWithInvoiceID: {
    /** An integer representing the invoice line id */
    InvoiceLineID: number
    /** An integer representing the invoice id */
    InvoiceID: number
  }
  DeleteInvoicePayment: {
    /** An integer representing the payment number you want to delete */
    PaymentNumber: number
  }
  DeleteJournal: {
    /** An integer representing the journal number */
    JournalNumber: number
  }
  DeleteJournalByID: {
    /** An integer representing the journal id */
    JournalID: number
  }
  DeleteQuote: {
    /** An integer representing the quote number you want to delete */
    QuoteNumber: number
  }
  DeleteQuoteByID: {
    /** An integer representing the quote id you want to delete */
    QuoteID: number
  }
  DeleteQuoteLine: {
    /** An integer representing the quote number you want to delete */
    QuoteNumber: number
    /** An integer representing the quote line id you want to delete */
    LineID: number
  }
  DeleteQuoteLineWithQuoteID: {
    /** An integer representing the quote id you want to delete */
    QuoteID: number
    /** An integer representing the quote line id you want to delete */
    LineID: number
  }
  DeleteReceipt: {
    /** An integer representing the receipt number you want to delete */
    ReceiptNumber: number
  }
  DeleteReceiptAttachment: {
    /** An integer value representing the receipt id. */
    ReceiptID: number
    /** An integer value representing the attachment id. */
    AttachmentID: number
  }
  DeleteReceiptByID: {
    /** An integer representing the receipt id you want to delete */
    ReceiptID: number
  }
  DeleteReceiptLine: {
    /** An integer representing the receipt line id you want to delete */
    LineID: number
    /** An integer representing the number of the receipt with the Line Item you want to delete */
    ReceiptNumber: number
  }
  DeleteReceiptLineWithReceiptID: {
    /** An integer representing the receipt line id you want to delete */
    LineID: number
    /** An integer representing the receipt id you want to delete */
    ReceiptID: number
  }
  DeleteReceiptPayment: {
    /** An integer representing the payment number you want to delete */
    PaymentNumber: number
  }
  EmailInvoice: {
    /** The number of the invoice to be emailed. */
    InvoiceNumber: number
    /** The name of the sender */
    FromEmail: string
    /** The email address that the invoice should appear to have been sent from */
    FromName: string
    /** The subject line to be used on the email */
    SubjectLine: string
    /** The body of the email */
    Body: string
    /** The recipients email address */
    RecipientEmail: string
  }
  GetAccountOverview: {}
  GetAgedCreditors: {
    /** The date you’d like to use for the AgedCreditors report */
    AgedCreditorsDate: Date
  }
  GetAgedDebtors: {
    /** The date you’d like to use for the AgedDebtors report */
    AgedDebtorsDate: Date
  }
  GetBalanceSheet: {
    /** The start date for the report */
    Date: Date
  }
  GetBankAccounts: {}
  GetBankOverview: {}
  GetBankTransactions: {
    /** The unique bank account id */
    AccountID: number
  }
  GetBankTxTypes: {}
  GetCompanyDetails: {}
  GetCurrencies: {}
  GetCustomer: {
    /** The unique customer code */
    CustomerCode: string
  }
  GetCustomerAdvancePayments: {
    /** The id of the customer you want to get advance payments for */
    CustomerId: number
  }
  GetCustomerBalance: {
    /** The unique code of the customer you want to get a balance for */
    CustomerCode: string
  }
  GetCustomerByEmail: {
    /** The customers email address */
    CustomerEmail: string
  }
  GetCustomerByID: {
    /** The unique customer id */
    CustomerID: number
  }
  GetCustomerCurrency: {
    /** The unique customer code. */
    CustomerCode: string
  }
  GetCustomers: {}
  GetCustomersByPostcode: {
    /** The postcode to use when searching for customers */
    Postcode: string
  }
  GetCustomersModifiedSince: {
    /** Only customers modified/created on or after this date will be returned */
    ModifiedSince: Date
  }
  GetCustomerSources: {}
  GetCustomerVATNumber: {
    /** The unique customer code. */
    CustomerCode: string
  }
  GetDigitaCSVFile: {
    /** The start date for the report */
    StartDate: Date
    /** The end date for the report */
    EndDate: Date
  }
  GetIncomeByCustomer: {
    /** The start date for the report */
    StarDate: Date
    /** The end date for the report */
    EndDate: Date
    /** If set to True then the report will be based on invoice dates, as opposed to payment dates */
    BasedOnInvoiceDate: boolean
  }
  GetInvoice: {
    /** The unique invoice number */
    InvoiceNumber: number
  }
  GetInvoiceByID: {
    /** The unique invoice id */
    InvoiceID: number
  }
  GetInvoiceNotes: {
    /** The unique invoice id */
    InvoiceId: number
  }
  GetInvoicePayment: {
    /** The unique invoice number for which you wish to retrieve payments */
    InvoiceNumber: number
  }
  GetInvoices_Overdue: {}
  GetInvoices_Recent: {
    /** The number of invoices you’d like returned */
    NumberOfInvoices: number
  }
  GetInvoices_Unpaid: {}
  GetInvoicesByDateRange: {
    /** The start date of the range for which you’d like to view invoices */
    StartDate: Date
    /** The end date for the range */
    EndDate: Date
  }
  GetInvoicesForCustomer: {
    /** The ID of the customer */
    CustID: number
  }
  GetInvPayMethods: {}
  GetJournal: {
    /** An integer representing the journal number */
    JournalNumber: number
  }
  GetJournals: {}
  GetKPIs: {
    /** The start date for the report */
    StartDate: Date
    /** The end date for the report */
    EndDate: Date
    /** If set to 1 then VAT will not be included in financial values */
    ExcludeVAT: KFBoolean
    /** If set to 1 then invoices and receipts paid on the day of issue will not be included in calculations of how long it takes for invoices and receipts to be paid. */
    ExcludeSameDayPays: KFBoolean
  }
  GetMonthlyProfitAndLoss: {
    /** The start date for the report */
    StartDate: Date
    /** The end date for the report */
    EndDate: Date
  }
  GetNominalCodes: {}
  GetNominalCodesExtended: {}
  GetNominalLedger: {
    /** The start date for the report */
    StartDate: Date
    /** The end date for the report */
    EndDate: Date
    /** The nominal id for the report */
    NominalID: number
  }
  GetPaypalLink: {}
  GetProducts: {}
  GetProductsWithSubProducts: {}
  GetProfitAndLoss: {
    /** The start date for the report */
    StartDate: Date
    /** The end date for the report */
    EndDate: Date
  }
  GetProjectById: {
    /** The unique project id */
    ProjId: number
  }
  GetProjectByName: {
    /** The project name */
    ProjName: string
  }
  GetProjectByRef: {
    /** The project reference */
    ProjRef: string
  }
  GetProjects: {}
  GetProjects_Full: {
    /**
     * The method will only return Projects with a matching status
     *
     * -1 – All Projects
     * 0 – Complete
     * 1 – Active
     * 2 – Archived
     */
    ProjStatus: -1 | 0 | 1 | 2
  }
  GetQuoteByID: {
    /** The unique quote id */
    QuoteID: number
  }
  GetQuoteByNumber: {
    /** The unique quote number */
    QuoteNumber: number
  }
  GetQuotes: {}
  GetQuotes_Recent: {
    /** The number of quotes you’d like returned */
    NumberOfQuotes: number
  }
  GetQuotesForCustomer: {
    /** The ID of the customer */
    CustID: number
  }
  GetReceipt: {
    /** The unique receipt number */
    ReceiptNumber: number
  }
  GetReceiptAttachments: {
    /** An integer value representing the receipt id. */
    ReceiptID: number
  }
  GetReceiptNotes: {
    /** An integer value representing the receipt id. */
    ReceiptId: number
  }
  GetReceiptPayment: {
    /** The unique receipt number for which you wish to retrieve payments */
    ReceiptNumber: number
  }
  GetReceipts: {}
  GetReceipts_Recent: {
    /** The number of receipts you’d like returned */
    NumberOfReceipts: number
  }
  GetReceiptsForSupplier: {
    /** The unique supplier id */
    SupplierID: number
  }
  GetReceiptsWithPaging: {
    /** The page number of the receipt list to be fetched. */
    Page: number
    /** Number of records to be fetched per page. */
    PerPage: number
    /** You can specify a filter to fetch only a specific kind of receipts. */
    FilterBy: 'All' | 'Unpaid' | 'Overdue' | 'Overpaid' | 'Paid' | 'ThisMonth'
  }
  GetRecPayMethods: {}
  GetRemoteLoginURL: {}
  GetSubProductByCode: {
    /** The code of the sub-product for which you want to retrieve. */
    ProductCode: string
  }
  GetSubProductByID: {
    /** The ID of the sub-product for which you want to retrieve. */
    ProductID: number
  }
  GetSubProducts: {
    /** The ID of the `NominalCode` for which you want to retrieve SubProducts. */
    NominalID: number
  }
  GetSupplier: {
    /** The unique supplier code */
    SupplierCode: string
  }
  GetSupplierByID: {
    /** The unique Supplier id */
    SupplierID: number
  }
  GetSupplierCurrency: {
    /** The unique supplier code. */
    SupplierCode: string
  }
  GetSuppliers: {}
  GetSupplierVATNumber: {
    /** The unique supplier code. */
    SupplierCode: string
  }
  GetTrialBalance: {
    /** The start date for the report */
    StartDate: Date
    /** The end date for the report */
    EndDate: Date
  }
  GetVATRates: {}
  GetVATReport: {
    /** The start date for the report */
    StartDate: Date
    /** The end date for the report */
    EndDate: Date
  }
  InsertBankTransaction: {
    /** An object of type `BankTransaction` */
    BankTransaction: BankTransaction
  }
  InsertCustomer: {
    /** An object of type `Customer` */
    Customer: Customer
  }
  InsertInvoice: {
    /** An object of type `Invoice` */
    Invoice: Invoice
  }
  InsertInvoiceLine: {
    /** An Integer representing the unique invoice id */
    InvoiceID: number
    /** An object of type InvoiceLine */
    InvoiceLine: InvoiceLine
  }
  InsertInvoiceLineWithInvoiceNumber: {
    /** An Integer representing the invoice number */
    InvoiceNumber: number
    /** An object of type InvoiceLine */
    InvoiceLine: InvoiceLine
  }
  InsertInvoiceNote: {
    /** The system-wide, unique ID number for the invoice */
    InvoiceId: number
    /** The date of the note */
    NoteDate: Date
    /** The actual note to be added to the invoice */
    Notes: string
  }
  InsertInvoicePayment: {
    /** An object of type `Payment` */
    Payment: Payment
  }
  InsertJournal: {
    /** An object of type `JournalEntry` */
    JournalEntry: JournalEntry
  }
  InsertNominalCode: {
    /** The name for the new nominal code */
    name: string
    /** The code number for the new nominal code. This must be unique for the user account */
    code: string
    /**
     * Define what type of code this is. Valid properties are:
     *
     * 1 – Turnover
     * 2 – Cost of Sale
     * 3 – Expense
     * 4 – Fixed Asset
     * 5 – Current Asset/Liability
     * 6 – Capital and Reserves
     */
    classification: 1 | 2 | 3 | 4 | 5 | 6
    /**
     * Choose where in the system this code should be listed. Valid properties are:
     *
     * 1 – Sales Type
     * 2 – Outgoing Type
     * 3 – Bank Transaction Type
     */
    nomtype: 1 | 2 | 3
  }
  InsertOrUpdateProject: {
    /** An object of type Project */
    Project: Project
  }
  InsertQuote: {
    /** An object of type `Invoice` */
    Quote: Invoice
  }
  InsertQuoteLine: {
    /** An integer value representing the quote id */
    QuoteID: number
    /** An object of type InvoiceLine */
    QuoteLine: InvoiceLine
  }
  InsertReceipt: {
    /** An object of type Invoice */
    Invoice: Invoice
  }
  InsertReceiptLine: {
    /** The receipt id for the receipt you’re adding line(s) to */
    ReceiptID: number
    /** An object of type `InvoiceLine` */
    ReceiptLine: InvoiceLine
  }
  InsertReceiptLineFromNumber: {
    /** The receipt number for the receipt you’re adding line(s) to */
    ReceiptNumber: number
    /** An object of type InvoiceLine */
    ReceiptLine: InvoiceLine
  }
  InsertReceiptNote: {
    /** The system-wide, unique ID number for the invoice */
    ReceiptId: number
    /** The date of the note */
    NoteDate: Date
    /** The actual note to be added to the invoice */
    Notes: string
  }
  InsertReceiptPayment: {
    /** An object of type `Payment` */
    Payment: Payment
  }
  InsertSupplier: {
    /** An object of type Supplier */
    Supplier: Supplier
  }
  isStillQuote: {
    /** The unique quote id */
    QuoteID: number
  }
  isUserVATRegistered: {}
  PrintInvoice: {
    /** The invoice number for the invoice you want to print. If you are instead supplying a string of numbers in the next argument then you should set this to 0 */
    InvoiceNumber: number
    /** A comma separated list of invoice numbers. You can just provide an empty string if you are providing a single invoice number above. */
    InvoiceNumberList: string
  }
  SetCustomerCurrency: {
    /** 
     * The ISO code of a currency.
     * E.g. USD, GBP
     */
    CurrencyCode: string
    /** The unique customer code. */
    CustomerCode: string
  }
  SetCustomerVATNumber: {
    /** A VAT Number. */
    CustVATNumber: string
    /** The unique customer code. */
    CustomerCode: string
  }
  SetSupplierCurrency: {
    /**
     * The ISO code of a currency.
     * E.g. USD, GBP
     */
    CurrencyCode: string
    /** The unique supplier code. */
    SupplierCode: string
  }
  SetSupplierVATNumber: {
    /** A VAT Number. */
    SupVATNumber: string
    /** The unique supplier code. */
    SupplierCode: string
  }
  UpdateBankTransaction: {
    /** An object of type `BankTransaction` */
    BankTransaction: BankTransaction
  }
  UpdateCustomer: {
    /** An object of type Customer */
    custr: Customer
  }
  UpdateInvoice: {
    /** An object of type `Invoice` */
    Inv: Invoice
  }
  UpdateInvoiceHeader: {
    /** An object of type Invoice */
    Invoice: Invoice
  }
  UpdateJournal: {
    /** An object of type `JournalEntry` */
    JournalEntry: JournalEntry
  }
  UpdateJournalHeader: {
    /** An object of type `JournalEntry` */
    JournalEntry: JournalEntry
  }
  UpdateQuote: {
    /** An object of type Invoice */
    Quote: Invoice
  }
  UpdateQuoteHeader: {
    /** An object of type Invoice */
    Quote: Invoice
  }
  UpdateReceipt: {
    /** An object of type Invoice */
    Receipt: Invoice
  }
  UpdateReceiptHeader: {
    /** An object of type Invoice */
    Invoice: Invoice
  }
  UpdateSupplier: {
    /** An object of type Supplier */
    Supplier: Supplier
  }
  VCFToCustomerObjects: {
    inStream: string
  }
}