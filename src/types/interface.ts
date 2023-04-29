export interface IOrderRenderData {
  OrderNum: string
  UserName: string
  CounselorName: string
  Field: string
  OrderDate: string
  OrderStatus: string
  Price: number
}

export interface ILicenseList {
  CertNumber: string
  Id: number
  LicenseImg: string
  Name: string
  Validation: boolean
}

export interface IOrderRenderData {
  CounselorName: string
  Field: string
  Id: number
  ReserveStatus: string
  Star: number | null
  Time: string | null
  UserName: string
}