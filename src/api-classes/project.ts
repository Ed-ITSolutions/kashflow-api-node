export interface Project{
  /** System-wide unique number for this Project */
  ID: number
  /** The Project number */
  Number: number
  /** Project name */
  Name: string
  /** The reference for this project */
  Reference: string
  /** The long description for this project */
  Description: string
  /** The first date field for the Project as configured in Settings -> Project Options */
  Date1: Date
  /** The second date field (see Date1) */
  Date2: Date
  /** The customer to which this Project is assigned. Use 0 for none */
  CustomerID: number
  /**
   * The status of the project
   * 0 = Completed
   * 1 = Active
   * 2 = Archived
   */
  Status: 0 | 1 | 2
}