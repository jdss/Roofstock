export interface ObjInformation {
    properties: Property[];
}

export interface Property {
    id:                           number;
    accountId:                    number;
    buyerAccountId:               number | null;
    buyerUserId:                  number | null;
    externalId:                   null;
    programId:                    null;
    isDwellCertified:             boolean;
    isAllowOffer:                 boolean;
    isAllowPreview:               boolean;
    isFeatured:                   boolean;
    isRentGuaranteed:             boolean;
    allowRentGuaranteedOptout:    boolean;
    isSecuritized:                boolean;
    isHot:                        boolean;
    isNew:                        boolean;
    isBargain:                    boolean | null;
    isDiligenceVaultUnlocked:     boolean;
    isPropertyManagerOfferRetain: boolean | null;
    isHoa:                        boolean | null;
    hasAudio:                     boolean;
    hasDiligenceVaultDocuments:   boolean;
    market:                       number;
    daysOnMarket:                 number | null;
    latitude:                     number | null;
    longitude:                    number | null;
    propertyName:                 null;
    description:                  null | string;
    highlights:                   null;
    mainImageUrl:                 null | string;
    personalProperties:           null;
    diligenceVaultSummary:        null | string;
    featuredReason:               null;
    status:                       Status;
    allowedFundingTypes:          null | string;
    allowableSaleTypes:           null | string;
    visibility:                   Visibility;
    priceVisibility:              PriceVisibility;
    propertyType:                 PropertyType;
    certificationLevel:           null | string;
    escrowClosingDate:            Date | null;
    address:                      Address;
    financial:                    Financial | null;
    physical:                     Physical | null;
    score:                        Score | null;
    valuation:                    { [key: string]: number | null } | null;
    resources:                    Resources | null;
    manager:                      null;
    seller:                       null;
    sellerBroker:                 null;
    hoa:                          null;
    lease:                        Lease | null;
    diligences:                   any[] | null;
    googleMapOption:              GoogleMapOption | null;
    inspectionType:               null;
}

export interface Address {
    address1: string;
    address2: null | string;
    city:     string;
    country:  Country;
    county:   null | string;
    district: null;
    state:    State;
    zip:      string;
    zipPlus4: null | string;
}

export enum Country {
    Usa = "USA",
}

export enum State {
    CA = "CA",
    FL = "FL",
}

export interface Financial {
    capRate:               null;
    occupancy:             string;
    isSection8:            boolean;
    leaseStartDate:        Date;
    leaseEndDate:          Date;
    listPrice:             number;
    salePrice:             null;
    marketValue:           null;
    monthlyHoa:            null;
    monthlyManagementFees: null;
    monthlyRent:           number;
    netYield:              null;
    turnOverFee:           null;
    rehabCosts:            null;
    rehabDate:             null;
    yearlyInsuranceCost:   number | null;
    yearlyPropertyTaxes:   number;
    isCashOnly:            boolean;
}

export interface GoogleMapOption {
    hasStreetView: boolean;
    povHeading:    number;
    povPitch:      number;
    povLatitude:   number;
    povLongitude:  number;
}

export interface Lease {
    leaseSummary:       LeaseSummary;
    utilitiesOwnership: UtilitiesOwnership;
    applianceOwnership: ApplianceOwnership;
}

export interface ApplianceOwnership {
    refrigerator: string;
    dishwasher:   string;
    washer:       string;
    dryer:        string;
    microwave:    string;
    stove:        string;
}

export interface LeaseSummary {
    occupancy:                  string;
    leasingStatus:              null;
    marketedRent:               null;
    paymentStatus:              null | string;
    leaseStartDate:             Date;
    leaseEndDate:               Date;
    monthlyRent:                number;
    securityDepositAmount:      number | null;
    hasPet:                     null;
    petFeeAmount:               null;
    isPetsDeposit:              boolean;
    petsDepositAmount:          number | null;
    isLeaseConcessions:         boolean | null;
    isRentersInsuranceRequired: boolean;
    isSection8:                 boolean;
    isTenantBackgroundChecked:  boolean;
    isTenantIncomeAbove3x:      boolean;
    isTenantMayTerminateEarly:  null;
    isTenantPurchaseOption:     null;
}

export interface UtilitiesOwnership {
    electric:    string;
    gas:         string;
    water:       string;
    garbage:     string;
    pool:        string;
    landscaping: string;
    pestControl: string;
}

export interface Physical {
    bathRooms:    number;
    bedRooms:     number;
    parcelNumber: string;
    isPool:       boolean;
    lotSize:      number | null;
    squareFeet:   number;
    stories:      null;
    units:        null;
    yearBuilt:    number;
    zipYearBuilt: null;
}

export enum PriceVisibility {
    ShowPrice = "ShowPrice",
}

export enum PropertyType {
    Unspecified = "Unspecified",
}

export interface Resources {
    photos:           FloorPlan[];
    floorPlans:       FloorPlan[];
    threeDRenderings: FloorPlan[];
    audios:           any[];
}

export interface FloorPlan {
    id:           number;
    guid:         string;
    resourceType: ResourceType;
    isPublic:     boolean;
    description:  null;
    filename:     string;
    sizeInByte:   null;
    contentType:  ContentType;
    url:          string;
    urlMedium:    null | string;
    urlSmall:     null | string;
    textContent:  null;
}

export enum ContentType {
    ApplicationOctetStream = "application/octet-stream",
    ImageJPEG = "image/jpeg",
}

export enum ResourceType {
    Property3DTour = "Property3DTour",
    PropertyFloorPlan = "PropertyFloorPlan",
    PropertyPhoto = "PropertyPhoto",
}

export interface Score {
    conditionScore:     null;
    crimeScore:         string;
    neighborhoodScore:  number;
    overallScore:       null;
    qualityScore:       null;
    schoolScore:        string;
    charterSchoolScore: null | string;
    floodRiskScore:     null | string;
    walkabilityScore:   null;
}

export enum Status {
    CertificationRejected = "CertificationRejected",
    OffMarket = "OffMarket",
    Sold = "Sold",
}

export enum Visibility {
    None = "None",
    Public = "Public",
}
