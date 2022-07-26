export interface MicrosoftGraphEntity{
  id: string
}
export interface MicrosoftGraphAuditLogRoot extends MicrosoftGraphEntity{
  directoryAudits: MicrosoftGraphDirectoryAudit[]
  provisioning: MicrosoftGraphProvisioningObjectSummary[]
  restrictedSignIns: MicrosoftGraphRestrictedSignIn[]
  signIns: MicrosoftGraphSignIn[]
}
export interface MicrosoftGraphDirectoryAudit extends MicrosoftGraphEntity{
  activityDateTime: string
  activityDisplayName: string
  additionalDetails: MicrosoftGraphKeyValue[]
  category: string
  correlationId: string
  initiatedBy: MicrosoftGraphAuditActivityInitiator
  loggedByService: string
  operationType: string
  result: MicrosoftGraphOperationResult
  resultReason: string
  targetResources: MicrosoftGraphTargetResource[]
}
export interface MicrosoftGraphProvisioningObjectSummary extends MicrosoftGraphEntity{
  activityDateTime: string
  changeId: string
  cycleId: string
  durationInMilliseconds: number
  initiatedBy: MicrosoftGraphInitiator
  jobId: string
  modifiedProperties: MicrosoftGraphModifiedProperty[]
  provisioningAction: MicrosoftGraphProvisioningAction
  provisioningStatusInfo: MicrosoftGraphProvisioningStatusInfo
  provisioningSteps: MicrosoftGraphProvisioningStep[]
  servicePrincipal: MicrosoftGraphProvisioningServicePrincipal
  sourceIdentity: MicrosoftGraphProvisionedIdentity
  sourceSystem: MicrosoftGraphProvisioningSystem
  targetIdentity: MicrosoftGraphProvisionedIdentity
  targetSystem: MicrosoftGraphProvisioningSystem
  tenantId: string
}
export interface MicrosoftGraphSignIn extends MicrosoftGraphEntity{
  appDisplayName: string
  appId: string
  appliedConditionalAccessPolicies: MicrosoftGraphAppliedConditionalAccessPolicy[]
  clientAppUsed: string
  conditionalAccessStatus: MicrosoftGraphConditionalAccessStatus
  correlationId: string
  createdDateTime: string
  deviceDetail: MicrosoftGraphDeviceDetail
  ipAddress: string
  isInteractive: boolean
  location: MicrosoftGraphSignInLocation
  resourceDisplayName: string
  resourceId: string
  riskDetail: MicrosoftGraphRiskDetail
  riskEventTypes: MicrosoftGraphRiskEventType[]
  riskEventTypes_v2: string[]
  riskLevelAggregated: MicrosoftGraphRiskLevel
  riskLevelDuringSignIn: MicrosoftGraphRiskLevel
  riskState: MicrosoftGraphRiskState
  status: MicrosoftGraphSignInStatus
  userDisplayName: string
  userId: string
  userPrincipalName: string
}
export interface MicrosoftGraphRestrictedSignIn extends MicrosoftGraphSignIn{
  targetTenantId: string
}
export interface MicrosoftGraphInvitation extends MicrosoftGraphEntity{
  invitedUserDisplayName: string
  invitedUserEmailAddress: string
  invitedUserMessageInfo: MicrosoftGraphInvitedUserMessageInfo
  invitedUserType: string
  inviteRedeemUrl: string
  inviteRedirectUrl: string
  sendInvitationMessage: boolean
  status: string
  invitedUser: MicrosoftGraphUser
}
export interface MicrosoftGraphDirectoryObject extends MicrosoftGraphEntity{
  deletedDateTime: string
}
export interface MicrosoftGraphUser extends MicrosoftGraphDirectoryObject{
  accountEnabled: boolean
  ageGroup: string
  assignedLicenses: MicrosoftGraphAssignedLicense[]
  assignedPlans: MicrosoftGraphAssignedPlan[]
  businessPhones: string[]
  city: string
  companyName: string
  consentProvidedForMinor: string
  country: string
  createdDateTime: string
  creationType: string
  department: string
  displayName: string
  employeeHireDate: string
  employeeId: string
  employeeOrgData: MicrosoftGraphEmployeeOrgData
  employeeType: string
  externalUserState: string
  externalUserStateChangeDateTime: string
  faxNumber: string
  givenName: string
  identities: MicrosoftGraphObjectIdentity[]
  imAddresses: string[]
  isResourceAccount: boolean
  jobTitle: string
  lastPasswordChangeDateTime: string
  legalAgeGroupClassification: string
  licenseAssignmentStates: MicrosoftGraphLicenseAssignmentState[]
  mail: string
  mailNickname: string
  mobilePhone: string
  officeLocation: string
  onPremisesDistinguishedName: string
  onPremisesDomainName: string
  onPremisesExtensionAttributes: MicrosoftGraphOnPremisesExtensionAttributes
  onPremisesImmutableId: string
  onPremisesLastSyncDateTime: string
  onPremisesProvisioningErrors: MicrosoftGraphOnPremisesProvisioningError[]
  onPremisesSamAccountName: string
  onPremisesSecurityIdentifier: string
  onPremisesSyncEnabled: boolean
  onPremisesUserPrincipalName: string
  otherMails: string[]
  passwordPolicies: string
  passwordProfile: MicrosoftGraphPasswordProfile
  postalCode: string
  preferredDataLocation: string
  preferredLanguage: string
  provisionedPlans: MicrosoftGraphProvisionedPlan[]
  proxyAddresses: string[]
  showInAddressList: boolean
  signInSessionsValidFromDateTime: string
  state: string
  streetAddress: string
  surname: string
  usageLocation: string
  userPrincipalName: string
  userType: string
  mailboxSettings: MicrosoftGraphMailboxSettings
  deviceEnrollmentLimit: number
  aboutMe: string
  birthday: string
  hireDate: string
  interests: string[]
  mySite: string
  pastProjects: string[]
  preferredName: string
  responsibilities: string[]
  schools: string[]
  skills: string[]
  appRoleAssignments: MicrosoftGraphAppRoleAssignment[]
  createdObjects: MicrosoftGraphDirectoryObject[]
  directReports: MicrosoftGraphDirectoryObject[]
  licenseDetails: MicrosoftGraphLicenseDetails[]
  manager: MicrosoftGraphDirectoryObject
  memberOf: MicrosoftGraphDirectoryObject[]
  oauth2PermissionGrants: MicrosoftGraphOAuth2PermissionGrant[]
  ownedDevices: MicrosoftGraphDirectoryObject[]
  ownedObjects: MicrosoftGraphDirectoryObject[]
  registeredDevices: MicrosoftGraphDirectoryObject[]
  scopedRoleMemberOf: MicrosoftGraphScopedRoleMembership[]
  transitiveMemberOf: MicrosoftGraphDirectoryObject[]
  calendar: MicrosoftGraphCalendar
  calendarGroups: MicrosoftGraphCalendarGroup[]
  calendars: MicrosoftGraphCalendar[]
  calendarView: MicrosoftGraphEvent[]
  contactFolders: MicrosoftGraphContactFolder[]
  contacts: MicrosoftGraphContact[]
  events: MicrosoftGraphEvent[]
  inferenceClassification: MicrosoftGraphInferenceClassification
  mailFolders: MicrosoftGraphMailFolder[]
  messages: MicrosoftGraphMessage[]
  outlook: MicrosoftGraphOutlookUser
  people: MicrosoftGraphPerson[]
  drive: MicrosoftGraphDrive
  drives: MicrosoftGraphDrive[]
  followedSites: MicrosoftGraphSite[]
  extensions: MicrosoftGraphExtension[]
  agreementAcceptances: MicrosoftGraphAgreementAcceptance[]
  managedDevices: MicrosoftGraphManagedDevice[]
  managedAppRegistrations: MicrosoftGraphManagedAppRegistration[]
  deviceManagementTroubleshootingEvents: MicrosoftGraphDeviceManagementTroubleshootingEvent[]
  planner: MicrosoftGraphPlannerUser
  insights: MicrosoftGraphOfficeGraphInsights
  settings: MicrosoftGraphUserSettings
  onenote: MicrosoftGraphOnenote
  photo: MicrosoftGraphProfilePhoto
  photos: MicrosoftGraphProfilePhoto[]
  activities: MicrosoftGraphUserActivity[]
  onlineMeetings: MicrosoftGraphOnlineMeeting[]
  presence: MicrosoftGraphPresence
  authentication: MicrosoftGraphAuthentication
  chats: MicrosoftGraphChat[]
  joinedTeams: MicrosoftGraphTeam[]
  teamwork: MicrosoftGraphUserTeamwork
  todo: MicrosoftGraphTodo
}
export interface MicrosoftGraphAppRoleAssignment extends MicrosoftGraphDirectoryObject{
  appRoleId: string
  createdDateTime: string
  principalDisplayName: string
  principalId: string
  principalType: string
  resourceDisplayName: string
  resourceId: string
}
export interface MicrosoftGraphLicenseDetails extends MicrosoftGraphEntity{
  servicePlans: MicrosoftGraphServicePlanInfo[]
  skuId: string
  skuPartNumber: string
}
export interface MicrosoftGraphOAuth2PermissionGrant extends MicrosoftGraphEntity{
  clientId: string
  consentType: string
  principalId: string
  resourceId: string
  scope: string
}
export interface MicrosoftGraphScopedRoleMembership extends MicrosoftGraphEntity{
  administrativeUnitId: string
  roleId: string
  roleMemberInfo: MicrosoftGraphIdentity
}
export interface MicrosoftGraphCalendar extends MicrosoftGraphEntity{
  allowedOnlineMeetingProviders: MicrosoftGraphOnlineMeetingProviderType[]
  canEdit: boolean
  canShare: boolean
  canViewPrivateItems: boolean
  changeKey: string
  color: MicrosoftGraphCalendarColor
  defaultOnlineMeetingProvider: MicrosoftGraphOnlineMeetingProviderType
  hexColor: string
  isDefaultCalendar: boolean
  isRemovable: boolean
  isTallyingResponses: boolean
  name: string
  owner: MicrosoftGraphEmailAddress
  calendarPermissions: MicrosoftGraphCalendarPermission[]
  calendarView: MicrosoftGraphEvent[]
  events: MicrosoftGraphEvent[]
  multiValueExtendedProperties: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  singleValueExtendedProperties: MicrosoftGraphSingleValueLegacyExtendedProperty[]
}
export interface MicrosoftGraphCalendarGroup extends MicrosoftGraphEntity{
  changeKey: string
  classId: string
  name: string
  calendars: MicrosoftGraphCalendar[]
}
export interface MicrosoftGraphOutlookItem extends MicrosoftGraphEntity{
  categories: string[]
  changeKey: string
  createdDateTime: string
  lastModifiedDateTime: string
}
export interface MicrosoftGraphEvent extends MicrosoftGraphOutlookItem{
  allowNewTimeProposals: boolean
  attendees: MicrosoftGraphAttendee[]
  body: MicrosoftGraphItemBody
  bodyPreview: string
  end: MicrosoftGraphDateTimeTimeZone
  hasAttachments: boolean
  hideAttendees: boolean
  iCalUId: string
  importance: MicrosoftGraphImportance
  isAllDay: boolean
  isCancelled: boolean
  isDraft: boolean
  isOnlineMeeting: boolean
  isOrganizer: boolean
  isReminderOn: boolean
  location: MicrosoftGraphLocation
  locations: MicrosoftGraphLocation[]
  onlineMeeting: MicrosoftGraphOnlineMeetingInfo
  onlineMeetingProvider: MicrosoftGraphOnlineMeetingProviderType
  onlineMeetingUrl: string
  organizer: MicrosoftGraphRecipient
  originalEndTimeZone: string
  originalStart: string
  originalStartTimeZone: string
  recurrence: MicrosoftGraphPatternedRecurrence
  reminderMinutesBeforeStart: number
  responseRequested: boolean
  responseStatus: MicrosoftGraphResponseStatus
  sensitivity: MicrosoftGraphSensitivity
  seriesMasterId: string
  showAs: MicrosoftGraphFreeBusyStatus
  start: MicrosoftGraphDateTimeTimeZone
  subject: string
  transactionId: string
  type: MicrosoftGraphEventType
  webLink: string
  attachments: MicrosoftGraphAttachment[]
  calendar: MicrosoftGraphCalendar
  extensions: MicrosoftGraphExtension[]
  instances: MicrosoftGraphEvent[]
  multiValueExtendedProperties: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  singleValueExtendedProperties: MicrosoftGraphSingleValueLegacyExtendedProperty[]
}
export interface MicrosoftGraphContactFolder extends MicrosoftGraphEntity{
  displayName: string
  parentFolderId: string
  childFolders: MicrosoftGraphContactFolder[]
  contacts: MicrosoftGraphContact[]
  multiValueExtendedProperties: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  singleValueExtendedProperties: MicrosoftGraphSingleValueLegacyExtendedProperty[]
}
export interface MicrosoftGraphContact extends MicrosoftGraphOutlookItem{
  assistantName: string
  birthday: string
  businessAddress: MicrosoftGraphPhysicalAddress
  businessHomePage: string
  businessPhones: string[]
  children: string[]
  companyName: string
  department: string
  displayName: string
  emailAddresses: MicrosoftGraphEmailAddress[]
  fileAs: string
  generation: string
  givenName: string
  homeAddress: MicrosoftGraphPhysicalAddress
  homePhones: string[]
  imAddresses: string[]
  initials: string
  jobTitle: string
  manager: string
  middleName: string
  mobilePhone: string
  nickName: string
  officeLocation: string
  otherAddress: MicrosoftGraphPhysicalAddress
  parentFolderId: string
  personalNotes: string
  profession: string
  spouseName: string
  surname: string
  title: string
  yomiCompanyName: string
  yomiGivenName: string
  yomiSurname: string
  extensions: MicrosoftGraphExtension[]
  multiValueExtendedProperties: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  photo: MicrosoftGraphProfilePhoto
  singleValueExtendedProperties: MicrosoftGraphSingleValueLegacyExtendedProperty[]
}
export interface MicrosoftGraphInferenceClassification extends MicrosoftGraphEntity{
  overrides: MicrosoftGraphInferenceClassificationOverride[]
}
export interface MicrosoftGraphMailFolder extends MicrosoftGraphEntity{
  childFolderCount: number
  displayName: string
  isHidden: boolean
  parentFolderId: string
  totalItemCount: number
  unreadItemCount: number
  childFolders: MicrosoftGraphMailFolder[]
  messageRules: MicrosoftGraphMessageRule[]
  messages: MicrosoftGraphMessage[]
  multiValueExtendedProperties: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  singleValueExtendedProperties: MicrosoftGraphSingleValueLegacyExtendedProperty[]
}
export interface MicrosoftGraphMessage extends MicrosoftGraphOutlookItem{
  bccRecipients: MicrosoftGraphRecipient[]
  body: MicrosoftGraphItemBody
  bodyPreview: string
  ccRecipients: MicrosoftGraphRecipient[]
  conversationId: string
  conversationIndex: string
  flag: MicrosoftGraphFollowupFlag
  from: MicrosoftGraphRecipient
  hasAttachments: boolean
  importance: MicrosoftGraphImportance
  inferenceClassification: MicrosoftGraphInferenceClassificationType
  internetMessageHeaders: MicrosoftGraphInternetMessageHeader[]
  internetMessageId: string
  isDeliveryReceiptRequested: boolean
  isDraft: boolean
  isRead: boolean
  isReadReceiptRequested: boolean
  parentFolderId: string
  receivedDateTime: string
  replyTo: MicrosoftGraphRecipient[]
  sender: MicrosoftGraphRecipient
  sentDateTime: string
  subject: string
  toRecipients: MicrosoftGraphRecipient[]
  uniqueBody: MicrosoftGraphItemBody
  webLink: string
  attachments: MicrosoftGraphAttachment[]
  extensions: MicrosoftGraphExtension[]
  multiValueExtendedProperties: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  singleValueExtendedProperties: MicrosoftGraphSingleValueLegacyExtendedProperty[]
}
export interface MicrosoftGraphOutlookUser extends MicrosoftGraphEntity{
  masterCategories: MicrosoftGraphOutlookCategory[]
}
export interface MicrosoftGraphPerson extends MicrosoftGraphEntity{
  birthday: string
  companyName: string
  department: string
  displayName: string
  givenName: string
  imAddress: string
  isFavorite: boolean
  jobTitle: string
  officeLocation: string
  personNotes: string
  personType: MicrosoftGraphPersonType
  phones: MicrosoftGraphPhone[]
  postalAddresses: MicrosoftGraphLocation[]
  profession: string
  scoredEmailAddresses: MicrosoftGraphScoredEmailAddress[]
  surname: string
  userPrincipalName: string
  websites: MicrosoftGraphWebsite[]
  yomiCompany: string
}
export interface MicrosoftGraphBaseItem extends MicrosoftGraphEntity{
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  description: string
  eTag: string
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  name: string
  parentReference: MicrosoftGraphItemReference
  webUrl: string
  createdByUser: MicrosoftGraphUser
  lastModifiedByUser: MicrosoftGraphUser
}
export interface MicrosoftGraphDrive extends MicrosoftGraphBaseItem{
  driveType: string
  owner: MicrosoftGraphIdentitySet
  quota: MicrosoftGraphQuota
  sharePointIds: MicrosoftGraphSharepointIds
  system: MicrosoftGraphSystemFacet
  bundles: MicrosoftGraphDriveItem[]
  following: MicrosoftGraphDriveItem[]
  items: MicrosoftGraphDriveItem[]
  list: MicrosoftGraphList
  root: MicrosoftGraphDriveItem
  special: MicrosoftGraphDriveItem[]
}
export interface MicrosoftGraphSite extends MicrosoftGraphBaseItem{
  displayName: string
  error: MicrosoftGraphPublicError
  root: MicrosoftGraphRoot
  sharepointIds: MicrosoftGraphSharepointIds
  siteCollection: MicrosoftGraphSiteCollection
  analytics: MicrosoftGraphItemAnalytics
  columns: MicrosoftGraphColumnDefinition[]
  contentTypes: MicrosoftGraphContentType[]
  drive: MicrosoftGraphDrive
  drives: MicrosoftGraphDrive[]
  externalColumns: MicrosoftGraphColumnDefinition[]
  items: MicrosoftGraphBaseItem[]
  lists: MicrosoftGraphList[]
  operations: MicrosoftGraphRichLongRunningOperation[]
  permissions: MicrosoftGraphPermission[]
  sites: MicrosoftGraphSite[]
  termStore: MicrosoftGraphTermStoreStore
  termStores: MicrosoftGraphTermStoreStore[]
  onenote: MicrosoftGraphOnenote
}
export interface MicrosoftGraphExtension extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphAgreementAcceptance extends MicrosoftGraphEntity{
  agreementFileId: string
  agreementId: string
  deviceDisplayName: string
  deviceId: string
  deviceOSType: string
  deviceOSVersion: string
  expirationDateTime: string
  recordedDateTime: string
  state: MicrosoftGraphAgreementAcceptanceState
  userDisplayName: string
  userEmail: string
  userId: string
  userPrincipalName: string
}
export interface MicrosoftGraphManagedDevice extends MicrosoftGraphEntity{
  activationLockBypassCode: string
  androidSecurityPatchLevel: string
  azureADDeviceId: string
  azureADRegistered: boolean
  complianceGracePeriodExpirationDateTime: string
  complianceState: MicrosoftGraphComplianceState
  configurationManagerClientEnabledFeatures: MicrosoftGraphConfigurationManagerClientEnabledFeatures
  deviceActionResults: MicrosoftGraphDeviceActionResult[]
  deviceCategoryDisplayName: string
  deviceEnrollmentType: MicrosoftGraphDeviceEnrollmentType
  deviceHealthAttestationState: MicrosoftGraphDeviceHealthAttestationState
  deviceName: string
  deviceRegistrationState: MicrosoftGraphDeviceRegistrationState
  easActivated: boolean
  easActivationDateTime: string
  easDeviceId: string
  emailAddress: string
  enrolledDateTime: string
  ethernetMacAddress: string
  exchangeAccessState: MicrosoftGraphDeviceManagementExchangeAccessState
  exchangeAccessStateReason: MicrosoftGraphDeviceManagementExchangeAccessStateReason
  exchangeLastSuccessfulSyncDateTime: string
  freeStorageSpaceInBytes: number
  iccid: string
  imei: string
  isEncrypted: boolean
  isSupervised: boolean
  jailBroken: string
  lastSyncDateTime: string
  managedDeviceName: string
  managedDeviceOwnerType: MicrosoftGraphManagedDeviceOwnerType
  managementAgent: MicrosoftGraphManagementAgentType
  manufacturer: string
  meid: string
  model: string
  notes: string
  operatingSystem: string
  osVersion: string
  partnerReportedThreatState: MicrosoftGraphManagedDevicePartnerReportedHealthState
  phoneNumber: string
  physicalMemoryInBytes: number
  remoteAssistanceSessionErrorDetails: string
  remoteAssistanceSessionUrl: string
  serialNumber: string
  subscriberCarrier: string
  totalStorageSpaceInBytes: number
  udid: string
  userDisplayName: string
  userId: string
  userPrincipalName: string
  wiFiMacAddress: string
  deviceCompliancePolicyStates: MicrosoftGraphDeviceCompliancePolicyState[]
  deviceConfigurationStates: MicrosoftGraphDeviceConfigurationState[]
  deviceCategory: MicrosoftGraphDeviceCategory
}
export interface MicrosoftGraphManagedAppRegistration extends MicrosoftGraphEntity{
  appIdentifier: MicrosoftGraphMobileAppIdentifier
  applicationVersion: string
  createdDateTime: string
  deviceName: string
  deviceTag: string
  deviceType: string
  flaggedReasons: MicrosoftGraphManagedAppFlaggedReason[]
  lastSyncDateTime: string
  managementSdkVersion: string
  platformVersion: string
  userId: string
  version: string
  appliedPolicies: MicrosoftGraphManagedAppPolicy[]
  intendedPolicies: MicrosoftGraphManagedAppPolicy[]
  operations: MicrosoftGraphManagedAppOperation[]
}
export interface MicrosoftGraphDeviceManagementTroubleshootingEvent extends MicrosoftGraphEntity{
  correlationId: string
  eventDateTime: string
}
export interface MicrosoftGraphPlannerUser extends MicrosoftGraphEntity{
  plans: MicrosoftGraphPlannerPlan[]
  tasks: MicrosoftGraphPlannerTask[]
}
export interface MicrosoftGraphOfficeGraphInsights extends MicrosoftGraphEntity{
  shared: MicrosoftGraphSharedInsight[]
  trending: MicrosoftGraphTrending[]
  used: MicrosoftGraphUsedInsight[]
}
export interface MicrosoftGraphUserSettings extends MicrosoftGraphEntity{
  contributionToContentDiscoveryAsOrganizationDisabled: boolean
  contributionToContentDiscoveryDisabled: boolean
  shiftPreferences: MicrosoftGraphShiftPreferences
}
export interface MicrosoftGraphOnenote extends MicrosoftGraphEntity{
  notebooks: MicrosoftGraphNotebook[]
  operations: MicrosoftGraphOnenoteOperation[]
  pages: MicrosoftGraphOnenotePage[]
  resources: MicrosoftGraphOnenoteResource[]
  sectionGroups: MicrosoftGraphSectionGroup[]
  sections: MicrosoftGraphOnenoteSection[]
}
export interface MicrosoftGraphProfilePhoto extends MicrosoftGraphEntity{
  height: number
  width: number
}
export interface MicrosoftGraphUserActivity extends MicrosoftGraphEntity{
  activationUrl: string
  activitySourceHost: string
  appActivityId: string
  appDisplayName: string
  contentInfo: MicrosoftGraphJson
  contentUrl: string
  createdDateTime: string
  expirationDateTime: string
  fallbackUrl: string
  lastModifiedDateTime: string
  status: MicrosoftGraphStatus
  userTimezone: string
  visualElements: MicrosoftGraphVisualInfo
  historyItems: MicrosoftGraphActivityHistoryItem[]
}
export interface MicrosoftGraphOnlineMeeting extends MicrosoftGraphEntity{
  allowAttendeeToEnableCamera: boolean
  allowAttendeeToEnableMic: boolean
  allowedPresenters: MicrosoftGraphOnlineMeetingPresenters
  allowMeetingChat: MicrosoftGraphMeetingChatMode
  allowTeamworkReactions: boolean
  attendeeReport: string
  audioConferencing: MicrosoftGraphAudioConferencing
  broadcastSettings: MicrosoftGraphBroadcastMeetingSettings
  chatInfo: MicrosoftGraphChatInfo
  creationDateTime: string
  endDateTime: string
  externalId: string
  isBroadcast: boolean
  isEntryExitAnnounced: boolean
  joinInformation: MicrosoftGraphItemBody
  joinWebUrl: string
  lobbyBypassSettings: MicrosoftGraphLobbyBypassSettings
  participants: MicrosoftGraphMeetingParticipants
  recordAutomatically: boolean
  startDateTime: string
  subject: string
  videoTeleconferenceId: string
  attendanceReports: MicrosoftGraphMeetingAttendanceReport[]
}
export interface MicrosoftGraphPresence extends MicrosoftGraphEntity{
  activity: string
  availability: string
}
export interface MicrosoftGraphAuthentication extends MicrosoftGraphEntity{
  fido2Methods: MicrosoftGraphFido2AuthenticationMethod[]
  methods: MicrosoftGraphAuthenticationMethod[]
  microsoftAuthenticatorMethods: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod[]
  temporaryAccessPassMethods: MicrosoftGraphTemporaryAccessPassAuthenticationMethod[]
  windowsHelloForBusinessMethods: MicrosoftGraphWindowsHelloForBusinessAuthenticationMethod[]
}
export interface MicrosoftGraphChat extends MicrosoftGraphEntity{
  chatType: MicrosoftGraphChatType
  createdDateTime: string
  lastUpdatedDateTime: string
  onlineMeetingInfo: MicrosoftGraphTeamworkOnlineMeetingInfo
  tenantId: string
  topic: string
  webUrl: string
  installedApps: MicrosoftGraphTeamsAppInstallation[]
  members: MicrosoftGraphConversationMember[]
  messages: MicrosoftGraphChatMessage[]
  tabs: MicrosoftGraphTeamsTab[]
}
export interface MicrosoftGraphTeam extends MicrosoftGraphEntity{
  classification: string
  createdDateTime: string
  description: string
  displayName: string
  funSettings: MicrosoftGraphTeamFunSettings
  guestSettings: MicrosoftGraphTeamGuestSettings
  internalId: string
  isArchived: boolean
  memberSettings: MicrosoftGraphTeamMemberSettings
  messagingSettings: MicrosoftGraphTeamMessagingSettings
  specialization: MicrosoftGraphTeamSpecialization
  visibility: MicrosoftGraphTeamVisibilityType
  webUrl: string
  channels: MicrosoftGraphChannel[]
  group: MicrosoftGraphGroup
  installedApps: MicrosoftGraphTeamsAppInstallation[]
  members: MicrosoftGraphConversationMember[]
  operations: MicrosoftGraphTeamsAsyncOperation[]
  primaryChannel: MicrosoftGraphChannel
  template: MicrosoftGraphTeamsTemplate
  schedule: MicrosoftGraphSchedule
}
export interface MicrosoftGraphUserTeamwork extends MicrosoftGraphEntity{
  installedApps: MicrosoftGraphUserScopeTeamsAppInstallation[]
}
export interface MicrosoftGraphTodo extends MicrosoftGraphEntity{
  lists: MicrosoftGraphTodoTaskList[]
}
export interface MicrosoftGraphApplication extends MicrosoftGraphDirectoryObject{
  addIns: MicrosoftGraphAddIn[]
  api: MicrosoftGraphApiApplication
  appId: string
  applicationTemplateId: string
  appRoles: MicrosoftGraphAppRole[]
  certification: MicrosoftGraphCertification
  createdDateTime: string
  description: string
  disabledByMicrosoftStatus: string
  displayName: string
  groupMembershipClaims: string
  identifierUris: string[]
  info: MicrosoftGraphInformationalUrl
  isDeviceOnlyAuthSupported: boolean
  isFallbackPublicClient: boolean
  keyCredentials: MicrosoftGraphKeyCredential[]
  logo: string
  notes: string
  oauth2RequirePostResponse: boolean
  optionalClaims: MicrosoftGraphOptionalClaims
  parentalControlSettings: MicrosoftGraphParentalControlSettings
  passwordCredentials: MicrosoftGraphPasswordCredential[]
  publicClient: MicrosoftGraphPublicClientApplication
  publisherDomain: string
  requiredResourceAccess: MicrosoftGraphRequiredResourceAccess[]
  serviceManagementReference: string
  signInAudience: string
  spa: MicrosoftGraphSpaApplication
  tags: string[]
  tokenEncryptionKeyId: string
  verifiedPublisher: MicrosoftGraphVerifiedPublisher
  web: MicrosoftGraphWebApplication
  createdOnBehalfOf: MicrosoftGraphDirectoryObject
  extensionProperties: MicrosoftGraphExtensionProperty[]
  homeRealmDiscoveryPolicies: MicrosoftGraphHomeRealmDiscoveryPolicy[]
  owners: MicrosoftGraphDirectoryObject[]
  tokenIssuancePolicies: MicrosoftGraphTokenIssuancePolicy[]
  tokenLifetimePolicies: MicrosoftGraphTokenLifetimePolicy[]
}
export interface MicrosoftGraphServicePrincipal extends MicrosoftGraphDirectoryObject{
  accountEnabled: boolean
  addIns: MicrosoftGraphAddIn[]
  alternativeNames: string[]
  appDescription: string
  appDisplayName: string
  appId: string
  applicationTemplateId: string
  appOwnerOrganizationId: string
  appRoleAssignmentRequired: boolean
  appRoles: MicrosoftGraphAppRole[]
  description: string
  disabledByMicrosoftStatus: string
  displayName: string
  homepage: string
  info: MicrosoftGraphInformationalUrl
  keyCredentials: MicrosoftGraphKeyCredential[]
  loginUrl: string
  logoutUrl: string
  notes: string
  notificationEmailAddresses: string[]
  oauth2PermissionScopes: MicrosoftGraphPermissionScope[]
  passwordCredentials: MicrosoftGraphPasswordCredential[]
  preferredSingleSignOnMode: string
  preferredTokenSigningKeyThumbprint: string
  replyUrls: string[]
  resourceSpecificApplicationPermissions: MicrosoftGraphResourceSpecificPermission[]
  samlSingleSignOnSettings: MicrosoftGraphSamlSingleSignOnSettings
  servicePrincipalNames: string[]
  servicePrincipalType: string
  signInAudience: string
  tags: string[]
  tokenEncryptionKeyId: string
  appRoleAssignedTo: MicrosoftGraphAppRoleAssignment[]
  appRoleAssignments: MicrosoftGraphAppRoleAssignment[]
  claimsMappingPolicies: MicrosoftGraphClaimsMappingPolicy[]
  createdObjects: MicrosoftGraphDirectoryObject[]
  delegatedPermissionClassifications: MicrosoftGraphDelegatedPermissionClassification[]
  endpoints: MicrosoftGraphEndpoint[]
  homeRealmDiscoveryPolicies: MicrosoftGraphHomeRealmDiscoveryPolicy[]
  memberOf: MicrosoftGraphDirectoryObject[]
  oauth2PermissionGrants: MicrosoftGraphOAuth2PermissionGrant[]
  ownedObjects: MicrosoftGraphDirectoryObject[]
  owners: MicrosoftGraphDirectoryObject[]
  tokenIssuancePolicies: MicrosoftGraphTokenIssuancePolicy[]
  tokenLifetimePolicies: MicrosoftGraphTokenLifetimePolicy[]
  transitiveMemberOf: MicrosoftGraphDirectoryObject[]
}
export interface MicrosoftGraphExtensionProperty extends MicrosoftGraphDirectoryObject{
  appDisplayName: string
  dataType: string
  isSyncedFromOnPremises: boolean
  name: string
  targetObjects: string[]
}
export interface MicrosoftGraphPolicyBase extends MicrosoftGraphDirectoryObject{
  description: string
  displayName: string
}
export interface MicrosoftGraphStsPolicy extends MicrosoftGraphPolicyBase{
  definition: string[]
  isOrganizationDefault: boolean
  appliesTo: MicrosoftGraphDirectoryObject[]
}
export interface MicrosoftGraphHomeRealmDiscoveryPolicy extends MicrosoftGraphStsPolicy{
}
export interface MicrosoftGraphTokenIssuancePolicy extends MicrosoftGraphStsPolicy{
}
export interface MicrosoftGraphTokenLifetimePolicy extends MicrosoftGraphStsPolicy{
}
export interface MicrosoftGraphApplicationTemplate extends MicrosoftGraphEntity{
  categories: string[]
  description: string
  displayName: string
  homePageUrl: string
  logoUrl: string
  publisher: string
  supportedProvisioningTypes: string[]
  supportedSingleSignOnModes: string[]
}
export interface MicrosoftGraphClaimsMappingPolicy extends MicrosoftGraphStsPolicy{
}
export interface MicrosoftGraphDelegatedPermissionClassification extends MicrosoftGraphEntity{
  classification: MicrosoftGraphPermissionClassificationType
  permissionId: string
  permissionName: string
}
export interface MicrosoftGraphEndpoint extends MicrosoftGraphDirectoryObject{
  capability: string
  providerId: string
  providerName: string
  providerResourceId: string
  uri: string
}
export interface MicrosoftGraphAuthenticationMethodConfiguration extends MicrosoftGraphEntity{
  state: MicrosoftGraphAuthenticationMethodState
}
export interface MicrosoftGraphAuthenticationMethodsPolicy extends MicrosoftGraphEntity{
  description: string
  displayName: string
  lastModifiedDateTime: string
  policyVersion: string
  reconfirmationInDays: number
  registrationEnforcement: MicrosoftGraphRegistrationEnforcement
  authenticationMethodConfigurations: MicrosoftGraphAuthenticationMethodConfiguration[]
}
export interface MicrosoftGraphAuthenticationMethodTarget extends MicrosoftGraphEntity{
  isRegistrationRequired: boolean
  targetType: MicrosoftGraphAuthenticationMethodTargetType
}
export interface MicrosoftGraphEmailAuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
  allowExternalIdToUseEmailOtp: MicrosoftGraphExternalEmailOtpState
  includeTargets: MicrosoftGraphAuthenticationMethodTarget[]
}
export interface MicrosoftGraphFido2AuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
  isAttestationEnforced: boolean
  isSelfServiceRegistrationAllowed: boolean
  keyRestrictions: MicrosoftGraphFido2KeyRestrictions
  includeTargets: MicrosoftGraphAuthenticationMethodTarget[]
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
  includeTargets: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTarget[]
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTarget extends MicrosoftGraphAuthenticationMethodTarget{
  authenticationMode: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMode
}
export interface MicrosoftGraphPolicyRoot extends MicrosoftGraphEntity{
  authenticationMethodsPolicy: MicrosoftGraphAuthenticationMethodsPolicy
  authenticationFlowsPolicy: MicrosoftGraphAuthenticationFlowsPolicy
  activityBasedTimeoutPolicies: MicrosoftGraphActivityBasedTimeoutPolicy[]
  authorizationPolicy: MicrosoftGraphAuthorizationPolicy
  claimsMappingPolicies: MicrosoftGraphClaimsMappingPolicy[]
  homeRealmDiscoveryPolicies: MicrosoftGraphHomeRealmDiscoveryPolicy[]
  permissionGrantPolicies: MicrosoftGraphPermissionGrantPolicy[]
  tokenIssuancePolicies: MicrosoftGraphTokenIssuancePolicy[]
  tokenLifetimePolicies: MicrosoftGraphTokenLifetimePolicy[]
  featureRolloutPolicies: MicrosoftGraphFeatureRolloutPolicy[]
  adminConsentRequestPolicy: MicrosoftGraphAdminConsentRequestPolicy
  conditionalAccessPolicies: MicrosoftGraphConditionalAccessPolicy[]
  identitySecurityDefaultsEnforcementPolicy: MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicy
  roleManagementPolicies: MicrosoftGraphUnifiedRoleManagementPolicy[]
  roleManagementPolicyAssignments: MicrosoftGraphUnifiedRoleManagementPolicyAssignment[]
}
export interface MicrosoftGraphAuthenticationFlowsPolicy extends MicrosoftGraphEntity{
  description: string
  displayName: string
  selfServiceSignUp: MicrosoftGraphSelfServiceSignUpAuthenticationFlowConfiguration
}
export interface MicrosoftGraphActivityBasedTimeoutPolicy extends MicrosoftGraphStsPolicy{
}
export interface MicrosoftGraphAuthorizationPolicy extends MicrosoftGraphPolicyBase{
  allowedToSignUpEmailBasedSubscriptions: boolean
  allowedToUseSSPR: boolean
  allowEmailVerifiedUsersToJoinOrganization: boolean
  allowInvitesFrom: MicrosoftGraphAllowInvitesFrom
  blockMsolPowerShell: boolean
  defaultUserRolePermissions: MicrosoftGraphDefaultUserRolePermissions
  guestUserRoleId: string
}
export interface MicrosoftGraphPermissionGrantPolicy extends MicrosoftGraphPolicyBase{
  excludes: MicrosoftGraphPermissionGrantConditionSet[]
  includes: MicrosoftGraphPermissionGrantConditionSet[]
}
export interface MicrosoftGraphFeatureRolloutPolicy extends MicrosoftGraphEntity{
  description: string
  displayName: string
  feature: MicrosoftGraphStagedFeatureName
  isAppliedToOrganization: boolean
  isEnabled: boolean
  appliesTo: MicrosoftGraphDirectoryObject[]
}
export interface MicrosoftGraphAdminConsentRequestPolicy extends MicrosoftGraphEntity{
  isEnabled: boolean
  notifyReviewers: boolean
  remindersEnabled: boolean
  requestDurationInDays: number
  reviewers: MicrosoftGraphAccessReviewReviewerScope[]
  version: number
}
export interface MicrosoftGraphConditionalAccessPolicy extends MicrosoftGraphEntity{
  conditions: MicrosoftGraphConditionalAccessConditionSet
  createdDateTime: string
  description: string
  displayName: string
  grantControls: MicrosoftGraphConditionalAccessGrantControls
  modifiedDateTime: string
  sessionControls: MicrosoftGraphConditionalAccessSessionControls
  state: MicrosoftGraphConditionalAccessPolicyState
}
export interface MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicy extends MicrosoftGraphPolicyBase{
  isEnabled: boolean
}
export interface MicrosoftGraphUnifiedRoleManagementPolicy extends MicrosoftGraphEntity{
  description: string
  displayName: string
  isOrganizationDefault: boolean
  lastModifiedBy: MicrosoftGraphIdentity
  lastModifiedDateTime: string
  scopeId: string
  scopeType: string
  effectiveRules: MicrosoftGraphUnifiedRoleManagementPolicyRule[]
  rules: MicrosoftGraphUnifiedRoleManagementPolicyRule[]
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyAssignment extends MicrosoftGraphEntity{
  policyId: string
  roleDefinitionId: string
  scopeId: string
  scopeType: string
  policy: MicrosoftGraphUnifiedRoleManagementPolicy
}
export interface MicrosoftGraphTemporaryAccessPassAuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
  defaultLength: number
  defaultLifetimeInMinutes: number
  isUsableOnce: boolean
  maximumLifetimeInMinutes: number
  minimumLifetimeInMinutes: number
  includeTargets: MicrosoftGraphAuthenticationMethodTarget[]
}
export interface MicrosoftGraphBitlocker extends MicrosoftGraphEntity{
  recoveryKeys: MicrosoftGraphBitlockerRecoveryKey[]
}
export interface MicrosoftGraphBitlockerRecoveryKey extends MicrosoftGraphEntity{
  createdDateTime: string
  deviceId: string
  key: string
  volumeType: MicrosoftGraphVolumeType
}
export interface MicrosoftGraphInformationProtection extends MicrosoftGraphEntity{
  bitlocker: MicrosoftGraphBitlocker
  threatAssessmentRequests: MicrosoftGraphThreatAssessmentRequest[]
}
export interface MicrosoftGraphThreatAssessmentRequest extends MicrosoftGraphEntity{
  category: MicrosoftGraphThreatCategory
  contentType: MicrosoftGraphThreatAssessmentContentType
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  expectedAssessment: MicrosoftGraphThreatExpectedAssessment
  requestSource: MicrosoftGraphThreatAssessmentRequestSource
  status: MicrosoftGraphThreatAssessmentStatus
  results: MicrosoftGraphThreatAssessmentResult[]
}
export interface MicrosoftGraphBookingAppointment extends MicrosoftGraphEntity{
  additionalInformation: string
  customers: MicrosoftGraphBookingCustomerInformationBase[]
  customerTimeZone: string
  duration: string
  endDateTime: MicrosoftGraphDateTimeTimeZone
  filledAttendeesCount: number
  isLocationOnline: boolean
  joinWebUrl: string
  maximumAttendeesCount: number
  optOutOfCustomerEmail: boolean
  postBuffer: string
  preBuffer: string
  price:  | string
  priceType: MicrosoftGraphBookingPriceType
  reminders: MicrosoftGraphBookingReminder[]
  selfServiceAppointmentId: string
  serviceId: string
  serviceLocation: MicrosoftGraphLocation
  serviceName: string
  serviceNotes: string
  smsNotificationsEnabled: boolean
  staffMemberIds: string[]
  startDateTime: MicrosoftGraphDateTimeTimeZone
}
export interface MicrosoftGraphBookingBusiness extends MicrosoftGraphEntity{
  address: MicrosoftGraphPhysicalAddress
  businessHours: MicrosoftGraphBookingWorkHours[]
  businessType: string
  defaultCurrencyIso: string
  displayName: string
  email: string
  isPublished: boolean
  phone: string
  publicUrl: string
  schedulingPolicy: MicrosoftGraphBookingSchedulingPolicy
  webSiteUrl: string
  appointments: MicrosoftGraphBookingAppointment[]
  calendarView: MicrosoftGraphBookingAppointment[]
  customers: MicrosoftGraphBookingCustomerBase[]
  customQuestions: MicrosoftGraphBookingCustomQuestion[]
  services: MicrosoftGraphBookingService[]
  staffMembers: MicrosoftGraphBookingStaffMemberBase[]
}
export interface MicrosoftGraphBookingCustomerBase extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphBookingCustomQuestion extends MicrosoftGraphEntity{
  answerInputType: MicrosoftGraphAnswerInputType
  answerOptions: string[]
  displayName: string
}
export interface MicrosoftGraphBookingService extends MicrosoftGraphEntity{
  additionalInformation: string
  customQuestions: MicrosoftGraphBookingQuestionAssignment[]
  defaultDuration: string
  defaultLocation: MicrosoftGraphLocation
  defaultPrice:  | string
  defaultPriceType: MicrosoftGraphBookingPriceType
  defaultReminders: MicrosoftGraphBookingReminder[]
  description: string
  displayName: string
  isHiddenFromCustomers: boolean
  isLocationOnline: boolean
  maximumAttendeesCount: number
  notes: string
  postBuffer: string
  preBuffer: string
  schedulingPolicy: MicrosoftGraphBookingSchedulingPolicy
  smsNotificationsEnabled: boolean
  staffMemberIds: string[]
  webUrl: string
}
export interface MicrosoftGraphBookingStaffMemberBase extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphBookingCurrency extends MicrosoftGraphEntity{
  symbol: string
}
export interface MicrosoftGraphBookingCustomer extends MicrosoftGraphBookingCustomerBase{
  addresses: MicrosoftGraphPhysicalAddress[]
  displayName: string
  emailAddress: string
  phones: MicrosoftGraphPhone[]
}
export interface MicrosoftGraphBookingStaffMember extends MicrosoftGraphBookingStaffMemberBase{
  availabilityIsAffectedByPersonalCalendar: boolean
  displayName: string
  emailAddress: string
  role: MicrosoftGraphBookingStaffRole
  timeZone: string
  useBusinessHours: boolean
  workingHours: MicrosoftGraphBookingWorkHours[]
}
export interface MicrosoftGraphSolutionsRoot{
  bookingBusinesses: MicrosoftGraphBookingBusiness[]
  bookingCurrencies: MicrosoftGraphBookingCurrency[]
}
export interface MicrosoftGraphAuthoredNote extends MicrosoftGraphEntity{
  author: MicrosoftGraphIdentity
  content: MicrosoftGraphItemBody
  createdDateTime: string
}
export interface MicrosoftGraphPrivacy{
  subjectRightsRequests: MicrosoftGraphSubjectRightsRequest[]
}
export interface MicrosoftGraphSubjectRightsRequest extends MicrosoftGraphEntity{
  assignedTo: MicrosoftGraphIdentity
  closedDateTime: string
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  dataSubject: MicrosoftGraphDataSubject
  dataSubjectType: MicrosoftGraphDataSubjectType
  description: string
  displayName: string
  history: MicrosoftGraphSubjectRightsRequestHistory[]
  insight: MicrosoftGraphSubjectRightsRequestDetail
  internalDueDateTime: string
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  regulations: string[]
  stages: MicrosoftGraphSubjectRightsRequestStageDetail[]
  status: MicrosoftGraphSubjectRightsRequestStatus
  type: MicrosoftGraphSubjectRightsRequestType
  notes: MicrosoftGraphAuthoredNote[]
  team: MicrosoftGraphTeam
}
export interface MicrosoftGraphChannel extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  email: string
  isFavoriteByDefault: boolean
  membershipType: MicrosoftGraphChannelMembershipType
  webUrl: string
  filesFolder: MicrosoftGraphDriveItem
  members: MicrosoftGraphConversationMember[]
  messages: MicrosoftGraphChatMessage[]
  tabs: MicrosoftGraphTeamsTab[]
}
export interface MicrosoftGraphGroup extends MicrosoftGraphDirectoryObject{
  assignedLabels: MicrosoftGraphAssignedLabel[]
  assignedLicenses: MicrosoftGraphAssignedLicense[]
  classification: string
  createdDateTime: string
  description: string
  displayName: string
  expirationDateTime: string
  groupTypes: string[]
  hasMembersWithLicenseErrors: boolean
  isAssignableToRole: boolean
  licenseProcessingState: MicrosoftGraphLicenseProcessingState
  mail: string
  mailEnabled: boolean
  mailNickname: string
  membershipRule: string
  membershipRuleProcessingState: string
  onPremisesDomainName: string
  onPremisesLastSyncDateTime: string
  onPremisesNetBiosName: string
  onPremisesProvisioningErrors: MicrosoftGraphOnPremisesProvisioningError[]
  onPremisesSamAccountName: string
  onPremisesSecurityIdentifier: string
  onPremisesSyncEnabled: boolean
  preferredDataLocation: string
  preferredLanguage: string
  proxyAddresses: string[]
  renewedDateTime: string
  securityEnabled: boolean
  securityIdentifier: string
  theme: string
  visibility: string
  allowExternalSenders: boolean
  autoSubscribeNewMembers: boolean
  hideFromAddressLists: boolean
  hideFromOutlookClients: boolean
  isSubscribedByMail: boolean
  unseenCount: number
  isArchived: boolean
  appRoleAssignments: MicrosoftGraphAppRoleAssignment[]
  createdOnBehalfOf: MicrosoftGraphDirectoryObject
  memberOf: MicrosoftGraphDirectoryObject[]
  members: MicrosoftGraphDirectoryObject[]
  membersWithLicenseErrors: MicrosoftGraphDirectoryObject[]
  owners: MicrosoftGraphDirectoryObject[]
  permissionGrants: MicrosoftGraphResourceSpecificPermissionGrant[]
  settings: MicrosoftGraphGroupSetting[]
  transitiveMemberOf: MicrosoftGraphDirectoryObject[]
  transitiveMembers: MicrosoftGraphDirectoryObject[]
  acceptedSenders: MicrosoftGraphDirectoryObject[]
  calendar: MicrosoftGraphCalendar
  calendarView: MicrosoftGraphEvent[]
  conversations: MicrosoftGraphConversation[]
  events: MicrosoftGraphEvent[]
  photo: MicrosoftGraphProfilePhoto
  photos: MicrosoftGraphProfilePhoto[]
  rejectedSenders: MicrosoftGraphDirectoryObject[]
  threads: MicrosoftGraphConversationThread[]
  drive: MicrosoftGraphDrive
  drives: MicrosoftGraphDrive[]
  sites: MicrosoftGraphSite[]
  extensions: MicrosoftGraphExtension[]
  groupLifecyclePolicies: MicrosoftGraphGroupLifecyclePolicy[]
  planner: MicrosoftGraphPlannerGroup
  onenote: MicrosoftGraphOnenote
  team: MicrosoftGraphTeam
}
export interface MicrosoftGraphTeamsAppInstallation extends MicrosoftGraphEntity{
  teamsApp: MicrosoftGraphTeamsApp
  teamsAppDefinition: MicrosoftGraphTeamsAppDefinition
}
export interface MicrosoftGraphConversationMember extends MicrosoftGraphEntity{
  displayName: string
  roles: string[]
  visibleHistoryStartDateTime: string
}
export interface MicrosoftGraphTeamsAsyncOperation extends MicrosoftGraphEntity{
  attemptsCount: number
  createdDateTime: string
  error: MicrosoftGraphOperationError
  lastActionDateTime: string
  operationType: MicrosoftGraphTeamsAsyncOperationType
  status: MicrosoftGraphTeamsAsyncOperationStatus
  targetResourceId: string
  targetResourceLocation: string
}
export interface MicrosoftGraphTeamsTemplate extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphSchedule extends MicrosoftGraphEntity{
  enabled: boolean
  offerShiftRequestsEnabled: boolean
  openShiftsEnabled: boolean
  provisionStatus: MicrosoftGraphOperationStatus
  provisionStatusCode: string
  swapShiftsRequestsEnabled: boolean
  timeClockEnabled: boolean
  timeOffRequestsEnabled: boolean
  timeZone: string
  workforceIntegrationIds: string[]
  offerShiftRequests: MicrosoftGraphOfferShiftRequest[]
  openShiftChangeRequests: MicrosoftGraphOpenShiftChangeRequest[]
  openShifts: MicrosoftGraphOpenShift[]
  schedulingGroups: MicrosoftGraphSchedulingGroup[]
  shifts: MicrosoftGraphShift[]
  swapShiftsChangeRequests: MicrosoftGraphSwapShiftsChangeRequest[]
  timeOffReasons: MicrosoftGraphTimeOffReason[]
  timeOffRequests: MicrosoftGraphTimeOffRequest[]
  timesOff: MicrosoftGraphTimeOff[]
}
export interface MicrosoftGraphCompliance{
}
export interface MicrosoftGraphResourceSpecificPermissionGrant extends MicrosoftGraphDirectoryObject{
  clientAppId: string
  clientId: string
  permission: string
  permissionType: string
  resourceAppId: string
}
export interface MicrosoftGraphGroupSetting extends MicrosoftGraphEntity{
  displayName: string
  templateId: string
  values: MicrosoftGraphSettingValue[]
}
export interface MicrosoftGraphConversation extends MicrosoftGraphEntity{
  hasAttachments: boolean
  lastDeliveredDateTime: string
  preview: string
  topic: string
  uniqueSenders: string[]
  threads: MicrosoftGraphConversationThread[]
}
export interface MicrosoftGraphConversationThread extends MicrosoftGraphEntity{
  ccRecipients: MicrosoftGraphRecipient[]
  hasAttachments: boolean
  isLocked: boolean
  lastDeliveredDateTime: string
  preview: string
  topic: string
  toRecipients: MicrosoftGraphRecipient[]
  uniqueSenders: string[]
  posts: MicrosoftGraphPost[]
}
export interface MicrosoftGraphGroupLifecyclePolicy extends MicrosoftGraphEntity{
  alternateNotificationEmails: string
  groupLifetimeInDays: number
  managedGroupTypes: string
}
export interface MicrosoftGraphPlannerGroup extends MicrosoftGraphEntity{
  plans: MicrosoftGraphPlannerPlan[]
}
export interface MicrosoftGraphSecurity extends MicrosoftGraphEntity{
  alerts: MicrosoftGraphAlert[]
  secureScoreControlProfiles: MicrosoftGraphSecureScoreControlProfile[]
  secureScores: MicrosoftGraphSecureScore[]
}
export interface MicrosoftGraphAlert extends MicrosoftGraphEntity{
  activityGroupName: string
  alertDetections: MicrosoftGraphAlertDetection[]
  assignedTo: string
  azureSubscriptionId: string
  azureTenantId: string
  category: string
  closedDateTime: string
  cloudAppStates: MicrosoftGraphCloudAppSecurityState[]
  comments: string[]
  confidence: number
  createdDateTime: string
  description: string
  detectionIds: string[]
  eventDateTime: string
  feedback: MicrosoftGraphAlertFeedback
  fileStates: MicrosoftGraphFileSecurityState[]
  historyStates: MicrosoftGraphAlertHistoryState[]
  hostStates: MicrosoftGraphHostSecurityState[]
  incidentIds: string[]
  investigationSecurityStates: MicrosoftGraphInvestigationSecurityState[]
  lastEventDateTime: string
  lastModifiedDateTime: string
  malwareStates: MicrosoftGraphMalwareState[]
  messageSecurityStates: MicrosoftGraphMessageSecurityState[]
  networkConnections: MicrosoftGraphNetworkConnection[]
  processes: MicrosoftGraphProcess[]
  recommendedActions: string[]
  registryKeyStates: MicrosoftGraphRegistryKeyState[]
  securityResources: MicrosoftGraphSecurityResource[]
  severity: MicrosoftGraphAlertSeverity
  sourceMaterials: string[]
  status: MicrosoftGraphAlertStatus
  tags: string[]
  title: string
  triggers: MicrosoftGraphAlertTrigger[]
  uriClickSecurityStates: MicrosoftGraphUriClickSecurityState[]
  userStates: MicrosoftGraphUserSecurityState[]
  vendorInformation: MicrosoftGraphSecurityVendorInformation
  vulnerabilityStates: MicrosoftGraphVulnerabilityState[]
}
export interface MicrosoftGraphSecureScoreControlProfile extends MicrosoftGraphEntity{
  actionType: string
  actionUrl: string
  azureTenantId: string
  complianceInformation: MicrosoftGraphComplianceInformation[]
  controlCategory: string
  controlStateUpdates: MicrosoftGraphSecureScoreControlStateUpdate[]
  deprecated: boolean
  implementationCost: string
  lastModifiedDateTime: string
  maxScore:  | string
  rank: number
  remediation: string
  remediationImpact: string
  service: string
  threats: string[]
  tier: string
  title: string
  userImpact: string
  vendorInformation: MicrosoftGraphSecurityVendorInformation
}
export interface MicrosoftGraphSecureScore extends MicrosoftGraphEntity{
  activeUserCount: number
  averageComparativeScores: MicrosoftGraphAverageComparativeScore[]
  azureTenantId: string
  controlScores: MicrosoftGraphControlScore[]
  createdDateTime: string
  currentScore:  | string
  enabledServices: string[]
  licensedUserCount: number
  maxScore:  | string
  vendorInformation: MicrosoftGraphSecurityVendorInformation
}
export interface MicrosoftGraphItemAnalytics extends MicrosoftGraphEntity{
  allTime: MicrosoftGraphItemActivityStat
  itemActivityStats: MicrosoftGraphItemActivityStat[]
  lastSevenDays: MicrosoftGraphItemActivityStat
}
export interface MicrosoftGraphColumnDefinition extends MicrosoftGraphEntity{
  boolean: MicrosoftGraphBooleanColumn
  calculated: MicrosoftGraphCalculatedColumn
  choice: MicrosoftGraphChoiceColumn
  columnGroup: string
  contentApprovalStatus: MicrosoftGraphContentApprovalStatusColumn
  currency: MicrosoftGraphCurrencyColumn
  dateTime: MicrosoftGraphDateTimeColumn
  defaultValue: MicrosoftGraphDefaultColumnValue
  description: string
  displayName: string
  enforceUniqueValues: boolean
  geolocation: MicrosoftGraphGeolocationColumn
  hidden: boolean
  hyperlinkOrPicture: MicrosoftGraphHyperlinkOrPictureColumn
  indexed: boolean
  isDeletable: boolean
  isReorderable: boolean
  isSealed: boolean
  lookup: MicrosoftGraphLookupColumn
  name: string
  number: MicrosoftGraphNumberColumn
  personOrGroup: MicrosoftGraphPersonOrGroupColumn
  propagateChanges: boolean
  readOnly: boolean
  required: boolean
  sourceContentType: MicrosoftGraphContentTypeInfo
  term: MicrosoftGraphTermColumn
  text: MicrosoftGraphTextColumn
  thumbnail: MicrosoftGraphThumbnailColumn
  type: MicrosoftGraphColumnTypes
  validation: MicrosoftGraphColumnValidation
  sourceColumn: MicrosoftGraphColumnDefinition
}
export interface MicrosoftGraphContentType extends MicrosoftGraphEntity{
  associatedHubsUrls: string[]
  description: string
  documentSet: MicrosoftGraphDocumentSet
  documentTemplate: MicrosoftGraphDocumentSetContent
  group: string
  hidden: boolean
  inheritedFrom: MicrosoftGraphItemReference
  isBuiltIn: boolean
  name: string
  order: MicrosoftGraphContentTypeOrder
  parentId: string
  propagateChanges: boolean
  readOnly: boolean
  sealed: boolean
  base: MicrosoftGraphContentType
  baseTypes: MicrosoftGraphContentType[]
  columnLinks: MicrosoftGraphColumnLink[]
  columnPositions: MicrosoftGraphColumnDefinition[]
  columns: MicrosoftGraphColumnDefinition[]
}
export interface MicrosoftGraphList extends MicrosoftGraphBaseItem{
  displayName: string
  list: MicrosoftGraphListInfo
  sharepointIds: MicrosoftGraphSharepointIds
  system: MicrosoftGraphSystemFacet
  columns: MicrosoftGraphColumnDefinition[]
  contentTypes: MicrosoftGraphContentType[]
  drive: MicrosoftGraphDrive
  items: MicrosoftGraphListItem[]
  operations: MicrosoftGraphRichLongRunningOperation[]
  subscriptions: MicrosoftGraphSubscription[]
}
export interface MicrosoftGraphLongRunningOperation extends MicrosoftGraphEntity{
  createdDateTime: string
  lastActionDateTime: string
  resourceLocation: string
  status: MicrosoftGraphLongRunningOperationStatus
  statusDetail: string
}
export interface MicrosoftGraphRichLongRunningOperation extends MicrosoftGraphLongRunningOperation{
  error: MicrosoftGraphPublicError
  percentageComplete: number
  resourceId: string
  type: string
}
export interface MicrosoftGraphPermission extends MicrosoftGraphEntity{
  expirationDateTime: string
  grantedTo: MicrosoftGraphIdentitySet
  grantedToIdentities: MicrosoftGraphIdentitySet[]
  grantedToIdentitiesV2: MicrosoftGraphSharePointIdentitySet[]
  grantedToV2: MicrosoftGraphSharePointIdentitySet
  hasPassword: boolean
  inheritedFrom: MicrosoftGraphItemReference
  invitation: MicrosoftGraphSharingInvitation
  link: MicrosoftGraphSharingLink
  roles: string[]
  shareId: string
}
export interface MicrosoftGraphIdentityApiConnector extends MicrosoftGraphEntity{
  authenticationConfiguration: MicrosoftGraphApiAuthenticationConfigurationBase
  displayName: string
  targetUrl: string
}
export interface MicrosoftGraphIdentityProviderBase extends MicrosoftGraphEntity{
  displayName: string
}
export interface MicrosoftGraphAppleManagedIdentityProvider extends MicrosoftGraphIdentityProviderBase{
  certificateData: string
  developerId: string
  keyId: string
  serviceId: string
}
export interface MicrosoftGraphIdentityUserFlow extends MicrosoftGraphEntity{
  userFlowType: MicrosoftGraphUserFlowType
  userFlowTypeVersion:  | string
}
export interface MicrosoftGraphB2xIdentityUserFlow extends MicrosoftGraphIdentityUserFlow{
  apiConnectorConfiguration: MicrosoftGraphUserFlowApiConnectorConfiguration
  identityProviders: MicrosoftGraphIdentityProvider[]
  languages: MicrosoftGraphUserFlowLanguageConfiguration[]
  userAttributeAssignments: MicrosoftGraphIdentityUserFlowAttributeAssignment[]
  userFlowIdentityProviders: MicrosoftGraphIdentityProviderBase[]
}
export interface MicrosoftGraphIdentityProvider extends MicrosoftGraphEntity{
  clientId: string
  clientSecret: string
  name: string
  type: string
}
export interface MicrosoftGraphUserFlowLanguageConfiguration extends MicrosoftGraphEntity{
  displayName: string
  isEnabled: boolean
  defaultPages: MicrosoftGraphUserFlowLanguagePage[]
  overridesPages: MicrosoftGraphUserFlowLanguagePage[]
}
export interface MicrosoftGraphIdentityUserFlowAttributeAssignment extends MicrosoftGraphEntity{
  displayName: string
  isOptional: boolean
  requiresVerification: boolean
  userAttributeValues: MicrosoftGraphUserAttributeValuesItem[]
  userInputType: MicrosoftGraphIdentityUserFlowAttributeInputType
  userAttribute: MicrosoftGraphIdentityUserFlowAttribute
}
export interface MicrosoftGraphBuiltInIdentityProvider extends MicrosoftGraphIdentityProviderBase{
  identityProviderType: string
}
export interface MicrosoftGraphIdentityUserFlowAttribute extends MicrosoftGraphEntity{
  dataType: MicrosoftGraphIdentityUserFlowAttributeDataType
  description: string
  displayName: string
  userFlowAttributeType: MicrosoftGraphIdentityUserFlowAttributeType
}
export interface MicrosoftGraphIdentityBuiltInUserFlowAttribute extends MicrosoftGraphIdentityUserFlowAttribute{
}
export interface MicrosoftGraphIdentityContainer extends MicrosoftGraphEntity{
  conditionalAccess: MicrosoftGraphConditionalAccessRoot
  apiConnectors: MicrosoftGraphIdentityApiConnector[]
  b2xUserFlows: MicrosoftGraphB2xIdentityUserFlow[]
  identityProviders: MicrosoftGraphIdentityProviderBase[]
  userFlowAttributes: MicrosoftGraphIdentityUserFlowAttribute[]
}
export interface MicrosoftGraphConditionalAccessRoot extends MicrosoftGraphEntity{
  namedLocations: MicrosoftGraphNamedLocation[]
  policies: MicrosoftGraphConditionalAccessPolicy[]
}
export interface MicrosoftGraphIdentityCustomUserFlowAttribute extends MicrosoftGraphIdentityUserFlowAttribute{
}
export interface MicrosoftGraphSocialIdentityProvider extends MicrosoftGraphIdentityProviderBase{
  clientId: string
  clientSecret: string
  identityProviderType: string
}
export interface MicrosoftGraphUserFlowLanguagePage extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphAdministrativeUnit extends MicrosoftGraphDirectoryObject{
  description: string
  displayName: string
  visibility: string
  members: MicrosoftGraphDirectoryObject[]
  scopedRoleMembers: MicrosoftGraphScopedRoleMembership[]
  extensions: MicrosoftGraphExtension[]
}
export interface MicrosoftGraphAppScope extends MicrosoftGraphEntity{
  displayName: string
  type: string
}
export interface MicrosoftGraphCertificateBasedAuthConfiguration extends MicrosoftGraphEntity{
  certificateAuthorities: MicrosoftGraphCertificateAuthority[]
}
export interface MicrosoftGraphContract extends MicrosoftGraphDirectoryObject{
  contractType: string
  customerId: string
  defaultDomainName: string
  displayName: string
}
export interface MicrosoftGraphDevice extends MicrosoftGraphDirectoryObject{
  accountEnabled: boolean
  alternativeSecurityIds: MicrosoftGraphAlternativeSecurityId[]
  approximateLastSignInDateTime: string
  complianceExpirationDateTime: string
  deviceId: string
  deviceMetadata: string
  deviceVersion: number
  displayName: string
  isCompliant: boolean
  isManaged: boolean
  mdmAppId: string
  onPremisesLastSyncDateTime: string
  onPremisesSyncEnabled: boolean
  operatingSystem: string
  operatingSystemVersion: string
  physicalIds: string[]
  profileType: string
  systemLabels: string[]
  trustType: string
  memberOf: MicrosoftGraphDirectoryObject[]
  registeredOwners: MicrosoftGraphDirectoryObject[]
  registeredUsers: MicrosoftGraphDirectoryObject[]
  transitiveMemberOf: MicrosoftGraphDirectoryObject[]
  extensions: MicrosoftGraphExtension[]
}
export interface MicrosoftGraphDirectory extends MicrosoftGraphEntity{
  administrativeUnits: MicrosoftGraphAdministrativeUnit[]
  deletedItems: MicrosoftGraphDirectoryObject[]
  federationConfigurations: MicrosoftGraphIdentityProviderBase[]
}
export interface MicrosoftGraphDirectoryObjectPartnerReference extends MicrosoftGraphDirectoryObject{
  description: string
  displayName: string
  externalPartnerTenantId: string
  objectType: string
}
export interface MicrosoftGraphDirectoryRole extends MicrosoftGraphDirectoryObject{
  description: string
  displayName: string
  roleTemplateId: string
  members: MicrosoftGraphDirectoryObject[]
  scopedMembers: MicrosoftGraphScopedRoleMembership[]
}
export interface MicrosoftGraphDirectoryRoleTemplate extends MicrosoftGraphDirectoryObject{
  description: string
  displayName: string
}
export interface MicrosoftGraphDomain extends MicrosoftGraphEntity{
  authenticationType: string
  availabilityStatus: string
  isAdminManaged: boolean
  isDefault: boolean
  isInitial: boolean
  isRoot: boolean
  isVerified: boolean
  manufacturer: string
  model: string
  passwordNotificationWindowInDays: number
  passwordValidityPeriodInDays: number
  state: MicrosoftGraphDomainState
  supportedServices: string[]
  domainNameReferences: MicrosoftGraphDirectoryObject[]
  federationConfiguration: MicrosoftGraphInternalDomainFederation[]
  serviceConfigurationRecords: MicrosoftGraphDomainDnsRecord[]
  verificationDnsRecords: MicrosoftGraphDomainDnsRecord[]
}
export interface MicrosoftGraphSamlOrWsFedProvider extends MicrosoftGraphIdentityProviderBase{
  issuerUri: string
  metadataExchangeUri: string
  passiveSignInUri: string
  preferredAuthenticationProtocol: MicrosoftGraphAuthenticationProtocol
  signingCertificate: string
}
export interface MicrosoftGraphInternalDomainFederation extends MicrosoftGraphSamlOrWsFedProvider{
  activeSignInUri: string
  federatedIdpMfaBehavior: MicrosoftGraphFederatedIdpMfaBehavior
  isSignedAuthenticationRequestRequired: boolean
  nextSigningCertificate: string
  promptLoginBehavior: MicrosoftGraphPromptLoginBehavior
  signingCertificateUpdateStatus: MicrosoftGraphSigningCertificateUpdateStatus
  signOutUri: string
}
export interface MicrosoftGraphDomainDnsRecord extends MicrosoftGraphEntity{
  isOptional: boolean
  label: string
  recordType: string
  supportedService: string
  ttl: number
}
export interface MicrosoftGraphDomainDnsCnameRecord extends MicrosoftGraphDomainDnsRecord{
  canonicalName: string
}
export interface MicrosoftGraphDomainDnsMxRecord extends MicrosoftGraphDomainDnsRecord{
  mailExchange: string
  preference: number
}
export interface MicrosoftGraphDomainDnsSrvRecord extends MicrosoftGraphDomainDnsRecord{
  nameTarget: string
  port: number
  priority: number
  protocol: string
  service: string
  weight: number
}
export interface MicrosoftGraphDomainDnsTxtRecord extends MicrosoftGraphDomainDnsRecord{
  text: string
}
export interface MicrosoftGraphDomainDnsUnavailableRecord extends MicrosoftGraphDomainDnsRecord{
  description: string
}
export interface MicrosoftGraphExternalDomainName extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphGroupSettingTemplate extends MicrosoftGraphDirectoryObject{
  description: string
  displayName: string
  values: MicrosoftGraphSettingTemplateValue[]
}
export interface MicrosoftGraphOrganization extends MicrosoftGraphDirectoryObject{
  assignedPlans: MicrosoftGraphAssignedPlan[]
  businessPhones: string[]
  city: string
  country: string
  countryLetterCode: string
  createdDateTime: string
  displayName: string
  marketingNotificationEmails: string[]
  onPremisesLastSyncDateTime: string
  onPremisesSyncEnabled: boolean
  postalCode: string
  preferredLanguage: string
  privacyProfile: MicrosoftGraphPrivacyProfile
  provisionedPlans: MicrosoftGraphProvisionedPlan[]
  securityComplianceNotificationMails: string[]
  securityComplianceNotificationPhones: string[]
  state: string
  street: string
  technicalNotificationMails: string[]
  tenantType: string
  verifiedDomains: MicrosoftGraphVerifiedDomain[]
  mobileDeviceManagementAuthority: MicrosoftGraphMdmAuthority
  branding: MicrosoftGraphOrganizationalBranding
  certificateBasedAuthConfiguration: MicrosoftGraphCertificateBasedAuthConfiguration[]
  extensions: MicrosoftGraphExtension[]
}
export interface MicrosoftGraphOrganizationalBrandingProperties extends MicrosoftGraphEntity{
  backgroundColor: string
  backgroundImage: string
  backgroundImageRelativeUrl: string
  bannerLogo: string
  bannerLogoRelativeUrl: string
  cdnList: string[]
  signInPageText: string
  squareLogo: string
  squareLogoRelativeUrl: string
  usernameHintText: string
}
export interface MicrosoftGraphOrganizationalBranding extends MicrosoftGraphOrganizationalBrandingProperties{
  localizations: MicrosoftGraphOrganizationalBrandingLocalization[]
}
export interface MicrosoftGraphOrganizationalBrandingLocalization extends MicrosoftGraphOrganizationalBrandingProperties{
}
export interface MicrosoftGraphOrgContact extends MicrosoftGraphDirectoryObject{
  addresses: MicrosoftGraphPhysicalOfficeAddress[]
  companyName: string
  department: string
  displayName: string
  givenName: string
  jobTitle: string
  mail: string
  mailNickname: string
  onPremisesLastSyncDateTime: string
  onPremisesProvisioningErrors: MicrosoftGraphOnPremisesProvisioningError[]
  onPremisesSyncEnabled: boolean
  phones: MicrosoftGraphPhone[]
  proxyAddresses: string[]
  surname: string
  directReports: MicrosoftGraphDirectoryObject[]
  manager: MicrosoftGraphDirectoryObject
  memberOf: MicrosoftGraphDirectoryObject[]
  transitiveMemberOf: MicrosoftGraphDirectoryObject[]
}
export interface MicrosoftGraphPermissionGrantConditionSet extends MicrosoftGraphEntity{
  clientApplicationIds: string[]
  clientApplicationPublisherIds: string[]
  clientApplicationsFromVerifiedPublisherOnly: boolean
  clientApplicationTenantIds: string[]
  permissionClassification: string
  permissions: string[]
  permissionType: MicrosoftGraphPermissionType
  resourceApplication: string
}
export interface MicrosoftGraphRbacApplication extends MicrosoftGraphEntity{
  roleAssignments: MicrosoftGraphUnifiedRoleAssignment[]
  roleDefinitions: MicrosoftGraphUnifiedRoleDefinition[]
  roleAssignmentScheduleInstances: MicrosoftGraphUnifiedRoleAssignmentScheduleInstance[]
  roleAssignmentScheduleRequests: MicrosoftGraphUnifiedRoleAssignmentScheduleRequest[]
  roleAssignmentSchedules: MicrosoftGraphUnifiedRoleAssignmentSchedule[]
  roleEligibilityScheduleInstances: MicrosoftGraphUnifiedRoleEligibilityScheduleInstance[]
  roleEligibilityScheduleRequests: MicrosoftGraphUnifiedRoleEligibilityScheduleRequest[]
  roleEligibilitySchedules: MicrosoftGraphUnifiedRoleEligibilitySchedule[]
}
export interface MicrosoftGraphUnifiedRoleAssignment extends MicrosoftGraphEntity{
  appScopeId: string
  condition: string
  directoryScopeId: string
  principalId: string
  roleDefinitionId: string
  appScope: MicrosoftGraphAppScope
  directoryScope: MicrosoftGraphDirectoryObject
  principal: MicrosoftGraphDirectoryObject
  roleDefinition: MicrosoftGraphUnifiedRoleDefinition
}
export interface MicrosoftGraphUnifiedRoleDefinition extends MicrosoftGraphEntity{
  description: string
  displayName: string
  isBuiltIn: boolean
  isEnabled: boolean
  resourceScopes: string[]
  rolePermissions: MicrosoftGraphUnifiedRolePermission[]
  templateId: string
  version: string
  inheritsPermissionsFrom: MicrosoftGraphUnifiedRoleDefinition[]
}
export interface MicrosoftGraphUnifiedRoleScheduleInstanceBase extends MicrosoftGraphEntity{
  appScopeId: string
  directoryScopeId: string
  principalId: string
  roleDefinitionId: string
  appScope: MicrosoftGraphAppScope
  directoryScope: MicrosoftGraphDirectoryObject
  principal: MicrosoftGraphDirectoryObject
  roleDefinition: MicrosoftGraphUnifiedRoleDefinition
}
export interface MicrosoftGraphUnifiedRoleAssignmentScheduleInstance extends MicrosoftGraphUnifiedRoleScheduleInstanceBase{
  assignmentType: string
  endDateTime: string
  memberType: string
  roleAssignmentOriginId: string
  roleAssignmentScheduleId: string
  startDateTime: string
  activatedUsing: MicrosoftGraphUnifiedRoleEligibilityScheduleInstance
}
export interface MicrosoftGraphRequest extends MicrosoftGraphEntity{
  approvalId: string
  completedDateTime: string
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  customData: string
  status: string
}
export interface MicrosoftGraphUnifiedRoleAssignmentScheduleRequest extends MicrosoftGraphRequest{
  action: MicrosoftGraphUnifiedRoleScheduleRequestActions
  appScopeId: string
  directoryScopeId: string
  isValidationOnly: boolean
  justification: string
  principalId: string
  roleDefinitionId: string
  scheduleInfo: MicrosoftGraphRequestSchedule
  targetScheduleId: string
  ticketInfo: MicrosoftGraphTicketInfo
  activatedUsing: MicrosoftGraphUnifiedRoleEligibilitySchedule
  appScope: MicrosoftGraphAppScope
  directoryScope: MicrosoftGraphDirectoryObject
  principal: MicrosoftGraphDirectoryObject
  roleDefinition: MicrosoftGraphUnifiedRoleDefinition
  targetSchedule: MicrosoftGraphUnifiedRoleAssignmentSchedule
}
export interface MicrosoftGraphUnifiedRoleScheduleBase extends MicrosoftGraphEntity{
  appScopeId: string
  createdDateTime: string
  createdUsing: string
  directoryScopeId: string
  modifiedDateTime: string
  principalId: string
  roleDefinitionId: string
  status: string
  appScope: MicrosoftGraphAppScope
  directoryScope: MicrosoftGraphDirectoryObject
  principal: MicrosoftGraphDirectoryObject
  roleDefinition: MicrosoftGraphUnifiedRoleDefinition
}
export interface MicrosoftGraphUnifiedRoleAssignmentSchedule extends MicrosoftGraphUnifiedRoleScheduleBase{
  assignmentType: string
  memberType: string
  scheduleInfo: MicrosoftGraphRequestSchedule
  activatedUsing: MicrosoftGraphUnifiedRoleEligibilitySchedule
}
export interface MicrosoftGraphUnifiedRoleEligibilityScheduleInstance extends MicrosoftGraphUnifiedRoleScheduleInstanceBase{
  endDateTime: string
  memberType: string
  roleEligibilityScheduleId: string
  startDateTime: string
}
export interface MicrosoftGraphUnifiedRoleEligibilityScheduleRequest extends MicrosoftGraphRequest{
  action: MicrosoftGraphUnifiedRoleScheduleRequestActions
  appScopeId: string
  directoryScopeId: string
  isValidationOnly: boolean
  justification: string
  principalId: string
  roleDefinitionId: string
  scheduleInfo: MicrosoftGraphRequestSchedule
  targetScheduleId: string
  ticketInfo: MicrosoftGraphTicketInfo
  appScope: MicrosoftGraphAppScope
  directoryScope: MicrosoftGraphDirectoryObject
  principal: MicrosoftGraphDirectoryObject
  roleDefinition: MicrosoftGraphUnifiedRoleDefinition
  targetSchedule: MicrosoftGraphUnifiedRoleEligibilitySchedule
}
export interface MicrosoftGraphUnifiedRoleEligibilitySchedule extends MicrosoftGraphUnifiedRoleScheduleBase{
  memberType: string
  scheduleInfo: MicrosoftGraphRequestSchedule
}
export interface MicrosoftGraphRoleManagement{
  directory: MicrosoftGraphRbacApplication
  entitlementManagement: MicrosoftGraphRbacApplication
}
export interface MicrosoftGraphSamlOrWsFedExternalDomainFederation extends MicrosoftGraphSamlOrWsFedProvider{
  domains: MicrosoftGraphExternalDomainName[]
}
export interface MicrosoftGraphSubscribedSku extends MicrosoftGraphEntity{
  appliesTo: string
  capabilityStatus: string
  consumedUnits: number
  prepaidUnits: MicrosoftGraphLicenseUnitsDetail
  servicePlans: MicrosoftGraphServicePlanInfo[]
  skuId: string
  skuPartNumber: string
}
export interface MicrosoftGraphEducationAssignment extends MicrosoftGraphEntity{
  addedStudentAction: MicrosoftGraphEducationAddedStudentAction
  addToCalendarAction: MicrosoftGraphEducationAddToCalendarOptions
  allowLateSubmissions: boolean
  allowStudentsToAddResourcesToSubmission: boolean
  assignDateTime: string
  assignedDateTime: string
  assignTo: MicrosoftGraphEducationAssignmentRecipient
  classId: string
  closeDateTime: string
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  displayName: string
  dueDateTime: string
  grading: MicrosoftGraphEducationAssignmentGradeType
  instructions: MicrosoftGraphEducationItemBody
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  notificationChannelUrl: string
  resourcesFolderUrl: string
  status: MicrosoftGraphEducationAssignmentStatus
  webUrl: string
  categories: MicrosoftGraphEducationCategory[]
  resources: MicrosoftGraphEducationAssignmentResource[]
  rubric: MicrosoftGraphEducationRubric
  submissions: MicrosoftGraphEducationSubmission[]
}
export interface MicrosoftGraphEducationCategory extends MicrosoftGraphEntity{
  displayName: string
}
export interface MicrosoftGraphEducationAssignmentResource extends MicrosoftGraphEntity{
  distributeForStudentWork: boolean
  resource: MicrosoftGraphEducationResource
}
export interface MicrosoftGraphEducationRubric extends MicrosoftGraphEntity{
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  description: MicrosoftGraphEducationItemBody
  displayName: string
  grading: MicrosoftGraphEducationAssignmentGradeType
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  levels: MicrosoftGraphRubricLevel[]
  qualities: MicrosoftGraphRubricQuality[]
}
export interface MicrosoftGraphEducationSubmission extends MicrosoftGraphEntity{
  reassignedBy: MicrosoftGraphIdentitySet
  reassignedDateTime: string
  recipient: MicrosoftGraphEducationSubmissionRecipient
  resourcesFolderUrl: string
  returnedBy: MicrosoftGraphIdentitySet
  returnedDateTime: string
  status: MicrosoftGraphEducationSubmissionStatus
  submittedBy: MicrosoftGraphIdentitySet
  submittedDateTime: string
  unsubmittedBy: MicrosoftGraphIdentitySet
  unsubmittedDateTime: string
  outcomes: MicrosoftGraphEducationOutcome[]
  resources: MicrosoftGraphEducationSubmissionResource[]
  submittedResources: MicrosoftGraphEducationSubmissionResource[]
}
export interface MicrosoftGraphEducationAssignmentDefaults extends MicrosoftGraphEntity{
  addedStudentAction: MicrosoftGraphEducationAddedStudentAction
  addToCalendarAction: MicrosoftGraphEducationAddToCalendarOptions
  dueTime: string
  notificationChannelUrl: string
}
export interface MicrosoftGraphEducationAssignmentSettings extends MicrosoftGraphEntity{
  submissionAnimationDisabled: boolean
}
export interface MicrosoftGraphEducationClass extends MicrosoftGraphEntity{
  classCode: string
  course: MicrosoftGraphEducationCourse
  createdBy: MicrosoftGraphIdentitySet
  description: string
  displayName: string
  externalId: string
  externalName: string
  externalSource: MicrosoftGraphEducationExternalSource
  externalSourceDetail: string
  grade: string
  mailNickname: string
  term: MicrosoftGraphEducationTerm
  assignmentCategories: MicrosoftGraphEducationCategory[]
  assignmentDefaults: MicrosoftGraphEducationAssignmentDefaults
  assignments: MicrosoftGraphEducationAssignment[]
  assignmentSettings: MicrosoftGraphEducationAssignmentSettings
  group: MicrosoftGraphGroup
  members: MicrosoftGraphEducationUser[]
  schools: MicrosoftGraphEducationSchool[]
  teachers: MicrosoftGraphEducationUser[]
}
export interface MicrosoftGraphEducationUser extends MicrosoftGraphEntity{
  relatedContacts: MicrosoftGraphRelatedContact[]
  accountEnabled: boolean
  assignedLicenses: MicrosoftGraphAssignedLicense[]
  assignedPlans: MicrosoftGraphAssignedPlan[]
  businessPhones: string[]
  createdBy: MicrosoftGraphIdentitySet
  department: string
  displayName: string
  externalSource: MicrosoftGraphEducationExternalSource
  externalSourceDetail: string
  givenName: string
  mail: string
  mailingAddress: MicrosoftGraphPhysicalAddress
  mailNickname: string
  middleName: string
  mobilePhone: string
  officeLocation: string
  onPremisesInfo: MicrosoftGraphEducationOnPremisesInfo
  passwordPolicies: string
  passwordProfile: MicrosoftGraphPasswordProfile
  preferredLanguage: string
  primaryRole: MicrosoftGraphEducationUserRole
  provisionedPlans: MicrosoftGraphProvisionedPlan[]
  refreshTokensValidFromDateTime: string
  residenceAddress: MicrosoftGraphPhysicalAddress
  showInAddressList: boolean
  student: MicrosoftGraphEducationStudent
  surname: string
  teacher: MicrosoftGraphEducationTeacher
  usageLocation: string
  userPrincipalName: string
  userType: string
  assignments: MicrosoftGraphEducationAssignment[]
  rubrics: MicrosoftGraphEducationRubric[]
  classes: MicrosoftGraphEducationClass[]
  schools: MicrosoftGraphEducationSchool[]
  taughtClasses: MicrosoftGraphEducationClass[]
  user: MicrosoftGraphUser
}
export interface MicrosoftGraphEducationOrganization extends MicrosoftGraphEntity{
  description: string
  displayName: string
  externalSource: MicrosoftGraphEducationExternalSource
  externalSourceDetail: string
}
export interface MicrosoftGraphEducationSchool extends MicrosoftGraphEducationOrganization{
  address: MicrosoftGraphPhysicalAddress
  createdBy: MicrosoftGraphIdentitySet
  externalId: string
  externalPrincipalId: string
  fax: string
  highestGrade: string
  lowestGrade: string
  phone: string
  principalEmail: string
  principalName: string
  schoolNumber: string
  administrativeUnit: MicrosoftGraphAdministrativeUnit
  classes: MicrosoftGraphEducationClass[]
  users: MicrosoftGraphEducationUser[]
}
export interface MicrosoftGraphEducationOutcome extends MicrosoftGraphEntity{
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
}
export interface MicrosoftGraphEducationFeedbackOutcome extends MicrosoftGraphEducationOutcome{
  feedback: MicrosoftGraphEducationFeedback
  publishedFeedback: MicrosoftGraphEducationFeedback
}
export interface MicrosoftGraphEducationPointsOutcome extends MicrosoftGraphEducationOutcome{
  points: MicrosoftGraphEducationAssignmentPointsGrade
  publishedPoints: MicrosoftGraphEducationAssignmentPointsGrade
}
export interface MicrosoftGraphEducationRoot{
  classes: MicrosoftGraphEducationClass[]
  me: MicrosoftGraphEducationUser
  schools: MicrosoftGraphEducationSchool[]
  users: MicrosoftGraphEducationUser[]
}
export interface MicrosoftGraphEducationRubricOutcome extends MicrosoftGraphEducationOutcome{
  publishedRubricQualityFeedback: MicrosoftGraphRubricQualityFeedbackModel[]
  publishedRubricQualitySelectedLevels: MicrosoftGraphRubricQualitySelectedColumnModel[]
  rubricQualityFeedback: MicrosoftGraphRubricQualityFeedbackModel[]
  rubricQualitySelectedLevels: MicrosoftGraphRubricQualitySelectedColumnModel[]
}
export interface MicrosoftGraphEducationSubmissionResource extends MicrosoftGraphEntity{
  assignmentResourceUrl: string
  resource: MicrosoftGraphEducationResource
}
export interface MicrosoftGraphDriveItem extends MicrosoftGraphBaseItem{
  audio: MicrosoftGraphAudio
  bundle: MicrosoftGraphBundle
  content: string
  cTag: string
  deleted: MicrosoftGraphDeleted
  file: MicrosoftGraphFile
  fileSystemInfo: MicrosoftGraphFileSystemInfo
  folder: MicrosoftGraphFolder
  image: MicrosoftGraphImage
  location: MicrosoftGraphGeoCoordinates
  malware: MicrosoftGraphMalware
  package: MicrosoftGraphPackage
  pendingOperations: MicrosoftGraphPendingOperations
  photo: MicrosoftGraphPhoto
  publication: MicrosoftGraphPublicationFacet
  remoteItem: MicrosoftGraphRemoteItem
  root: MicrosoftGraphRoot
  searchResult: MicrosoftGraphSearchResult
  shared: MicrosoftGraphShared
  sharepointIds: MicrosoftGraphSharepointIds
  size: number
  specialFolder: MicrosoftGraphSpecialFolder
  video: MicrosoftGraphVideo
  webDavUrl: string
  workbook: MicrosoftGraphWorkbook
  analytics: MicrosoftGraphItemAnalytics
  children: MicrosoftGraphDriveItem[]
  listItem: MicrosoftGraphListItem
  permissions: MicrosoftGraphPermission[]
  subscriptions: MicrosoftGraphSubscription[]
  thumbnails: MicrosoftGraphThumbnailSet[]
  versions: MicrosoftGraphDriveItemVersion[]
}
export interface MicrosoftGraphWorkbook extends MicrosoftGraphEntity{
  application: MicrosoftGraphWorkbookApplication
  comments: MicrosoftGraphWorkbookComment[]
  functions: MicrosoftGraphWorkbookFunctions
  names: MicrosoftGraphWorkbookNamedItem[]
  operations: MicrosoftGraphWorkbookOperation[]
  tables: MicrosoftGraphWorkbookTable[]
  worksheets: MicrosoftGraphWorkbookWorksheet[]
}
export interface MicrosoftGraphListItem extends MicrosoftGraphBaseItem{
  contentType: MicrosoftGraphContentTypeInfo
  sharepointIds: MicrosoftGraphSharepointIds
  analytics: MicrosoftGraphItemAnalytics
  driveItem: MicrosoftGraphDriveItem
  fields: MicrosoftGraphFieldValueSet
  versions: MicrosoftGraphListItemVersion[]
}
export interface MicrosoftGraphSubscription extends MicrosoftGraphEntity{
  applicationId: string
  changeType: string
  clientState: string
  creatorId: string
  encryptionCertificate: string
  encryptionCertificateId: string
  expirationDateTime: string
  includeResourceData: boolean
  latestSupportedTlsVersion: string
  lifecycleNotificationUrl: string
  notificationQueryOptions: string
  notificationUrl: string
  notificationUrlAppId: string
  resource: string
}
export interface MicrosoftGraphThumbnailSet extends MicrosoftGraphEntity{
  large: MicrosoftGraphThumbnail
  medium: MicrosoftGraphThumbnail
  small: MicrosoftGraphThumbnail
  source: MicrosoftGraphThumbnail
}
export interface MicrosoftGraphBaseItemVersion extends MicrosoftGraphEntity{
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  publication: MicrosoftGraphPublicationFacet
}
export interface MicrosoftGraphDriveItemVersion extends MicrosoftGraphBaseItemVersion{
  content: string
  size: number
}
export interface MicrosoftGraphWorkbookApplication extends MicrosoftGraphEntity{
  calculationMode: string
}
export interface MicrosoftGraphWorkbookComment extends MicrosoftGraphEntity{
  content: string
  contentType: string
  replies: MicrosoftGraphWorkbookCommentReply[]
}
export interface MicrosoftGraphWorkbookFunctions extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphWorkbookNamedItem extends MicrosoftGraphEntity{
  comment: string
  name: string
  scope: string
  type: string
  value: MicrosoftGraphJson
  visible: boolean
  worksheet: MicrosoftGraphWorkbookWorksheet
}
export interface MicrosoftGraphWorkbookOperation extends MicrosoftGraphEntity{
  error: MicrosoftGraphWorkbookOperationError
  resourceLocation: string
  status: MicrosoftGraphWorkbookOperationStatus
}
export interface MicrosoftGraphWorkbookTable extends MicrosoftGraphEntity{
  highlightFirstColumn: boolean
  highlightLastColumn: boolean
  legacyId: string
  name: string
  showBandedColumns: boolean
  showBandedRows: boolean
  showFilterButton: boolean
  showHeaders: boolean
  showTotals: boolean
  style: string
  columns: MicrosoftGraphWorkbookTableColumn[]
  rows: MicrosoftGraphWorkbookTableRow[]
  sort: MicrosoftGraphWorkbookTableSort
  worksheet: MicrosoftGraphWorkbookWorksheet
}
export interface MicrosoftGraphWorkbookWorksheet extends MicrosoftGraphEntity{
  name: string
  position: number
  visibility: string
  charts: MicrosoftGraphWorkbookChart[]
  names: MicrosoftGraphWorkbookNamedItem[]
  pivotTables: MicrosoftGraphWorkbookPivotTable[]
  protection: MicrosoftGraphWorkbookWorksheetProtection
  tables: MicrosoftGraphWorkbookTable[]
}
export interface MicrosoftGraphWorkbookChart extends MicrosoftGraphEntity{
  height:  | string
  left:  | string
  name: string
  top:  | string
  width:  | string
  axes: MicrosoftGraphWorkbookChartAxes
  dataLabels: MicrosoftGraphWorkbookChartDataLabels
  format: MicrosoftGraphWorkbookChartAreaFormat
  legend: MicrosoftGraphWorkbookChartLegend
  series: MicrosoftGraphWorkbookChartSeries[]
  title: MicrosoftGraphWorkbookChartTitle
  worksheet: MicrosoftGraphWorkbookWorksheet
}
export interface MicrosoftGraphWorkbookChartAxes extends MicrosoftGraphEntity{
  categoryAxis: MicrosoftGraphWorkbookChartAxis
  seriesAxis: MicrosoftGraphWorkbookChartAxis
  valueAxis: MicrosoftGraphWorkbookChartAxis
}
export interface MicrosoftGraphWorkbookChartDataLabels extends MicrosoftGraphEntity{
  position: string
  separator: string
  showBubbleSize: boolean
  showCategoryName: boolean
  showLegendKey: boolean
  showPercentage: boolean
  showSeriesName: boolean
  showValue: boolean
  format: MicrosoftGraphWorkbookChartDataLabelFormat
}
export interface MicrosoftGraphWorkbookChartAreaFormat extends MicrosoftGraphEntity{
  fill: MicrosoftGraphWorkbookChartFill
  font: MicrosoftGraphWorkbookChartFont
}
export interface MicrosoftGraphWorkbookChartLegend extends MicrosoftGraphEntity{
  overlay: boolean
  position: string
  visible: boolean
  format: MicrosoftGraphWorkbookChartLegendFormat
}
export interface MicrosoftGraphWorkbookChartSeries extends MicrosoftGraphEntity{
  name: string
  format: MicrosoftGraphWorkbookChartSeriesFormat
  points: MicrosoftGraphWorkbookChartPoint[]
}
export interface MicrosoftGraphWorkbookChartTitle extends MicrosoftGraphEntity{
  overlay: boolean
  text: string
  visible: boolean
  format: MicrosoftGraphWorkbookChartTitleFormat
}
export interface MicrosoftGraphWorkbookChartFill extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphWorkbookChartFont extends MicrosoftGraphEntity{
  bold: boolean
  color: string
  italic: boolean
  name: string
  size:  | string
  underline: string
}
export interface MicrosoftGraphWorkbookChartAxis extends MicrosoftGraphEntity{
  majorUnit: MicrosoftGraphJson
  maximum: MicrosoftGraphJson
  minimum: MicrosoftGraphJson
  minorUnit: MicrosoftGraphJson
  format: MicrosoftGraphWorkbookChartAxisFormat
  majorGridlines: MicrosoftGraphWorkbookChartGridlines
  minorGridlines: MicrosoftGraphWorkbookChartGridlines
  title: MicrosoftGraphWorkbookChartAxisTitle
}
export interface MicrosoftGraphWorkbookChartAxisFormat extends MicrosoftGraphEntity{
  font: MicrosoftGraphWorkbookChartFont
  line: MicrosoftGraphWorkbookChartLineFormat
}
export interface MicrosoftGraphWorkbookChartGridlines extends MicrosoftGraphEntity{
  visible: boolean
  format: MicrosoftGraphWorkbookChartGridlinesFormat
}
export interface MicrosoftGraphWorkbookChartAxisTitle extends MicrosoftGraphEntity{
  text: string
  visible: boolean
  format: MicrosoftGraphWorkbookChartAxisTitleFormat
}
export interface MicrosoftGraphWorkbookChartLineFormat extends MicrosoftGraphEntity{
  color: string
}
export interface MicrosoftGraphWorkbookChartAxisTitleFormat extends MicrosoftGraphEntity{
  font: MicrosoftGraphWorkbookChartFont
}
export interface MicrosoftGraphWorkbookChartDataLabelFormat extends MicrosoftGraphEntity{
  fill: MicrosoftGraphWorkbookChartFill
  font: MicrosoftGraphWorkbookChartFont
}
export interface MicrosoftGraphWorkbookChartGridlinesFormat extends MicrosoftGraphEntity{
  line: MicrosoftGraphWorkbookChartLineFormat
}
export interface MicrosoftGraphWorkbookChartLegendFormat extends MicrosoftGraphEntity{
  fill: MicrosoftGraphWorkbookChartFill
  font: MicrosoftGraphWorkbookChartFont
}
export interface MicrosoftGraphWorkbookChartPoint extends MicrosoftGraphEntity{
  value: MicrosoftGraphJson
  format: MicrosoftGraphWorkbookChartPointFormat
}
export interface MicrosoftGraphWorkbookChartPointFormat extends MicrosoftGraphEntity{
  fill: MicrosoftGraphWorkbookChartFill
}
export interface MicrosoftGraphWorkbookChartSeriesFormat extends MicrosoftGraphEntity{
  fill: MicrosoftGraphWorkbookChartFill
  line: MicrosoftGraphWorkbookChartLineFormat
}
export interface MicrosoftGraphWorkbookChartTitleFormat extends MicrosoftGraphEntity{
  fill: MicrosoftGraphWorkbookChartFill
  font: MicrosoftGraphWorkbookChartFont
}
export interface MicrosoftGraphWorkbookCommentReply extends MicrosoftGraphEntity{
  content: string
  contentType: string
}
export interface MicrosoftGraphWorkbookFilter extends MicrosoftGraphEntity{
  criteria: MicrosoftGraphWorkbookFilterCriteria
}
export interface MicrosoftGraphWorkbookFormatProtection extends MicrosoftGraphEntity{
  formulaHidden: boolean
  locked: boolean
}
export interface MicrosoftGraphWorkbookFunctionResult extends MicrosoftGraphEntity{
  error: string
  value: MicrosoftGraphJson
}
export interface MicrosoftGraphWorkbookPivotTable extends MicrosoftGraphEntity{
  name: string
  worksheet: MicrosoftGraphWorkbookWorksheet
}
export interface MicrosoftGraphWorkbookRange extends MicrosoftGraphEntity{
  address: string
  addressLocal: string
  cellCount: number
  columnCount: number
  columnHidden: boolean
  columnIndex: number
  formulas: MicrosoftGraphJson
  formulasLocal: MicrosoftGraphJson
  formulasR1C1: MicrosoftGraphJson
  hidden: boolean
  numberFormat: MicrosoftGraphJson
  rowCount: number
  rowHidden: boolean
  rowIndex: number
  text: MicrosoftGraphJson
  values: MicrosoftGraphJson
  valueTypes: MicrosoftGraphJson
  format: MicrosoftGraphWorkbookRangeFormat
  sort: MicrosoftGraphWorkbookRangeSort
  worksheet: MicrosoftGraphWorkbookWorksheet
}
export interface MicrosoftGraphWorkbookRangeFormat extends MicrosoftGraphEntity{
  columnWidth:  | string
  horizontalAlignment: string
  rowHeight:  | string
  verticalAlignment: string
  wrapText: boolean
  borders: MicrosoftGraphWorkbookRangeBorder[]
  fill: MicrosoftGraphWorkbookRangeFill
  font: MicrosoftGraphWorkbookRangeFont
  protection: MicrosoftGraphWorkbookFormatProtection
}
export interface MicrosoftGraphWorkbookRangeSort extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphWorkbookRangeBorder extends MicrosoftGraphEntity{
  color: string
  sideIndex: string
  style: string
  weight: string
}
export interface MicrosoftGraphWorkbookRangeFill extends MicrosoftGraphEntity{
  color: string
}
export interface MicrosoftGraphWorkbookRangeFont extends MicrosoftGraphEntity{
  bold: boolean
  color: string
  italic: boolean
  name: string
  size:  | string
  underline: string
}
export interface MicrosoftGraphWorkbookRangeView extends MicrosoftGraphEntity{
  cellAddresses: MicrosoftGraphJson
  columnCount: number
  formulas: MicrosoftGraphJson
  formulasLocal: MicrosoftGraphJson
  formulasR1C1: MicrosoftGraphJson
  index: number
  numberFormat: MicrosoftGraphJson
  rowCount: number
  text: MicrosoftGraphJson
  values: MicrosoftGraphJson
  valueTypes: MicrosoftGraphJson
  rows: MicrosoftGraphWorkbookRangeView[]
}
export interface MicrosoftGraphWorkbookTableColumn extends MicrosoftGraphEntity{
  index: number
  name: string
  values: MicrosoftGraphJson
  filter: MicrosoftGraphWorkbookFilter
}
export interface MicrosoftGraphWorkbookTableRow extends MicrosoftGraphEntity{
  index: number
  values: MicrosoftGraphJson
}
export interface MicrosoftGraphWorkbookTableSort extends MicrosoftGraphEntity{
  fields: MicrosoftGraphWorkbookSortField[]
  matchCase: boolean
  method: string
}
export interface MicrosoftGraphWorkbookWorksheetProtection extends MicrosoftGraphEntity{
  options: MicrosoftGraphWorkbookWorksheetProtectionOptions
  protected: boolean
}
export interface MicrosoftGraphPlace extends MicrosoftGraphEntity{
  address: MicrosoftGraphPhysicalAddress
  displayName: string
  geoCoordinates: MicrosoftGraphOutlookGeoCoordinates
  phone: string
}
export interface MicrosoftGraphRoom extends MicrosoftGraphPlace{
  audioDeviceName: string
  bookingType: MicrosoftGraphBookingType
  building: string
  capacity: number
  displayDeviceName: string
  emailAddress: string
  floorLabel: string
  floorNumber: number
  isWheelChairAccessible: boolean
  label: string
  nickname: string
  tags: string[]
  videoDeviceName: string
}
export interface MicrosoftGraphRoomList extends MicrosoftGraphPlace{
  emailAddress: string
  rooms: MicrosoftGraphRoom[]
}
export interface MicrosoftGraphAttachment extends MicrosoftGraphEntity{
  contentType: string
  isInline: boolean
  lastModifiedDateTime: string
  name: string
  size: number
}
export interface MicrosoftGraphCalendarPermission extends MicrosoftGraphEntity{
  allowedRoles: MicrosoftGraphCalendarRoleType[]
  emailAddress: MicrosoftGraphEmailAddress
  isInsideOrganization: boolean
  isRemovable: boolean
  role: MicrosoftGraphCalendarRoleType
}
export interface MicrosoftGraphMultiValueLegacyExtendedProperty extends MicrosoftGraphEntity{
  value: string[]
}
export interface MicrosoftGraphSingleValueLegacyExtendedProperty extends MicrosoftGraphEntity{
  value: string
}
export interface MicrosoftGraphCalendarSharingMessage extends MicrosoftGraphMessage{
  canAccept: boolean
  sharingMessageAction: MicrosoftGraphCalendarSharingMessageAction
  sharingMessageActions: MicrosoftGraphCalendarSharingMessageAction[]
  suggestedCalendarName: string
}
export interface MicrosoftGraphPost extends MicrosoftGraphOutlookItem{
  body: MicrosoftGraphItemBody
  conversationId: string
  conversationThreadId: string
  from: MicrosoftGraphRecipient
  hasAttachments: boolean
  newParticipants: MicrosoftGraphRecipient[]
  receivedDateTime: string
  sender: MicrosoftGraphRecipient
  attachments: MicrosoftGraphAttachment[]
  extensions: MicrosoftGraphExtension[]
  inReplyTo: MicrosoftGraphPost
  multiValueExtendedProperties: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  singleValueExtendedProperties: MicrosoftGraphSingleValueLegacyExtendedProperty[]
}
export interface MicrosoftGraphEventMessage extends MicrosoftGraphMessage{
  endDateTime: MicrosoftGraphDateTimeTimeZone
  isAllDay: boolean
  isDelegated: boolean
  isOutOfDate: boolean
  location: MicrosoftGraphLocation
  meetingMessageType: MicrosoftGraphMeetingMessageType
  recurrence: MicrosoftGraphPatternedRecurrence
  startDateTime: MicrosoftGraphDateTimeTimeZone
  type: MicrosoftGraphEventType
  event: MicrosoftGraphEvent
}
export interface MicrosoftGraphEventMessageRequest extends MicrosoftGraphEventMessage{
  allowNewTimeProposals: boolean
  meetingRequestType: MicrosoftGraphMeetingRequestType
  previousEndDateTime: MicrosoftGraphDateTimeTimeZone
  previousLocation: MicrosoftGraphLocation
  previousStartDateTime: MicrosoftGraphDateTimeTimeZone
  responseRequested: boolean
}
export interface MicrosoftGraphEventMessageResponse extends MicrosoftGraphEventMessage{
  proposedNewTime: MicrosoftGraphTimeSlot
  responseType: MicrosoftGraphResponseType
}
export interface MicrosoftGraphFileAttachment extends MicrosoftGraphAttachment{
  contentBytes: string
  contentId: string
  contentLocation: string
}
export interface MicrosoftGraphInferenceClassificationOverride extends MicrosoftGraphEntity{
  classifyAs: MicrosoftGraphInferenceClassificationType
  senderEmailAddress: MicrosoftGraphEmailAddress
}
export interface MicrosoftGraphItemAttachment extends MicrosoftGraphAttachment{
  item: MicrosoftGraphOutlookItem
}
export interface MicrosoftGraphMessageRule extends MicrosoftGraphEntity{
  actions: MicrosoftGraphMessageRuleActions
  conditions: MicrosoftGraphMessageRulePredicates
  displayName: string
  exceptions: MicrosoftGraphMessageRulePredicates
  hasError: boolean
  isEnabled: boolean
  isReadOnly: boolean
  sequence: number
}
export interface MicrosoftGraphMailSearchFolder extends MicrosoftGraphMailFolder{
  filterQuery: string
  includeNestedFolders: boolean
  isSupported: boolean
  sourceFolderIds: string[]
}
export interface MicrosoftGraphOpenTypeExtension extends MicrosoftGraphExtension{
  extensionName: string
}
export interface MicrosoftGraphOutlookCategory extends MicrosoftGraphEntity{
  color: MicrosoftGraphCategoryColor
  displayName: string
}
export interface MicrosoftGraphReferenceAttachment extends MicrosoftGraphAttachment{
}
export interface MicrosoftGraphColumnLink extends MicrosoftGraphEntity{
  name: string
}
export interface MicrosoftGraphFieldValueSet extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphItemActivity extends MicrosoftGraphEntity{
  access: MicrosoftGraphAccessAction
  activityDateTime: string
  actor: MicrosoftGraphIdentitySet
  driveItem: MicrosoftGraphDriveItem
}
export interface MicrosoftGraphItemActivityStat extends MicrosoftGraphEntity{
  access: MicrosoftGraphItemActionStat
  create: MicrosoftGraphItemActionStat
  delete: MicrosoftGraphItemActionStat
  edit: MicrosoftGraphItemActionStat
  endDateTime: string
  incompleteData: MicrosoftGraphIncompleteData
  isTrending: boolean
  move: MicrosoftGraphItemActionStat
  startDateTime: string
  activities: MicrosoftGraphItemActivity[]
}
export interface MicrosoftGraphListItemVersion extends MicrosoftGraphBaseItemVersion{
  fields: MicrosoftGraphFieldValueSet
}
export interface MicrosoftGraphSharedDriveItem extends MicrosoftGraphBaseItem{
  owner: MicrosoftGraphIdentitySet
  driveItem: MicrosoftGraphDriveItem
  items: MicrosoftGraphDriveItem[]
  list: MicrosoftGraphList
  listItem: MicrosoftGraphListItem
  permission: MicrosoftGraphPermission
  root: MicrosoftGraphDriveItem
  site: MicrosoftGraphSite
}
export interface MicrosoftGraphSchemaExtension extends MicrosoftGraphEntity{
  description: string
  owner: string
  properties: MicrosoftGraphExtensionSchemaProperty[]
  status: string
  targetTypes: string[]
}
export interface MicrosoftGraphCloudCommunications extends MicrosoftGraphEntity{
  calls: MicrosoftGraphCall[]
  callRecords: MicrosoftGraphCallRecordsCallRecord[]
  onlineMeetings: MicrosoftGraphOnlineMeeting[]
  presences: MicrosoftGraphPresence[]
}
export interface MicrosoftGraphCall extends MicrosoftGraphEntity{
  callbackUri: string
  callChainId: string
  callOptions: MicrosoftGraphCallOptions
  callRoutes: MicrosoftGraphCallRoute[]
  chatInfo: MicrosoftGraphChatInfo
  direction: MicrosoftGraphCallDirection
  incomingContext: MicrosoftGraphIncomingContext
  mediaConfig: MicrosoftGraphMediaConfig
  mediaState: MicrosoftGraphCallMediaState
  meetingInfo: MicrosoftGraphMeetingInfo
  myParticipantId: string
  requestedModalities: MicrosoftGraphModality[]
  resultInfo: MicrosoftGraphResultInfo
  source: MicrosoftGraphParticipantInfo
  state: MicrosoftGraphCallState
  subject: string
  targets: MicrosoftGraphInvitationParticipantInfo[]
  tenantId: string
  toneInfo: MicrosoftGraphToneInfo
  transcription: MicrosoftGraphCallTranscriptionInfo
  audioRoutingGroups: MicrosoftGraphAudioRoutingGroup[]
  operations: MicrosoftGraphCommsOperation[]
  participants: MicrosoftGraphParticipant[]
}
export interface MicrosoftGraphAccessReviewHistoryDefinition extends MicrosoftGraphEntity{
  createdBy: MicrosoftGraphUserIdentity
  createdDateTime: string
  decisions: MicrosoftGraphAccessReviewHistoryDecisionFilter[]
  displayName: string
  reviewHistoryPeriodEndDateTime: string
  reviewHistoryPeriodStartDateTime: string
  scheduleSettings: MicrosoftGraphAccessReviewHistoryScheduleSettings
  scopes: MicrosoftGraphAccessReviewScope[]
  status: MicrosoftGraphAccessReviewHistoryStatus
  instances: MicrosoftGraphAccessReviewHistoryInstance[]
}
export interface MicrosoftGraphAccessReviewHistoryInstance extends MicrosoftGraphEntity{
  downloadUri: string
  expirationDateTime: string
  fulfilledDateTime: string
  reviewHistoryPeriodEndDateTime: string
  reviewHistoryPeriodStartDateTime: string
  runDateTime: string
  status: MicrosoftGraphAccessReviewHistoryStatus
}
export interface MicrosoftGraphAccessReviewInstance extends MicrosoftGraphEntity{
  endDateTime: string
  fallbackReviewers: MicrosoftGraphAccessReviewReviewerScope[]
  reviewers: MicrosoftGraphAccessReviewReviewerScope[]
  scope: MicrosoftGraphAccessReviewScope
  startDateTime: string
  status: string
  contactedReviewers: MicrosoftGraphAccessReviewReviewer[]
  decisions: MicrosoftGraphAccessReviewInstanceDecisionItem[]
  stages: MicrosoftGraphAccessReviewStage[]
}
export interface MicrosoftGraphAccessReviewReviewer extends MicrosoftGraphEntity{
  createdDateTime: string
  displayName: string
  userPrincipalName: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItem extends MicrosoftGraphEntity{
  accessReviewId: string
  appliedBy: MicrosoftGraphUserIdentity
  appliedDateTime: string
  applyResult: string
  decision: string
  justification: string
  principal: MicrosoftGraphIdentity
  principalLink: string
  recommendation: string
  resource: MicrosoftGraphAccessReviewInstanceDecisionItemResource
  resourceLink: string
  reviewedBy: MicrosoftGraphUserIdentity
  reviewedDateTime: string
}
export interface MicrosoftGraphAccessReviewStage extends MicrosoftGraphEntity{
  endDateTime: string
  fallbackReviewers: MicrosoftGraphAccessReviewReviewerScope[]
  reviewers: MicrosoftGraphAccessReviewReviewerScope[]
  startDateTime: string
  status: string
  decisions: MicrosoftGraphAccessReviewInstanceDecisionItem[]
}
export interface MicrosoftGraphAccessReviewScheduleDefinition extends MicrosoftGraphEntity{
  additionalNotificationRecipients: MicrosoftGraphAccessReviewNotificationRecipientItem[]
  createdBy: MicrosoftGraphUserIdentity
  createdDateTime: string
  descriptionForAdmins: string
  descriptionForReviewers: string
  displayName: string
  fallbackReviewers: MicrosoftGraphAccessReviewReviewerScope[]
  instanceEnumerationScope: MicrosoftGraphAccessReviewScope
  lastModifiedDateTime: string
  reviewers: MicrosoftGraphAccessReviewReviewerScope[]
  scope: MicrosoftGraphAccessReviewScope
  settings: MicrosoftGraphAccessReviewScheduleSettings
  stageSettings: MicrosoftGraphAccessReviewStageSettings[]
  status: string
  instances: MicrosoftGraphAccessReviewInstance[]
}
export interface MicrosoftGraphAccessReviewSet extends MicrosoftGraphEntity{
  definitions: MicrosoftGraphAccessReviewScheduleDefinition[]
  historyDefinitions: MicrosoftGraphAccessReviewHistoryDefinition[]
}
export interface MicrosoftGraphAppConsentApprovalRoute extends MicrosoftGraphEntity{
  appConsentRequests: MicrosoftGraphAppConsentRequest[]
}
export interface MicrosoftGraphAppConsentRequest extends MicrosoftGraphEntity{
  appDisplayName: string
  appId: string
  pendingScopes: MicrosoftGraphAppConsentRequestScope[]
  userConsentRequests: MicrosoftGraphUserConsentRequest[]
}
export interface MicrosoftGraphUserConsentRequest extends MicrosoftGraphRequest{
  reason: string
  approval: MicrosoftGraphApproval
}
export interface MicrosoftGraphApproval extends MicrosoftGraphEntity{
  stages: MicrosoftGraphApprovalStage[]
}
export interface MicrosoftGraphApprovalStage extends MicrosoftGraphEntity{
  assignedToMe: boolean
  displayName: string
  justification: string
  reviewedBy: MicrosoftGraphIdentity
  reviewedDateTime: string
  reviewResult: string
  status: string
}
export interface MicrosoftGraphEntitlementManagement extends MicrosoftGraphEntity{
  accessPackageAssignmentApprovals: MicrosoftGraphApproval[]
  accessPackages: MicrosoftGraphAccessPackage[]
  assignmentPolicies: MicrosoftGraphAccessPackageAssignmentPolicy[]
  assignmentRequests: MicrosoftGraphAccessPackageAssignmentRequest[]
  assignments: MicrosoftGraphAccessPackageAssignment[]
  catalogs: MicrosoftGraphAccessPackageCatalog[]
  connectedOrganizations: MicrosoftGraphConnectedOrganization[]
  settings: MicrosoftGraphEntitlementManagementSettings
}
export interface MicrosoftGraphAccessPackage extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  isHidden: boolean
  modifiedDateTime: string
  assignmentPolicies: MicrosoftGraphAccessPackageAssignmentPolicy[]
  catalog: MicrosoftGraphAccessPackageCatalog
}
export interface MicrosoftGraphAccessPackageAssignmentPolicy extends MicrosoftGraphEntity{
  allowedTargetScope: MicrosoftGraphAllowedTargetScope
  createdDateTime: string
  description: string
  displayName: string
  expiration: MicrosoftGraphExpirationPattern
  modifiedDateTime: string
  requestApprovalSettings: MicrosoftGraphAccessPackageAssignmentApprovalSettings
  requestorSettings: MicrosoftGraphAccessPackageAssignmentRequestorSettings
  reviewSettings: MicrosoftGraphAccessPackageAssignmentReviewSettings
  specificAllowedTargets: MicrosoftGraphSubjectSet[]
  accessPackage: MicrosoftGraphAccessPackage
  catalog: MicrosoftGraphAccessPackageCatalog
}
export interface MicrosoftGraphAccessPackageAssignmentRequest extends MicrosoftGraphEntity{
  completedDateTime: string
  createdDateTime: string
  requestType: MicrosoftGraphAccessPackageRequestType
  schedule: MicrosoftGraphEntitlementManagementSchedule
  state: MicrosoftGraphAccessPackageRequestState
  status: string
  accessPackage: MicrosoftGraphAccessPackage
  assignment: MicrosoftGraphAccessPackageAssignment
  requestor: MicrosoftGraphAccessPackageSubject
}
export interface MicrosoftGraphAccessPackageAssignment extends MicrosoftGraphEntity{
  expiredDateTime: string
  schedule: MicrosoftGraphEntitlementManagementSchedule
  state: MicrosoftGraphAccessPackageAssignmentState
  status: string
  accessPackage: MicrosoftGraphAccessPackage
  assignmentPolicy: MicrosoftGraphAccessPackageAssignmentPolicy
  target: MicrosoftGraphAccessPackageSubject
}
export interface MicrosoftGraphAccessPackageCatalog extends MicrosoftGraphEntity{
  catalogType: MicrosoftGraphAccessPackageCatalogType
  createdDateTime: string
  description: string
  displayName: string
  isExternallyVisible: boolean
  modifiedDateTime: string
  state: MicrosoftGraphAccessPackageCatalogState
  accessPackages: MicrosoftGraphAccessPackage[]
}
export interface MicrosoftGraphConnectedOrganization extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  identitySources: MicrosoftGraphIdentitySource[]
  modifiedDateTime: string
  state: MicrosoftGraphConnectedOrganizationState
  externalSponsors: MicrosoftGraphDirectoryObject[]
  internalSponsors: MicrosoftGraphDirectoryObject[]
}
export interface MicrosoftGraphEntitlementManagementSettings extends MicrosoftGraphEntity{
  durationUntilExternalUserDeletedAfterBlocked: string
  externalUserLifecycleAction: MicrosoftGraphAccessPackageExternalUserLifecycleAction
}
export interface MicrosoftGraphIdentityGovernance{
  accessReviews: MicrosoftGraphAccessReviewSet
  appConsent: MicrosoftGraphAppConsentApprovalRoute
  termsOfUse: MicrosoftGraphTermsOfUseContainer
  entitlementManagement: MicrosoftGraphEntitlementManagement
}
export interface MicrosoftGraphTermsOfUseContainer extends MicrosoftGraphEntity{
  agreementAcceptances: MicrosoftGraphAgreementAcceptance[]
  agreements: MicrosoftGraphAgreement[]
}
export interface MicrosoftGraphAgreement extends MicrosoftGraphEntity{
  displayName: string
  isPerDeviceAcceptanceRequired: boolean
  isViewingBeforeAcceptanceRequired: boolean
  termsExpiration: MicrosoftGraphTermsExpiration
  userReacceptRequiredFrequency: string
  acceptances: MicrosoftGraphAgreementAcceptance[]
  file: MicrosoftGraphAgreementFile
  files: MicrosoftGraphAgreementFileLocalization[]
}
export interface MicrosoftGraphAgreementFileProperties extends MicrosoftGraphEntity{
  createdDateTime: string
  displayName: string
  fileData: MicrosoftGraphAgreementFileData
  fileName: string
  isDefault: boolean
  isMajorVersion: boolean
  language: string
}
export interface MicrosoftGraphAgreementFile extends MicrosoftGraphAgreementFileProperties{
  localizations: MicrosoftGraphAgreementFileLocalization[]
}
export interface MicrosoftGraphAgreementFileLocalization extends MicrosoftGraphAgreementFileProperties{
  versions: MicrosoftGraphAgreementFileVersion[]
}
export interface MicrosoftGraphAgreementFileVersion extends MicrosoftGraphAgreementFileProperties{
}
export interface MicrosoftGraphNamedLocation extends MicrosoftGraphEntity{
  createdDateTime: string
  displayName: string
  modifiedDateTime: string
}
export interface MicrosoftGraphCountryNamedLocation extends MicrosoftGraphNamedLocation{
  countriesAndRegions: string[]
  countryLookupMethod: MicrosoftGraphCountryLookupMethodType
  includeUnknownCountriesAndRegions: boolean
}
export interface MicrosoftGraphIdentityProtectionRoot{
  riskDetections: MicrosoftGraphRiskDetection[]
  riskyUsers: MicrosoftGraphRiskyUser[]
}
export interface MicrosoftGraphRiskDetection extends MicrosoftGraphEntity{
  activity: MicrosoftGraphActivityType
  activityDateTime: string
  additionalInfo: string
  correlationId: string
  detectedDateTime: string
  detectionTimingType: MicrosoftGraphRiskDetectionTimingType
  ipAddress: string
  lastUpdatedDateTime: string
  location: MicrosoftGraphSignInLocation
  requestId: string
  riskDetail: MicrosoftGraphRiskDetail
  riskEventType: string
  riskLevel: MicrosoftGraphRiskLevel
  riskState: MicrosoftGraphRiskState
  source: string
  tokenIssuerType: MicrosoftGraphTokenIssuerType
  userDisplayName: string
  userId: string
  userPrincipalName: string
}
export interface MicrosoftGraphRiskyUser extends MicrosoftGraphEntity{
  isDeleted: boolean
  isProcessing: boolean
  riskDetail: MicrosoftGraphRiskDetail
  riskLastUpdatedDateTime: string
  riskLevel: MicrosoftGraphRiskLevel
  riskState: MicrosoftGraphRiskState
  userDisplayName: string
  userPrincipalName: string
  history: MicrosoftGraphRiskyUserHistoryItem[]
}
export interface MicrosoftGraphIpNamedLocation extends MicrosoftGraphNamedLocation{
  ipRanges: MicrosoftGraphIpRange[]
  isTrusted: boolean
}
export interface MicrosoftGraphRiskyUserHistoryItem extends MicrosoftGraphRiskyUser{
  activity: MicrosoftGraphRiskUserActivity
  initiatedBy: string
  userId: string
}
export interface MicrosoftGraphAccessPackageSubject extends MicrosoftGraphEntity{
  displayName: string
  email: string
  objectId: string
  onPremisesSecurityIdentifier: string
  principalName: string
  subjectType: MicrosoftGraphAccessPackageSubjectType
  connectedOrganization: MicrosoftGraphConnectedOrganization
}
export interface MicrosoftGraphMobileApp extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  developer: string
  displayName: string
  informationUrl: string
  isFeatured: boolean
  largeIcon: MicrosoftGraphMimeContent
  lastModifiedDateTime: string
  notes: string
  owner: string
  privacyInformationUrl: string
  publisher: string
  publishingState: MicrosoftGraphMobileAppPublishingState
  assignments: MicrosoftGraphMobileAppAssignment[]
  categories: MicrosoftGraphMobileAppCategory[]
}
export interface MicrosoftGraphMobileLobApp extends MicrosoftGraphMobileApp{
  committedContentVersion: string
  fileName: string
  size: number
  contentVersions: MicrosoftGraphMobileAppContent[]
}
export interface MicrosoftGraphAndroidLobApp extends MicrosoftGraphMobileLobApp{
  minimumSupportedOperatingSystem: MicrosoftGraphAndroidMinimumOperatingSystem
  packageId: string
  versionCode: string
  versionName: string
}
export interface MicrosoftGraphAndroidStoreApp extends MicrosoftGraphMobileApp{
  appStoreUrl: string
  minimumSupportedOperatingSystem: MicrosoftGraphAndroidMinimumOperatingSystem
  packageId: string
}
export interface MicrosoftGraphDeviceAppManagement extends MicrosoftGraphEntity{
  isEnabledForMicrosoftStoreForBusiness: boolean
  microsoftStoreForBusinessLanguage: string
  microsoftStoreForBusinessLastCompletedApplicationSyncTime: string
  microsoftStoreForBusinessLastSuccessfulSyncDateTime: string
  managedEBooks: MicrosoftGraphManagedEBook[]
  mobileAppCategories: MicrosoftGraphMobileAppCategory[]
  mobileAppConfigurations: MicrosoftGraphManagedDeviceMobileAppConfiguration[]
  mobileApps: MicrosoftGraphMobileApp[]
  vppTokens: MicrosoftGraphVppToken[]
  androidManagedAppProtections: MicrosoftGraphAndroidManagedAppProtection[]
  defaultManagedAppProtections: MicrosoftGraphDefaultManagedAppProtection[]
  iosManagedAppProtections: MicrosoftGraphIosManagedAppProtection[]
  managedAppPolicies: MicrosoftGraphManagedAppPolicy[]
  managedAppRegistrations: MicrosoftGraphManagedAppRegistration[]
  managedAppStatuses: MicrosoftGraphManagedAppStatus[]
  mdmWindowsInformationProtectionPolicies: MicrosoftGraphMdmWindowsInformationProtectionPolicy[]
  targetedManagedAppConfigurations: MicrosoftGraphTargetedManagedAppConfiguration[]
  windowsInformationProtectionPolicies: MicrosoftGraphWindowsInformationProtectionPolicy[]
}
export interface MicrosoftGraphManagedEBook extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  informationUrl: string
  largeCover: MicrosoftGraphMimeContent
  lastModifiedDateTime: string
  privacyInformationUrl: string
  publishedDateTime: string
  publisher: string
  assignments: MicrosoftGraphManagedEBookAssignment[]
  deviceStates: MicrosoftGraphDeviceInstallState[]
  installSummary: MicrosoftGraphEBookInstallSummary
  userStateSummary: MicrosoftGraphUserInstallStateSummary[]
}
export interface MicrosoftGraphMobileAppCategory extends MicrosoftGraphEntity{
  displayName: string
  lastModifiedDateTime: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfiguration extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  lastModifiedDateTime: string
  targetedMobileApps: string[]
  version: number
  assignments: MicrosoftGraphManagedDeviceMobileAppConfigurationAssignment[]
  deviceStatuses: MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatus[]
  deviceStatusSummary: MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceSummary
  userStatuses: MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatus[]
  userStatusSummary: MicrosoftGraphManagedDeviceMobileAppConfigurationUserSummary
}
export interface MicrosoftGraphVppToken extends MicrosoftGraphEntity{
  appleId: string
  automaticallyUpdateApps: boolean
  countryOrRegion: string
  expirationDateTime: string
  lastModifiedDateTime: string
  lastSyncDateTime: string
  lastSyncStatus: MicrosoftGraphVppTokenSyncStatus
  organizationName: string
  state: MicrosoftGraphVppTokenState
  token: string
  vppTokenAccountType: MicrosoftGraphVppTokenAccountType
}
export interface MicrosoftGraphManagedAppPolicy extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  lastModifiedDateTime: string
  version: string
}
export interface MicrosoftGraphManagedAppProtection extends MicrosoftGraphManagedAppPolicy{
  allowedDataStorageLocations: MicrosoftGraphManagedAppDataStorageLocation[]
  allowedInboundDataTransferSources: MicrosoftGraphManagedAppDataTransferLevel
  allowedOutboundClipboardSharingLevel: MicrosoftGraphManagedAppClipboardSharingLevel
  allowedOutboundDataTransferDestinations: MicrosoftGraphManagedAppDataTransferLevel
  contactSyncBlocked: boolean
  dataBackupBlocked: boolean
  deviceComplianceRequired: boolean
  disableAppPinIfDevicePinIsSet: boolean
  fingerprintBlocked: boolean
  managedBrowser: MicrosoftGraphManagedBrowserType
  managedBrowserToOpenLinksRequired: boolean
  maximumPinRetries: number
  minimumPinLength: number
  minimumRequiredAppVersion: string
  minimumRequiredOsVersion: string
  minimumWarningAppVersion: string
  minimumWarningOsVersion: string
  organizationalCredentialsRequired: boolean
  periodBeforePinReset: string
  periodOfflineBeforeAccessCheck: string
  periodOfflineBeforeWipeIsEnforced: string
  periodOnlineBeforeAccessCheck: string
  pinCharacterSet: MicrosoftGraphManagedAppPinCharacterSet
  pinRequired: boolean
  printBlocked: boolean
  saveAsBlocked: boolean
  simplePinBlocked: boolean
}
export interface MicrosoftGraphTargetedManagedAppProtection extends MicrosoftGraphManagedAppProtection{
  isAssigned: boolean
  assignments: MicrosoftGraphTargetedManagedAppPolicyAssignment[]
}
export interface MicrosoftGraphAndroidManagedAppProtection extends MicrosoftGraphTargetedManagedAppProtection{
  customBrowserDisplayName: string
  customBrowserPackageId: string
  deployedAppCount: number
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean
  encryptAppData: boolean
  minimumRequiredPatchVersion: string
  minimumWarningPatchVersion: string
  screenCaptureBlocked: boolean
  apps: MicrosoftGraphManagedMobileApp[]
  deploymentSummary: MicrosoftGraphManagedAppPolicyDeploymentSummary
}
export interface MicrosoftGraphDefaultManagedAppProtection extends MicrosoftGraphManagedAppProtection{
  appDataEncryptionType: MicrosoftGraphManagedAppDataEncryptionType
  customSettings: MicrosoftGraphKeyValuePair[]
  deployedAppCount: number
  disableAppEncryptionIfDeviceEncryptionIsEnabled: boolean
  encryptAppData: boolean
  faceIdBlocked: boolean
  minimumRequiredPatchVersion: string
  minimumRequiredSdkVersion: string
  minimumWarningPatchVersion: string
  screenCaptureBlocked: boolean
  apps: MicrosoftGraphManagedMobileApp[]
  deploymentSummary: MicrosoftGraphManagedAppPolicyDeploymentSummary
}
export interface MicrosoftGraphIosManagedAppProtection extends MicrosoftGraphTargetedManagedAppProtection{
  appDataEncryptionType: MicrosoftGraphManagedAppDataEncryptionType
  customBrowserProtocol: string
  deployedAppCount: number
  faceIdBlocked: boolean
  minimumRequiredSdkVersion: string
  apps: MicrosoftGraphManagedMobileApp[]
  deploymentSummary: MicrosoftGraphManagedAppPolicyDeploymentSummary
}
export interface MicrosoftGraphManagedAppStatus extends MicrosoftGraphEntity{
  displayName: string
  version: string
}
export interface MicrosoftGraphWindowsInformationProtection extends MicrosoftGraphManagedAppPolicy{
  azureRightsManagementServicesAllowed: boolean
  dataRecoveryCertificate: MicrosoftGraphWindowsInformationProtectionDataRecoveryCertificate
  enforcementLevel: MicrosoftGraphWindowsInformationProtectionEnforcementLevel
  enterpriseDomain: string
  enterpriseInternalProxyServers: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
  enterpriseIPRanges: MicrosoftGraphWindowsInformationProtectionIPRangeCollection[]
  enterpriseIPRangesAreAuthoritative: boolean
  enterpriseNetworkDomainNames: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
  enterpriseProtectedDomainNames: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
  enterpriseProxiedDomains: MicrosoftGraphWindowsInformationProtectionProxiedDomainCollection[]
  enterpriseProxyServers: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
  enterpriseProxyServersAreAuthoritative: boolean
  exemptApps: MicrosoftGraphWindowsInformationProtectionApp[]
  iconsVisible: boolean
  indexingEncryptedStoresOrItemsBlocked: boolean
  isAssigned: boolean
  neutralDomainResources: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
  protectedApps: MicrosoftGraphWindowsInformationProtectionApp[]
  protectionUnderLockConfigRequired: boolean
  revokeOnUnenrollDisabled: boolean
  rightsManagementServicesTemplateId: string
  smbAutoEncryptedFileExtensions: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
  assignments: MicrosoftGraphTargetedManagedAppPolicyAssignment[]
  exemptAppLockerFiles: MicrosoftGraphWindowsInformationProtectionAppLockerFile[]
  protectedAppLockerFiles: MicrosoftGraphWindowsInformationProtectionAppLockerFile[]
}
export interface MicrosoftGraphMdmWindowsInformationProtectionPolicy extends MicrosoftGraphWindowsInformationProtection{
}
export interface MicrosoftGraphManagedAppConfiguration extends MicrosoftGraphManagedAppPolicy{
  customSettings: MicrosoftGraphKeyValuePair[]
}
export interface MicrosoftGraphTargetedManagedAppConfiguration extends MicrosoftGraphManagedAppConfiguration{
  deployedAppCount: number
  isAssigned: boolean
  apps: MicrosoftGraphManagedMobileApp[]
  assignments: MicrosoftGraphTargetedManagedAppPolicyAssignment[]
  deploymentSummary: MicrosoftGraphManagedAppPolicyDeploymentSummary
}
export interface MicrosoftGraphWindowsInformationProtectionPolicy extends MicrosoftGraphWindowsInformationProtection{
  daysWithoutContactBeforeUnenroll: number
  mdmEnrollmentUrl: string
  minutesOfInactivityBeforeDeviceLock: number
  numberOfPastPinsRemembered: number
  passwordMaximumAttemptCount: number
  pinExpirationDays: number
  pinLowercaseLetters: MicrosoftGraphWindowsInformationProtectionPinCharacterRequirements
  pinMinimumLength: number
  pinSpecialCharacters: MicrosoftGraphWindowsInformationProtectionPinCharacterRequirements
  pinUppercaseLetters: MicrosoftGraphWindowsInformationProtectionPinCharacterRequirements
  revokeOnMdmHandoffDisabled: boolean
  windowsHelloForBusinessBlocked: boolean
}
export interface MicrosoftGraphIosLobApp extends MicrosoftGraphMobileLobApp{
  applicableDeviceType: MicrosoftGraphIosDeviceType
  buildNumber: string
  bundleId: string
  expirationDateTime: string
  minimumSupportedOperatingSystem: MicrosoftGraphIosMinimumOperatingSystem
  versionNumber: string
}
export interface MicrosoftGraphIosMobileAppConfiguration extends MicrosoftGraphManagedDeviceMobileAppConfiguration{
  encodedSettingXml: string
  settings: MicrosoftGraphAppConfigurationSettingItem[]
}
export interface MicrosoftGraphIosStoreApp extends MicrosoftGraphMobileApp{
  applicableDeviceType: MicrosoftGraphIosDeviceType
  appStoreUrl: string
  bundleId: string
  minimumSupportedOperatingSystem: MicrosoftGraphIosMinimumOperatingSystem
}
export interface MicrosoftGraphIosVppApp extends MicrosoftGraphMobileApp{
  applicableDeviceType: MicrosoftGraphIosDeviceType
  appStoreUrl: string
  bundleId: string
  licensingType: MicrosoftGraphVppLicensingType
  releaseDateTime: string
  totalLicenseCount: number
  usedLicenseCount: number
  vppTokenAccountType: MicrosoftGraphVppTokenAccountType
  vppTokenAppleId: string
  vppTokenOrganizationName: string
}
export interface MicrosoftGraphMacOSOfficeSuiteApp extends MicrosoftGraphMobileApp{
}
export interface MicrosoftGraphManagedApp extends MicrosoftGraphMobileApp{
  appAvailability: MicrosoftGraphManagedAppAvailability
  version: string
}
export interface MicrosoftGraphManagedMobileLobApp extends MicrosoftGraphManagedApp{
  committedContentVersion: string
  fileName: string
  size: number
  contentVersions: MicrosoftGraphMobileAppContent[]
}
export interface MicrosoftGraphManagedAndroidLobApp extends MicrosoftGraphManagedMobileLobApp{
  minimumSupportedOperatingSystem: MicrosoftGraphAndroidMinimumOperatingSystem
  packageId: string
  versionCode: string
  versionName: string
}
export interface MicrosoftGraphManagedAndroidStoreApp extends MicrosoftGraphManagedApp{
  appStoreUrl: string
  minimumSupportedOperatingSystem: MicrosoftGraphAndroidMinimumOperatingSystem
  packageId: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationAssignment extends MicrosoftGraphEntity{
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatus extends MicrosoftGraphEntity{
  complianceGracePeriodExpirationDateTime: string
  deviceDisplayName: string
  deviceModel: string
  lastReportedDateTime: string
  status: MicrosoftGraphComplianceStatus
  userName: string
  userPrincipalName: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceSummary extends MicrosoftGraphEntity{
  configurationVersion: number
  errorCount: number
  failedCount: number
  lastUpdateDateTime: string
  notApplicableCount: number
  pendingCount: number
  successCount: number
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatus extends MicrosoftGraphEntity{
  devicesCount: number
  lastReportedDateTime: string
  status: MicrosoftGraphComplianceStatus
  userDisplayName: string
  userPrincipalName: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationUserSummary extends MicrosoftGraphEntity{
  configurationVersion: number
  errorCount: number
  failedCount: number
  lastUpdateDateTime: string
  notApplicableCount: number
  pendingCount: number
  successCount: number
}
export interface MicrosoftGraphManagedIOSLobApp extends MicrosoftGraphManagedMobileLobApp{
  applicableDeviceType: MicrosoftGraphIosDeviceType
  buildNumber: string
  bundleId: string
  expirationDateTime: string
  minimumSupportedOperatingSystem: MicrosoftGraphIosMinimumOperatingSystem
  versionNumber: string
}
export interface MicrosoftGraphManagedIOSStoreApp extends MicrosoftGraphManagedApp{
  applicableDeviceType: MicrosoftGraphIosDeviceType
  appStoreUrl: string
  bundleId: string
  minimumSupportedOperatingSystem: MicrosoftGraphIosMinimumOperatingSystem
}
export interface MicrosoftGraphMobileAppContent extends MicrosoftGraphEntity{
  files: MicrosoftGraphMobileAppContentFile[]
}
export interface MicrosoftGraphMicrosoftStoreForBusinessApp extends MicrosoftGraphMobileApp{
  licenseType: MicrosoftGraphMicrosoftStoreForBusinessLicenseType
  packageIdentityName: string
  productKey: string
  totalLicenseCount: number
  usedLicenseCount: number
}
export interface MicrosoftGraphMobileAppAssignment extends MicrosoftGraphEntity{
  intent: MicrosoftGraphInstallIntent
  settings: MicrosoftGraphMobileAppAssignmentSettings
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphMobileAppContentFile extends MicrosoftGraphEntity{
  azureStorageUri: string
  azureStorageUriExpirationDateTime: string
  createdDateTime: string
  isCommitted: boolean
  manifest: string
  name: string
  size: number
  sizeEncrypted: number
  uploadState: MicrosoftGraphMobileAppContentFileUploadState
}
export interface MicrosoftGraphWebApp extends MicrosoftGraphMobileApp{
  appUrl: string
  useManagedBrowser: boolean
}
export interface MicrosoftGraphWin32LobApp extends MicrosoftGraphMobileLobApp{
  applicableArchitectures: MicrosoftGraphWindowsArchitecture
  installCommandLine: string
  installExperience: MicrosoftGraphWin32LobAppInstallExperience
  minimumCpuSpeedInMHz: number
  minimumFreeDiskSpaceInMB: number
  minimumMemoryInMB: number
  minimumNumberOfProcessors: number
  minimumSupportedWindowsRelease: string
  msiInformation: MicrosoftGraphWin32LobAppMsiInformation
  returnCodes: MicrosoftGraphWin32LobAppReturnCode[]
  rules: MicrosoftGraphWin32LobAppRule[]
  setupFilePath: string
  uninstallCommandLine: string
}
export interface MicrosoftGraphWindowsMobileMSI extends MicrosoftGraphMobileLobApp{
  commandLine: string
  ignoreVersionDetection: boolean
  productCode: string
  productVersion: string
}
export interface MicrosoftGraphWindowsUniversalAppX extends MicrosoftGraphMobileLobApp{
  applicableArchitectures: MicrosoftGraphWindowsArchitecture
  applicableDeviceTypes: MicrosoftGraphWindowsDeviceType
  identityName: string
  identityPublisherHash: string
  identityResourceIdentifier: string
  identityVersion: string
  isBundle: boolean
  minimumSupportedOperatingSystem: MicrosoftGraphWindowsMinimumOperatingSystem
}
export interface MicrosoftGraphDeviceInstallState extends MicrosoftGraphEntity{
  deviceId: string
  deviceName: string
  errorCode: string
  installState: MicrosoftGraphInstallState
  lastSyncDateTime: string
  osDescription: string
  osVersion: string
  userName: string
}
export interface MicrosoftGraphEBookInstallSummary extends MicrosoftGraphEntity{
  failedDeviceCount: number
  failedUserCount: number
  installedDeviceCount: number
  installedUserCount: number
  notInstalledDeviceCount: number
  notInstalledUserCount: number
}
export interface MicrosoftGraphIosVppEBook extends MicrosoftGraphManagedEBook{
  appleId: string
  genres: string[]
  language: string
  seller: string
  totalLicenseCount: number
  usedLicenseCount: number
  vppOrganizationName: string
  vppTokenId: string
}
export interface MicrosoftGraphManagedEBookAssignment extends MicrosoftGraphEntity{
  installIntent: MicrosoftGraphInstallIntent
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphIosVppEBookAssignment extends MicrosoftGraphManagedEBookAssignment{
}
export interface MicrosoftGraphUserInstallStateSummary extends MicrosoftGraphEntity{
  failedDeviceCount: number
  installedDeviceCount: number
  notInstalledDeviceCount: number
  userName: string
  deviceStates: MicrosoftGraphDeviceInstallState[]
}
export interface MicrosoftGraphDeviceManagement extends MicrosoftGraphEntity{
  intuneAccountId: string
  settings: MicrosoftGraphDeviceManagementSettings
  intuneBrand: MicrosoftGraphIntuneBrand
  subscriptionState: MicrosoftGraphDeviceManagementSubscriptionState
  termsAndConditions: MicrosoftGraphTermsAndConditions[]
  deviceCompliancePolicies: MicrosoftGraphDeviceCompliancePolicy[]
  deviceCompliancePolicyDeviceStateSummary: MicrosoftGraphDeviceCompliancePolicyDeviceStateSummary
  deviceCompliancePolicySettingStateSummaries: MicrosoftGraphDeviceCompliancePolicySettingStateSummary[]
  deviceConfigurationDeviceStateSummaries: MicrosoftGraphDeviceConfigurationDeviceStateSummary
  deviceConfigurations: MicrosoftGraphDeviceConfiguration[]
  iosUpdateStatuses: MicrosoftGraphIosUpdateDeviceStatus[]
  softwareUpdateStatusSummary: MicrosoftGraphSoftwareUpdateStatusSummary
  complianceManagementPartners: MicrosoftGraphComplianceManagementPartner[]
  conditionalAccessSettings: MicrosoftGraphOnPremisesConditionalAccessSettings
  deviceCategories: MicrosoftGraphDeviceCategory[]
  deviceEnrollmentConfigurations: MicrosoftGraphDeviceEnrollmentConfiguration[]
  deviceManagementPartners: MicrosoftGraphDeviceManagementPartner[]
  exchangeConnectors: MicrosoftGraphDeviceManagementExchangeConnector[]
  mobileThreatDefenseConnectors: MicrosoftGraphMobileThreatDefenseConnector[]
  applePushNotificationCertificate: MicrosoftGraphApplePushNotificationCertificate
  detectedApps: MicrosoftGraphDetectedApp[]
  managedDeviceOverview: MicrosoftGraphManagedDeviceOverview
  managedDevices: MicrosoftGraphManagedDevice[]
  importedWindowsAutopilotDeviceIdentities: MicrosoftGraphImportedWindowsAutopilotDeviceIdentity[]
  windowsAutopilotDeviceIdentities: MicrosoftGraphWindowsAutopilotDeviceIdentity[]
  notificationMessageTemplates: MicrosoftGraphNotificationMessageTemplate[]
  resourceOperations: MicrosoftGraphResourceOperation[]
  roleAssignments: MicrosoftGraphDeviceAndAppManagementRoleAssignment[]
  roleDefinitions: MicrosoftGraphRoleDefinition[]
  remoteAssistancePartners: MicrosoftGraphRemoteAssistancePartner[]
  reports: MicrosoftGraphDeviceManagementReports
  telecomExpenseManagementPartners: MicrosoftGraphTelecomExpenseManagementPartner[]
  troubleshootingEvents: MicrosoftGraphDeviceManagementTroubleshootingEvent[]
  windowsInformationProtectionAppLearningSummaries: MicrosoftGraphWindowsInformationProtectionAppLearningSummary[]
  windowsInformationProtectionNetworkLearningSummaries: MicrosoftGraphWindowsInformationProtectionNetworkLearningSummary[]
}
export interface MicrosoftGraphTermsAndConditions extends MicrosoftGraphEntity{
  acceptanceStatement: string
  bodyText: string
  createdDateTime: string
  description: string
  displayName: string
  lastModifiedDateTime: string
  title: string
  version: number
  acceptanceStatuses: MicrosoftGraphTermsAndConditionsAcceptanceStatus[]
  assignments: MicrosoftGraphTermsAndConditionsAssignment[]
}
export interface MicrosoftGraphDeviceCompliancePolicy extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  lastModifiedDateTime: string
  version: number
  assignments: MicrosoftGraphDeviceCompliancePolicyAssignment[]
  deviceSettingStateSummaries: MicrosoftGraphSettingStateDeviceSummary[]
  deviceStatuses: MicrosoftGraphDeviceComplianceDeviceStatus[]
  deviceStatusOverview: MicrosoftGraphDeviceComplianceDeviceOverview
  scheduledActionsForRule: MicrosoftGraphDeviceComplianceScheduledActionForRule[]
  userStatuses: MicrosoftGraphDeviceComplianceUserStatus[]
  userStatusOverview: MicrosoftGraphDeviceComplianceUserOverview
}
export interface MicrosoftGraphDeviceCompliancePolicyDeviceStateSummary extends MicrosoftGraphEntity{
  compliantDeviceCount: number
  configManagerCount: number
  conflictDeviceCount: number
  errorDeviceCount: number
  inGracePeriodCount: number
  nonCompliantDeviceCount: number
  notApplicableDeviceCount: number
  remediatedDeviceCount: number
  unknownDeviceCount: number
}
export interface MicrosoftGraphDeviceCompliancePolicySettingStateSummary extends MicrosoftGraphEntity{
  compliantDeviceCount: number
  conflictDeviceCount: number
  errorDeviceCount: number
  nonCompliantDeviceCount: number
  notApplicableDeviceCount: number
  platformType: MicrosoftGraphPolicyPlatformType
  remediatedDeviceCount: number
  setting: string
  settingName: string
  unknownDeviceCount: number
  deviceComplianceSettingStates: MicrosoftGraphDeviceComplianceSettingState[]
}
export interface MicrosoftGraphDeviceConfigurationDeviceStateSummary extends MicrosoftGraphEntity{
  compliantDeviceCount: number
  conflictDeviceCount: number
  errorDeviceCount: number
  nonCompliantDeviceCount: number
  notApplicableDeviceCount: number
  remediatedDeviceCount: number
  unknownDeviceCount: number
}
export interface MicrosoftGraphDeviceConfiguration extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  lastModifiedDateTime: string
  version: number
  assignments: MicrosoftGraphDeviceConfigurationAssignment[]
  deviceSettingStateSummaries: MicrosoftGraphSettingStateDeviceSummary[]
  deviceStatuses: MicrosoftGraphDeviceConfigurationDeviceStatus[]
  deviceStatusOverview: MicrosoftGraphDeviceConfigurationDeviceOverview
  userStatuses: MicrosoftGraphDeviceConfigurationUserStatus[]
  userStatusOverview: MicrosoftGraphDeviceConfigurationUserOverview
}
export interface MicrosoftGraphIosUpdateDeviceStatus extends MicrosoftGraphEntity{
  complianceGracePeriodExpirationDateTime: string
  deviceDisplayName: string
  deviceId: string
  deviceModel: string
  installStatus: MicrosoftGraphIosUpdatesInstallStatus
  lastReportedDateTime: string
  osVersion: string
  status: MicrosoftGraphComplianceStatus
  userId: string
  userName: string
  userPrincipalName: string
}
export interface MicrosoftGraphSoftwareUpdateStatusSummary extends MicrosoftGraphEntity{
  compliantDeviceCount: number
  compliantUserCount: number
  conflictDeviceCount: number
  conflictUserCount: number
  displayName: string
  errorDeviceCount: number
  errorUserCount: number
  nonCompliantDeviceCount: number
  nonCompliantUserCount: number
  notApplicableDeviceCount: number
  notApplicableUserCount: number
  remediatedDeviceCount: number
  remediatedUserCount: number
  unknownDeviceCount: number
  unknownUserCount: number
}
export interface MicrosoftGraphComplianceManagementPartner extends MicrosoftGraphEntity{
  androidEnrollmentAssignments: MicrosoftGraphComplianceManagementPartnerAssignment[]
  androidOnboarded: boolean
  displayName: string
  iosEnrollmentAssignments: MicrosoftGraphComplianceManagementPartnerAssignment[]
  iosOnboarded: boolean
  lastHeartbeatDateTime: string
  macOsEnrollmentAssignments: MicrosoftGraphComplianceManagementPartnerAssignment[]
  macOsOnboarded: boolean
  partnerState: MicrosoftGraphDeviceManagementPartnerTenantState
}
export interface MicrosoftGraphOnPremisesConditionalAccessSettings extends MicrosoftGraphEntity{
  enabled: boolean
  excludedGroups: string[]
  includedGroups: string[]
  overrideDefaultRule: boolean
}
export interface MicrosoftGraphDeviceCategory extends MicrosoftGraphEntity{
  description: string
  displayName: string
}
export interface MicrosoftGraphDeviceEnrollmentConfiguration extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  lastModifiedDateTime: string
  priority: number
  version: number
  assignments: MicrosoftGraphEnrollmentConfigurationAssignment[]
}
export interface MicrosoftGraphDeviceManagementPartner extends MicrosoftGraphEntity{
  displayName: string
  isConfigured: boolean
  lastHeartbeatDateTime: string
  partnerAppType: MicrosoftGraphDeviceManagementPartnerAppType
  partnerState: MicrosoftGraphDeviceManagementPartnerTenantState
  singleTenantAppId: string
  whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime: string
  whenPartnerDevicesWillBeRemovedDateTime: string
}
export interface MicrosoftGraphDeviceManagementExchangeConnector extends MicrosoftGraphEntity{
  connectorServerName: string
  exchangeAlias: string
  exchangeConnectorType: MicrosoftGraphDeviceManagementExchangeConnectorType
  exchangeOrganization: string
  lastSyncDateTime: string
  primarySmtpAddress: string
  serverName: string
  status: MicrosoftGraphDeviceManagementExchangeConnectorStatus
  version: string
}
export interface MicrosoftGraphMobileThreatDefenseConnector extends MicrosoftGraphEntity{
  androidDeviceBlockedOnMissingPartnerData: boolean
  androidEnabled: boolean
  iosDeviceBlockedOnMissingPartnerData: boolean
  iosEnabled: boolean
  lastHeartbeatDateTime: string
  partnerState: MicrosoftGraphMobileThreatPartnerTenantState
  partnerUnresponsivenessThresholdInDays: number
  partnerUnsupportedOsVersionBlocked: boolean
}
export interface MicrosoftGraphApplePushNotificationCertificate extends MicrosoftGraphEntity{
  appleIdentifier: string
  certificate: string
  certificateSerialNumber: string
  expirationDateTime: string
  lastModifiedDateTime: string
  topicIdentifier: string
}
export interface MicrosoftGraphDetectedApp extends MicrosoftGraphEntity{
  deviceCount: number
  displayName: string
  sizeInByte: number
  version: string
  managedDevices: MicrosoftGraphManagedDevice[]
}
export interface MicrosoftGraphManagedDeviceOverview extends MicrosoftGraphEntity{
  deviceExchangeAccessStateSummary: MicrosoftGraphDeviceExchangeAccessStateSummary
  deviceOperatingSystemSummary: MicrosoftGraphDeviceOperatingSystemSummary
  dualEnrolledDeviceCount: number
  enrolledDeviceCount: number
  mdmEnrolledCount: number
}
export interface MicrosoftGraphImportedWindowsAutopilotDeviceIdentity extends MicrosoftGraphEntity{
  assignedUserPrincipalName: string
  groupTag: string
  hardwareIdentifier: string
  importId: string
  productKey: string
  serialNumber: string
  state: MicrosoftGraphImportedWindowsAutopilotDeviceIdentityState
}
export interface MicrosoftGraphWindowsAutopilotDeviceIdentity extends MicrosoftGraphEntity{
  addressableUserName: string
  azureActiveDirectoryDeviceId: string
  displayName: string
  enrollmentState: MicrosoftGraphEnrollmentState
  groupTag: string
  lastContactedDateTime: string
  managedDeviceId: string
  manufacturer: string
  model: string
  productKey: string
  purchaseOrderIdentifier: string
  resourceName: string
  serialNumber: string
  skuNumber: string
  systemFamily: string
  userPrincipalName: string
}
export interface MicrosoftGraphNotificationMessageTemplate extends MicrosoftGraphEntity{
  brandingOptions: MicrosoftGraphNotificationTemplateBrandingOptions
  defaultLocale: string
  displayName: string
  lastModifiedDateTime: string
  localizedNotificationMessages: MicrosoftGraphLocalizedNotificationMessage[]
}
export interface MicrosoftGraphResourceOperation extends MicrosoftGraphEntity{
  actionName: string
  description: string
  resourceName: string
}
export interface MicrosoftGraphRoleAssignment extends MicrosoftGraphEntity{
  description: string
  displayName: string
  resourceScopes: string[]
  roleDefinition: MicrosoftGraphRoleDefinition
}
export interface MicrosoftGraphDeviceAndAppManagementRoleAssignment extends MicrosoftGraphRoleAssignment{
  members: string[]
}
export interface MicrosoftGraphRoleDefinition extends MicrosoftGraphEntity{
  description: string
  displayName: string
  isBuiltIn: boolean
  rolePermissions: MicrosoftGraphRolePermission[]
  roleAssignments: MicrosoftGraphRoleAssignment[]
}
export interface MicrosoftGraphRemoteAssistancePartner extends MicrosoftGraphEntity{
  displayName: string
  lastConnectionDateTime: string
  onboardingStatus: MicrosoftGraphRemoteAssistanceOnboardingStatus
  onboardingUrl: string
}
export interface MicrosoftGraphDeviceManagementReports extends MicrosoftGraphEntity{
  exportJobs: MicrosoftGraphDeviceManagementExportJob[]
}
export interface MicrosoftGraphTelecomExpenseManagementPartner extends MicrosoftGraphEntity{
  appAuthorized: boolean
  displayName: string
  enabled: boolean
  lastConnectionDateTime: string
  url: string
}
export interface MicrosoftGraphWindowsInformationProtectionAppLearningSummary extends MicrosoftGraphEntity{
  applicationName: string
  applicationType: MicrosoftGraphApplicationType
  deviceCount: number
}
export interface MicrosoftGraphWindowsInformationProtectionNetworkLearningSummary extends MicrosoftGraphEntity{
  deviceCount: number
  url: string
}
export interface MicrosoftGraphTermsAndConditionsAcceptanceStatus extends MicrosoftGraphEntity{
  acceptedDateTime: string
  acceptedVersion: number
  userDisplayName: string
  userPrincipalName: string
  termsAndConditions: MicrosoftGraphTermsAndConditions
}
export interface MicrosoftGraphTermsAndConditionsAssignment extends MicrosoftGraphEntity{
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphAndroidCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  deviceThreatProtectionEnabled: boolean
  deviceThreatProtectionRequiredSecurityLevel: MicrosoftGraphDeviceThreatProtectionLevel
  minAndroidSecurityPatchLevel: string
  osMaximumVersion: string
  osMinimumVersion: string
  passwordExpirationDays: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphAndroidRequiredPasswordType
  securityBlockJailbrokenDevices: boolean
  securityDisableUsbDebugging: boolean
  securityPreventInstallAppsFromUnknownSources: boolean
  securityRequireCompanyPortalAppIntegrity: boolean
  securityRequireGooglePlayServices: boolean
  securityRequireSafetyNetAttestationBasicIntegrity: boolean
  securityRequireSafetyNetAttestationCertifiedDevice: boolean
  securityRequireUpToDateSecurityProviders: boolean
  securityRequireVerifyApps: boolean
  storageRequireEncryption: boolean
}
export interface MicrosoftGraphAndroidCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
  omaSettings: MicrosoftGraphOmaSetting[]
}
export interface MicrosoftGraphAndroidGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
  appsBlockClipboardSharing: boolean
  appsBlockCopyPaste: boolean
  appsBlockYouTube: boolean
  appsHideList: MicrosoftGraphAppListItem[]
  appsInstallAllowList: MicrosoftGraphAppListItem[]
  appsLaunchBlockList: MicrosoftGraphAppListItem[]
  bluetoothBlocked: boolean
  cameraBlocked: boolean
  cellularBlockDataRoaming: boolean
  cellularBlockMessaging: boolean
  cellularBlockVoiceRoaming: boolean
  cellularBlockWiFiTethering: boolean
  compliantAppListType: MicrosoftGraphAppListType
  compliantAppsList: MicrosoftGraphAppListItem[]
  deviceSharingAllowed: boolean
  diagnosticDataBlockSubmission: boolean
  factoryResetBlocked: boolean
  googleAccountBlockAutoSync: boolean
  googlePlayStoreBlocked: boolean
  kioskModeApps: MicrosoftGraphAppListItem[]
  kioskModeBlockSleepButton: boolean
  kioskModeBlockVolumeButtons: boolean
  locationServicesBlocked: boolean
  nfcBlocked: boolean
  passwordBlockFingerprintUnlock: boolean
  passwordBlockTrustAgents: boolean
  passwordExpirationDays: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeScreenTimeout: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphAndroidRequiredPasswordType
  passwordSignInFailureCountBeforeFactoryReset: number
  powerOffBlocked: boolean
  screenCaptureBlocked: boolean
  securityRequireVerifyApps: boolean
  storageBlockGoogleBackup: boolean
  storageBlockRemovableStorage: boolean
  storageRequireDeviceEncryption: boolean
  storageRequireRemovableStorageEncryption: boolean
  voiceAssistantBlocked: boolean
  voiceDialingBlocked: boolean
  webBrowserBlockAutofill: boolean
  webBrowserBlocked: boolean
  webBrowserBlockJavaScript: boolean
  webBrowserBlockPopups: boolean
  webBrowserCookieSettings: MicrosoftGraphWebBrowserCookieSettings
  wiFiBlocked: boolean
}
export interface MicrosoftGraphAndroidWorkProfileCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  deviceThreatProtectionEnabled: boolean
  deviceThreatProtectionRequiredSecurityLevel: MicrosoftGraphDeviceThreatProtectionLevel
  minAndroidSecurityPatchLevel: string
  osMaximumVersion: string
  osMinimumVersion: string
  passwordExpirationDays: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphAndroidRequiredPasswordType
  securityBlockJailbrokenDevices: boolean
  securityDisableUsbDebugging: boolean
  securityPreventInstallAppsFromUnknownSources: boolean
  securityRequireCompanyPortalAppIntegrity: boolean
  securityRequireGooglePlayServices: boolean
  securityRequireSafetyNetAttestationBasicIntegrity: boolean
  securityRequireSafetyNetAttestationCertifiedDevice: boolean
  securityRequireUpToDateSecurityProviders: boolean
  securityRequireVerifyApps: boolean
  storageRequireEncryption: boolean
}
export interface MicrosoftGraphAndroidWorkProfileCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
  omaSettings: MicrosoftGraphOmaSetting[]
}
export interface MicrosoftGraphAndroidWorkProfileGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
  passwordBlockFingerprintUnlock: boolean
  passwordBlockTrustAgents: boolean
  passwordExpirationDays: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeScreenTimeout: number
  passwordPreviousPasswordBlockCount: number
  passwordRequiredType: MicrosoftGraphAndroidWorkProfileRequiredPasswordType
  passwordSignInFailureCountBeforeFactoryReset: number
  securityRequireVerifyApps: boolean
  workProfileBlockAddingAccounts: boolean
  workProfileBlockCamera: boolean
  workProfileBlockCrossProfileCallerId: boolean
  workProfileBlockCrossProfileContactsSearch: boolean
  workProfileBlockCrossProfileCopyPaste: boolean
  workProfileBlockNotificationsWhileDeviceLocked: boolean
  workProfileBlockScreenCapture: boolean
  workProfileBluetoothEnableContactSharing: boolean
  workProfileDataSharingType: MicrosoftGraphAndroidWorkProfileCrossProfileDataSharingType
  workProfileDefaultAppPermissionPolicy: MicrosoftGraphAndroidWorkProfileDefaultAppPermissionPolicyType
  workProfilePasswordBlockFingerprintUnlock: boolean
  workProfilePasswordBlockTrustAgents: boolean
  workProfilePasswordExpirationDays: number
  workProfilePasswordMinimumLength: number
  workProfilePasswordMinLetterCharacters: number
  workProfilePasswordMinLowerCaseCharacters: number
  workProfilePasswordMinNonLetterCharacters: number
  workProfilePasswordMinNumericCharacters: number
  workProfilePasswordMinSymbolCharacters: number
  workProfilePasswordMinUpperCaseCharacters: number
  workProfilePasswordMinutesOfInactivityBeforeScreenTimeout: number
  workProfilePasswordPreviousPasswordBlockCount: number
  workProfilePasswordRequiredType: MicrosoftGraphAndroidWorkProfileRequiredPasswordType
  workProfilePasswordSignInFailureCountBeforeFactoryReset: number
  workProfileRequirePassword: boolean
}
export interface MicrosoftGraphAppleDeviceFeaturesConfigurationBase extends MicrosoftGraphDeviceConfiguration{
}
export interface MicrosoftGraphDeviceComplianceActionItem extends MicrosoftGraphEntity{
  actionType: MicrosoftGraphDeviceComplianceActionType
  gracePeriodHours: number
  notificationMessageCCList: string[]
  notificationTemplateId: string
}
export interface MicrosoftGraphDeviceComplianceDeviceOverview extends MicrosoftGraphEntity{
  configurationVersion: number
  errorCount: number
  failedCount: number
  lastUpdateDateTime: string
  notApplicableCount: number
  pendingCount: number
  successCount: number
}
export interface MicrosoftGraphDeviceComplianceDeviceStatus extends MicrosoftGraphEntity{
  complianceGracePeriodExpirationDateTime: string
  deviceDisplayName: string
  deviceModel: string
  lastReportedDateTime: string
  status: MicrosoftGraphComplianceStatus
  userName: string
  userPrincipalName: string
}
export interface MicrosoftGraphDeviceCompliancePolicyAssignment extends MicrosoftGraphEntity{
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphSettingStateDeviceSummary extends MicrosoftGraphEntity{
  compliantDeviceCount: number
  conflictDeviceCount: number
  errorDeviceCount: number
  instancePath: string
  nonCompliantDeviceCount: number
  notApplicableDeviceCount: number
  remediatedDeviceCount: number
  settingName: string
  unknownDeviceCount: number
}
export interface MicrosoftGraphDeviceComplianceScheduledActionForRule extends MicrosoftGraphEntity{
  ruleName: string
  scheduledActionConfigurations: MicrosoftGraphDeviceComplianceActionItem[]
}
export interface MicrosoftGraphDeviceComplianceUserStatus extends MicrosoftGraphEntity{
  devicesCount: number
  lastReportedDateTime: string
  status: MicrosoftGraphComplianceStatus
  userDisplayName: string
  userPrincipalName: string
}
export interface MicrosoftGraphDeviceComplianceUserOverview extends MicrosoftGraphEntity{
  configurationVersion: number
  errorCount: number
  failedCount: number
  lastUpdateDateTime: string
  notApplicableCount: number
  pendingCount: number
  successCount: number
}
export interface MicrosoftGraphDeviceComplianceSettingState extends MicrosoftGraphEntity{
  complianceGracePeriodExpirationDateTime: string
  deviceId: string
  deviceModel: string
  deviceName: string
  setting: string
  settingName: string
  state: MicrosoftGraphComplianceStatus
  userEmail: string
  userId: string
  userName: string
  userPrincipalName: string
}
export interface MicrosoftGraphDeviceCompliancePolicyState extends MicrosoftGraphEntity{
  displayName: string
  platformType: MicrosoftGraphPolicyPlatformType
  settingCount: number
  settingStates: MicrosoftGraphDeviceCompliancePolicySettingState[]
  state: MicrosoftGraphComplianceStatus
  version: number
}
export interface MicrosoftGraphDeviceConfigurationAssignment extends MicrosoftGraphEntity{
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphDeviceConfigurationDeviceStatus extends MicrosoftGraphEntity{
  complianceGracePeriodExpirationDateTime: string
  deviceDisplayName: string
  deviceModel: string
  lastReportedDateTime: string
  status: MicrosoftGraphComplianceStatus
  userName: string
  userPrincipalName: string
}
export interface MicrosoftGraphDeviceConfigurationDeviceOverview extends MicrosoftGraphEntity{
  configurationVersion: number
  errorCount: number
  failedCount: number
  lastUpdateDateTime: string
  notApplicableCount: number
  pendingCount: number
  successCount: number
}
export interface MicrosoftGraphDeviceConfigurationUserStatus extends MicrosoftGraphEntity{
  devicesCount: number
  lastReportedDateTime: string
  status: MicrosoftGraphComplianceStatus
  userDisplayName: string
  userPrincipalName: string
}
export interface MicrosoftGraphDeviceConfigurationUserOverview extends MicrosoftGraphEntity{
  configurationVersion: number
  errorCount: number
  failedCount: number
  lastUpdateDateTime: string
  notApplicableCount: number
  pendingCount: number
  successCount: number
}
export interface MicrosoftGraphDeviceConfigurationState extends MicrosoftGraphEntity{
  displayName: string
  platformType: MicrosoftGraphPolicyPlatformType
  settingCount: number
  settingStates: MicrosoftGraphDeviceConfigurationSettingState[]
  state: MicrosoftGraphComplianceStatus
  version: number
}
export interface MicrosoftGraphEditionUpgradeConfiguration extends MicrosoftGraphDeviceConfiguration{
  license: string
  licenseType: MicrosoftGraphEditionUpgradeLicenseType
  productKey: string
  targetEdition: MicrosoftGraphWindows10EditionType
}
export interface MicrosoftGraphIosCertificateProfile extends MicrosoftGraphDeviceConfiguration{
}
export interface MicrosoftGraphIosCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  deviceThreatProtectionEnabled: boolean
  deviceThreatProtectionRequiredSecurityLevel: MicrosoftGraphDeviceThreatProtectionLevel
  managedEmailProfileRequired: boolean
  osMaximumVersion: string
  osMinimumVersion: string
  passcodeBlockSimple: boolean
  passcodeExpirationDays: number
  passcodeMinimumCharacterSetCount: number
  passcodeMinimumLength: number
  passcodeMinutesOfInactivityBeforeLock: number
  passcodePreviousPasscodeBlockCount: number
  passcodeRequired: boolean
  passcodeRequiredType: MicrosoftGraphRequiredPasswordType
  securityBlockJailbrokenDevices: boolean
}
export interface MicrosoftGraphIosCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
  payload: string
  payloadFileName: string
  payloadName: string
}
export interface MicrosoftGraphIosDeviceFeaturesConfiguration extends MicrosoftGraphAppleDeviceFeaturesConfigurationBase{
  assetTagTemplate: string
  homeScreenDockIcons: MicrosoftGraphIosHomeScreenItem[]
  homeScreenPages: MicrosoftGraphIosHomeScreenPage[]
  lockScreenFootnote: string
  notificationSettings: MicrosoftGraphIosNotificationSettings[]
}
export interface MicrosoftGraphIosGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
  accountBlockModification: boolean
  activationLockAllowWhenSupervised: boolean
  airDropBlocked: boolean
  airDropForceUnmanagedDropTarget: boolean
  airPlayForcePairingPasswordForOutgoingRequests: boolean
  appleNewsBlocked: boolean
  appleWatchBlockPairing: boolean
  appleWatchForceWristDetection: boolean
  appsSingleAppModeList: MicrosoftGraphAppListItem[]
  appStoreBlockAutomaticDownloads: boolean
  appStoreBlocked: boolean
  appStoreBlockInAppPurchases: boolean
  appStoreBlockUIAppInstallation: boolean
  appStoreRequirePassword: boolean
  appsVisibilityList: MicrosoftGraphAppListItem[]
  appsVisibilityListType: MicrosoftGraphAppListType
  bluetoothBlockModification: boolean
  cameraBlocked: boolean
  cellularBlockDataRoaming: boolean
  cellularBlockGlobalBackgroundFetchWhileRoaming: boolean
  cellularBlockPerAppDataModification: boolean
  cellularBlockPersonalHotspot: boolean
  cellularBlockVoiceRoaming: boolean
  certificatesBlockUntrustedTlsCertificates: boolean
  classroomAppBlockRemoteScreenObservation: boolean
  classroomAppForceUnpromptedScreenObservation: boolean
  compliantAppListType: MicrosoftGraphAppListType
  compliantAppsList: MicrosoftGraphAppListItem[]
  configurationProfileBlockChanges: boolean
  definitionLookupBlocked: boolean
  deviceBlockEnableRestrictions: boolean
  deviceBlockEraseContentAndSettings: boolean
  deviceBlockNameModification: boolean
  diagnosticDataBlockSubmission: boolean
  diagnosticDataBlockSubmissionModification: boolean
  documentsBlockManagedDocumentsInUnmanagedApps: boolean
  documentsBlockUnmanagedDocumentsInManagedApps: boolean
  emailInDomainSuffixes: string[]
  enterpriseAppBlockTrust: boolean
  enterpriseAppBlockTrustModification: boolean
  faceTimeBlocked: boolean
  findMyFriendsBlocked: boolean
  gameCenterBlocked: boolean
  gamingBlockGameCenterFriends: boolean
  gamingBlockMultiplayer: boolean
  hostPairingBlocked: boolean
  iBooksStoreBlocked: boolean
  iBooksStoreBlockErotica: boolean
  iCloudBlockActivityContinuation: boolean
  iCloudBlockBackup: boolean
  iCloudBlockDocumentSync: boolean
  iCloudBlockManagedAppsSync: boolean
  iCloudBlockPhotoLibrary: boolean
  iCloudBlockPhotoStreamSync: boolean
  iCloudBlockSharedPhotoStream: boolean
  iCloudRequireEncryptedBackup: boolean
  iTunesBlockExplicitContent: boolean
  iTunesBlockMusicService: boolean
  iTunesBlockRadio: boolean
  keyboardBlockAutoCorrect: boolean
  keyboardBlockDictation: boolean
  keyboardBlockPredictive: boolean
  keyboardBlockShortcuts: boolean
  keyboardBlockSpellCheck: boolean
  kioskModeAllowAssistiveSpeak: boolean
  kioskModeAllowAssistiveTouchSettings: boolean
  kioskModeAllowAutoLock: boolean
  kioskModeAllowColorInversionSettings: boolean
  kioskModeAllowRingerSwitch: boolean
  kioskModeAllowScreenRotation: boolean
  kioskModeAllowSleepButton: boolean
  kioskModeAllowTouchscreen: boolean
  kioskModeAllowVoiceOverSettings: boolean
  kioskModeAllowVolumeButtons: boolean
  kioskModeAllowZoomSettings: boolean
  kioskModeAppStoreUrl: string
  kioskModeBuiltInAppId: string
  kioskModeManagedAppId: string
  kioskModeRequireAssistiveTouch: boolean
  kioskModeRequireColorInversion: boolean
  kioskModeRequireMonoAudio: boolean
  kioskModeRequireVoiceOver: boolean
  kioskModeRequireZoom: boolean
  lockScreenBlockControlCenter: boolean
  lockScreenBlockNotificationView: boolean
  lockScreenBlockPassbook: boolean
  lockScreenBlockTodayView: boolean
  mediaContentRatingApps: MicrosoftGraphRatingAppsType
  mediaContentRatingAustralia: MicrosoftGraphMediaContentRatingAustralia
  mediaContentRatingCanada: MicrosoftGraphMediaContentRatingCanada
  mediaContentRatingFrance: MicrosoftGraphMediaContentRatingFrance
  mediaContentRatingGermany: MicrosoftGraphMediaContentRatingGermany
  mediaContentRatingIreland: MicrosoftGraphMediaContentRatingIreland
  mediaContentRatingJapan: MicrosoftGraphMediaContentRatingJapan
  mediaContentRatingNewZealand: MicrosoftGraphMediaContentRatingNewZealand
  mediaContentRatingUnitedKingdom: MicrosoftGraphMediaContentRatingUnitedKingdom
  mediaContentRatingUnitedStates: MicrosoftGraphMediaContentRatingUnitedStates
  messagesBlocked: boolean
  networkUsageRules: MicrosoftGraphIosNetworkUsageRule[]
  notificationsBlockSettingsModification: boolean
  passcodeBlockFingerprintModification: boolean
  passcodeBlockFingerprintUnlock: boolean
  passcodeBlockModification: boolean
  passcodeBlockSimple: boolean
  passcodeExpirationDays: number
  passcodeMinimumCharacterSetCount: number
  passcodeMinimumLength: number
  passcodeMinutesOfInactivityBeforeLock: number
  passcodeMinutesOfInactivityBeforeScreenTimeout: number
  passcodePreviousPasscodeBlockCount: number
  passcodeRequired: boolean
  passcodeRequiredType: MicrosoftGraphRequiredPasswordType
  passcodeSignInFailureCountBeforeWipe: number
  podcastsBlocked: boolean
  safariBlockAutofill: boolean
  safariBlocked: boolean
  safariBlockJavaScript: boolean
  safariBlockPopups: boolean
  safariCookieSettings: MicrosoftGraphWebBrowserCookieSettings
  safariManagedDomains: string[]
  safariPasswordAutoFillDomains: string[]
  safariRequireFraudWarning: boolean
  screenCaptureBlocked: boolean
  siriBlocked: boolean
  siriBlockedWhenLocked: boolean
  siriBlockUserGeneratedContent: boolean
  siriRequireProfanityFilter: boolean
  spotlightBlockInternetResults: boolean
  voiceDialingBlocked: boolean
  wallpaperBlockModification: boolean
  wiFiConnectOnlyToConfiguredNetworks: boolean
}
export interface MicrosoftGraphIosUpdateConfiguration extends MicrosoftGraphDeviceConfiguration{
  activeHoursEnd: string
  activeHoursStart: string
  scheduledInstallDays: MicrosoftGraphDayOfWeek[]
  utcTimeOffsetInMinutes: number
}
export interface MicrosoftGraphMacOSCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  deviceThreatProtectionEnabled: boolean
  deviceThreatProtectionRequiredSecurityLevel: MicrosoftGraphDeviceThreatProtectionLevel
  firewallBlockAllIncoming: boolean
  firewallEnabled: boolean
  firewallEnableStealthMode: boolean
  osMaximumVersion: string
  osMinimumVersion: string
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  storageRequireEncryption: boolean
  systemIntegrityProtectionEnabled: boolean
}
export interface MicrosoftGraphMacOSCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
  payload: string
  payloadFileName: string
  payloadName: string
}
export interface MicrosoftGraphMacOSDeviceFeaturesConfiguration extends MicrosoftGraphAppleDeviceFeaturesConfigurationBase{
}
export interface MicrosoftGraphMacOSGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
  compliantAppListType: MicrosoftGraphAppListType
  compliantAppsList: MicrosoftGraphAppListItem[]
  emailInDomainSuffixes: string[]
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordMinutesOfInactivityBeforeScreenTimeout: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
}
export interface MicrosoftGraphReportRoot extends MicrosoftGraphEntity{
  dailyPrintUsageByPrinter: MicrosoftGraphPrintUsageByPrinter[]
  dailyPrintUsageByUser: MicrosoftGraphPrintUsageByUser[]
  monthlyPrintUsageByPrinter: MicrosoftGraphPrintUsageByPrinter[]
  monthlyPrintUsageByUser: MicrosoftGraphPrintUsageByUser[]
}
export interface MicrosoftGraphPrintUsage extends MicrosoftGraphEntity{
  completedBlackAndWhiteJobCount: number
  completedColorJobCount: number
  incompleteJobCount: number
  usageDate: string
}
export interface MicrosoftGraphPrintUsageByPrinter extends MicrosoftGraphPrintUsage{
  printerId: string
}
export interface MicrosoftGraphPrintUsageByUser extends MicrosoftGraphPrintUsage{
  userPrincipalName: string
}
export interface MicrosoftGraphSharedPCConfiguration extends MicrosoftGraphDeviceConfiguration{
  accountManagerPolicy: MicrosoftGraphSharedPCAccountManagerPolicy
  allowedAccounts: MicrosoftGraphSharedPCAllowedAccountType
  allowLocalStorage: boolean
  disableAccountManager: boolean
  disableEduPolicies: boolean
  disablePowerPolicies: boolean
  disableSignInOnResume: boolean
  enabled: boolean
  idleTimeBeforeSleepInSeconds: number
  kioskAppDisplayName: string
  kioskAppUserModelId: string
  maintenanceStartTime: string
}
export interface MicrosoftGraphWindows10CompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  bitLockerEnabled: boolean
  codeIntegrityEnabled: boolean
  earlyLaunchAntiMalwareDriverEnabled: boolean
  mobileOsMaximumVersion: string
  mobileOsMinimumVersion: string
  osMaximumVersion: string
  osMinimumVersion: string
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredToUnlockFromIdle: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  requireHealthyDeviceReport: boolean
  secureBootEnabled: boolean
  storageRequireEncryption: boolean
}
export interface MicrosoftGraphWindows10CustomConfiguration extends MicrosoftGraphDeviceConfiguration{
  omaSettings: MicrosoftGraphOmaSetting[]
}
export interface MicrosoftGraphWindows10EndpointProtectionConfiguration extends MicrosoftGraphDeviceConfiguration{
  applicationGuardAllowPersistence: boolean
  applicationGuardAllowPrintToLocalPrinters: boolean
  applicationGuardAllowPrintToNetworkPrinters: boolean
  applicationGuardAllowPrintToPDF: boolean
  applicationGuardAllowPrintToXPS: boolean
  applicationGuardBlockClipboardSharing: MicrosoftGraphApplicationGuardBlockClipboardSharingType
  applicationGuardBlockFileTransfer: MicrosoftGraphApplicationGuardBlockFileTransferType
  applicationGuardBlockNonEnterpriseContent: boolean
  applicationGuardEnabled: boolean
  applicationGuardForceAuditing: boolean
  appLockerApplicationControl: MicrosoftGraphAppLockerApplicationControlType
  bitLockerDisableWarningForOtherDiskEncryption: boolean
  bitLockerEnableStorageCardEncryptionOnMobile: boolean
  bitLockerEncryptDevice: boolean
  bitLockerRemovableDrivePolicy: MicrosoftGraphBitLockerRemovableDrivePolicy
  defenderAdditionalGuardedFolders: string[]
  defenderAttackSurfaceReductionExcludedPaths: string[]
  defenderExploitProtectionXml: string
  defenderExploitProtectionXmlFileName: string
  defenderGuardedFoldersAllowedAppPaths: string[]
  defenderSecurityCenterBlockExploitProtectionOverride: boolean
  firewallBlockStatefulFTP: boolean
  firewallCertificateRevocationListCheckMethod: MicrosoftGraphFirewallCertificateRevocationListCheckMethodType
  firewallIdleTimeoutForSecurityAssociationInSeconds: number
  firewallIPSecExemptionsAllowDHCP: boolean
  firewallIPSecExemptionsAllowICMP: boolean
  firewallIPSecExemptionsAllowNeighborDiscovery: boolean
  firewallIPSecExemptionsAllowRouterDiscovery: boolean
  firewallMergeKeyingModuleSettings: boolean
  firewallPacketQueueingMethod: MicrosoftGraphFirewallPacketQueueingMethodType
  firewallPreSharedKeyEncodingMethod: MicrosoftGraphFirewallPreSharedKeyEncodingMethodType
  firewallProfileDomain: MicrosoftGraphWindowsFirewallNetworkProfile
  firewallProfilePrivate: MicrosoftGraphWindowsFirewallNetworkProfile
  firewallProfilePublic: MicrosoftGraphWindowsFirewallNetworkProfile
  smartScreenBlockOverrideForFiles: boolean
  smartScreenEnableInShell: boolean
}
export interface MicrosoftGraphWindows10EnterpriseModernAppManagementConfiguration extends MicrosoftGraphDeviceConfiguration{
  uninstallBuiltInApps: boolean
}
export interface MicrosoftGraphWindows10GeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
  accountsBlockAddingNonMicrosoftAccountEmail: boolean
  antiTheftModeBlocked: boolean
  appsAllowTrustedAppsSideloading: MicrosoftGraphStateManagementSetting
  appsBlockWindowsStoreOriginatedApps: boolean
  bluetoothAllowedServices: string[]
  bluetoothBlockAdvertising: boolean
  bluetoothBlockDiscoverableMode: boolean
  bluetoothBlocked: boolean
  bluetoothBlockPrePairing: boolean
  cameraBlocked: boolean
  cellularBlockDataWhenRoaming: boolean
  cellularBlockVpn: boolean
  cellularBlockVpnWhenRoaming: boolean
  certificatesBlockManualRootCertificateInstallation: boolean
  connectedDevicesServiceBlocked: boolean
  copyPasteBlocked: boolean
  cortanaBlocked: boolean
  defenderBlockEndUserAccess: boolean
  defenderCloudBlockLevel: MicrosoftGraphDefenderCloudBlockLevelType
  defenderDaysBeforeDeletingQuarantinedMalware: number
  defenderDetectedMalwareActions: MicrosoftGraphDefenderDetectedMalwareActions
  defenderFileExtensionsToExclude: string[]
  defenderFilesAndFoldersToExclude: string[]
  defenderMonitorFileActivity: MicrosoftGraphDefenderMonitorFileActivity
  defenderProcessesToExclude: string[]
  defenderPromptForSampleSubmission: MicrosoftGraphDefenderPromptForSampleSubmission
  defenderRequireBehaviorMonitoring: boolean
  defenderRequireCloudProtection: boolean
  defenderRequireNetworkInspectionSystem: boolean
  defenderRequireRealTimeMonitoring: boolean
  defenderScanArchiveFiles: boolean
  defenderScanDownloads: boolean
  defenderScanIncomingMail: boolean
  defenderScanMappedNetworkDrivesDuringFullScan: boolean
  defenderScanMaxCpu: number
  defenderScanNetworkFiles: boolean
  defenderScanRemovableDrivesDuringFullScan: boolean
  defenderScanScriptsLoadedInInternetExplorer: boolean
  defenderScanType: MicrosoftGraphDefenderScanType
  defenderScheduledQuickScanTime: string
  defenderScheduledScanTime: string
  defenderSignatureUpdateIntervalInHours: number
  defenderSystemScanSchedule: MicrosoftGraphWeeklySchedule
  developerUnlockSetting: MicrosoftGraphStateManagementSetting
  deviceManagementBlockFactoryResetOnMobile: boolean
  deviceManagementBlockManualUnenroll: boolean
  diagnosticsDataSubmissionMode: MicrosoftGraphDiagnosticDataSubmissionMode
  edgeAllowStartPagesModification: boolean
  edgeBlockAccessToAboutFlags: boolean
  edgeBlockAddressBarDropdown: boolean
  edgeBlockAutofill: boolean
  edgeBlockCompatibilityList: boolean
  edgeBlockDeveloperTools: boolean
  edgeBlocked: boolean
  edgeBlockExtensions: boolean
  edgeBlockInPrivateBrowsing: boolean
  edgeBlockJavaScript: boolean
  edgeBlockLiveTileDataCollection: boolean
  edgeBlockPasswordManager: boolean
  edgeBlockPopups: boolean
  edgeBlockSearchSuggestions: boolean
  edgeBlockSendingDoNotTrackHeader: boolean
  edgeBlockSendingIntranetTrafficToInternetExplorer: boolean
  edgeClearBrowsingDataOnExit: boolean
  edgeCookiePolicy: MicrosoftGraphEdgeCookiePolicy
  edgeDisableFirstRunPage: boolean
  edgeEnterpriseModeSiteListLocation: string
  edgeFirstRunUrl: string
  edgeHomepageUrls: string[]
  edgeRequireSmartScreen: boolean
  edgeSearchEngine: MicrosoftGraphEdgeSearchEngineBase
  edgeSendIntranetTrafficToInternetExplorer: boolean
  edgeSyncFavoritesWithInternetExplorer: boolean
  enterpriseCloudPrintDiscoveryEndPoint: string
  enterpriseCloudPrintDiscoveryMaxLimit: number
  enterpriseCloudPrintMopriaDiscoveryResourceIdentifier: string
  enterpriseCloudPrintOAuthAuthority: string
  enterpriseCloudPrintOAuthClientIdentifier: string
  enterpriseCloudPrintResourceIdentifier: string
  experienceBlockDeviceDiscovery: boolean
  experienceBlockErrorDialogWhenNoSIM: boolean
  experienceBlockTaskSwitcher: boolean
  gameDvrBlocked: boolean
  internetSharingBlocked: boolean
  locationServicesBlocked: boolean
  lockScreenAllowTimeoutConfiguration: boolean
  lockScreenBlockActionCenterNotifications: boolean
  lockScreenBlockCortana: boolean
  lockScreenBlockToastNotifications: boolean
  lockScreenTimeoutInSeconds: number
  logonBlockFastUserSwitching: boolean
  microsoftAccountBlocked: boolean
  microsoftAccountBlockSettingsSync: boolean
  networkProxyApplySettingsDeviceWide: boolean
  networkProxyAutomaticConfigurationUrl: string
  networkProxyDisableAutoDetect: boolean
  networkProxyServer: MicrosoftGraphWindows10NetworkProxyServer
  nfcBlocked: boolean
  oneDriveDisableFileSync: boolean
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeScreenTimeout: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  passwordRequireWhenResumeFromIdleState: boolean
  passwordSignInFailureCountBeforeFactoryReset: number
  personalizationDesktopImageUrl: string
  personalizationLockScreenImageUrl: string
  privacyAdvertisingId: MicrosoftGraphStateManagementSetting
  privacyAutoAcceptPairingAndConsentPrompts: boolean
  privacyBlockInputPersonalization: boolean
  resetProtectionModeBlocked: boolean
  safeSearchFilter: MicrosoftGraphSafeSearchFilterType
  screenCaptureBlocked: boolean
  searchBlockDiacritics: boolean
  searchDisableAutoLanguageDetection: boolean
  searchDisableIndexerBackoff: boolean
  searchDisableIndexingEncryptedItems: boolean
  searchDisableIndexingRemovableDrive: boolean
  searchEnableAutomaticIndexSizeManangement: boolean
  searchEnableRemoteQueries: boolean
  settingsBlockAccountsPage: boolean
  settingsBlockAddProvisioningPackage: boolean
  settingsBlockAppsPage: boolean
  settingsBlockChangeLanguage: boolean
  settingsBlockChangePowerSleep: boolean
  settingsBlockChangeRegion: boolean
  settingsBlockChangeSystemTime: boolean
  settingsBlockDevicesPage: boolean
  settingsBlockEaseOfAccessPage: boolean
  settingsBlockEditDeviceName: boolean
  settingsBlockGamingPage: boolean
  settingsBlockNetworkInternetPage: boolean
  settingsBlockPersonalizationPage: boolean
  settingsBlockPrivacyPage: boolean
  settingsBlockRemoveProvisioningPackage: boolean
  settingsBlockSettingsApp: boolean
  settingsBlockSystemPage: boolean
  settingsBlockTimeLanguagePage: boolean
  settingsBlockUpdateSecurityPage: boolean
  sharedUserAppDataAllowed: boolean
  smartScreenBlockPromptOverride: boolean
  smartScreenBlockPromptOverrideForFiles: boolean
  smartScreenEnableAppInstallControl: boolean
  startBlockUnpinningAppsFromTaskbar: boolean
  startMenuAppListVisibility: MicrosoftGraphWindowsStartMenuAppListVisibilityType
  startMenuHideChangeAccountSettings: boolean
  startMenuHideFrequentlyUsedApps: boolean
  startMenuHideHibernate: boolean
  startMenuHideLock: boolean
  startMenuHidePowerButton: boolean
  startMenuHideRecentJumpLists: boolean
  startMenuHideRecentlyAddedApps: boolean
  startMenuHideRestartOptions: boolean
  startMenuHideShutDown: boolean
  startMenuHideSignOut: boolean
  startMenuHideSleep: boolean
  startMenuHideSwitchAccount: boolean
  startMenuHideUserTile: boolean
  startMenuLayoutEdgeAssetsXml: string
  startMenuLayoutXml: string
  startMenuMode: MicrosoftGraphWindowsStartMenuModeType
  startMenuPinnedFolderDocuments: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderDownloads: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderFileExplorer: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderHomeGroup: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderMusic: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderNetwork: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderPersonalFolder: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderPictures: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderSettings: MicrosoftGraphVisibilitySetting
  startMenuPinnedFolderVideos: MicrosoftGraphVisibilitySetting
  storageBlockRemovableStorage: boolean
  storageRequireMobileDeviceEncryption: boolean
  storageRestrictAppDataToSystemVolume: boolean
  storageRestrictAppInstallToSystemVolume: boolean
  tenantLockdownRequireNetworkDuringOutOfBoxExperience: boolean
  usbBlocked: boolean
  voiceRecordingBlocked: boolean
  webRtcBlockLocalhostIpAddress: boolean
  wiFiBlockAutomaticConnectHotspots: boolean
  wiFiBlocked: boolean
  wiFiBlockManualConfiguration: boolean
  wiFiScanInterval: number
  windowsSpotlightBlockConsumerSpecificFeatures: boolean
  windowsSpotlightBlocked: boolean
  windowsSpotlightBlockOnActionCenter: boolean
  windowsSpotlightBlockTailoredExperiences: boolean
  windowsSpotlightBlockThirdPartyNotifications: boolean
  windowsSpotlightBlockWelcomeExperience: boolean
  windowsSpotlightBlockWindowsTips: boolean
  windowsSpotlightConfigureOnLockScreen: MicrosoftGraphWindowsSpotlightEnablementSettings
  windowsStoreBlockAutoUpdate: boolean
  windowsStoreBlocked: boolean
  windowsStoreEnablePrivateStoreOnly: boolean
  wirelessDisplayBlockProjectionToThisDevice: boolean
  wirelessDisplayBlockUserInputFromReceiver: boolean
  wirelessDisplayRequirePinForPairing: boolean
}
export interface MicrosoftGraphWindows10MobileCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  bitLockerEnabled: boolean
  codeIntegrityEnabled: boolean
  earlyLaunchAntiMalwareDriverEnabled: boolean
  osMaximumVersion: string
  osMinimumVersion: string
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  passwordRequireToUnlockFromIdle: boolean
  secureBootEnabled: boolean
  storageRequireEncryption: boolean
}
export interface MicrosoftGraphWindows10SecureAssessmentConfiguration extends MicrosoftGraphDeviceConfiguration{
  allowPrinting: boolean
  allowScreenCapture: boolean
  allowTextSuggestion: boolean
  configurationAccount: string
  launchUri: string
}
export interface MicrosoftGraphWindows10TeamGeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
  azureOperationalInsightsBlockTelemetry: boolean
  azureOperationalInsightsWorkspaceId: string
  azureOperationalInsightsWorkspaceKey: string
  connectAppBlockAutoLaunch: boolean
  maintenanceWindowBlocked: boolean
  maintenanceWindowDurationInHours: number
  maintenanceWindowStartTime: string
  miracastBlocked: boolean
  miracastChannel: MicrosoftGraphMiracastChannel
  miracastRequirePin: boolean
  settingsBlockMyMeetingsAndFiles: boolean
  settingsBlockSessionResume: boolean
  settingsBlockSigninSuggestions: boolean
  settingsDefaultVolume: number
  settingsScreenTimeoutInMinutes: number
  settingsSessionTimeoutInMinutes: number
  settingsSleepTimeoutInMinutes: number
  welcomeScreenBackgroundImageUrl: string
  welcomeScreenBlockAutomaticWakeUp: boolean
  welcomeScreenMeetingInformation: MicrosoftGraphWelcomeScreenMeetingInformation
}
export interface MicrosoftGraphWindows81CompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  osMaximumVersion: string
  osMinimumVersion: string
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  storageRequireEncryption: boolean
}
export interface MicrosoftGraphWindows81GeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
  accountsBlockAddingNonMicrosoftAccountEmail: boolean
  applyOnlyToWindows81: boolean
  browserBlockAutofill: boolean
  browserBlockAutomaticDetectionOfIntranetSites: boolean
  browserBlockEnterpriseModeAccess: boolean
  browserBlockJavaScript: boolean
  browserBlockPlugins: boolean
  browserBlockPopups: boolean
  browserBlockSendingDoNotTrackHeader: boolean
  browserBlockSingleWordEntryOnIntranetSites: boolean
  browserEnterpriseModeSiteListLocation: string
  browserInternetSecurityLevel: MicrosoftGraphInternetSiteSecurityLevel
  browserIntranetSecurityLevel: MicrosoftGraphSiteSecurityLevel
  browserLoggingReportLocation: string
  browserRequireFirewall: boolean
  browserRequireFraudWarning: boolean
  browserRequireHighSecurityForRestrictedSites: boolean
  browserRequireSmartScreen: boolean
  browserTrustedSitesSecurityLevel: MicrosoftGraphSiteSecurityLevel
  cellularBlockDataRoaming: boolean
  diagnosticsBlockDataSubmission: boolean
  passwordBlockPicturePasswordAndPin: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeScreenTimeout: number
  passwordPreviousPasswordBlockCount: number
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  passwordSignInFailureCountBeforeFactoryReset: number
  storageRequireDeviceEncryption: boolean
  updatesRequireAutomaticUpdates: boolean
  userAccountControlSettings: MicrosoftGraphWindowsUserAccountControlSettings
  workFoldersUrl: string
}
export interface MicrosoftGraphWindowsDefenderAdvancedThreatProtectionConfiguration extends MicrosoftGraphDeviceConfiguration{
  allowSampleSharing: boolean
  enableExpeditedTelemetryReporting: boolean
}
export interface MicrosoftGraphWindowsPhone81CompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
  osMaximumVersion: string
  osMinimumVersion: string
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeLock: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  storageRequireEncryption: boolean
}
export interface MicrosoftGraphWindowsPhone81CustomConfiguration extends MicrosoftGraphDeviceConfiguration{
  omaSettings: MicrosoftGraphOmaSetting[]
}
export interface MicrosoftGraphWindowsPhone81GeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
  applyOnlyToWindowsPhone81: boolean
  appsBlockCopyPaste: boolean
  bluetoothBlocked: boolean
  cameraBlocked: boolean
  cellularBlockWifiTethering: boolean
  compliantAppListType: MicrosoftGraphAppListType
  compliantAppsList: MicrosoftGraphAppListItem[]
  diagnosticDataBlockSubmission: boolean
  emailBlockAddingAccounts: boolean
  locationServicesBlocked: boolean
  microsoftAccountBlocked: boolean
  nfcBlocked: boolean
  passwordBlockSimple: boolean
  passwordExpirationDays: number
  passwordMinimumCharacterSetCount: number
  passwordMinimumLength: number
  passwordMinutesOfInactivityBeforeScreenTimeout: number
  passwordPreviousPasswordBlockCount: number
  passwordRequired: boolean
  passwordRequiredType: MicrosoftGraphRequiredPasswordType
  passwordSignInFailureCountBeforeFactoryReset: number
  screenCaptureBlocked: boolean
  storageBlockRemovableStorage: boolean
  storageRequireEncryption: boolean
  webBrowserBlocked: boolean
  wifiBlockAutomaticConnectHotspots: boolean
  wifiBlocked: boolean
  wifiBlockHotspotReporting: boolean
  windowsStoreBlocked: boolean
}
export interface MicrosoftGraphWindowsUpdateForBusinessConfiguration extends MicrosoftGraphDeviceConfiguration{
  automaticUpdateMode: MicrosoftGraphAutomaticUpdateMode
  businessReadyUpdatesOnly: MicrosoftGraphWindowsUpdateType
  deliveryOptimizationMode: MicrosoftGraphWindowsDeliveryOptimizationMode
  driversExcluded: boolean
  featureUpdatesDeferralPeriodInDays: number
  featureUpdatesPaused: boolean
  featureUpdatesPauseExpiryDateTime: string
  installationSchedule: MicrosoftGraphWindowsUpdateInstallScheduleType
  microsoftUpdateServiceAllowed: boolean
  prereleaseFeatures: MicrosoftGraphPrereleaseFeatures
  qualityUpdatesDeferralPeriodInDays: number
  qualityUpdatesPaused: boolean
  qualityUpdatesPauseExpiryDateTime: string
}
export interface MicrosoftGraphEnrollmentConfigurationAssignment extends MicrosoftGraphEntity{
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphDeviceEnrollmentLimitConfiguration extends MicrosoftGraphDeviceEnrollmentConfiguration{
  limit: number
}
export interface MicrosoftGraphDeviceEnrollmentPlatformRestrictionsConfiguration extends MicrosoftGraphDeviceEnrollmentConfiguration{
  androidRestriction: MicrosoftGraphDeviceEnrollmentPlatformRestriction
  iosRestriction: MicrosoftGraphDeviceEnrollmentPlatformRestriction
  macOSRestriction: MicrosoftGraphDeviceEnrollmentPlatformRestriction
  windowsMobileRestriction: MicrosoftGraphDeviceEnrollmentPlatformRestriction
  windowsRestriction: MicrosoftGraphDeviceEnrollmentPlatformRestriction
}
export interface MicrosoftGraphDeviceEnrollmentWindowsHelloForBusinessConfiguration extends MicrosoftGraphDeviceEnrollmentConfiguration{
  enhancedBiometricsState: MicrosoftGraphEnablement
  pinExpirationInDays: number
  pinLowercaseCharactersUsage: MicrosoftGraphWindowsHelloForBusinessPinUsage
  pinMaximumLength: number
  pinMinimumLength: number
  pinPreviousBlockCount: number
  pinSpecialCharactersUsage: MicrosoftGraphWindowsHelloForBusinessPinUsage
  pinUppercaseCharactersUsage: MicrosoftGraphWindowsHelloForBusinessPinUsage
  remotePassportEnabled: boolean
  securityDeviceRequired: boolean
  state: MicrosoftGraphEnablement
  unlockWithBiometricsEnabled: boolean
}
export interface MicrosoftGraphImportedWindowsAutopilotDeviceIdentityUpload extends MicrosoftGraphEntity{
  createdDateTimeUtc: string
  status: MicrosoftGraphImportedWindowsAutopilotDeviceIdentityUploadStatus
  deviceIdentities: MicrosoftGraphImportedWindowsAutopilotDeviceIdentity[]
}
export interface MicrosoftGraphManagedMobileApp extends MicrosoftGraphEntity{
  mobileAppIdentifier: MicrosoftGraphMobileAppIdentifier
  version: string
}
export interface MicrosoftGraphManagedAppPolicyDeploymentSummary extends MicrosoftGraphEntity{
  configurationDeployedUserCount: number
  configurationDeploymentSummaryPerApp: MicrosoftGraphManagedAppPolicyDeploymentSummaryPerApp[]
  displayName: string
  lastRefreshTime: string
  version: string
}
export interface MicrosoftGraphAndroidManagedAppRegistration extends MicrosoftGraphManagedAppRegistration{
}
export interface MicrosoftGraphIosManagedAppRegistration extends MicrosoftGraphManagedAppRegistration{
}
export interface MicrosoftGraphManagedAppOperation extends MicrosoftGraphEntity{
  displayName: string
  lastModifiedDateTime: string
  state: string
  version: string
}
export interface MicrosoftGraphManagedAppStatusRaw extends MicrosoftGraphManagedAppStatus{
  content: MicrosoftGraphJson
}
export interface MicrosoftGraphTargetedManagedAppPolicyAssignment extends MicrosoftGraphEntity{
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphWindowsInformationProtectionAppLockerFile extends MicrosoftGraphEntity{
  displayName: string
  file: string
  fileHash: string
  version: string
}
export interface MicrosoftGraphLocalizedNotificationMessage extends MicrosoftGraphEntity{
  isDefault: boolean
  lastModifiedDateTime: string
  locale: string
  messageTemplate: string
  subject: string
}
export interface MicrosoftGraphDeviceAndAppManagementRoleDefinition extends MicrosoftGraphRoleDefinition{
}
export interface MicrosoftGraphDeviceManagementExportJob extends MicrosoftGraphEntity{
  expirationDateTime: string
  filter: string
  format: MicrosoftGraphDeviceManagementReportFileFormat
  localizationType: MicrosoftGraphDeviceManagementExportJobLocalizationType
  reportName: string
  requestDateTime: string
  select: string[]
  snapshotId: string
  status: MicrosoftGraphDeviceManagementReportStatus
  url: string
}
export interface MicrosoftGraphEnrollmentTroubleshootingEvent extends MicrosoftGraphDeviceManagementTroubleshootingEvent{
  deviceId: string
  enrollmentType: MicrosoftGraphDeviceEnrollmentType
  failureCategory: MicrosoftGraphDeviceEnrollmentFailureReason
  failureReason: string
  managedDeviceIdentifier: string
  operatingSystem: string
  osVersion: string
  userId: string
}
export interface MicrosoftGraphAdmin{
  serviceAnnouncement: MicrosoftGraphServiceAnnouncement
}
export interface MicrosoftGraphServiceAnnouncement extends MicrosoftGraphEntity{
  healthOverviews: MicrosoftGraphServiceHealth[]
  issues: MicrosoftGraphServiceHealthIssue[]
  messages: MicrosoftGraphServiceUpdateMessage[]
}
export interface MicrosoftGraphServiceHealth extends MicrosoftGraphEntity{
  service: string
  status: MicrosoftGraphServiceHealthStatus
  issues: MicrosoftGraphServiceHealthIssue[]
}
export interface MicrosoftGraphServiceAnnouncementBase extends MicrosoftGraphEntity{
  details: MicrosoftGraphKeyValuePair[]
  endDateTime: string
  lastModifiedDateTime: string
  startDateTime: string
  title: string
}
export interface MicrosoftGraphServiceHealthIssue extends MicrosoftGraphServiceAnnouncementBase{
  classification: MicrosoftGraphServiceHealthClassificationType
  feature: string
  featureGroup: string
  impactDescription: string
  isResolved: boolean
  origin: MicrosoftGraphServiceHealthOrigin
  posts: MicrosoftGraphServiceHealthIssuePost[]
  service: string
  status: MicrosoftGraphServiceHealthStatus
}
export interface MicrosoftGraphServiceUpdateMessage extends MicrosoftGraphServiceAnnouncementBase{
  actionRequiredByDateTime: string
  attachmentsArchive: string
  body: MicrosoftGraphItemBody
  category: MicrosoftGraphServiceUpdateCategory
  hasAttachments: boolean
  isMajorChange: boolean
  services: string[]
  severity: MicrosoftGraphServiceUpdateSeverity
  tags: string[]
  viewPoint: MicrosoftGraphServiceUpdateMessageViewpoint
  attachments: MicrosoftGraphServiceAnnouncementAttachment[]
}
export interface MicrosoftGraphServiceAnnouncementAttachment extends MicrosoftGraphEntity{
  content: string
  contentType: string
  lastModifiedDateTime: string
  name: string
  size: number
}
export interface MicrosoftGraphSearchEntity extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphPlanner extends MicrosoftGraphEntity{
  buckets: MicrosoftGraphPlannerBucket[]
  plans: MicrosoftGraphPlannerPlan[]
  tasks: MicrosoftGraphPlannerTask[]
}
export interface MicrosoftGraphPlannerBucket extends MicrosoftGraphEntity{
  name: string
  orderHint: string
  planId: string
  tasks: MicrosoftGraphPlannerTask[]
}
export interface MicrosoftGraphPlannerPlan extends MicrosoftGraphEntity{
  container: MicrosoftGraphPlannerPlanContainer
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  owner: string
  title: string
  buckets: MicrosoftGraphPlannerBucket[]
  details: MicrosoftGraphPlannerPlanDetails
  tasks: MicrosoftGraphPlannerTask[]
}
export interface MicrosoftGraphPlannerTask extends MicrosoftGraphEntity{
  activeChecklistItemCount: number
  appliedCategories: MicrosoftGraphPlannerAppliedCategories
  assigneePriority: string
  assignments: MicrosoftGraphPlannerAssignments
  bucketId: string
  checklistItemCount: number
  completedBy: MicrosoftGraphIdentitySet
  completedDateTime: string
  conversationThreadId: string
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  dueDateTime: string
  hasDescription: boolean
  orderHint: string
  percentComplete: number
  planId: string
  previewType: MicrosoftGraphPlannerPreviewType
  priority: number
  referenceCount: number
  startDateTime: string
  title: string
  assignedToTaskBoardFormat: MicrosoftGraphPlannerAssignedToTaskBoardTaskFormat
  bucketTaskBoardFormat: MicrosoftGraphPlannerBucketTaskBoardTaskFormat
  details: MicrosoftGraphPlannerTaskDetails
  progressTaskBoardFormat: MicrosoftGraphPlannerProgressTaskBoardTaskFormat
}
export interface MicrosoftGraphPlannerAssignedToTaskBoardTaskFormat extends MicrosoftGraphEntity{
  orderHintsByAssignee: MicrosoftGraphPlannerOrderHintsByAssignee
  unassignedOrderHint: string
}
export interface MicrosoftGraphPlannerBucketTaskBoardTaskFormat extends MicrosoftGraphEntity{
  orderHint: string
}
export interface MicrosoftGraphPlannerPlanDetails extends MicrosoftGraphEntity{
  categoryDescriptions: MicrosoftGraphPlannerCategoryDescriptions
  sharedWith: MicrosoftGraphPlannerUserIds
}
export interface MicrosoftGraphPlannerProgressTaskBoardTaskFormat extends MicrosoftGraphEntity{
  orderHint: string
}
export interface MicrosoftGraphPlannerTaskDetails extends MicrosoftGraphEntity{
  checklist: MicrosoftGraphPlannerChecklistItems
  description: string
  previewType: MicrosoftGraphPlannerPreviewType
  references: MicrosoftGraphPlannerExternalReferences
}
export interface MicrosoftGraphSharedInsight extends MicrosoftGraphEntity{
  lastShared: MicrosoftGraphSharingDetail
  resourceReference: MicrosoftGraphResourceReference
  resourceVisualization: MicrosoftGraphResourceVisualization
  sharingHistory: MicrosoftGraphSharingDetail[]
  lastSharedMethod: MicrosoftGraphEntity
  resource: MicrosoftGraphEntity
}
export interface MicrosoftGraphTrending extends MicrosoftGraphEntity{
  lastModifiedDateTime: string
  resourceReference: MicrosoftGraphResourceReference
  resourceVisualization: MicrosoftGraphResourceVisualization
  weight:  | string
  resource: MicrosoftGraphEntity
}
export interface MicrosoftGraphUsedInsight extends MicrosoftGraphEntity{
  lastUsed: MicrosoftGraphUsageDetails
  resourceReference: MicrosoftGraphResourceReference
  resourceVisualization: MicrosoftGraphResourceVisualization
  resource: MicrosoftGraphEntity
}
export interface MicrosoftGraphChangeTrackedEntity extends MicrosoftGraphEntity{
  createdDateTime: string
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
}
export interface MicrosoftGraphShiftPreferences extends MicrosoftGraphChangeTrackedEntity{
  availability: MicrosoftGraphShiftAvailability[]
}
export interface MicrosoftGraphOnenoteEntityBaseModel extends MicrosoftGraphEntity{
  self: string
}
export interface MicrosoftGraphOnenoteEntitySchemaObjectModel extends MicrosoftGraphOnenoteEntityBaseModel{
  createdDateTime: string
}
export interface MicrosoftGraphOnenoteEntityHierarchyModel extends MicrosoftGraphOnenoteEntitySchemaObjectModel{
  createdBy: MicrosoftGraphIdentitySet
  displayName: string
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
}
export interface MicrosoftGraphNotebook extends MicrosoftGraphOnenoteEntityHierarchyModel{
  isDefault: boolean
  isShared: boolean
  links: MicrosoftGraphNotebookLinks
  sectionGroupsUrl: string
  sectionsUrl: string
  userRole: MicrosoftGraphOnenoteUserRole
  sectionGroups: MicrosoftGraphSectionGroup[]
  sections: MicrosoftGraphOnenoteSection[]
}
export interface MicrosoftGraphSectionGroup extends MicrosoftGraphOnenoteEntityHierarchyModel{
  sectionGroupsUrl: string
  sectionsUrl: string
  parentNotebook: MicrosoftGraphNotebook
  parentSectionGroup: MicrosoftGraphSectionGroup
  sectionGroups: MicrosoftGraphSectionGroup[]
  sections: MicrosoftGraphOnenoteSection[]
}
export interface MicrosoftGraphOnenoteSection extends MicrosoftGraphOnenoteEntityHierarchyModel{
  isDefault: boolean
  links: MicrosoftGraphSectionLinks
  pagesUrl: string
  pages: MicrosoftGraphOnenotePage[]
  parentNotebook: MicrosoftGraphNotebook
  parentSectionGroup: MicrosoftGraphSectionGroup
}
export interface MicrosoftGraphOperation extends MicrosoftGraphEntity{
  createdDateTime: string
  lastActionDateTime: string
  status: MicrosoftGraphOperationStatus
}
export interface MicrosoftGraphOnenoteOperation extends MicrosoftGraphOperation{
  error: MicrosoftGraphOnenoteOperationError
  percentComplete: string
  resourceId: string
  resourceLocation: string
}
export interface MicrosoftGraphOnenotePage extends MicrosoftGraphOnenoteEntitySchemaObjectModel{
  content: string
  contentUrl: string
  createdByAppId: string
  lastModifiedDateTime: string
  level: number
  links: MicrosoftGraphPageLinks
  order: number
  title: string
  userTags: string[]
  parentNotebook: MicrosoftGraphNotebook
  parentSection: MicrosoftGraphOnenoteSection
}
export interface MicrosoftGraphOnenoteResource extends MicrosoftGraphOnenoteEntityBaseModel{
  content: string
  contentUrl: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyRule extends MicrosoftGraphEntity{
  target: MicrosoftGraphUnifiedRoleManagementPolicyRuleTarget
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyApprovalRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
  setting: MicrosoftGraphApprovalSettings
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyAuthenticationContextRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
  claimValue: string
  isEnabled: boolean
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyEnablementRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
  enabledRules: string[]
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyExpirationRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
  isExpirationRequired: boolean
  maximumDuration: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyNotificationRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
  isDefaultRecipientsEnabled: boolean
  notificationLevel: string
  notificationRecipients: string[]
  notificationType: string
  recipientType: string
}
export interface MicrosoftGraphPrint{
  settings: MicrosoftGraphPrintSettings
  connectors: MicrosoftGraphPrintConnector[]
  operations: MicrosoftGraphPrintOperation[]
  printers: MicrosoftGraphPrinter[]
  services: MicrosoftGraphPrintService[]
  shares: MicrosoftGraphPrinterShare[]
  taskDefinitions: MicrosoftGraphPrintTaskDefinition[]
}
export interface MicrosoftGraphPrintConnector extends MicrosoftGraphEntity{
  appVersion: string
  displayName: string
  fullyQualifiedDomainName: string
  location: MicrosoftGraphPrinterLocation
  operatingSystem: string
  registeredDateTime: string
}
export interface MicrosoftGraphPrintOperation extends MicrosoftGraphEntity{
  createdDateTime: string
  status: MicrosoftGraphPrintOperationStatus
}
export interface MicrosoftGraphPrinterBase extends MicrosoftGraphEntity{
  capabilities: MicrosoftGraphPrinterCapabilities
  defaults: MicrosoftGraphPrinterDefaults
  displayName: string
  isAcceptingJobs: boolean
  location: MicrosoftGraphPrinterLocation
  manufacturer: string
  model: string
  status: MicrosoftGraphPrinterStatus
  jobs: MicrosoftGraphPrintJob[]
}
export interface MicrosoftGraphPrinter extends MicrosoftGraphPrinterBase{
  hasPhysicalDevice: boolean
  isShared: boolean
  lastSeenDateTime: string
  registeredDateTime: string
  connectors: MicrosoftGraphPrintConnector[]
  shares: MicrosoftGraphPrinterShare[]
  taskTriggers: MicrosoftGraphPrintTaskTrigger[]
}
export interface MicrosoftGraphPrintService extends MicrosoftGraphEntity{
  endpoints: MicrosoftGraphPrintServiceEndpoint[]
}
export interface MicrosoftGraphPrinterShare extends MicrosoftGraphPrinterBase{
  allowAllUsers: boolean
  createdDateTime: string
  allowedGroups: MicrosoftGraphGroup[]
  allowedUsers: MicrosoftGraphUser[]
  printer: MicrosoftGraphPrinter
}
export interface MicrosoftGraphPrintTaskDefinition extends MicrosoftGraphEntity{
  createdBy: MicrosoftGraphAppIdentity
  displayName: string
  tasks: MicrosoftGraphPrintTask[]
}
export interface MicrosoftGraphPrintDocument extends MicrosoftGraphEntity{
  contentType: string
  displayName: string
  size: number
}
export interface MicrosoftGraphPrintTaskTrigger extends MicrosoftGraphEntity{
  event: MicrosoftGraphPrintEvent
  definition: MicrosoftGraphPrintTaskDefinition
}
export interface MicrosoftGraphPrintJob extends MicrosoftGraphEntity{
  configuration: MicrosoftGraphPrintJobConfiguration
  createdBy: MicrosoftGraphUserIdentity
  createdDateTime: string
  isFetchable: boolean
  redirectedFrom: string
  redirectedTo: string
  status: MicrosoftGraphPrintJobStatus
  documents: MicrosoftGraphPrintDocument[]
  tasks: MicrosoftGraphPrintTask[]
}
export interface MicrosoftGraphPrinterCreateOperation extends MicrosoftGraphPrintOperation{
  certificate: string
  printer: MicrosoftGraphPrinter
}
export interface MicrosoftGraphPrintTask extends MicrosoftGraphEntity{
  parentUrl: string
  status: MicrosoftGraphPrintTaskStatus
  definition: MicrosoftGraphPrintTaskDefinition
  trigger: MicrosoftGraphPrintTaskTrigger
}
export interface MicrosoftGraphPrintServiceEndpoint extends MicrosoftGraphEntity{
  displayName: string
  uri: string
}
export interface MicrosoftGraphActivityHistoryItem extends MicrosoftGraphEntity{
  activeDurationSeconds: number
  createdDateTime: string
  expirationDateTime: string
  lastActiveDateTime: string
  lastModifiedDateTime: string
  startedDateTime: string
  status: MicrosoftGraphStatus
  userTimezone: string
  activity: MicrosoftGraphUserActivity
}
export interface MicrosoftGraphDataPolicyOperation extends MicrosoftGraphEntity{
  completedDateTime: string
  progress:  | string
  status: MicrosoftGraphDataPolicyOperationStatus
  storageLocation: string
  submittedDateTime: string
  userId: string
}
export interface MicrosoftGraphAttendanceRecord extends MicrosoftGraphEntity{
  attendanceIntervals: MicrosoftGraphAttendanceInterval[]
  emailAddress: string
  identity: MicrosoftGraphIdentity
  role: string
  totalAttendanceInSeconds: number
}
export interface MicrosoftGraphAudioRoutingGroup extends MicrosoftGraphEntity{
  receivers: string[]
  routingMode: MicrosoftGraphRoutingMode
  sources: string[]
}
export interface MicrosoftGraphCommsOperation extends MicrosoftGraphEntity{
  clientContext: string
  resultInfo: MicrosoftGraphResultInfo
  status: MicrosoftGraphOperationStatus
}
export interface MicrosoftGraphParticipant extends MicrosoftGraphEntity{
  info: MicrosoftGraphParticipantInfo
  isInLobby: boolean
  isMuted: boolean
  mediaStreams: MicrosoftGraphMediaStream[]
  metadata: string
  recordingInfo: MicrosoftGraphRecordingInfo
}
export interface MicrosoftGraphCancelMediaProcessingOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphInviteParticipantsOperation extends MicrosoftGraphCommsOperation{
  participants: MicrosoftGraphInvitationParticipantInfo[]
}
export interface MicrosoftGraphMeetingAttendanceReport extends MicrosoftGraphEntity{
  meetingEndDateTime: string
  meetingStartDateTime: string
  totalParticipantCount: number
  attendanceRecords: MicrosoftGraphAttendanceRecord[]
}
export interface MicrosoftGraphMuteParticipantOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphParticipantJoiningNotification extends MicrosoftGraphEntity{
  call: MicrosoftGraphCall
}
export interface MicrosoftGraphParticipantLeftNotification extends MicrosoftGraphEntity{
  participantId: string
  call: MicrosoftGraphCall
}
export interface MicrosoftGraphPlayPromptOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphRecordOperation extends MicrosoftGraphCommsOperation{
  recordingAccessToken: string
  recordingLocation: string
}
export interface MicrosoftGraphStartHoldMusicOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphStopHoldMusicOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphSubscribeToToneOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphUnmuteParticipantOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphUpdateRecordingStatusOperation extends MicrosoftGraphCommsOperation{
}
export interface MicrosoftGraphAuthenticationMethod extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphFido2AuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
  aaGuid: string
  attestationCertificates: string[]
  attestationLevel: MicrosoftGraphAttestationLevel
  createdDateTime: string
  displayName: string
  model: string
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
  createdDateTime: string
  deviceTag: string
  displayName: string
  phoneAppVersion: string
  device: MicrosoftGraphDevice
}
export interface MicrosoftGraphTemporaryAccessPassAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
  createdDateTime: string
  isUsable: boolean
  isUsableOnce: boolean
  lifetimeInMinutes: number
  methodUsabilityReason: string
  startDateTime: string
  temporaryAccessPass: string
}
export interface MicrosoftGraphWindowsHelloForBusinessAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
  createdDateTime: string
  displayName: string
  keyStrength: MicrosoftGraphAuthenticationMethodKeyStrength
  device: MicrosoftGraphDevice
}
export interface MicrosoftGraphAadUserConversationMember extends MicrosoftGraphConversationMember{
  email: string
  tenantId: string
  userId: string
  user: MicrosoftGraphUser
}
export interface MicrosoftGraphAppCatalogs extends MicrosoftGraphEntity{
  teamsApps: MicrosoftGraphTeamsApp[]
}
export interface MicrosoftGraphTeamsApp extends MicrosoftGraphEntity{
  displayName: string
  distributionMethod: MicrosoftGraphTeamsAppDistributionMethod
  externalId: string
  appDefinitions: MicrosoftGraphTeamsAppDefinition[]
}
export interface MicrosoftGraphChatMessage extends MicrosoftGraphEntity{
  attachments: MicrosoftGraphChatMessageAttachment[]
  body: MicrosoftGraphItemBody
  channelIdentity: MicrosoftGraphChannelIdentity
  chatId: string
  createdDateTime: string
  deletedDateTime: string
  etag: string
  eventDetail: MicrosoftGraphEventMessageDetail
  from: MicrosoftGraphChatMessageFromIdentitySet
  importance: MicrosoftGraphChatMessageImportance
  lastEditedDateTime: string
  lastModifiedDateTime: string
  locale: string
  mentions: MicrosoftGraphChatMessageMention[]
  messageType: MicrosoftGraphChatMessageType
  policyViolation: MicrosoftGraphChatMessagePolicyViolation
  reactions: MicrosoftGraphChatMessageReaction[]
  replyToId: string
  subject: string
  summary: string
  webUrl: string
  hostedContents: MicrosoftGraphChatMessageHostedContent[]
  replies: MicrosoftGraphChatMessage[]
}
export interface MicrosoftGraphTeamsTab extends MicrosoftGraphEntity{
  configuration: MicrosoftGraphTeamsTabConfiguration
  displayName: string
  webUrl: string
  teamsApp: MicrosoftGraphTeamsApp
}
export interface MicrosoftGraphTeamworkHostedContent extends MicrosoftGraphEntity{
  contentBytes: string
  contentType: string
}
export interface MicrosoftGraphChatMessageHostedContent extends MicrosoftGraphTeamworkHostedContent{
}
export interface MicrosoftGraphTeamsAppDefinition extends MicrosoftGraphEntity{
  createdBy: MicrosoftGraphIdentitySet
  description: string
  displayName: string
  lastModifiedDateTime: string
  publishingState: MicrosoftGraphTeamsAppPublishingState
  shortDescription: string
  teamsAppId: string
  version: string
  bot: MicrosoftGraphTeamworkBot
}
export interface MicrosoftGraphTeamworkBot extends MicrosoftGraphEntity{
}
export interface MicrosoftGraphTeamwork extends MicrosoftGraphEntity{
  workforceIntegrations: MicrosoftGraphWorkforceIntegration[]
}
export interface MicrosoftGraphWorkforceIntegration extends MicrosoftGraphChangeTrackedEntity{
  apiVersion: number
  displayName: string
  encryption: MicrosoftGraphWorkforceIntegrationEncryption
  isActive: boolean
  supportedEntities: MicrosoftGraphWorkforceIntegrationSupportedEntities
  url: string
}
export interface MicrosoftGraphUserScopeTeamsAppInstallation extends MicrosoftGraphTeamsAppInstallation{
  chat: MicrosoftGraphChat
}
export interface MicrosoftGraphScheduleChangeRequest extends MicrosoftGraphChangeTrackedEntity{
  assignedTo: MicrosoftGraphScheduleChangeRequestActor
  managerActionDateTime: string
  managerActionMessage: string
  managerUserId: string
  senderDateTime: string
  senderMessage: string
  senderUserId: string
  state: MicrosoftGraphScheduleChangeState
}
export interface MicrosoftGraphOfferShiftRequest extends MicrosoftGraphScheduleChangeRequest{
  recipientActionDateTime: string
  recipientActionMessage: string
  recipientUserId: string
  senderShiftId: string
}
export interface MicrosoftGraphOpenShift extends MicrosoftGraphChangeTrackedEntity{
  draftOpenShift: MicrosoftGraphOpenShiftItem
  schedulingGroupId: string
  sharedOpenShift: MicrosoftGraphOpenShiftItem
}
export interface MicrosoftGraphOpenShiftChangeRequest extends MicrosoftGraphScheduleChangeRequest{
  openShiftId: string
}
export interface MicrosoftGraphSchedulingGroup extends MicrosoftGraphChangeTrackedEntity{
  displayName: string
  isActive: boolean
  userIds: string[]
}
export interface MicrosoftGraphShift extends MicrosoftGraphChangeTrackedEntity{
  draftShift: MicrosoftGraphShiftItem
  schedulingGroupId: string
  sharedShift: MicrosoftGraphShiftItem
  userId: string
}
export interface MicrosoftGraphSwapShiftsChangeRequest extends MicrosoftGraphOfferShiftRequest{
  recipientShiftId: string
}
export interface MicrosoftGraphTimeOffReason extends MicrosoftGraphChangeTrackedEntity{
  displayName: string
  iconType: MicrosoftGraphTimeOffReasonIconType
  isActive: boolean
}
export interface MicrosoftGraphTimeOffRequest extends MicrosoftGraphScheduleChangeRequest{
  endDateTime: string
  startDateTime: string
  timeOffReasonId: string
}
export interface MicrosoftGraphTimeOff extends MicrosoftGraphChangeTrackedEntity{
  draftTimeOff: MicrosoftGraphTimeOffItem
  sharedTimeOff: MicrosoftGraphTimeOffItem
  userId: string
}
export interface MicrosoftGraphEmailFileAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
  contentData: string
  destinationRoutingReason: MicrosoftGraphMailDestinationRoutingReason
  recipientEmail: string
}
export interface MicrosoftGraphFileAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
  contentData: string
  fileName: string
}
export interface MicrosoftGraphMailAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
  destinationRoutingReason: MicrosoftGraphMailDestinationRoutingReason
  messageUri: string
  recipientEmail: string
}
export interface MicrosoftGraphThreatAssessmentResult extends MicrosoftGraphEntity{
  createdDateTime: string
  message: string
  resultType: MicrosoftGraphThreatAssessmentResultType
}
export interface MicrosoftGraphUrlAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
  url: string
}
export interface MicrosoftGraphChecklistItem extends MicrosoftGraphEntity{
  checkedDateTime: string
  createdDateTime: string
  displayName: string
  isChecked: boolean
}
export interface MicrosoftGraphLinkedResource extends MicrosoftGraphEntity{
  applicationName: string
  displayName: string
  externalId: string
  webUrl: string
}
export interface MicrosoftGraphTodoTaskList extends MicrosoftGraphEntity{
  displayName: string
  isOwner: boolean
  isShared: boolean
  wellknownListName: MicrosoftGraphWellknownListName
  extensions: MicrosoftGraphExtension[]
  tasks: MicrosoftGraphTodoTask[]
}
export interface MicrosoftGraphTodoTask extends MicrosoftGraphEntity{
  body: MicrosoftGraphItemBody
  bodyLastModifiedDateTime: string
  categories: string[]
  completedDateTime: MicrosoftGraphDateTimeTimeZone
  createdDateTime: string
  dueDateTime: MicrosoftGraphDateTimeTimeZone
  importance: MicrosoftGraphImportance
  isReminderOn: boolean
  lastModifiedDateTime: string
  recurrence: MicrosoftGraphPatternedRecurrence
  reminderDateTime: MicrosoftGraphDateTimeTimeZone
  status: MicrosoftGraphTaskStatus
  title: string
  checklistItems: MicrosoftGraphChecklistItem[]
  extensions: MicrosoftGraphExtension[]
  linkedResources: MicrosoftGraphLinkedResource[]
}
export interface MicrosoftGraphAppIdentity{
  appId: string
  displayName: string
  servicePrincipalId: string
  servicePrincipalName: string
}
export interface MicrosoftGraphAppliedConditionalAccessPolicy{
  displayName: string
  enforcedGrantControls: string[]
  enforcedSessionControls: string[]
  id: string
  result: MicrosoftGraphAppliedConditionalAccessPolicyResult
}
export interface MicrosoftGraphAuditActivityInitiator{
  app: MicrosoftGraphAppIdentity
  user: MicrosoftGraphUserIdentity
}
export interface MicrosoftGraphIdentity{
  displayName: string
  id: string
}
export interface MicrosoftGraphUserIdentity extends MicrosoftGraphIdentity{
  ipAddress: string
  userPrincipalName: string
}
export interface MicrosoftGraphDetailsInfo{
}
export interface MicrosoftGraphDeviceDetail{
  browser: string
  deviceId: string
  displayName: string
  isCompliant: boolean
  isManaged: boolean
  operatingSystem: string
  trustType: string
}
export interface MicrosoftGraphGeoCoordinates{
  altitude:  | string
  latitude:  | string
  longitude:  | string
}
export interface MicrosoftGraphInitiator extends MicrosoftGraphIdentity{
  initiatorType: MicrosoftGraphInitiatorType
}
export interface MicrosoftGraphKeyValue{
  key: string
  value: string
}
export interface MicrosoftGraphModifiedProperty{
  displayName: string
  newValue: string
  oldValue: string
}
export interface MicrosoftGraphProvisionedIdentity extends MicrosoftGraphIdentity{
  details: MicrosoftGraphDetailsInfo
  identityType: string
}
export interface MicrosoftGraphProvisioningErrorInfo{
  additionalDetails: string
  errorCategory: MicrosoftGraphProvisioningStatusErrorCategory
  errorCode: string
  reason: string
  recommendedAction: string
}
export interface MicrosoftGraphProvisioningServicePrincipal extends MicrosoftGraphIdentity{
}
export interface MicrosoftGraphProvisioningStatusInfo{
  errorInformation: MicrosoftGraphProvisioningErrorInfo
  status: MicrosoftGraphProvisioningResult
}
export interface MicrosoftGraphProvisioningStep{
  description: string
  details: MicrosoftGraphDetailsInfo
  name: string
  provisioningStepType: MicrosoftGraphProvisioningStepType
  status: MicrosoftGraphProvisioningResult
}
export interface MicrosoftGraphProvisioningSystem extends MicrosoftGraphIdentity{
  details: MicrosoftGraphDetailsInfo
}
export interface MicrosoftGraphSignInLocation{
  city: string
  countryOrRegion: string
  geoCoordinates: MicrosoftGraphGeoCoordinates
  state: string
}
export interface MicrosoftGraphSignInStatus{
  additionalDetails: string
  errorCode: number
  failureReason: string
}
export interface MicrosoftGraphTargetResource{
  displayName: string
  groupType: MicrosoftGraphGroupType
  id: string
  modifiedProperties: MicrosoftGraphModifiedProperty[]
  type: string
  userPrincipalName: string
}
export interface MicrosoftGraphEmailAddress{
  address: string
  name: string
}
export interface MicrosoftGraphInvitedUserMessageInfo{
  ccRecipients: MicrosoftGraphRecipient[]
  customizedMessageBody: string
  messageLanguage: string
}
export interface MicrosoftGraphRecipient{
  emailAddress: MicrosoftGraphEmailAddress
}
export interface MicrosoftGraphAssignedLicense{
  disabledPlans: string[]
  skuId: string
}
export interface MicrosoftGraphAssignedPlan{
  assignedDateTime: string
  capabilityStatus: string
  service: string
  servicePlanId: string
}
export interface MicrosoftGraphEmployeeOrgData{
  costCenter: string
  division: string
}
export interface MicrosoftGraphObjectIdentity{
  issuer: string
  issuerAssignedId: string
  signInType: string
}
export interface MicrosoftGraphLicenseAssignmentState{
  assignedByGroup: string
  disabledPlans: string[]
  error: string
  lastUpdatedDateTime: string
  skuId: string
  state: string
}
export interface MicrosoftGraphOnPremisesExtensionAttributes{
  extensionAttribute1: string
  extensionAttribute10: string
  extensionAttribute11: string
  extensionAttribute12: string
  extensionAttribute13: string
  extensionAttribute14: string
  extensionAttribute15: string
  extensionAttribute2: string
  extensionAttribute3: string
  extensionAttribute4: string
  extensionAttribute5: string
  extensionAttribute6: string
  extensionAttribute7: string
  extensionAttribute8: string
  extensionAttribute9: string
}
export interface MicrosoftGraphOnPremisesProvisioningError{
  category: string
  occurredDateTime: string
  propertyCausingError: string
  value: string
}
export interface MicrosoftGraphPasswordProfile{
  forceChangePasswordNextSignIn: boolean
  forceChangePasswordNextSignInWithMfa: boolean
  password: string
}
export interface MicrosoftGraphProvisionedPlan{
  capabilityStatus: string
  provisioningStatus: string
  service: string
}
export interface MicrosoftGraphMailboxSettings{
  archiveFolder: string
  automaticRepliesSetting: MicrosoftGraphAutomaticRepliesSetting
  dateFormat: string
  delegateMeetingMessageDeliveryOptions: MicrosoftGraphDelegateMeetingMessageDeliveryOptions
  language: MicrosoftGraphLocaleInfo
  timeFormat: string
  timeZone: string
  userPurpose: MicrosoftGraphUserPurpose
  workingHours: MicrosoftGraphWorkingHours
}
export interface MicrosoftGraphApplicationServicePrincipal{
  application: MicrosoftGraphApplication
  servicePrincipal: MicrosoftGraphServicePrincipal
}
export interface MicrosoftGraphAddIn{
  id: string
  properties: MicrosoftGraphKeyValue[]
  type: string
}
export interface MicrosoftGraphApiApplication{
  acceptMappedClaims: boolean
  knownClientApplications: string[]
  oauth2PermissionScopes: MicrosoftGraphPermissionScope[]
  preAuthorizedApplications: MicrosoftGraphPreAuthorizedApplication[]
  requestedAccessTokenVersion: number
}
export interface MicrosoftGraphAppRole{
  allowedMemberTypes: string[]
  description: string
  displayName: string
  id: string
  isEnabled: boolean
  origin: string
  value: string
}
export interface MicrosoftGraphCertification{
  certificationDetailsUrl: string
  certificationExpirationDateTime: string
  isCertifiedByMicrosoft: boolean
  isPublisherAttested: boolean
  lastCertificationDateTime: string
}
export interface MicrosoftGraphInformationalUrl{
  logoUrl: string
  marketingUrl: string
  privacyStatementUrl: string
  supportUrl: string
  termsOfServiceUrl: string
}
export interface MicrosoftGraphKeyCredential{
  customKeyIdentifier: string
  displayName: string
  endDateTime: string
  key: string
  keyId: string
  startDateTime: string
  type: string
  usage: string
}
export interface MicrosoftGraphOptionalClaims{
  accessToken: MicrosoftGraphOptionalClaim[]
  idToken: MicrosoftGraphOptionalClaim[]
  saml2Token: MicrosoftGraphOptionalClaim[]
}
export interface MicrosoftGraphParentalControlSettings{
  countriesBlockedForMinors: string[]
  legalAgeGroupRule: string
}
export interface MicrosoftGraphPasswordCredential{
  customKeyIdentifier: string
  displayName: string
  endDateTime: string
  hint: string
  keyId: string
  secretText: string
  startDateTime: string
}
export interface MicrosoftGraphPublicClientApplication{
  redirectUris: string[]
}
export interface MicrosoftGraphRequiredResourceAccess{
  resourceAccess: MicrosoftGraphResourceAccess[]
  resourceAppId: string
}
export interface MicrosoftGraphSpaApplication{
  redirectUris: string[]
}
export interface MicrosoftGraphVerifiedPublisher{
  addedDateTime: string
  displayName: string
  verifiedPublisherId: string
}
export interface MicrosoftGraphWebApplication{
  homePageUrl: string
  implicitGrantSettings: MicrosoftGraphImplicitGrantSettings
  logoutUrl: string
  redirectUris: string[]
}
export interface MicrosoftGraphPermissionScope{
  adminConsentDescription: string
  adminConsentDisplayName: string
  id: string
  isEnabled: boolean
  origin: string
  type: string
  userConsentDescription: string
  userConsentDisplayName: string
  value: string
}
export interface MicrosoftGraphResourceSpecificPermission{
  description: string
  displayName: string
  id: string
  isEnabled: boolean
  value: string
}
export interface MicrosoftGraphSamlSingleSignOnSettings{
  relayState: string
}
export interface MicrosoftGraphAuthenticationMethodsRegistrationCampaign{
  excludeTargets: MicrosoftGraphExcludeTarget[]
  includeTargets: MicrosoftGraphAuthenticationMethodsRegistrationCampaignIncludeTarget[]
  snoozeDurationInDays: number
  state: MicrosoftGraphAdvancedConfigState
}
export interface MicrosoftGraphExcludeTarget{
  id: string
  targetType: MicrosoftGraphAuthenticationMethodTargetType
}
export interface MicrosoftGraphAuthenticationMethodsRegistrationCampaignIncludeTarget{
  id: string
  targetedAuthenticationMethod: string
  targetType: MicrosoftGraphAuthenticationMethodTargetType
}
export interface MicrosoftGraphFido2KeyRestrictions{
  aaGuids: string[]
  enforcementType: MicrosoftGraphFido2RestrictionEnforcementType
  isEnforced: boolean
}
export interface MicrosoftGraphRegistrationEnforcement{
  authenticationMethodsRegistrationCampaign: MicrosoftGraphAuthenticationMethodsRegistrationCampaign
}
export interface MicrosoftGraphBookingCustomerInformationBase{
}
export interface MicrosoftGraphBookingCustomerInformation extends MicrosoftGraphBookingCustomerInformationBase{
  customerId: string
  customQuestionAnswers: MicrosoftGraphBookingQuestionAnswer[]
  emailAddress: string
  location: MicrosoftGraphLocation
  name: string
  notes: string
  phone: string
  timeZone: string
}
export interface MicrosoftGraphBookingQuestionAnswer{
  answer: string
  answerInputType: MicrosoftGraphAnswerInputType
  answerOptions: string[]
  isRequired: boolean
  question: string
  questionId: string
  selectedOptions: string[]
}
export interface MicrosoftGraphLocation{
  address: MicrosoftGraphPhysicalAddress
  coordinates: MicrosoftGraphOutlookGeoCoordinates
  displayName: string
  locationEmailAddress: string
  locationType: MicrosoftGraphLocationType
  locationUri: string
  uniqueId: string
  uniqueIdType: MicrosoftGraphLocationUniqueIdType
}
export interface MicrosoftGraphBookingQuestionAssignment{
  isRequired: boolean
  questionId: string
}
export interface MicrosoftGraphBookingReminder{
  message: string
  offset: string
  recipients: MicrosoftGraphBookingReminderRecipients
}
export interface MicrosoftGraphBookingSchedulingPolicy{
  allowStaffSelection: boolean
  maximumAdvance: string
  minimumLeadTime: string
  sendConfirmationsToOwner: boolean
  timeSlotInterval: string
}
export interface MicrosoftGraphBookingWorkHours{
  day: MicrosoftGraphDayOfWeek
  timeSlots: MicrosoftGraphBookingWorkTimeSlot[]
}
export interface MicrosoftGraphBookingWorkTimeSlot{
  endTime: string
  startTime: string
}
export interface MicrosoftGraphDateTimeTimeZone{
  dateTime: string
  timeZone: string
}
export interface MicrosoftGraphPhysicalAddress{
  city: string
  countryOrRegion: string
  postalCode: string
  state: string
  street: string
}
export interface MicrosoftGraphOutlookGeoCoordinates{
  accuracy:  | string
  altitude:  | string
  altitudeAccuracy:  | string
  latitude:  | string
  longitude:  | string
}
export interface MicrosoftGraphPhone{
  language: string
  number: string
  region: string
  type: MicrosoftGraphPhoneType
}
export interface MicrosoftGraphTimeSlot{
  end: MicrosoftGraphDateTimeTimeZone
  start: MicrosoftGraphDateTimeTimeZone
}
export interface MicrosoftGraphDataSubject{
  email: string
  firstName: string
  lastName: string
  residency: string
}
export interface MicrosoftGraphIdentitySet{
  application: MicrosoftGraphIdentity
  device: MicrosoftGraphIdentity
  user: MicrosoftGraphIdentity
}
export interface MicrosoftGraphItemBody{
  content: string
  contentType: MicrosoftGraphBodyType
}
export interface MicrosoftGraphKeyValuePair{
  name: string
  value: string
}
export interface MicrosoftGraphPublicError{
  code: string
  details: MicrosoftGraphPublicErrorDetail[]
  innerError: MicrosoftGraphPublicInnerError
  message: string
  target: string
}
export interface MicrosoftGraphPublicErrorDetail{
  code: string
  message: string
  target: string
}
export interface MicrosoftGraphPublicInnerError{
  code: string
  details: MicrosoftGraphPublicErrorDetail[]
  message: string
  target: string
}
export interface MicrosoftGraphSubjectRightsRequestDetail{
  excludedItemCount: number
  insightCounts: MicrosoftGraphKeyValuePair[]
  itemCount: number
  itemNeedReview: number
  productItemCounts: MicrosoftGraphKeyValuePair[]
  signedOffItemCount: number
  totalItemSize: number
}
export interface MicrosoftGraphSubjectRightsRequestHistory{
  changedBy: MicrosoftGraphIdentitySet
  eventDateTime: string
  stage: MicrosoftGraphSubjectRightsRequestStage
  stageStatus: MicrosoftGraphSubjectRightsRequestStageStatus
  type: string
}
export interface MicrosoftGraphSubjectRightsRequestStageDetail{
  error: MicrosoftGraphPublicError
  stage: MicrosoftGraphSubjectRightsRequestStage
  status: MicrosoftGraphSubjectRightsRequestStageStatus
}
export interface MicrosoftGraphTeamFunSettings{
  allowCustomMemes: boolean
  allowGiphy: boolean
  allowStickersAndMemes: boolean
  giphyContentRating: MicrosoftGraphGiphyRatingType
}
export interface MicrosoftGraphTeamGuestSettings{
  allowCreateUpdateChannels: boolean
  allowDeleteChannels: boolean
}
export interface MicrosoftGraphTeamMemberSettings{
  allowAddRemoveApps: boolean
  allowCreatePrivateChannels: boolean
  allowCreateUpdateChannels: boolean
  allowCreateUpdateRemoveConnectors: boolean
  allowCreateUpdateRemoveTabs: boolean
  allowDeleteChannels: boolean
}
export interface MicrosoftGraphTeamMessagingSettings{
  allowChannelMentions: boolean
  allowOwnerDeleteMessages: boolean
  allowTeamMentions: boolean
  allowUserDeleteMessages: boolean
  allowUserEditMessages: boolean
}
export interface MicrosoftGraphResultInfo{
  code: number
  message: string
  subcode: number
}
export interface MicrosoftGraphAssignedLabel{
  displayName: string
  labelId: string
}
export interface MicrosoftGraphLicenseProcessingState{
  state: string
}
export interface MicrosoftGraphRoot{
}
export interface MicrosoftGraphSharepointIds{
  listId: string
  listItemId: string
  listItemUniqueId: string
  siteId: string
  siteUrl: string
  tenantId: string
  webId: string
}
export interface MicrosoftGraphSiteCollection{
  dataLocationCode: string
  hostname: string
  root: MicrosoftGraphRoot
}
export interface MicrosoftGraphApiAuthenticationConfigurationBase{
}
export interface MicrosoftGraphAssignmentOrder{
  order: string[]
}
export interface MicrosoftGraphBasicAuthentication extends MicrosoftGraphApiAuthenticationConfigurationBase{
  password: string
  username: string
}
export interface MicrosoftGraphClientCertificateAuthentication extends MicrosoftGraphApiAuthenticationConfigurationBase{
  certificateList: MicrosoftGraphPkcs12CertificateInformation[]
}
export interface MicrosoftGraphPkcs12CertificateInformation{
  isActive: boolean
  notAfter: number
  notBefore: number
  thumbprint: string
}
export interface MicrosoftGraphPkcs12Certificate extends MicrosoftGraphApiAuthenticationConfigurationBase{
  password: string
  pkcs12Value: string
}
export interface MicrosoftGraphSelfServiceSignUpAuthenticationFlowConfiguration{
  isEnabled: boolean
}
export interface MicrosoftGraphUserAttributeValuesItem{
  isDefault: boolean
  name: string
  value: string
}
export interface MicrosoftGraphUserFlowApiConnectorConfiguration{
  postAttributeCollection: MicrosoftGraphIdentityApiConnector
  postFederationSignup: MicrosoftGraphIdentityApiConnector
}
export interface MicrosoftGraphAlternativeSecurityId{
  identityProvider: string
  key: string
  type: number
}
export interface MicrosoftGraphPreAuthorizedApplication{
  appId: string
  delegatedPermissionIds: string[]
}
export interface MicrosoftGraphCertificateAuthority{
  certificate: string
  certificateRevocationListUrl: string
  deltaCertificateRevocationListUrl: string
  isRootAuthority: boolean
  issuer: string
  issuerSki: string
}
export interface MicrosoftGraphComplexExtensionValue{
}
export interface MicrosoftGraphDefaultUserRolePermissions{
  allowedToCreateApps: boolean
  allowedToCreateSecurityGroups: boolean
  allowedToReadOtherUsers: boolean
  permissionGrantPoliciesAssigned: string[]
}
export interface MicrosoftGraphDomainState{
  lastActionDateTime: string
  operation: string
  status: string
}
export interface MicrosoftGraphImplicitGrantSettings{
  enableAccessTokenIssuance: boolean
  enableIdTokenIssuance: boolean
}
export interface MicrosoftGraphInstanceResourceAccess{
  permissions: MicrosoftGraphResourcePermission[]
  resourceAppId: string
}
export interface MicrosoftGraphResourcePermission{
  type: string
  value: string
}
export interface MicrosoftGraphLicenseUnitsDetail{
  enabled: number
  suspended: number
  warning: number
}
export interface MicrosoftGraphOptionalClaim{
  additionalProperties: string[]
  essential: boolean
  name: string
  source: string
}
export interface MicrosoftGraphPhysicalOfficeAddress{
  city: string
  countryOrRegion: string
  officeLocation: string
  postalCode: string
  state: string
  street: string
}
export interface MicrosoftGraphPrivacyProfile{
  contactEmail: string
  statementUrl: string
}
export interface MicrosoftGraphResourceAccess{
  id: string
  type: string
}
export interface MicrosoftGraphSelfSignedCertificate{
  customKeyIdentifier: string
  displayName: string
  endDateTime: string
  key: string
  keyId: string
  startDateTime: string
  thumbprint: string
  type: string
  usage: string
}
export interface MicrosoftGraphServicePlanInfo{
  appliesTo: string
  provisioningStatus: string
  servicePlanId: string
  servicePlanName: string
}
export interface MicrosoftGraphSettingTemplateValue{
  defaultValue: string
  description: string
  name: string
  type: string
}
export interface MicrosoftGraphSettingValue{
  name: string
  value: string
}
export interface MicrosoftGraphSigningCertificateUpdateStatus{
  certificateUpdateResult: string
  lastRunDateTime: string
}
export interface MicrosoftGraphUnifiedRolePermission{
  allowedResourceActions: string[]
  condition: string
  excludedResourceActions: string[]
}
export interface MicrosoftGraphVerifiedDomain{
  capabilities: string
  isDefault: boolean
  isInitial: boolean
  name: string
  type: string
}
export interface MicrosoftGraphEducationAssignmentRecipient{
}
export interface MicrosoftGraphEducationAssignmentClassRecipient extends MicrosoftGraphEducationAssignmentRecipient{
}
export interface MicrosoftGraphEducationAssignmentGrade{
  gradedBy: MicrosoftGraphIdentitySet
  gradedDateTime: string
}
export interface MicrosoftGraphEducationAssignmentGradeType{
}
export interface MicrosoftGraphEducationAssignmentGroupRecipient extends MicrosoftGraphEducationAssignmentRecipient{
}
export interface MicrosoftGraphEducationAssignmentIndividualRecipient extends MicrosoftGraphEducationAssignmentRecipient{
  recipients: string[]
}
export interface MicrosoftGraphEducationAssignmentPointsGrade extends MicrosoftGraphEducationAssignmentGrade{
  points:  | string
}
export interface MicrosoftGraphEducationAssignmentPointsGradeType extends MicrosoftGraphEducationAssignmentGradeType{
  maxPoints:  | string
}
export interface MicrosoftGraphEducationResource{
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  displayName: string
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
}
export interface MicrosoftGraphEducationExcelResource extends MicrosoftGraphEducationResource{
  fileUrl: string
}
export interface MicrosoftGraphEducationExternalResource extends MicrosoftGraphEducationResource{
  webUrl: string
}
export interface MicrosoftGraphEducationFeedback{
  feedbackBy: MicrosoftGraphIdentitySet
  feedbackDateTime: string
  text: MicrosoftGraphEducationItemBody
}
export interface MicrosoftGraphEducationItemBody{
  content: string
  contentType: MicrosoftGraphBodyType
}
export interface MicrosoftGraphEducationFileResource extends MicrosoftGraphEducationResource{
  fileUrl: string
}
export interface MicrosoftGraphEducationLinkResource extends MicrosoftGraphEducationResource{
  link: string
}
export interface MicrosoftGraphEducationMediaResource extends MicrosoftGraphEducationResource{
  fileUrl: string
}
export interface MicrosoftGraphEducationPowerPointResource extends MicrosoftGraphEducationResource{
  fileUrl: string
}
export interface MicrosoftGraphEducationSubmissionRecipient{
}
export interface MicrosoftGraphEducationSubmissionIndividualRecipient extends MicrosoftGraphEducationSubmissionRecipient{
  userId: string
}
export interface MicrosoftGraphEducationWordResource extends MicrosoftGraphEducationResource{
  fileUrl: string
}
export interface MicrosoftGraphRubricCriterion{
  description: MicrosoftGraphEducationItemBody
}
export interface MicrosoftGraphRubricLevel{
  description: MicrosoftGraphEducationItemBody
  displayName: string
  grading: MicrosoftGraphEducationAssignmentGradeType
  levelId: string
}
export interface MicrosoftGraphRubricQuality{
  criteria: MicrosoftGraphRubricCriterion[]
  description: MicrosoftGraphEducationItemBody
  displayName: string
  qualityId: string
  weight:  | string
}
export interface MicrosoftGraphRubricQualityFeedbackModel{
  feedback: MicrosoftGraphEducationItemBody
  qualityId: string
}
export interface MicrosoftGraphRubricQualitySelectedColumnModel{
  columnId: string
  qualityId: string
}
export interface MicrosoftGraphEducationCourse{
  courseNumber: string
  description: string
  displayName: string
  externalId: string
  subject: string
}
export interface MicrosoftGraphEducationTerm{
  displayName: string
  endDate: string
  externalId: string
  startDate: string
}
export interface MicrosoftGraphRelatedContact{
  accessConsent: boolean
  displayName: string
  emailAddress: string
  mobilePhone: string
  relationship: MicrosoftGraphContactRelationship
}
export interface MicrosoftGraphEducationOnPremisesInfo{
  immutableId: string
}
export interface MicrosoftGraphEducationStudent{
  birthDate: string
  externalId: string
  gender: MicrosoftGraphEducationGender
  grade: string
  graduationYear: string
  studentNumber: string
}
export interface MicrosoftGraphEducationTeacher{
  externalId: string
  teacherNumber: string
}
export interface MicrosoftGraphJson{
}
export interface MicrosoftGraphWorkbookFilterCriteria{
  color: string
  criterion1: string
  criterion2: string
  dynamicCriteria: string
  filterOn: string
  icon: MicrosoftGraphWorkbookIcon
  operator: string
  values: MicrosoftGraphJson
}
export interface MicrosoftGraphWorkbookIcon{
  index: number
  set: string
}
export interface MicrosoftGraphWorkbookFilterDatetime{
  date: string
  specificity: string
}
export interface MicrosoftGraphWorkbookOperationError{
  code: string
  innerError: MicrosoftGraphWorkbookOperationError
  message: string
}
export interface MicrosoftGraphWorkbookRangeReference{
  address: string
}
export interface MicrosoftGraphWorkbookSessionInfo{
  id: string
  persistChanges: boolean
}
export interface MicrosoftGraphWorkbookSortField{
  ascending: boolean
  color: string
  dataOption: string
  icon: MicrosoftGraphWorkbookIcon
  key: number
  sortOn: string
}
export interface MicrosoftGraphWorkbookWorksheetProtectionOptions{
  allowAutoFilter: boolean
  allowDeleteColumns: boolean
  allowDeleteRows: boolean
  allowFormatCells: boolean
  allowFormatColumns: boolean
  allowFormatRows: boolean
  allowInsertColumns: boolean
  allowInsertHyperlinks: boolean
  allowInsertRows: boolean
  allowPivotTables: boolean
  allowSort: boolean
}
export interface MicrosoftGraphQuota{
  deleted: number
  remaining: number
  state: string
  storagePlanInformation: MicrosoftGraphStoragePlanInformation
  total: number
  used: number
}
export interface MicrosoftGraphSystemFacet{
}
export interface MicrosoftGraphAudio{
  album: string
  albumArtist: string
  artist: string
  bitrate: number
  composers: string
  copyright: string
  disc: number
  discCount: number
  duration: number
  genre: string
  hasDrm: boolean
  isVariableBitrate: boolean
  title: string
  track: number
  trackCount: number
  year: number
}
export interface MicrosoftGraphBundle{
  album: MicrosoftGraphAlbum
  childCount: number
}
export interface MicrosoftGraphDeleted{
  state: string
}
export interface MicrosoftGraphFile{
  hashes: MicrosoftGraphHashes
  mimeType: string
  processingMetadata: boolean
}
export interface MicrosoftGraphFileSystemInfo{
  createdDateTime: string
  lastAccessedDateTime: string
  lastModifiedDateTime: string
}
export interface MicrosoftGraphFolder{
  childCount: number
  view: MicrosoftGraphFolderView
}
export interface MicrosoftGraphImage{
  height: number
  width: number
}
export interface MicrosoftGraphMalware{
  description: string
}
export interface MicrosoftGraphPackage{
  type: string
}
export interface MicrosoftGraphPendingOperations{
  pendingContentUpdate: MicrosoftGraphPendingContentUpdate
}
export interface MicrosoftGraphPhoto{
  cameraMake: string
  cameraModel: string
  exposureDenominator:  | string
  exposureNumerator:  | string
  fNumber:  | string
  focalLength:  | string
  iso: number
  orientation: number
  takenDateTime: string
}
export interface MicrosoftGraphPublicationFacet{
  level: string
  versionId: string
}
export interface MicrosoftGraphRemoteItem{
  createdBy: MicrosoftGraphIdentitySet
  createdDateTime: string
  file: MicrosoftGraphFile
  fileSystemInfo: MicrosoftGraphFileSystemInfo
  folder: MicrosoftGraphFolder
  id: string
  image: MicrosoftGraphImage
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  name: string
  package: MicrosoftGraphPackage
  parentReference: MicrosoftGraphItemReference
  shared: MicrosoftGraphShared
  sharepointIds: MicrosoftGraphSharepointIds
  size: number
  specialFolder: MicrosoftGraphSpecialFolder
  video: MicrosoftGraphVideo
  webDavUrl: string
  webUrl: string
}
export interface MicrosoftGraphSearchResult{
  onClickTelemetryUrl: string
}
export interface MicrosoftGraphShared{
  owner: MicrosoftGraphIdentitySet
  scope: string
  sharedBy: MicrosoftGraphIdentitySet
  sharedDateTime: string
}
export interface MicrosoftGraphSpecialFolder{
  name: string
}
export interface MicrosoftGraphVideo{
  audioBitsPerSample: number
  audioChannels: number
  audioFormat: string
  audioSamplesPerSecond: number
  bitrate: number
  duration: number
  fourCC: string
  frameRate:  | string
  height: number
  width: number
}
export interface MicrosoftGraphListInfo{
  contentTypesEnabled: boolean
  hidden: boolean
  template: string
}
export interface MicrosoftGraphAttendeeAvailability{
  attendee: MicrosoftGraphAttendeeBase
  availability: MicrosoftGraphFreeBusyStatus
}
export interface MicrosoftGraphAttendeeBase extends MicrosoftGraphRecipient{
  type: MicrosoftGraphAttendeeType
}
export interface MicrosoftGraphLocationConstraint{
  isRequired: boolean
  locations: MicrosoftGraphLocationConstraintItem[]
  suggestLocation: boolean
}
export interface MicrosoftGraphLocationConstraintItem extends MicrosoftGraphLocation{
  resolveAvailability: boolean
}
export interface MicrosoftGraphMeetingTimeSuggestion{
  attendeeAvailability: MicrosoftGraphAttendeeAvailability[]
  confidence:  | string
  locations: MicrosoftGraphLocation[]
  meetingTimeSlot: MicrosoftGraphTimeSlot
  order: number
  organizerAvailability: MicrosoftGraphFreeBusyStatus
  suggestionReason: string
}
export interface MicrosoftGraphMeetingTimeSuggestionsResult{
  emptySuggestionsReason: string
  meetingTimeSuggestions: MicrosoftGraphMeetingTimeSuggestion[]
}
export interface MicrosoftGraphTimeConstraint{
  activityDomain: MicrosoftGraphActivityDomain
  timeSlots: MicrosoftGraphTimeSlot[]
}
export interface MicrosoftGraphAttachmentItem{
  attachmentType: MicrosoftGraphAttachmentType
  contentId: string
  contentType: string
  isInline: boolean
  name: string
  size: number
}
export interface MicrosoftGraphAttendee extends MicrosoftGraphAttendeeBase{
  proposedNewTime: MicrosoftGraphTimeSlot
  status: MicrosoftGraphResponseStatus
}
export interface MicrosoftGraphResponseStatus{
  response: MicrosoftGraphResponseType
  time: string
}
export interface MicrosoftGraphAutomaticRepliesMailTips{
  message: string
  messageLanguage: MicrosoftGraphLocaleInfo
  scheduledEndTime: MicrosoftGraphDateTimeTimeZone
  scheduledStartTime: MicrosoftGraphDateTimeTimeZone
}
export interface MicrosoftGraphLocaleInfo{
  displayName: string
  locale: string
}
export interface MicrosoftGraphAutomaticRepliesSetting{
  externalAudience: MicrosoftGraphExternalAudienceScope
  externalReplyMessage: string
  internalReplyMessage: string
  scheduledEndDateTime: MicrosoftGraphDateTimeTimeZone
  scheduledStartDateTime: MicrosoftGraphDateTimeTimeZone
  status: MicrosoftGraphAutomaticRepliesStatus
}
export interface MicrosoftGraphCalendarSharingMessageAction{
  action: MicrosoftGraphCalendarSharingAction
  actionType: MicrosoftGraphCalendarSharingActionType
  importance: MicrosoftGraphCalendarSharingActionImportance
}
export interface MicrosoftGraphConvertIdResult{
  errorDetails: MicrosoftGraphGenericError
  sourceId: string
  targetId: string
}
export interface MicrosoftGraphGenericError{
  code: string
  message: string
}
export interface MicrosoftGraphTimeZoneBase{
  name: string
}
export interface MicrosoftGraphCustomTimeZone extends MicrosoftGraphTimeZoneBase{
  bias: number
  daylightOffset: MicrosoftGraphDaylightTimeZoneOffset
  standardOffset: MicrosoftGraphStandardTimeZoneOffset
}
export interface MicrosoftGraphStandardTimeZoneOffset{
  dayOccurrence: number
  dayOfWeek: MicrosoftGraphDayOfWeek
  month: number
  time: string
  year: number
}
export interface MicrosoftGraphDaylightTimeZoneOffset extends MicrosoftGraphStandardTimeZoneOffset{
  daylightBias: number
}
export interface MicrosoftGraphFollowupFlag{
  completedDateTime: MicrosoftGraphDateTimeTimeZone
  dueDateTime: MicrosoftGraphDateTimeTimeZone
  flagStatus: MicrosoftGraphFollowupFlagStatus
  startDateTime: MicrosoftGraphDateTimeTimeZone
}
export interface MicrosoftGraphFreeBusyError{
  message: string
  responseCode: string
}
export interface MicrosoftGraphInternetMessageHeader{
  name: string
  value: string
}
export interface MicrosoftGraphWorkingHours{
  daysOfWeek: MicrosoftGraphDayOfWeek[]
  endTime: string
  startTime: string
  timeZone: MicrosoftGraphTimeZoneBase
}
export interface MicrosoftGraphMailTips{
  automaticReplies: MicrosoftGraphAutomaticRepliesMailTips
  customMailTip: string
  deliveryRestricted: boolean
  emailAddress: MicrosoftGraphEmailAddress
  error: MicrosoftGraphMailTipsError
  externalMemberCount: number
  isModerated: boolean
  mailboxFull: boolean
  maxMessageSize: number
  recipientScope: MicrosoftGraphRecipientScopeType
  recipientSuggestions: MicrosoftGraphRecipient[]
  totalMemberCount: number
}
export interface MicrosoftGraphMailTipsError{
  code: string
  message: string
}
export interface MicrosoftGraphMessageRuleActions{
  assignCategories: string[]
  copyToFolder: string
  delete: boolean
  forwardAsAttachmentTo: MicrosoftGraphRecipient[]
  forwardTo: MicrosoftGraphRecipient[]
  markAsRead: boolean
  markImportance: MicrosoftGraphImportance
  moveToFolder: string
  permanentDelete: boolean
  redirectTo: MicrosoftGraphRecipient[]
  stopProcessingRules: boolean
}
export interface MicrosoftGraphMessageRulePredicates{
  bodyContains: string[]
  bodyOrSubjectContains: string[]
  categories: string[]
  fromAddresses: MicrosoftGraphRecipient[]
  hasAttachments: boolean
  headerContains: string[]
  importance: MicrosoftGraphImportance
  isApprovalRequest: boolean
  isAutomaticForward: boolean
  isAutomaticReply: boolean
  isEncrypted: boolean
  isMeetingRequest: boolean
  isMeetingResponse: boolean
  isNonDeliveryReport: boolean
  isPermissionControlled: boolean
  isReadReceipt: boolean
  isSigned: boolean
  isVoicemail: boolean
  messageActionFlag: MicrosoftGraphMessageActionFlag
  notSentToMe: boolean
  recipientContains: string[]
  senderContains: string[]
  sensitivity: MicrosoftGraphSensitivity
  sentCcMe: boolean
  sentOnlyToMe: boolean
  sentToAddresses: MicrosoftGraphRecipient[]
  sentToMe: boolean
  sentToOrCcMe: boolean
  subjectContains: string[]
  withinSizeRange: MicrosoftGraphSizeRange
}
export interface MicrosoftGraphSizeRange{
  maximumSize: number
  minimumSize: number
}
export interface MicrosoftGraphOnlineMeetingInfo{
  conferenceId: string
  joinUrl: string
  phones: MicrosoftGraphPhone[]
  quickDial: string
  tollFreeNumbers: string[]
  tollNumber: string
}
export interface MicrosoftGraphPatternedRecurrence{
  pattern: MicrosoftGraphRecurrencePattern
  range: MicrosoftGraphRecurrenceRange
}
export interface MicrosoftGraphRecurrencePattern{
  dayOfMonth: number
  daysOfWeek: MicrosoftGraphDayOfWeek[]
  firstDayOfWeek: MicrosoftGraphDayOfWeek
  index: MicrosoftGraphWeekIndex
  interval: number
  month: number
  type: MicrosoftGraphRecurrencePatternType
}
export interface MicrosoftGraphRecurrenceRange{
  endDate: string
  numberOfOccurrences: number
  recurrenceTimeZone: string
  startDate: string
  type: MicrosoftGraphRecurrenceRangeType
}
export interface MicrosoftGraphPersonType{
  class: string
  subclass: string
}
export interface MicrosoftGraphReminder{
  changeKey: string
  eventEndTime: MicrosoftGraphDateTimeTimeZone
  eventId: string
  eventLocation: MicrosoftGraphLocation
  eventStartTime: MicrosoftGraphDateTimeTimeZone
  eventSubject: string
  eventWebLink: string
  reminderFireTime: MicrosoftGraphDateTimeTimeZone
}
export interface MicrosoftGraphScheduleInformation{
  availabilityView: string
  error: MicrosoftGraphFreeBusyError
  scheduleId: string
  scheduleItems: MicrosoftGraphScheduleItem[]
  workingHours: MicrosoftGraphWorkingHours
}
export interface MicrosoftGraphScheduleItem{
  end: MicrosoftGraphDateTimeTimeZone
  isPrivate: boolean
  location: string
  start: MicrosoftGraphDateTimeTimeZone
  status: MicrosoftGraphFreeBusyStatus
  subject: string
}
export interface MicrosoftGraphScoredEmailAddress{
  address: string
  itemId: string
  relevanceScore:  | string
  selectionLikelihood: MicrosoftGraphSelectionLikelihoodInfo
}
export interface MicrosoftGraphTimeZoneInformation{
  alias: string
  displayName: string
}
export interface MicrosoftGraphUploadSession{
  expirationDateTime: string
  nextExpectedRanges: string[]
  uploadUrl: string
}
export interface MicrosoftGraphWebsite{
  address: string
  displayName: string
  type: MicrosoftGraphWebsiteType
}
export interface MicrosoftGraphAccessAction{
}
export interface MicrosoftGraphAlbum{
  coverImageItemId: string
}
export interface MicrosoftGraphBooleanColumn{
}
export interface MicrosoftGraphCalculatedColumn{
  format: string
  formula: string
  outputType: string
}
export interface MicrosoftGraphChoiceColumn{
  allowTextEntry: boolean
  choices: string[]
  displayAs: string
}
export interface MicrosoftGraphColumnValidation{
  defaultLanguage: string
  descriptions: MicrosoftGraphDisplayNameLocalization[]
  formula: string
}
export interface MicrosoftGraphDisplayNameLocalization{
  displayName: string
  languageTag: string
}
export interface MicrosoftGraphContentApprovalStatusColumn{
}
export interface MicrosoftGraphContentTypeInfo{
  id: string
  name: string
}
export interface MicrosoftGraphContentTypeOrder{
  default: boolean
  position: number
}
export interface MicrosoftGraphCurrencyColumn{
  locale: string
}
export interface MicrosoftGraphDateTimeColumn{
  displayAs: string
  format: string
}
export interface MicrosoftGraphDefaultColumnValue{
  formula: string
  value: string
}
export interface MicrosoftGraphDocumentSet{
  allowedContentTypes: MicrosoftGraphContentTypeInfo[]
  defaultContents: MicrosoftGraphDocumentSetContent[]
  propagateWelcomePageChanges: boolean
  shouldPrefixNameToFile: boolean
  welcomePageUrl: string
  sharedColumns: MicrosoftGraphColumnDefinition[]
  welcomePageColumns: MicrosoftGraphColumnDefinition[]
}
export interface MicrosoftGraphDocumentSetContent{
  contentType: MicrosoftGraphContentTypeInfo
  fileName: string
  folderName: string
}
export interface MicrosoftGraphDriveItemUploadableProperties{
  description: string
  fileSize: number
  fileSystemInfo: MicrosoftGraphFileSystemInfo
  name: string
}
export interface MicrosoftGraphDriveRecipient{
  alias: string
  email: string
  objectId: string
}
export interface MicrosoftGraphHashes{
  crc32Hash: string
  quickXorHash: string
  sha1Hash: string
  sha256Hash: string
}
export interface MicrosoftGraphFolderView{
  sortBy: string
  sortOrder: string
  viewType: string
}
export interface MicrosoftGraphGeolocationColumn{
}
export interface MicrosoftGraphHyperlinkOrPictureColumn{
  isPicture: boolean
}
export interface MicrosoftGraphIncompleteData{
  missingDataBeforeDateTime: string
  wasThrottled: boolean
}
export interface MicrosoftGraphItemActionStat{
  actionCount: number
  actorCount: number
}
export interface MicrosoftGraphItemPreviewInfo{
  getUrl: string
  postParameters: string
  postUrl: string
}
export interface MicrosoftGraphItemReference{
  driveId: string
  driveType: string
  id: string
  name: string
  path: string
  shareId: string
  sharepointIds: MicrosoftGraphSharepointIds
  siteId: string
}
export interface MicrosoftGraphLookupColumn{
  allowMultipleValues: boolean
  allowUnlimitedLength: boolean
  columnName: string
  listId: string
  primaryLookupColumnId: string
}
export interface MicrosoftGraphNumberColumn{
  decimalPlaces: string
  displayAs: string
  maximum:  | string
  minimum:  | string
}
export interface MicrosoftGraphPendingContentUpdate{
  queuedDateTime: string
}
export interface MicrosoftGraphPersonOrGroupColumn{
  allowMultipleSelection: boolean
  chooseFromType: string
  displayAs: string
}
export interface MicrosoftGraphStoragePlanInformation{
  upgradeAvailable: boolean
}
export interface MicrosoftGraphSharePointIdentity extends MicrosoftGraphIdentity{
  loginName: string
}
export interface MicrosoftGraphSharePointIdentitySet extends MicrosoftGraphIdentitySet{
  group: MicrosoftGraphIdentity
  siteGroup: MicrosoftGraphSharePointIdentity
  siteUser: MicrosoftGraphSharePointIdentity
}
export interface MicrosoftGraphSharingInvitation{
  email: string
  invitedBy: MicrosoftGraphIdentitySet
  redeemedBy: string
  signInRequired: boolean
}
export interface MicrosoftGraphSharingLink{
  application: MicrosoftGraphIdentity
  preventsDownload: boolean
  scope: string
  type: string
  webHtml: string
  webUrl: string
}
export interface MicrosoftGraphTermColumn{
  allowMultipleValues: boolean
  showFullyQualifiedName: boolean
  parentTerm: MicrosoftGraphTermStoreTerm
  termSet: MicrosoftGraphTermStoreSet
}
export interface MicrosoftGraphTextColumn{
  allowMultipleLines: boolean
  appendChangesToExistingText: boolean
  linesForEditing: number
  maxLength: number
  textType: string
}
export interface MicrosoftGraphThumbnail{
  content: string
  height: number
  sourceItemId: string
  url: string
  width: number
}
export interface MicrosoftGraphThumbnailColumn{
}
export interface MicrosoftGraphExtensionSchemaProperty{
  name: string
  type: string
}
export interface MicrosoftGraphAccessReviewApplyAction{
}
export interface MicrosoftGraphAccessReviewHistoryScheduleSettings{
  recurrence: MicrosoftGraphPatternedRecurrence
  reportRange: string
}
export interface MicrosoftGraphAccessReviewScope{
}
export interface MicrosoftGraphAccessReviewQueryScope extends MicrosoftGraphAccessReviewScope{
  query: string
  queryRoot: string
  queryType: string
}
export interface MicrosoftGraphAccessReviewInactiveUsersQueryScope extends MicrosoftGraphAccessReviewQueryScope{
  inactiveDuration: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemResource{
  displayName: string
  id: string
  type: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource extends MicrosoftGraphAccessReviewInstanceDecisionItemResource{
  accessPackageDisplayName: string
  accessPackageId: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemAzureRoleResource extends MicrosoftGraphAccessReviewInstanceDecisionItemResource{
  scope: MicrosoftGraphAccessReviewInstanceDecisionItemResource
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemServicePrincipalResource extends MicrosoftGraphAccessReviewInstanceDecisionItemResource{
  appId: string
}
export interface MicrosoftGraphAccessReviewNotificationRecipientItem{
  notificationRecipientScope: MicrosoftGraphAccessReviewNotificationRecipientScope
  notificationTemplateType: string
}
export interface MicrosoftGraphAccessReviewNotificationRecipientScope{
}
export interface MicrosoftGraphAccessReviewNotificationRecipientQueryScope extends MicrosoftGraphAccessReviewNotificationRecipientScope{
  query: string
  queryRoot: string
  queryType: string
}
export interface MicrosoftGraphAccessReviewReviewerScope{
  query: string
  queryRoot: string
  queryType: string
}
export interface MicrosoftGraphAccessReviewScheduleSettings{
  applyActions: MicrosoftGraphAccessReviewApplyAction[]
  autoApplyDecisionsEnabled: boolean
  decisionHistoriesForReviewersEnabled: boolean
  defaultDecision: string
  defaultDecisionEnabled: boolean
  instanceDurationInDays: number
  justificationRequiredOnApproval: boolean
  mailNotificationsEnabled: boolean
  recommendationsEnabled: boolean
  recurrence: MicrosoftGraphPatternedRecurrence
  reminderNotificationsEnabled: boolean
}
export interface MicrosoftGraphAccessReviewStageSettings{
  decisionsThatWillMoveToNextStage: string[]
  dependsOn: string[]
  durationInDays: number
  fallbackReviewers: MicrosoftGraphAccessReviewReviewerScope[]
  recommendationsEnabled: boolean
  reviewers: MicrosoftGraphAccessReviewReviewerScope[]
  stageId: string
}
export interface MicrosoftGraphAppConsentRequestScope{
  displayName: string
}
export interface MicrosoftGraphDisableAndDeleteUserApplyAction extends MicrosoftGraphAccessReviewApplyAction{
}
export interface MicrosoftGraphPrincipalResourceMembershipsScope extends MicrosoftGraphAccessReviewScope{
  principalScopes: MicrosoftGraphAccessReviewScope[]
  resourceScopes: MicrosoftGraphAccessReviewScope[]
}
export interface MicrosoftGraphRemoveAccessApplyAction extends MicrosoftGraphAccessReviewApplyAction{
}
export interface MicrosoftGraphServicePrincipalIdentity extends MicrosoftGraphIdentity{
  appId: string
}
export interface MicrosoftGraphAgreementFileData{
  data: string
}
export interface MicrosoftGraphTermsExpiration{
  frequency: string
  startDateTime: string
}
export interface MicrosoftGraphConditionalAccessSessionControl{
  isEnabled: boolean
}
export interface MicrosoftGraphApplicationEnforcedRestrictionsSessionControl extends MicrosoftGraphConditionalAccessSessionControl{
}
export interface MicrosoftGraphCloudAppSecuritySessionControl extends MicrosoftGraphConditionalAccessSessionControl{
  cloudAppSecurityType: MicrosoftGraphCloudAppSecuritySessionControlType
}
export interface MicrosoftGraphConditionalAccessApplications{
  excludeApplications: string[]
  includeApplications: string[]
  includeAuthenticationContextClassReferences: string[]
  includeUserActions: string[]
}
export interface MicrosoftGraphConditionalAccessClientApplications{
  excludeServicePrincipals: string[]
  includeServicePrincipals: string[]
}
export interface MicrosoftGraphConditionalAccessConditionSet{
  applications: MicrosoftGraphConditionalAccessApplications
  clientApplications: MicrosoftGraphConditionalAccessClientApplications
  clientAppTypes: MicrosoftGraphConditionalAccessClientApp[]
  devices: MicrosoftGraphConditionalAccessDevices
  locations: MicrosoftGraphConditionalAccessLocations
  platforms: MicrosoftGraphConditionalAccessPlatforms
  signInRiskLevels: MicrosoftGraphRiskLevel[]
  userRiskLevels: MicrosoftGraphRiskLevel[]
  users: MicrosoftGraphConditionalAccessUsers
}
export interface MicrosoftGraphConditionalAccessDevices{
  deviceFilter: MicrosoftGraphConditionalAccessFilter
}
export interface MicrosoftGraphConditionalAccessLocations{
  excludeLocations: string[]
  includeLocations: string[]
}
export interface MicrosoftGraphConditionalAccessPlatforms{
  excludePlatforms: MicrosoftGraphConditionalAccessDevicePlatform[]
  includePlatforms: MicrosoftGraphConditionalAccessDevicePlatform[]
}
export interface MicrosoftGraphConditionalAccessUsers{
  excludeGroups: string[]
  excludeRoles: string[]
  excludeUsers: string[]
  includeGroups: string[]
  includeRoles: string[]
  includeUsers: string[]
}
export interface MicrosoftGraphConditionalAccessFilter{
  mode: MicrosoftGraphFilterMode
  rule: string
}
export interface MicrosoftGraphConditionalAccessGrantControls{
  builtInControls: MicrosoftGraphConditionalAccessGrantControl[]
  customAuthenticationFactors: string[]
  operator: string
  termsOfUse: string[]
}
export interface MicrosoftGraphConditionalAccessSessionControls{
  applicationEnforcedRestrictions: MicrosoftGraphApplicationEnforcedRestrictionsSessionControl
  cloudAppSecurity: MicrosoftGraphCloudAppSecuritySessionControl
  disableResilienceDefaults: boolean
  persistentBrowser: MicrosoftGraphPersistentBrowserSessionControl
  signInFrequency: MicrosoftGraphSignInFrequencySessionControl
}
export interface MicrosoftGraphPersistentBrowserSessionControl extends MicrosoftGraphConditionalAccessSessionControl{
  mode: MicrosoftGraphPersistentBrowserSessionMode
}
export interface MicrosoftGraphSignInFrequencySessionControl extends MicrosoftGraphConditionalAccessSessionControl{
  type: MicrosoftGraphSigninFrequencyType
  value: number
}
export interface MicrosoftGraphIpRange{
}
export interface MicrosoftGraphIPv4CidrRange extends MicrosoftGraphIpRange{
  cidrAddress: string
}
export interface MicrosoftGraphIPv6CidrRange extends MicrosoftGraphIpRange{
  cidrAddress: string
}
export interface MicrosoftGraphRiskUserActivity{
  detail: MicrosoftGraphRiskDetail
  riskEventTypes: string[]
}
export interface MicrosoftGraphAccessPackageApprovalStage{
  durationBeforeAutomaticDenial: string
  durationBeforeEscalation: string
  escalationApprovers: MicrosoftGraphSubjectSet[]
  fallbackEscalationApprovers: MicrosoftGraphSubjectSet[]
  fallbackPrimaryApprovers: MicrosoftGraphSubjectSet[]
  isApproverJustificationRequired: boolean
  isEscalationEnabled: boolean
  primaryApprovers: MicrosoftGraphSubjectSet[]
}
export interface MicrosoftGraphSubjectSet{
}
export interface MicrosoftGraphAccessPackageAssignmentApprovalSettings{
  isApprovalRequiredForAdd: boolean
  isApprovalRequiredForUpdate: boolean
  stages: MicrosoftGraphAccessPackageApprovalStage[]
}
export interface MicrosoftGraphAccessPackageAssignmentRequestorSettings{
  allowCustomAssignmentSchedule: boolean
  enableOnBehalfRequestorsToAddAccess: boolean
  enableOnBehalfRequestorsToRemoveAccess: boolean
  enableOnBehalfRequestorsToUpdateAccess: boolean
  enableTargetsToSelfAddAccess: boolean
  enableTargetsToSelfRemoveAccess: boolean
  enableTargetsToSelfUpdateAccess: boolean
  onBehalfRequestors: MicrosoftGraphSubjectSet[]
}
export interface MicrosoftGraphAccessPackageAssignmentRequestRequirements{
  allowCustomAssignmentSchedule: boolean
  isApprovalRequiredForAdd: boolean
  isApprovalRequiredForUpdate: boolean
  policyDescription: string
  policyDisplayName: string
  policyId: string
  schedule: MicrosoftGraphEntitlementManagementSchedule
}
export interface MicrosoftGraphEntitlementManagementSchedule{
  expiration: MicrosoftGraphExpirationPattern
  recurrence: MicrosoftGraphPatternedRecurrence
  startDateTime: string
}
export interface MicrosoftGraphAccessPackageAssignmentReviewSettings{
  expirationBehavior: MicrosoftGraphAccessReviewExpirationBehavior
  fallbackReviewers: MicrosoftGraphSubjectSet[]
  isEnabled: boolean
  isRecommendationEnabled: boolean
  isReviewerJustificationRequired: boolean
  isSelfReview: boolean
  primaryReviewers: MicrosoftGraphSubjectSet[]
  schedule: MicrosoftGraphEntitlementManagementSchedule
}
export interface MicrosoftGraphConnectedOrganizationMembers extends MicrosoftGraphSubjectSet{
  connectedOrganizationId: string
  description: string
}
export interface MicrosoftGraphConnectionInfo{
  url: string
}
export interface MicrosoftGraphExpirationPattern{
  duration: string
  endDateTime: string
  type: MicrosoftGraphExpirationPatternType
}
export interface MicrosoftGraphExternalSponsors extends MicrosoftGraphSubjectSet{
}
export interface MicrosoftGraphGroupMembers extends MicrosoftGraphSubjectSet{
  description: string
  groupId: string
}
export interface MicrosoftGraphInternalSponsors extends MicrosoftGraphSubjectSet{
}
export interface MicrosoftGraphRequestorManager extends MicrosoftGraphSubjectSet{
  managerLevel: number
}
export interface MicrosoftGraphSingleServicePrincipal extends MicrosoftGraphSubjectSet{
  description: string
  servicePrincipalId: string
}
export interface MicrosoftGraphSingleUser extends MicrosoftGraphSubjectSet{
  description: string
  userId: string
}
export interface MicrosoftGraphTargetApplicationOwners extends MicrosoftGraphSubjectSet{
}
export interface MicrosoftGraphTargetManager extends MicrosoftGraphSubjectSet{
  managerLevel: number
}
export interface MicrosoftGraphIdentitySource{
}
export interface MicrosoftGraphAzureActiveDirectoryTenant extends MicrosoftGraphIdentitySource{
  displayName: string
  tenantId: string
}
export interface MicrosoftGraphDomainIdentitySource extends MicrosoftGraphIdentitySource{
  displayName: string
  domainName: string
}
export interface MicrosoftGraphExternalDomainFederation extends MicrosoftGraphIdentitySource{
  displayName: string
  domainName: string
  issuerUri: string
}
export interface MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
}
export interface MicrosoftGraphAllDevicesAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
}
export interface MicrosoftGraphAllLicensedUsersAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
}
export interface MicrosoftGraphAndroidMinimumOperatingSystem{
  v10_0: boolean
  v11_0: boolean
  v4_0: boolean
  v4_0_3: boolean
  v4_1: boolean
  v4_2: boolean
  v4_3: boolean
  v4_4: boolean
  v5_0: boolean
  v5_1: boolean
}
export interface MicrosoftGraphAppConfigurationSettingItem{
  appConfigKey: string
  appConfigKeyType: MicrosoftGraphMdmAppConfigKeyType
  appConfigKeyValue: string
}
export interface MicrosoftGraphConfigurationManagerCollectionAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
  collectionId: string
}
export interface MicrosoftGraphGroupAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
  groupId: string
}
export interface MicrosoftGraphExclusionGroupAssignmentTarget extends MicrosoftGraphGroupAssignmentTarget{
}
export interface MicrosoftGraphFileEncryptionInfo{
  encryptionKey: string
  fileDigest: string
  fileDigestAlgorithm: string
  initializationVector: string
  mac: string
  macKey: string
  profileIdentifier: string
}
export interface MicrosoftGraphIosDeviceType{
  iPad: boolean
  iPhoneAndIPod: boolean
}
export interface MicrosoftGraphMobileAppAssignmentSettings{
}
export interface MicrosoftGraphIosLobAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
  vpnConfigurationId: string
}
export interface MicrosoftGraphIosMinimumOperatingSystem{
  v10_0: boolean
  v11_0: boolean
  v12_0: boolean
  v13_0: boolean
  v14_0: boolean
  v8_0: boolean
  v9_0: boolean
}
export interface MicrosoftGraphIosStoreAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
  vpnConfigurationId: string
}
export interface MicrosoftGraphIosVppAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
  useDeviceLicensing: boolean
  vpnConfigurationId: string
}
export interface MicrosoftGraphMicrosoftStoreForBusinessAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
  useDeviceContext: boolean
}
export interface MicrosoftGraphMimeContent{
  type: string
  value: string
}
export interface MicrosoftGraphMobileAppInstallTimeSettings{
  deadlineDateTime: string
  startDateTime: string
  useLocalTime: boolean
}
export interface MicrosoftGraphVppLicensingType{
  supportsDeviceLicensing: boolean
  supportsUserLicensing: boolean
}
export interface MicrosoftGraphWin32LobAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
  deliveryOptimizationPriority: MicrosoftGraphWin32LobAppDeliveryOptimizationPriority
  installTimeSettings: MicrosoftGraphMobileAppInstallTimeSettings
  notifications: MicrosoftGraphWin32LobAppNotification
  restartSettings: MicrosoftGraphWin32LobAppRestartSettings
}
export interface MicrosoftGraphWin32LobAppRestartSettings{
  countdownDisplayBeforeRestartInMinutes: number
  gracePeriodInMinutes: number
  restartNotificationSnoozeDurationInMinutes: number
}
export interface MicrosoftGraphWin32LobAppRule{
  ruleType: MicrosoftGraphWin32LobAppRuleType
}
export interface MicrosoftGraphWin32LobAppFileSystemRule extends MicrosoftGraphWin32LobAppRule{
  check32BitOn64System: boolean
  comparisonValue: string
  fileOrFolderName: string
  operationType: MicrosoftGraphWin32LobAppFileSystemOperationType
  operator: MicrosoftGraphWin32LobAppRuleOperator
  path: string
}
export interface MicrosoftGraphWin32LobAppInstallExperience{
  deviceRestartBehavior: MicrosoftGraphWin32LobAppRestartBehavior
  runAsAccount: MicrosoftGraphRunAsAccountType
}
export interface MicrosoftGraphWin32LobAppMsiInformation{
  packageType: MicrosoftGraphWin32LobAppMsiPackageType
  productCode: string
  productName: string
  productVersion: string
  publisher: string
  requiresReboot: boolean
  upgradeCode: string
}
export interface MicrosoftGraphWin32LobAppPowerShellScriptRule extends MicrosoftGraphWin32LobAppRule{
  comparisonValue: string
  displayName: string
  enforceSignatureCheck: boolean
  operationType: MicrosoftGraphWin32LobAppPowerShellScriptRuleOperationType
  operator: MicrosoftGraphWin32LobAppRuleOperator
  runAs32Bit: boolean
  runAsAccount: MicrosoftGraphRunAsAccountType
  scriptContent: string
}
export interface MicrosoftGraphWin32LobAppProductCodeRule extends MicrosoftGraphWin32LobAppRule{
  productCode: string
  productVersion: string
  productVersionOperator: MicrosoftGraphWin32LobAppRuleOperator
}
export interface MicrosoftGraphWin32LobAppRegistryRule extends MicrosoftGraphWin32LobAppRule{
  check32BitOn64System: boolean
  comparisonValue: string
  keyPath: string
  operationType: MicrosoftGraphWin32LobAppRegistryRuleOperationType
  operator: MicrosoftGraphWin32LobAppRuleOperator
  valueName: string
}
export interface MicrosoftGraphWin32LobAppReturnCode{
  returnCode: number
  type: MicrosoftGraphWin32LobAppReturnCodeType
}
export interface MicrosoftGraphWindowsMinimumOperatingSystem{
  v10_0: boolean
  v8_0: boolean
  v8_1: boolean
}
export interface MicrosoftGraphDeviceManagementSettings{
  deviceComplianceCheckinThresholdDays: number
  isScheduledActionEnabled: boolean
  secureByDefault: boolean
}
export interface MicrosoftGraphIntuneBrand{
  contactITEmailAddress: string
  contactITName: string
  contactITNotes: string
  contactITPhoneNumber: string
  darkBackgroundLogo: MicrosoftGraphMimeContent
  displayName: string
  lightBackgroundLogo: MicrosoftGraphMimeContent
  onlineSupportSiteName: string
  onlineSupportSiteUrl: string
  privacyUrl: string
  showDisplayNameNextToLogo: boolean
  showLogo: boolean
  showNameNextToLogo: boolean
  themeColor: MicrosoftGraphRgbColor
}
export interface MicrosoftGraphAppListItem{
  appId: string
  appStoreUrl: string
  name: string
  publisher: string
}
export interface MicrosoftGraphBitLockerRemovableDrivePolicy{
  blockCrossOrganizationWriteAccess: boolean
  encryptionMethod: MicrosoftGraphBitLockerEncryptionMethod
  requireEncryptionForWriteAccess: boolean
}
export interface MicrosoftGraphDefenderDetectedMalwareActions{
  highSeverity: MicrosoftGraphDefenderThreatAction
  lowSeverity: MicrosoftGraphDefenderThreatAction
  moderateSeverity: MicrosoftGraphDefenderThreatAction
  severeSeverity: MicrosoftGraphDefenderThreatAction
}
export interface MicrosoftGraphDeviceCompliancePolicySettingState{
  currentValue: string
  errorCode: number
  errorDescription: string
  instanceDisplayName: string
  setting: string
  settingName: string
  sources: MicrosoftGraphSettingSource[]
  state: MicrosoftGraphComplianceStatus
  userEmail: string
  userId: string
  userName: string
  userPrincipalName: string
}
export interface MicrosoftGraphSettingSource{
  displayName: string
  id: string
  sourceType: MicrosoftGraphSettingSourceType
}
export interface MicrosoftGraphDeviceConfigurationSettingState{
  currentValue: string
  errorCode: number
  errorDescription: string
  instanceDisplayName: string
  setting: string
  settingName: string
  sources: MicrosoftGraphSettingSource[]
  state: MicrosoftGraphComplianceStatus
  userEmail: string
  userId: string
  userName: string
  userPrincipalName: string
}
export interface MicrosoftGraphEdgeSearchEngineBase{
}
export interface MicrosoftGraphEdgeSearchEngine extends MicrosoftGraphEdgeSearchEngineBase{
  edgeSearchEngineType: MicrosoftGraphEdgeSearchEngineType
}
export interface MicrosoftGraphEdgeSearchEngineCustom extends MicrosoftGraphEdgeSearchEngineBase{
  edgeSearchEngineOpenSearchXmlUrl: string
}
export interface MicrosoftGraphIosHomeScreenItem{
  displayName: string
}
export interface MicrosoftGraphIosHomeScreenApp extends MicrosoftGraphIosHomeScreenItem{
  bundleID: string
}
export interface MicrosoftGraphIosHomeScreenFolder extends MicrosoftGraphIosHomeScreenItem{
  pages: MicrosoftGraphIosHomeScreenFolderPage[]
}
export interface MicrosoftGraphIosHomeScreenFolderPage{
  apps: MicrosoftGraphIosHomeScreenApp[]
  displayName: string
}
export interface MicrosoftGraphIosHomeScreenPage{
  displayName: string
  icons: MicrosoftGraphIosHomeScreenItem[]
}
export interface MicrosoftGraphIosNetworkUsageRule{
  cellularDataBlocked: boolean
  cellularDataBlockWhenRoaming: boolean
  managedApps: MicrosoftGraphAppListItem[]
}
export interface MicrosoftGraphIosNotificationSettings{
  alertType: MicrosoftGraphIosNotificationAlertType
  appName: string
  badgesEnabled: boolean
  bundleID: string
  enabled: boolean
  publisher: string
  showInNotificationCenter: boolean
  showOnLockScreen: boolean
  soundsEnabled: boolean
}
export interface MicrosoftGraphMediaContentRatingAustralia{
  movieRating: MicrosoftGraphRatingAustraliaMoviesType
  tvRating: MicrosoftGraphRatingAustraliaTelevisionType
}
export interface MicrosoftGraphMediaContentRatingCanada{
  movieRating: MicrosoftGraphRatingCanadaMoviesType
  tvRating: MicrosoftGraphRatingCanadaTelevisionType
}
export interface MicrosoftGraphMediaContentRatingFrance{
  movieRating: MicrosoftGraphRatingFranceMoviesType
  tvRating: MicrosoftGraphRatingFranceTelevisionType
}
export interface MicrosoftGraphMediaContentRatingGermany{
  movieRating: MicrosoftGraphRatingGermanyMoviesType
  tvRating: MicrosoftGraphRatingGermanyTelevisionType
}
export interface MicrosoftGraphMediaContentRatingIreland{
  movieRating: MicrosoftGraphRatingIrelandMoviesType
  tvRating: MicrosoftGraphRatingIrelandTelevisionType
}
export interface MicrosoftGraphMediaContentRatingJapan{
  movieRating: MicrosoftGraphRatingJapanMoviesType
  tvRating: MicrosoftGraphRatingJapanTelevisionType
}
export interface MicrosoftGraphMediaContentRatingNewZealand{
  movieRating: MicrosoftGraphRatingNewZealandMoviesType
  tvRating: MicrosoftGraphRatingNewZealandTelevisionType
}
export interface MicrosoftGraphMediaContentRatingUnitedKingdom{
  movieRating: MicrosoftGraphRatingUnitedKingdomMoviesType
  tvRating: MicrosoftGraphRatingUnitedKingdomTelevisionType
}
export interface MicrosoftGraphMediaContentRatingUnitedStates{
  movieRating: MicrosoftGraphRatingUnitedStatesMoviesType
  tvRating: MicrosoftGraphRatingUnitedStatesTelevisionType
}
export interface MicrosoftGraphOmaSetting{
  description: string
  displayName: string
  omaUri: string
}
export interface MicrosoftGraphOmaSettingBase64 extends MicrosoftGraphOmaSetting{
  fileName: string
  value: string
}
export interface MicrosoftGraphOmaSettingBoolean extends MicrosoftGraphOmaSetting{
  value: boolean
}
export interface MicrosoftGraphOmaSettingDateTime extends MicrosoftGraphOmaSetting{
  value: string
}
export interface MicrosoftGraphOmaSettingFloatingPoint extends MicrosoftGraphOmaSetting{
  value:  | string
}
export interface MicrosoftGraphOmaSettingInteger extends MicrosoftGraphOmaSetting{
  value: number
}
export interface MicrosoftGraphOmaSettingString extends MicrosoftGraphOmaSetting{
  value: string
}
export interface MicrosoftGraphOmaSettingStringXml extends MicrosoftGraphOmaSetting{
  fileName: string
  value: string
}
export interface MicrosoftGraphReport{
  content: string
}
export interface MicrosoftGraphSharedPCAccountManagerPolicy{
  accountDeletionPolicy: MicrosoftGraphSharedPCAccountDeletionPolicyType
  cacheAccountsAboveDiskFreePercentage: number
  inactiveThresholdDays: number
  removeAccountsBelowDiskFreePercentage: number
}
export interface MicrosoftGraphWindows10NetworkProxyServer{
  address: string
  exceptions: string[]
  useForLocalAddresses: boolean
}
export interface MicrosoftGraphWindowsFirewallNetworkProfile{
  authorizedApplicationRulesFromGroupPolicyMerged: boolean
  connectionSecurityRulesFromGroupPolicyMerged: boolean
  firewallEnabled: MicrosoftGraphStateManagementSetting
  globalPortRulesFromGroupPolicyMerged: boolean
  inboundConnectionsBlocked: boolean
  inboundNotificationsBlocked: boolean
  incomingTrafficBlocked: boolean
  outboundConnectionsBlocked: boolean
  policyRulesFromGroupPolicyMerged: boolean
  securedPacketExemptionAllowed: boolean
  stealthModeBlocked: boolean
  unicastResponsesToMulticastBroadcastsBlocked: boolean
}
export interface MicrosoftGraphWindowsUpdateInstallScheduleType{
}
export interface MicrosoftGraphWindowsUpdateActiveHoursInstall extends MicrosoftGraphWindowsUpdateInstallScheduleType{
  activeHoursEnd: string
  activeHoursStart: string
}
export interface MicrosoftGraphWindowsUpdateScheduledInstall extends MicrosoftGraphWindowsUpdateInstallScheduleType{
  scheduledInstallDay: MicrosoftGraphWeeklySchedule
  scheduledInstallTime: string
}
export interface MicrosoftGraphConfigurationManagerClientEnabledFeatures{
  compliancePolicy: boolean
  deviceConfiguration: boolean
  inventory: boolean
  modernApps: boolean
  resourceAccess: boolean
  windowsUpdateForBusiness: boolean
}
export interface MicrosoftGraphDeviceActionResult{
  actionName: string
  actionState: MicrosoftGraphActionState
  lastUpdatedDateTime: string
  startDateTime: string
}
export interface MicrosoftGraphDeviceHealthAttestationState{
  attestationIdentityKey: string
  bitLockerStatus: string
  bootAppSecurityVersion: string
  bootDebugging: string
  bootManagerSecurityVersion: string
  bootManagerVersion: string
  bootRevisionListInfo: string
  codeIntegrity: string
  codeIntegrityCheckVersion: string
  codeIntegrityPolicy: string
  contentNamespaceUrl: string
  contentVersion: string
  dataExcutionPolicy: string
  deviceHealthAttestationStatus: string
  earlyLaunchAntiMalwareDriverProtection: string
  healthAttestationSupportedStatus: string
  healthStatusMismatchInfo: string
  issuedDateTime: string
  lastUpdateDateTime: string
  operatingSystemKernelDebugging: string
  operatingSystemRevListInfo: string
  pcr0: string
  pcrHashAlgorithm: string
  resetCount: number
  restartCount: number
  safeMode: string
  secureBoot: string
  secureBootConfigurationPolicyFingerPrint: string
  testSigning: string
  tpmVersion: string
  virtualSecureMode: string
  windowsPE: string
}
export interface MicrosoftGraphComplianceManagementPartnerAssignment{
  target: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
}
export interface MicrosoftGraphDeviceEnrollmentPlatformRestriction{
  osMaximumVersion: string
  osMinimumVersion: string
  personalDeviceEnrollmentBlocked: boolean
  platformBlocked: boolean
}
export interface MicrosoftGraphRgbColor{
  b: number
  g: number
  r: number
}
export interface MicrosoftGraphDeleteUserFromSharedAppleDeviceActionResult extends MicrosoftGraphDeviceActionResult{
  userPrincipalName: string
}
export interface MicrosoftGraphDeviceExchangeAccessStateSummary{
  allowedDeviceCount: number
  blockedDeviceCount: number
  quarantinedDeviceCount: number
  unavailableDeviceCount: number
  unknownDeviceCount: number
}
export interface MicrosoftGraphDeviceGeoLocation{
  altitude:  | string
  heading:  | string
  horizontalAccuracy:  | string
  lastCollectedDateTime: string
  latitude:  | string
  longitude:  | string
  speed:  | string
  verticalAccuracy:  | string
}
export interface MicrosoftGraphDeviceOperatingSystemSummary{
  androidCount: number
  iosCount: number
  macOSCount: number
  unknownCount: number
  windowsCount: number
  windowsMobileCount: number
}
export interface MicrosoftGraphLocateDeviceActionResult extends MicrosoftGraphDeviceActionResult{
  deviceLocation: MicrosoftGraphDeviceGeoLocation
}
export interface MicrosoftGraphRemoteLockActionResult extends MicrosoftGraphDeviceActionResult{
  unlockPin: string
}
export interface MicrosoftGraphResetPasscodeActionResult extends MicrosoftGraphDeviceActionResult{
  passcode: string
}
export interface MicrosoftGraphUpdateWindowsDeviceAccountActionParameter{
  calendarSyncEnabled: boolean
  deviceAccount: MicrosoftGraphWindowsDeviceAccount
  deviceAccountEmail: string
  exchangeServer: string
  passwordRotationEnabled: boolean
  sessionInitiationProtocalAddress: string
}
export interface MicrosoftGraphWindowsDeviceAccount{
  password: string
}
export interface MicrosoftGraphWindowsDefenderScanActionResult extends MicrosoftGraphDeviceActionResult{
  scanType: string
}
export interface MicrosoftGraphWindowsDeviceADAccount extends MicrosoftGraphWindowsDeviceAccount{
  domainName: string
  userName: string
}
export interface MicrosoftGraphWindowsDeviceAzureADAccount extends MicrosoftGraphWindowsDeviceAccount{
  userPrincipalName: string
}
export interface MicrosoftGraphImportedWindowsAutopilotDeviceIdentityState{
  deviceErrorCode: number
  deviceErrorName: string
  deviceImportStatus: MicrosoftGraphImportedWindowsAutopilotDeviceIdentityImportStatus
  deviceRegistrationId: string
}
export interface MicrosoftGraphMobileAppIdentifier{
}
export interface MicrosoftGraphAndroidMobileAppIdentifier extends MicrosoftGraphMobileAppIdentifier{
  packageId: string
}
export interface MicrosoftGraphIosMobileAppIdentifier extends MicrosoftGraphMobileAppIdentifier{
  bundleId: string
}
export interface MicrosoftGraphIPv4Range extends MicrosoftGraphIpRange{
  lowerAddress: string
  upperAddress: string
}
export interface MicrosoftGraphIPv6Range extends MicrosoftGraphIpRange{
  lowerAddress: string
  upperAddress: string
}
export interface MicrosoftGraphManagedAppDiagnosticStatus{
  mitigationInstruction: string
  state: string
  validationName: string
}
export interface MicrosoftGraphManagedAppPolicyDeploymentSummaryPerApp{
  configurationAppliedUserCount: number
  mobileAppIdentifier: MicrosoftGraphMobileAppIdentifier
}
export interface MicrosoftGraphProxiedDomain{
  ipAddressOrFQDN: string
  proxy: string
}
export interface MicrosoftGraphWindowsInformationProtectionApp{
  denied: boolean
  description: string
  displayName: string
  productName: string
  publisherName: string
}
export interface MicrosoftGraphWindowsInformationProtectionDataRecoveryCertificate{
  certificate: string
  description: string
  expirationDateTime: string
  subjectName: string
}
export interface MicrosoftGraphWindowsInformationProtectionDesktopApp extends MicrosoftGraphWindowsInformationProtectionApp{
  binaryName: string
  binaryVersionHigh: string
  binaryVersionLow: string
}
export interface MicrosoftGraphWindowsInformationProtectionIPRangeCollection{
  displayName: string
  ranges: MicrosoftGraphIpRange[]
}
export interface MicrosoftGraphWindowsInformationProtectionProxiedDomainCollection{
  displayName: string
  proxiedDomains: MicrosoftGraphProxiedDomain[]
}
export interface MicrosoftGraphWindowsInformationProtectionResourceCollection{
  displayName: string
  resources: string[]
}
export interface MicrosoftGraphWindowsInformationProtectionStoreApp extends MicrosoftGraphWindowsInformationProtectionApp{
}
export interface MicrosoftGraphResourceAction{
  allowedResourceActions: string[]
  notAllowedResourceActions: string[]
}
export interface MicrosoftGraphRolePermission{
  resourceActions: MicrosoftGraphResourceAction[]
}
export interface MicrosoftGraphServiceHealthIssuePost{
  createdDateTime: string
  description: MicrosoftGraphItemBody
  postType: MicrosoftGraphPostType
}
export interface MicrosoftGraphServiceUpdateMessageViewpoint{
  isArchived: boolean
  isFavorited: boolean
  isRead: boolean
}
export interface MicrosoftGraphAggregationOption{
  bucketDefinition: MicrosoftGraphBucketAggregationDefinition
  field: string
  size: number
}
export interface MicrosoftGraphBucketAggregationDefinition{
  isDescending: boolean
  minimumCount: number
  prefixFilter: string
  ranges: MicrosoftGraphBucketAggregationRange[]
  sortBy: MicrosoftGraphBucketAggregationSortProperty
}
export interface MicrosoftGraphAlterationResponse{
  originalQueryString: string
  queryAlteration: MicrosoftGraphSearchAlteration
  queryAlterationType: MicrosoftGraphSearchAlterationType
}
export interface MicrosoftGraphSearchAlteration{
  alteredHighlightedQueryString: string
  alteredQueryString: string
  alteredQueryTokens: MicrosoftGraphAlteredQueryToken[]
}
export interface MicrosoftGraphAlteredQueryToken{
  length: number
  offset: number
  suggestion: string
}
export interface MicrosoftGraphBucketAggregationRange{
  from: string
  to: string
}
export interface MicrosoftGraphResultTemplate{
  body: MicrosoftGraphJson
  displayName: string
}
export interface MicrosoftGraphDictionary{
}
export interface MicrosoftGraphResultTemplateDictionary extends MicrosoftGraphDictionary{
}
export interface MicrosoftGraphResultTemplateOption{
  enableResultTemplate: boolean
}
export interface MicrosoftGraphSearchAggregation{
  buckets: MicrosoftGraphSearchBucket[]
  field: string
}
export interface MicrosoftGraphSearchBucket{
  aggregationFilterToken: string
  count: number
  key: string
}
export interface MicrosoftGraphSearchAlterationOptions{
  enableModification: boolean
  enableSuggestion: boolean
}
export interface MicrosoftGraphSearchHit{
  contentSource: string
  hitId: string
  rank: number
  resultTemplateId: string
  summary: string
  resource: MicrosoftGraphEntity
}
export interface MicrosoftGraphSearchHitsContainer{
  aggregations: MicrosoftGraphSearchAggregation[]
  hits: MicrosoftGraphSearchHit[]
  moreResultsAvailable: boolean
  total: number
}
export interface MicrosoftGraphSearchQuery{
  queryString: string
}
export interface MicrosoftGraphSearchRequest{
  aggregationFilters: string[]
  aggregations: MicrosoftGraphAggregationOption[]
  contentSources: string[]
  enableTopResults: boolean
  entityTypes: MicrosoftGraphEntityType[]
  fields: string[]
  from: number
  query: MicrosoftGraphSearchQuery
  queryAlterationOptions: MicrosoftGraphSearchAlterationOptions
  resultTemplateOptions: MicrosoftGraphResultTemplateOption
  size: number
  sortProperties: MicrosoftGraphSortProperty[]
}
export interface MicrosoftGraphSortProperty{
  isDescending: boolean
  name: string
}
export interface MicrosoftGraphSearchResponse{
  hitsContainers: MicrosoftGraphSearchHitsContainer[]
  queryAlterationResponse: MicrosoftGraphAlterationResponse
  resultTemplates: MicrosoftGraphResultTemplateDictionary
  searchTerms: string[]
}
export interface MicrosoftGraphPlannerAppliedCategories{
}
export interface MicrosoftGraphPlannerAssignment{
  assignedBy: MicrosoftGraphIdentitySet
  assignedDateTime: string
  orderHint: string
}
export interface MicrosoftGraphPlannerAssignments{
}
export interface MicrosoftGraphPlannerCategoryDescriptions{
  category1: string
  category10: string
  category11: string
  category12: string
  category13: string
  category14: string
  category15: string
  category16: string
  category17: string
  category18: string
  category19: string
  category2: string
  category20: string
  category21: string
  category22: string
  category23: string
  category24: string
  category25: string
  category3: string
  category4: string
  category5: string
  category6: string
  category7: string
  category8: string
  category9: string
}
export interface MicrosoftGraphPlannerChecklistItem{
  isChecked: boolean
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  orderHint: string
  title: string
}
export interface MicrosoftGraphPlannerChecklistItems{
}
export interface MicrosoftGraphPlannerExternalReference{
  alias: string
  lastModifiedBy: MicrosoftGraphIdentitySet
  lastModifiedDateTime: string
  previewPriority: string
  type: string
}
export interface MicrosoftGraphPlannerExternalReferences{
}
export interface MicrosoftGraphPlannerOrderHintsByAssignee{
}
export interface MicrosoftGraphPlannerPlanContainer{
  containerId: string
  type: MicrosoftGraphPlannerContainerType
  url: string
}
export interface MicrosoftGraphPlannerUserIds{
}
export interface MicrosoftGraphInsightIdentity{
  address: string
  displayName: string
  id: string
}
export interface MicrosoftGraphResourceReference{
  id: string
  type: string
  webUrl: string
}
export interface MicrosoftGraphResourceVisualization{
  containerDisplayName: string
  containerType: string
  containerWebUrl: string
  mediaType: string
  previewImageUrl: string
  previewText: string
  title: string
  type: string
}
export interface MicrosoftGraphSharingDetail{
  sharedBy: MicrosoftGraphInsightIdentity
  sharedDateTime: string
  sharingReference: MicrosoftGraphResourceReference
  sharingSubject: string
  sharingType: string
}
export interface MicrosoftGraphUsageDetails{
  lastAccessedDateTime: string
  lastModifiedDateTime: string
}
export interface MicrosoftGraphCopyNotebookModel{
  createdBy: string
  createdByIdentity: MicrosoftGraphIdentitySet
  createdTime: string
  id: string
  isDefault: boolean
  isShared: boolean
  lastModifiedBy: string
  lastModifiedByIdentity: MicrosoftGraphIdentitySet
  lastModifiedTime: string
  links: MicrosoftGraphNotebookLinks
  name: string
  sectionGroupsUrl: string
  sectionsUrl: string
  self: string
  userRole: MicrosoftGraphOnenoteUserRole
}
export interface MicrosoftGraphNotebookLinks{
  oneNoteClientUrl: MicrosoftGraphExternalLink
  oneNoteWebUrl: MicrosoftGraphExternalLink
}
export interface MicrosoftGraphDiagnostic{
  message: string
  url: string
}
export interface MicrosoftGraphExternalLink{
  href: string
}
export interface MicrosoftGraphOnenoteOperationError{
  code: string
  message: string
}
export interface MicrosoftGraphOnenotePagePreview{
  links: MicrosoftGraphOnenotePagePreviewLinks
  previewText: string
}
export interface MicrosoftGraphOnenotePagePreviewLinks{
  previewImageUrl: MicrosoftGraphExternalLink
}
export interface MicrosoftGraphOnenotePatchContentCommand{
  action: MicrosoftGraphOnenotePatchActionType
  content: string
  position: MicrosoftGraphOnenotePatchInsertPosition
  target: string
}
export interface MicrosoftGraphPageLinks{
  oneNoteClientUrl: MicrosoftGraphExternalLink
  oneNoteWebUrl: MicrosoftGraphExternalLink
}
export interface MicrosoftGraphRecentNotebook{
  displayName: string
  lastAccessedTime: string
  links: MicrosoftGraphRecentNotebookLinks
  sourceService: MicrosoftGraphOnenoteSourceService
}
export interface MicrosoftGraphRecentNotebookLinks{
  oneNoteClientUrl: MicrosoftGraphExternalLink
  oneNoteWebUrl: MicrosoftGraphExternalLink
}
export interface MicrosoftGraphSectionLinks{
  oneNoteClientUrl: MicrosoftGraphExternalLink
  oneNoteWebUrl: MicrosoftGraphExternalLink
}
export interface MicrosoftGraphApprovalSettings{
  approvalMode: string
  approvalStages: MicrosoftGraphUnifiedApprovalStage[]
  isApprovalRequired: boolean
  isApprovalRequiredForExtension: boolean
  isRequestorJustificationRequired: boolean
}
export interface MicrosoftGraphUnifiedApprovalStage{
  approvalStageTimeOutInDays: number
  escalationApprovers: MicrosoftGraphSubjectSet[]
  escalationTimeInMinutes: number
  isApproverJustificationRequired: boolean
  isEscalationEnabled: boolean
  primaryApprovers: MicrosoftGraphSubjectSet[]
}
export interface MicrosoftGraphRequestSchedule{
  expiration: MicrosoftGraphExpirationPattern
  recurrence: MicrosoftGraphPatternedRecurrence
  startDateTime: string
}
export interface MicrosoftGraphTicketInfo{
  ticketNumber: string
  ticketSystem: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyRuleTarget{
  caller: string
  enforcedSettings: string[]
  inheritableSettings: string[]
  level: string
  operations: MicrosoftGraphUnifiedRoleManagementPolicyRuleTargetOperations[]
  targetObjects: MicrosoftGraphDirectoryObject[]
}
export interface MicrosoftGraphArchivedPrintJob{
  acquiredByPrinter: boolean
  acquiredDateTime: string
  completionDateTime: string
  copiesPrinted: number
  createdBy: MicrosoftGraphUserIdentity
  createdDateTime: string
  id: string
  printerId: string
  processingState: MicrosoftGraphPrintJobProcessingState
}
export interface MicrosoftGraphIntegerRange{
  end: number
  start: number
}
export interface MicrosoftGraphPrintCertificateSigningRequest{
  content: string
  transportKey: string
}
export interface MicrosoftGraphPrintDocumentUploadProperties{
  contentType: string
  documentName: string
  size: number
}
export interface MicrosoftGraphPrinterCapabilities{
  bottomMargins: number[]
  collation: boolean
  colorModes: MicrosoftGraphPrintColorMode[]
  contentTypes: string[]
  copiesPerJob: MicrosoftGraphIntegerRange
  dpis: number[]
  duplexModes: MicrosoftGraphPrintDuplexMode[]
  feedOrientations: MicrosoftGraphPrinterFeedOrientation[]
  finishings: MicrosoftGraphPrintFinishing[]
  inputBins: string[]
  isColorPrintingSupported: boolean
  isPageRangeSupported: boolean
  leftMargins: number[]
  mediaColors: string[]
  mediaSizes: string[]
  mediaTypes: string[]
  multipageLayouts: MicrosoftGraphPrintMultipageLayout[]
  orientations: MicrosoftGraphPrintOrientation[]
  outputBins: string[]
  pagesPerSheet: number[]
  qualities: MicrosoftGraphPrintQuality[]
  rightMargins: number[]
  scalings: MicrosoftGraphPrintScaling[]
  supportsFitPdfToPage: boolean
  topMargins: number[]
}
export interface MicrosoftGraphPrinterDefaults{
  colorMode: MicrosoftGraphPrintColorMode
  contentType: string
  copiesPerJob: number
  dpi: number
  duplexMode: MicrosoftGraphPrintDuplexMode
  finishings: MicrosoftGraphPrintFinishing[]
  fitPdfToPage: boolean
  inputBin: string
  mediaColor: string
  mediaSize: string
  mediaType: string
  multipageLayout: MicrosoftGraphPrintMultipageLayout
  orientation: MicrosoftGraphPrintOrientation
  outputBin: string
  pagesPerSheet: number
  quality: MicrosoftGraphPrintQuality
  scaling: MicrosoftGraphPrintScaling
}
export interface MicrosoftGraphPrinterLocation{
  altitudeInMeters: number
  building: string
  city: string
  countryOrRegion: string
  floor: string
  floorDescription: string
  latitude:  | string
  longitude:  | string
  organization: string[]
  postalCode: string
  roomDescription: string
  roomName: string
  site: string
  stateOrProvince: string
  streetAddress: string
  subdivision: string[]
  subunit: string[]
}
export interface MicrosoftGraphPrinterStatus{
  description: string
  details: MicrosoftGraphPrinterProcessingStateDetail[]
  state: MicrosoftGraphPrinterProcessingState
}
export interface MicrosoftGraphPrintJobConfiguration{
  collate: boolean
  colorMode: MicrosoftGraphPrintColorMode
  copies: number
  dpi: number
  duplexMode: MicrosoftGraphPrintDuplexMode
  feedOrientation: MicrosoftGraphPrinterFeedOrientation
  finishings: MicrosoftGraphPrintFinishing[]
  fitPdfToPage: boolean
  inputBin: string
  margin: MicrosoftGraphPrintMargin
  mediaSize: string
  mediaType: string
  multipageLayout: MicrosoftGraphPrintMultipageLayout
  orientation: MicrosoftGraphPrintOrientation
  outputBin: string
  pageRanges: MicrosoftGraphIntegerRange[]
  pagesPerSheet: number
  quality: MicrosoftGraphPrintQuality
  scaling: MicrosoftGraphPrintScaling
}
export interface MicrosoftGraphPrintMargin{
  bottom: number
  left: number
  right: number
  top: number
}
export interface MicrosoftGraphPrintJobStatus{
  description: string
  details: MicrosoftGraphPrintJobStateDetail[]
  isAcquiredByPrinter: boolean
  state: MicrosoftGraphPrintJobProcessingState
}
export interface MicrosoftGraphPrintOperationStatus{
  description: string
  state: MicrosoftGraphPrintOperationProcessingState
}
export interface MicrosoftGraphPrintSettings{
  documentConversionEnabled: boolean
}
export interface MicrosoftGraphPrintTaskStatus{
  description: string
  state: MicrosoftGraphPrintTaskProcessingState
}
export interface MicrosoftGraphImageInfo{
  addImageQuery: boolean
  alternateText: string
  alternativeText: string
  iconUrl: string
}
export interface MicrosoftGraphVisualInfo{
  attribution: MicrosoftGraphImageInfo
  backgroundColor: string
  content: MicrosoftGraphJson
  description: string
  displayText: string
}
export interface MicrosoftGraphAlertDetection{
  detectionType: string
  method: string
  name: string
}
export interface MicrosoftGraphAlertHistoryState{
  appId: string
  assignedTo: string
  comments: string[]
  feedback: MicrosoftGraphAlertFeedback
  status: MicrosoftGraphAlertStatus
  updatedDateTime: string
  user: string
}
export interface MicrosoftGraphAlertTrigger{
  name: string
  type: string
  value: string
}
export interface MicrosoftGraphAverageComparativeScore{
  averageScore:  | string
  basis: string
}
export interface MicrosoftGraphCertificationControl{
  name: string
  url: string
}
export interface MicrosoftGraphCloudAppSecurityState{
  destinationServiceIp: string
  destinationServiceName: string
  riskScore: string
}
export interface MicrosoftGraphComplianceInformation{
  certificationControls: MicrosoftGraphCertificationControl[]
  certificationName: string
}
export interface MicrosoftGraphControlScore{
  controlCategory: string
  controlName: string
  description: string
  score:  | string
}
export interface MicrosoftGraphFileHash{
  hashType: MicrosoftGraphFileHashType
  hashValue: string
}
export interface MicrosoftGraphFileSecurityState{
  fileHash: MicrosoftGraphFileHash
  name: string
  path: string
  riskScore: string
}
export interface MicrosoftGraphHostSecurityState{
  fqdn: string
  isAzureAdJoined: boolean
  isAzureAdRegistered: boolean
  isHybridAzureDomainJoined: boolean
  netBiosName: string
  os: string
  privateIpAddress: string
  publicIpAddress: string
  riskScore: string
}
export interface MicrosoftGraphInvestigationSecurityState{
  name: string
  status: string
}
export interface MicrosoftGraphMalwareState{
  category: string
  family: string
  name: string
  severity: string
  wasRunning: boolean
}
export interface MicrosoftGraphMessageSecurityState{
  connectingIP: string
  deliveryAction: string
  deliveryLocation: string
  directionality: string
  internetMessageId: string
  messageFingerprint: string
  messageReceivedDateTime: string
  messageSubject: string
  networkMessageId: string
}
export interface MicrosoftGraphNetworkConnection{
  applicationName: string
  destinationAddress: string
  destinationDomain: string
  destinationLocation: string
  destinationPort: string
  destinationUrl: string
  direction: MicrosoftGraphConnectionDirection
  domainRegisteredDateTime: string
  localDnsName: string
  natDestinationAddress: string
  natDestinationPort: string
  natSourceAddress: string
  natSourcePort: string
  protocol: MicrosoftGraphSecurityNetworkProtocol
  riskScore: string
  sourceAddress: string
  sourceLocation: string
  sourcePort: string
  status: MicrosoftGraphConnectionStatus
  urlParameters: string
}
export interface MicrosoftGraphProcess{
  accountName: string
  commandLine: string
  createdDateTime: string
  fileHash: MicrosoftGraphFileHash
  integrityLevel: MicrosoftGraphProcessIntegrityLevel
  isElevated: boolean
  name: string
  parentProcessCreatedDateTime: string
  parentProcessId: number
  parentProcessName: string
  path: string
  processId: number
}
export interface MicrosoftGraphRegistryKeyState{
  hive: MicrosoftGraphRegistryHive
  key: string
  oldKey: string
  oldValueData: string
  oldValueName: string
  operation: MicrosoftGraphRegistryOperation
  processId: number
  valueData: string
  valueName: string
  valueType: MicrosoftGraphRegistryValueType
}
export interface MicrosoftGraphSecureScoreControlStateUpdate{
  assignedTo: string
  comment: string
  state: string
  updatedBy: string
  updatedDateTime: string
}
export interface MicrosoftGraphSecurityResource{
  resource: string
  resourceType: MicrosoftGraphSecurityResourceType
}
export interface MicrosoftGraphSecurityVendorInformation{
  provider: string
  providerVersion: string
  subProvider: string
  vendor: string
}
export interface MicrosoftGraphUriClickSecurityState{
  clickAction: string
  clickDateTime: string
  id: string
  sourceId: string
  uriDomain: string
  verdict: string
}
export interface MicrosoftGraphUserSecurityState{
  aadUserId: string
  accountName: string
  domainName: string
  emailRole: MicrosoftGraphEmailRole
  isVpn: boolean
  logonDateTime: string
  logonId: string
  logonIp: string
  logonLocation: string
  logonType: MicrosoftGraphLogonType
  onPremisesSecurityIdentifier: string
  riskScore: string
  userAccountType: MicrosoftGraphUserAccountSecurityType
  userPrincipalName: string
}
export interface MicrosoftGraphVulnerabilityState{
  cve: string
  severity: string
  wasRunning: boolean
}
export interface MicrosoftGraphParticipantJoiningResponse{
}
export interface MicrosoftGraphAcceptJoinResponse extends MicrosoftGraphParticipantJoiningResponse{
}
export interface MicrosoftGraphMediaConfig{
}
export interface MicrosoftGraphAppHostedMediaConfig extends MicrosoftGraphMediaConfig{
  blob: string
}
export interface MicrosoftGraphAttendanceInterval{
  durationInSeconds: number
  joinDateTime: string
  leaveDateTime: string
}
export interface MicrosoftGraphAudioConferencing{
  conferenceId: string
  dialinUrl: string
  tollFreeNumber: string
  tollFreeNumbers: string[]
  tollNumber: string
  tollNumbers: string[]
}
export interface MicrosoftGraphBroadcastMeetingSettings{
  allowedAudience: MicrosoftGraphBroadcastMeetingAudience
  isAttendeeReportEnabled: boolean
  isQuestionAndAnswerEnabled: boolean
  isRecordingEnabled: boolean
  isVideoOnDemandEnabled: boolean
}
export interface MicrosoftGraphCallMediaState{
  audio: MicrosoftGraphMediaState
}
export interface MicrosoftGraphCallOptions{
  hideBotAfterEscalation: boolean
}
export interface MicrosoftGraphCallRoute{
  final: MicrosoftGraphIdentitySet
  original: MicrosoftGraphIdentitySet
  routingType: MicrosoftGraphRoutingType
}
export interface MicrosoftGraphCallTranscriptionInfo{
  lastModifiedDateTime: string
  state: MicrosoftGraphCallTranscriptionState
}
export interface MicrosoftGraphChatInfo{
  messageId: string
  replyChainMessageId: string
  threadId: string
}
export interface MicrosoftGraphCommsNotification{
  changeType: MicrosoftGraphChangeType
  resourceUrl: string
}
export interface MicrosoftGraphCommsNotifications{
  value: MicrosoftGraphCommsNotification[]
}
export interface MicrosoftGraphIncomingCallOptions extends MicrosoftGraphCallOptions{
}
export interface MicrosoftGraphIncomingContext{
  observedParticipantId: string
  onBehalfOf: MicrosoftGraphIdentitySet
  sourceParticipantId: string
  transferor: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphInvitationParticipantInfo{
  hidden: boolean
  identity: MicrosoftGraphIdentitySet
  participantId: string
  removeFromDefaultAudioRoutingGroup: boolean
  replacesCallId: string
}
export interface MicrosoftGraphInviteNewBotResponse extends MicrosoftGraphParticipantJoiningResponse{
  inviteUri: string
}
export interface MicrosoftGraphLobbyBypassSettings{
  isDialInBypassEnabled: boolean
  scope: MicrosoftGraphLobbyBypassScope
}
export interface MicrosoftGraphMediaInfo{
  resourceId: string
  uri: string
}
export interface MicrosoftGraphPrompt{
}
export interface MicrosoftGraphMediaPrompt extends MicrosoftGraphPrompt{
  mediaInfo: MicrosoftGraphMediaInfo
}
export interface MicrosoftGraphMediaStream{
  direction: MicrosoftGraphMediaDirection
  label: string
  mediaType: MicrosoftGraphModality
  serverMuted: boolean
  sourceId: string
}
export interface MicrosoftGraphMeetingInfo{
}
export interface MicrosoftGraphMeetingParticipantInfo{
  identity: MicrosoftGraphIdentitySet
  role: MicrosoftGraphOnlineMeetingRole
  upn: string
}
export interface MicrosoftGraphMeetingParticipants{
  attendees: MicrosoftGraphMeetingParticipantInfo[]
  organizer: MicrosoftGraphMeetingParticipantInfo
}
export interface MicrosoftGraphOrganizerMeetingInfo extends MicrosoftGraphMeetingInfo{
  organizer: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphOutgoingCallOptions extends MicrosoftGraphCallOptions{
}
export interface MicrosoftGraphParticipantInfo{
  countryCode: string
  endpointType: MicrosoftGraphEndpointType
  identity: MicrosoftGraphIdentitySet
  languageId: string
  participantId: string
  region: string
}
export interface MicrosoftGraphRecordingInfo{
  initiator: MicrosoftGraphIdentitySet
  recordingStatus: MicrosoftGraphRecordingStatus
}
export interface MicrosoftGraphRejectJoinResponse extends MicrosoftGraphParticipantJoiningResponse{
  reason: MicrosoftGraphRejectReason
}
export interface MicrosoftGraphServiceHostedMediaConfig extends MicrosoftGraphMediaConfig{
  preFetchMedia: MicrosoftGraphMediaInfo[]
}
export interface MicrosoftGraphTeleconferenceDeviceMediaQuality{
  averageInboundJitter: string
  averageInboundPacketLossRateInPercentage:  | string
  averageInboundRoundTripDelay: string
  averageOutboundJitter: string
  averageOutboundPacketLossRateInPercentage:  | string
  averageOutboundRoundTripDelay: string
  channelIndex: number
  inboundPackets: number
  localIPAddress: string
  localPort: number
  maximumInboundJitter: string
  maximumInboundPacketLossRateInPercentage:  | string
  maximumInboundRoundTripDelay: string
  maximumOutboundJitter: string
  maximumOutboundPacketLossRateInPercentage:  | string
  maximumOutboundRoundTripDelay: string
  mediaDuration: string
  networkLinkSpeedInBytes: number
  outboundPackets: number
  remoteIPAddress: string
  remotePort: number
}
export interface MicrosoftGraphTeleconferenceDeviceAudioQuality extends MicrosoftGraphTeleconferenceDeviceMediaQuality{
}
export interface MicrosoftGraphTeleconferenceDeviceQuality{
  callChainId: string
  cloudServiceDeploymentEnvironment: string
  cloudServiceDeploymentId: string
  cloudServiceInstanceName: string
  cloudServiceName: string
  deviceDescription: string
  deviceName: string
  mediaLegId: string
  mediaQualityList: MicrosoftGraphTeleconferenceDeviceMediaQuality[]
  participantId: string
}
export interface MicrosoftGraphTeleconferenceDeviceVideoQuality extends MicrosoftGraphTeleconferenceDeviceMediaQuality{
  averageInboundBitRate:  | string
  averageInboundFrameRate:  | string
  averageOutboundBitRate:  | string
  averageOutboundFrameRate:  | string
}
export interface MicrosoftGraphTeleconferenceDeviceScreenSharingQuality extends MicrosoftGraphTeleconferenceDeviceVideoQuality{
}
export interface MicrosoftGraphTokenMeetingInfo extends MicrosoftGraphMeetingInfo{
  token: string
}
export interface MicrosoftGraphToneInfo{
  sequenceId: number
  tone: MicrosoftGraphTone
}
export interface MicrosoftGraphChangeNotification{
  changeType: MicrosoftGraphChangeType
  clientState: string
  encryptedContent: MicrosoftGraphChangeNotificationEncryptedContent
  id: string
  lifecycleEvent: MicrosoftGraphLifecycleEventType
  resource: string
  resourceData: MicrosoftGraphResourceData
  subscriptionExpirationDateTime: string
  subscriptionId: string
  tenantId: string
}
export interface MicrosoftGraphChangeNotificationEncryptedContent{
  data: string
  dataKey: string
  dataSignature: string
  encryptionCertificateId: string
  encryptionCertificateThumbprint: string
}
export interface MicrosoftGraphResourceData{
}
export interface MicrosoftGraphChangeNotificationCollection{
  validationTokens: string[]
  value: MicrosoftGraphChangeNotification[]
}
export interface MicrosoftGraphActionResultPart{
  error: MicrosoftGraphPublicError
}
export interface MicrosoftGraphAadUserConversationMemberResult extends MicrosoftGraphActionResultPart{
  userId: string
}
export interface MicrosoftGraphTeamworkNotificationRecipient{
}
export interface MicrosoftGraphAadUserNotificationRecipient extends MicrosoftGraphTeamworkNotificationRecipient{
  userId: string
}
export interface MicrosoftGraphEventMessageDetail{
}
export interface MicrosoftGraphCallEndedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  callDuration: string
  callEventType: MicrosoftGraphTeamworkCallEventType
  callId: string
  callParticipants: MicrosoftGraphCallParticipantInfo[]
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphCallParticipantInfo{
  participant: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphCallRecordingEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  callId: string
  callRecordingDisplayName: string
  callRecordingDuration: string
  callRecordingStatus: MicrosoftGraphCallRecordingStatus
  callRecordingUrl: string
  initiator: MicrosoftGraphIdentitySet
  meetingOrganizer: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphCallStartedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  callEventType: MicrosoftGraphTeamworkCallEventType
  callId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphCallTranscriptEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  callId: string
  callTranscriptICalUid: string
  meetingOrganizer: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphChannelAddedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  channelDisplayName: string
  channelId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphChannelDeletedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  channelDisplayName: string
  channelId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphChannelDescriptionUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  channelDescription: string
  channelId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphChannelIdentity{
  channelId: string
  teamId: string
}
export interface MicrosoftGraphChannelRenamedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  channelDisplayName: string
  channelId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphChannelSetAsFavoriteByDefaultEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  channelId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphChannelUnsetAsFavoriteByDefaultEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  channelId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphChatMessageAttachment{
  content: string
  contentType: string
  contentUrl: string
  id: string
  name: string
  thumbnailUrl: string
}
export interface MicrosoftGraphChatMessageFromIdentitySet extends MicrosoftGraphIdentitySet{
}
export interface MicrosoftGraphChatMessageMention{
  id: number
  mentioned: MicrosoftGraphChatMessageMentionedIdentitySet
  mentionText: string
}
export interface MicrosoftGraphChatMessageMentionedIdentitySet extends MicrosoftGraphIdentitySet{
  conversation: MicrosoftGraphTeamworkConversationIdentity
}
export interface MicrosoftGraphTeamworkConversationIdentity extends MicrosoftGraphIdentity{
  conversationIdentityType: MicrosoftGraphTeamworkConversationIdentityType
}
export interface MicrosoftGraphChatMessagePolicyViolation{
  dlpAction: MicrosoftGraphChatMessagePolicyViolationDlpActionTypes
  justificationText: string
  policyTip: MicrosoftGraphChatMessagePolicyViolationPolicyTip
  userAction: MicrosoftGraphChatMessagePolicyViolationUserActionTypes
  verdictDetails: MicrosoftGraphChatMessagePolicyViolationVerdictDetailsTypes
}
export interface MicrosoftGraphChatMessagePolicyViolationPolicyTip{
  complianceUrl: string
  generalText: string
  matchedConditionDescriptions: string[]
}
export interface MicrosoftGraphChatMessageReaction{
  createdDateTime: string
  reactionType: string
  user: MicrosoftGraphChatMessageReactionIdentitySet
}
export interface MicrosoftGraphChatMessageReactionIdentitySet extends MicrosoftGraphIdentitySet{
}
export interface MicrosoftGraphChatRenamedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  chatDisplayName: string
  chatId: string
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphConversationMemberRoleUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  conversationMemberRoles: string[]
  conversationMemberUser: MicrosoftGraphTeamworkUserIdentity
  initiator: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphTeamworkUserIdentity extends MicrosoftGraphIdentity{
  userIdentityType: MicrosoftGraphTeamworkUserIdentityType
}
export interface MicrosoftGraphMeetingPolicyUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  meetingChatEnabled: boolean
  meetingChatId: string
}
export interface MicrosoftGraphMembersAddedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  members: MicrosoftGraphTeamworkUserIdentity[]
  visibleHistoryStartDateTime: string
}
export interface MicrosoftGraphMembersDeletedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  members: MicrosoftGraphTeamworkUserIdentity[]
}
export interface MicrosoftGraphMembersJoinedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  members: MicrosoftGraphTeamworkUserIdentity[]
}
export interface MicrosoftGraphMembersLeftEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  members: MicrosoftGraphTeamworkUserIdentity[]
}
export interface MicrosoftGraphOperationError{
  code: string
  message: string
}
export interface MicrosoftGraphProvisionChannelEmailResult{
  email: string
}
export interface MicrosoftGraphTabUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  tabId: string
}
export interface MicrosoftGraphTeamArchivedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamId: string
}
export interface MicrosoftGraphTeamClassSettings{
  notifyGuardiansAboutAssignments: boolean
}
export interface MicrosoftGraphTeamCreatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamDescription: string
  teamDisplayName: string
  teamId: string
}
export interface MicrosoftGraphTeamDescriptionUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamDescription: string
  teamId: string
}
export interface MicrosoftGraphTeamJoiningDisabledEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamId: string
}
export interface MicrosoftGraphTeamJoiningEnabledEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamId: string
}
export interface MicrosoftGraphTeamRenamedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamDisplayName: string
  teamId: string
}
export interface MicrosoftGraphTeamsAppInstalledEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamsAppDisplayName: string
  teamsAppId: string
}
export interface MicrosoftGraphTeamsAppRemovedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamsAppDisplayName: string
  teamsAppId: string
}
export interface MicrosoftGraphTeamsAppUpgradedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamsAppDisplayName: string
  teamsAppId: string
}
export interface MicrosoftGraphTeamsTabConfiguration{
  contentUrl: string
  entityId: string
  removeUrl: string
  websiteUrl: string
}
export interface MicrosoftGraphTeamUnarchivedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
  initiator: MicrosoftGraphIdentitySet
  teamId: string
}
export interface MicrosoftGraphTeamworkActivityTopic{
  source: MicrosoftGraphTeamworkActivityTopicSource
  value: string
  webUrl: string
}
export interface MicrosoftGraphTeamworkApplicationIdentity extends MicrosoftGraphIdentity{
  applicationIdentityType: MicrosoftGraphTeamworkApplicationIdentityType
}
export interface MicrosoftGraphTeamworkOnlineMeetingInfo{
  calendarEventId: string
  joinWebUrl: string
  organizer: MicrosoftGraphTeamworkUserIdentity
}
export interface MicrosoftGraphTeamworkTagIdentity extends MicrosoftGraphIdentity{
}
export interface MicrosoftGraphScheduleEntity{
  endDateTime: string
  startDateTime: string
  theme: MicrosoftGraphScheduleEntityTheme
}
export interface MicrosoftGraphShiftItem extends MicrosoftGraphScheduleEntity{
  activities: MicrosoftGraphShiftActivity[]
  displayName: string
  notes: string
}
export interface MicrosoftGraphOpenShiftItem extends MicrosoftGraphShiftItem{
  openSlotCount: number
}
export interface MicrosoftGraphShiftActivity{
  code: string
  displayName: string
  endDateTime: string
  isPaid: boolean
  startDateTime: string
  theme: MicrosoftGraphScheduleEntityTheme
}
export interface MicrosoftGraphShiftAvailability{
  recurrence: MicrosoftGraphPatternedRecurrence
  timeSlots: MicrosoftGraphTimeRange[]
  timeZone: string
}
export interface MicrosoftGraphTimeRange{
  endTime: string
  startTime: string
}
export interface MicrosoftGraphTimeOffItem extends MicrosoftGraphScheduleEntity{
  timeOffReasonId: string
}
export interface MicrosoftGraphWorkforceIntegrationEncryption{
  protocol: MicrosoftGraphWorkforceIntegrationEncryptionProtocol
  secret: string
}
export enum MicrosoftGraphAppliedConditionalAccessPolicyResult{
   success,
   failure,
   notApplied,
   notEnabled,
   unknown,
   unknownFutureValue,
}
export enum MicrosoftGraphConditionalAccessStatus{
   success,
   failure,
   notApplied,
   unknownFutureValue,
}
export enum MicrosoftGraphGroupType{
   unifiedGroups,
   azureAD,
   unknownFutureValue,
}
export enum MicrosoftGraphInitiatorType{
   user,
   application,
   system,
   unknownFutureValue,
}
export enum MicrosoftGraphOperationResult{
   success,
   failure,
   timeout,
   unknownFutureValue,
}
export enum MicrosoftGraphProvisioningAction{
   other,
   create,
   delete,
   disable,
   update,
   stagedDelete,
   unknownFutureValue,
}
export enum MicrosoftGraphProvisioningResult{
   success,
   failure,
   skipped,
   warning,
   unknownFutureValue,
}
export enum MicrosoftGraphProvisioningStatusErrorCategory{
   failure,
   nonServiceFailure,
   success,
   unknownFutureValue,
}
export enum MicrosoftGraphProvisioningStepType{
   import,
   scoping,
   matching,
   processing,
   referenceResolution,
   export,
   unknownFutureValue,
}
export enum MicrosoftGraphRiskDetail{
   none,
   adminGeneratedTemporaryPassword,
   userPerformedSecuredPasswordChange,
   userPerformedSecuredPasswordReset,
   adminConfirmedSigninSafe,
   aiConfirmedSigninSafe,
   userPassedMFADrivenByRiskBasedPolicy,
   adminDismissedAllRiskForUser,
   adminConfirmedSigninCompromised,
   hidden,
   adminConfirmedUserCompromised,
   unknownFutureValue,
}
export enum MicrosoftGraphRiskEventType{
   unlikelyTravel,
   anonymizedIPAddress,
   maliciousIPAddress,
   unfamiliarFeatures,
   malwareInfectedIPAddress,
   suspiciousIPAddress,
   leakedCredentials,
   investigationsThreatIntelligence,
   generic,
   adminConfirmedUserCompromised,
   mcasImpossibleTravel,
   mcasSuspiciousInboxManipulationRules,
   investigationsThreatIntelligenceSigninLinked,
   maliciousIPAddressValidCredentialsBlockedIP,
   unknownFutureValue,
}
export enum MicrosoftGraphRiskLevel{
   low,
   medium,
   high,
   hidden,
   none,
   unknownFutureValue,
}
export enum MicrosoftGraphRiskState{
   none,
   confirmedSafe,
   remediated,
   dismissed,
   atRisk,
   confirmedCompromised,
   unknownFutureValue,
}
export enum MicrosoftGraphAdvancedConfigState{
   default,
   enabled,
   disabled,
   unknownFutureValue,
}
export enum MicrosoftGraphAuthenticationMethodState{
   enabled,
   disabled,
}
export enum MicrosoftGraphAuthenticationMethodTargetType{
   user,
   group,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalEmailOtpState{
   default,
   enabled,
   disabled,
   unknownFutureValue,
}
export enum MicrosoftGraphFido2RestrictionEnforcementType{
   allow,
   block,
   unknownFutureValue,
}
export enum MicrosoftGraphMicrosoftAuthenticatorAuthenticationMode{
   deviceBasedPush,
   push,
   any,
}
export enum MicrosoftGraphVolumeType{
   operatingSystemVolume,
   fixedDataVolume,
   removableDataVolume,
   unknownFutureValue,
}
export enum MicrosoftGraphAnswerInputType{
   text,
   radioButton,
   unknownFutureValue,
}
export enum MicrosoftGraphBookingPriceType{
   undefined,
   fixedPrice,
   startingAt,
   hourly,
   free,
   priceVaries,
   callUs,
   notSet,
   unknownFutureValue,
}
export enum MicrosoftGraphBookingReminderRecipients{
   allAttendees,
   staff,
   customer,
   unknownFutureValue,
}
export enum MicrosoftGraphBookingStaffRole{
   guest,
   administrator,
   viewer,
   externalGuest,
   unknownFutureValue,
}
export enum MicrosoftGraphDayOfWeek{
   sunday,
   monday,
   tuesday,
   wednesday,
   thursday,
   friday,
   saturday,
}
export enum MicrosoftGraphLocationType{
   default,
   conferenceRoom,
   homeAddress,
   businessAddress,
   geoCoordinates,
   streetAddress,
   hotel,
   restaurant,
   localBusiness,
   postalAddress,
}
export enum MicrosoftGraphLocationUniqueIdType{
   unknown,
   locationStore,
   directory,
   private,
   bing,
}
export enum MicrosoftGraphPhoneType{
   home,
   business,
   mobile,
   other,
   assistant,
   homeFax,
   businessFax,
   otherFax,
   pager,
   radio,
}
export enum MicrosoftGraphPhysicalAddressType{
   unknown,
   home,
   business,
   other,
}
export enum MicrosoftGraphBodyType{
   text,
   html,
}
export enum MicrosoftGraphDataSubjectType{
   customer,
   currentEmployee,
   formerEmployee,
   prospectiveEmployee,
   student,
   teacher,
   faculty,
   other,
   unknownFutureValue,
}
export enum MicrosoftGraphSubjectRightsRequestStage{
   contentRetrieval,
   contentReview,
   generateReport,
   contentDeletion,
   caseResolved,
   contentEstimate,
   unknownFutureValue,
}
export enum MicrosoftGraphSubjectRightsRequestStageStatus{
   notStarted,
   current,
   completed,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphSubjectRightsRequestStatus{
   active,
   closed,
   unknownFutureValue,
}
export enum MicrosoftGraphSubjectRightsRequestType{
   export,
   delete,
   access,
   tagForAction,
   unknownFutureValue,
}
export enum MicrosoftGraphIdentityUserFlowAttributeDataType{
   string,
   boolean,
   int64,
   stringCollection,
   dateTime,
   unknownFutureValue,
}
export enum MicrosoftGraphIdentityUserFlowAttributeInputType{
   textBox,
   dateTimeDropdown,
   radioSingleSelect,
   dropdownSingleSelect,
   emailBox,
   checkboxMultiSelect,
}
export enum MicrosoftGraphIdentityUserFlowAttributeType{
   builtIn,
   custom,
   required,
   unknownFutureValue,
}
export enum MicrosoftGraphUserFlowType{
   signUp,
   signIn,
   signUpOrSignIn,
   passwordReset,
   profileUpdate,
   resourceOwner,
   unknownFutureValue,
}
export enum MicrosoftGraphAllowInvitesFrom{
   none,
   adminsAndGuestInviters,
   adminsGuestInvitersAndAllMembers,
   everyone,
   unknownFutureValue,
}
export enum MicrosoftGraphAuthenticationProtocol{
   wsFed,
   saml,
   unknownFutureValue,
}
export enum MicrosoftGraphFederatedIdpMfaBehavior{
   acceptIfMfaDoneByFederatedIdp,
   enforceMfaByFederatedIdp,
   rejectMfaByFederatedIdp,
   unknownFutureValue,
}
export enum MicrosoftGraphPermissionClassificationType{
   low,
   medium,
   high,
   unknownFutureValue,
}
export enum MicrosoftGraphPermissionType{
   application,
   delegated,
   delegatedUserConsentable,
}
export enum MicrosoftGraphPromptLoginBehavior{
   translateToFreshPasswordAuthentication,
   nativeSupport,
   disabled,
   unknownFutureValue,
}
export enum MicrosoftGraphEducationAddedStudentAction{
   none,
   assignIfOpen,
   unknownFutureValue,
}
export enum MicrosoftGraphEducationAddToCalendarOptions{
   none,
   studentsAndPublisher,
   studentsAndTeamOwners,
   unknownFutureValue,
   studentsOnly,
}
export enum MicrosoftGraphEducationAssignmentStatus{
   draft,
   published,
   assigned,
   unknownFutureValue,
}
export enum MicrosoftGraphEducationSubmissionStatus{
   working,
   submitted,
   released,
   returned,
   unknownFutureValue,
   reassigned,
}
export enum MicrosoftGraphContactRelationship{
   parent,
   relative,
   aide,
   doctor,
   guardian,
   child,
   other,
   unknownFutureValue,
}
export enum MicrosoftGraphEducationExternalSource{
   sis,
   manual,
   unknownFutureValue,
}
export enum MicrosoftGraphEducationGender{
   female,
   male,
   other,
   unknownFutureValue,
}
export enum MicrosoftGraphEducationUserRole{
   student,
   teacher,
   none,
   unknownFutureValue,
}
export enum MicrosoftGraphWorkbookOperationStatus{
   notStarted,
   running,
   succeeded,
   failed,
}
export enum MicrosoftGraphActivityDomain{
   unknown,
   work,
   personal,
   unrestricted,
}
export enum MicrosoftGraphAttendeeType{
   required,
   optional,
   resource,
}
export enum MicrosoftGraphFreeBusyStatus{
   unknown,
   free,
   tentative,
   busy,
   oof,
   workingElsewhere,
}
export enum MicrosoftGraphBookingType{
   unknown,
   standard,
   reserved,
}
export enum MicrosoftGraphAttachmentType{
   file,
   item,
   reference,
}
export enum MicrosoftGraphAutomaticRepliesStatus{
   disabled,
   alwaysEnabled,
   scheduled,
}
export enum MicrosoftGraphCalendarColor{
   auto,
   lightBlue,
   lightGreen,
   lightOrange,
   lightGray,
   lightYellow,
   lightTeal,
   lightPink,
   lightBrown,
   lightRed,
   maxColor,
}
export enum MicrosoftGraphCalendarRoleType{
   none,
   freeBusyRead,
   limitedRead,
   read,
   write,
   delegateWithoutPrivateEventAccess,
   delegateWithPrivateEventAccess,
   custom,
}
export enum MicrosoftGraphCalendarSharingAction{
   accept,
   acceptAndViewCalendar,
   viewCalendar,
   addThisCalendar,
}
export enum MicrosoftGraphCalendarSharingActionImportance{
   primary,
   secondary,
}
export enum MicrosoftGraphCalendarSharingActionType{
   accept,
}
export enum MicrosoftGraphCategoryColor{
   none,
   preset0,
   preset1,
   preset2,
   preset3,
   preset4,
   preset5,
   preset6,
   preset7,
   preset8,
   preset9,
   preset10,
   preset11,
   preset12,
   preset13,
   preset14,
   preset15,
   preset16,
   preset17,
   preset18,
   preset19,
   preset20,
   preset21,
   preset22,
   preset23,
   preset24,
}
export enum MicrosoftGraphDelegateMeetingMessageDeliveryOptions{
   sendToDelegateAndInformationToPrincipal,
   sendToDelegateAndPrincipal,
   sendToDelegateOnly,
}
export enum MicrosoftGraphEventType{
   singleInstance,
   occurrence,
   exception,
   seriesMaster,
}
export enum MicrosoftGraphExchangeIdFormat{
   entryId,
   ewsId,
   immutableEntryId,
   restId,
   restImmutableEntryId,
}
export enum MicrosoftGraphExternalAudienceScope{
   none,
   contactsOnly,
   all,
}
export enum MicrosoftGraphFollowupFlagStatus{
   notFlagged,
   complete,
   flagged,
}
export enum MicrosoftGraphImportance{
   low,
   normal,
   high,
}
export enum MicrosoftGraphInferenceClassificationType{
   focused,
   other,
}
export enum MicrosoftGraphMailTipsType{
   automaticReplies,
   mailboxFullStatus,
   customMailTip,
   externalMemberCount,
   totalMemberCount,
   maxMessageSize,
   deliveryRestriction,
   moderationStatus,
   recipientScope,
   recipientSuggestions,
}
export enum MicrosoftGraphMeetingMessageType{
   none,
   meetingRequest,
   meetingCancelled,
   meetingAccepted,
   meetingTenativelyAccepted,
   meetingDeclined,
}
export enum MicrosoftGraphMeetingRequestType{
   none,
   newMeetingRequest,
   fullUpdate,
   informationalUpdate,
   silentUpdate,
   outdated,
   principalWantsCopy,
}
export enum MicrosoftGraphMessageActionFlag{
   any,
   call,
   doNotForward,
   followUp,
   fyi,
   forward,
   noResponseNecessary,
   read,
   reply,
   replyToAll,
   review,
}
export enum MicrosoftGraphOnlineMeetingProviderType{
   unknown,
   skypeForBusiness,
   skypeForConsumer,
   teamsForBusiness,
}
export enum MicrosoftGraphRecipientScopeType{
   none,
   internal,
   external,
   externalPartner,
   externalNonPartner,
}
export enum MicrosoftGraphRecurrencePatternType{
   daily,
   weekly,
   absoluteMonthly,
   relativeMonthly,
   absoluteYearly,
   relativeYearly,
}
export enum MicrosoftGraphRecurrenceRangeType{
   endDate,
   noEnd,
   numbered,
}
export enum MicrosoftGraphResponseType{
   none,
   organizer,
   tentativelyAccepted,
   accepted,
   declined,
   notResponded,
}
export enum MicrosoftGraphSelectionLikelihoodInfo{
   notSpecified,
   high,
}
export enum MicrosoftGraphSensitivity{
   normal,
   personal,
   private,
   confidential,
}
export enum MicrosoftGraphTimeZoneStandard{
   windows,
   iana,
}
export enum MicrosoftGraphUserPurpose{
   user,
   linked,
   shared,
   room,
   equipment,
   others,
   unknownFutureValue,
}
export enum MicrosoftGraphWebsiteType{
   other,
   home,
   work,
   blog,
   profile,
}
export enum MicrosoftGraphWeekIndex{
   first,
   second,
   third,
   fourth,
   last,
}
export enum MicrosoftGraphColumnTypes{
   note,
   text,
   choice,
   multichoice,
   number,
   currency,
   dateTime,
   lookup,
   boolean,
   user,
   url,
   calculated,
   location,
   geolocation,
   term,
   multiterm,
   thumbnail,
   approvalStatus,
   unknownFutureValue,
}
export enum MicrosoftGraphLongRunningOperationStatus{
   notStarted,
   running,
   succeeded,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphStagedFeatureName{
   passthroughAuthentication,
   seamlessSso,
   passwordHashSync,
   emailAsAlternateId,
   unknownFutureValue,
   certificateBasedAuthentication,
   multiFactorAuthentication,
}
export enum MicrosoftGraphAccessReviewHistoryDecisionFilter{
   approve,
   deny,
   notReviewed,
   dontKnow,
   notNotified,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessReviewHistoryStatus{
   done,
   inprogress,
   error,
   requested,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessReviewInstanceDecisionItemFilterByCurrentUserOptions{
   reviewer,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessReviewInstanceFilterByCurrentUserOptions{
   reviewer,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessReviewScheduleDefinitionFilterByCurrentUserOptions{
   reviewer,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessReviewStageFilterByCurrentUserOptions{
   reviewer,
   unknownFutureValue,
}
export enum MicrosoftGraphApprovalFilterByCurrentUserOptions{
   target,
   createdBy,
   approver,
   unknownFutureValue,
}
export enum MicrosoftGraphConsentRequestFilterByCurrentUserOptions{
   reviewer,
   unknownFutureValue,
}
export enum MicrosoftGraphAgreementAcceptanceState{
   accepted,
   declined,
   unknownFutureValue,
}
export enum MicrosoftGraphActivityType{
   signin,
   user,
   unknownFutureValue,
}
export enum MicrosoftGraphCloudAppSecuritySessionControlType{
   mcasConfigured,
   monitorOnly,
   blockDownloads,
   unknownFutureValue,
}
export enum MicrosoftGraphConditionalAccessClientApp{
   all,
   browser,
   mobileAppsAndDesktopClients,
   exchangeActiveSync,
   easSupported,
   other,
   unknownFutureValue,
}
export enum MicrosoftGraphConditionalAccessDevicePlatform{
   android,
   iOS,
   windows,
   windowsPhone,
   macOS,
   all,
   unknownFutureValue,
   linux,
}
export enum MicrosoftGraphConditionalAccessGrantControl{
   block,
   mfa,
   compliantDevice,
   domainJoinedDevice,
   approvedApplication,
   compliantApplication,
   passwordChange,
   unknownFutureValue,
}
export enum MicrosoftGraphConditionalAccessPolicyState{
   enabled,
   disabled,
   enabledForReportingButNotEnforced,
}
export enum MicrosoftGraphCountryLookupMethodType{
   clientIpAddress,
   authenticatorAppGps,
   unknownFutureValue,
}
export enum MicrosoftGraphFilterMode{
   include,
   exclude,
}
export enum MicrosoftGraphPersistentBrowserSessionMode{
   always,
   never,
}
export enum MicrosoftGraphRiskDetectionTimingType{
   notDefined,
   realtime,
   nearRealtime,
   offline,
   unknownFutureValue,
}
export enum MicrosoftGraphSigninFrequencyType{
   days,
   hours,
}
export enum MicrosoftGraphTokenIssuerType{
   AzureAD,
   ADFederationServices,
   UnknownFutureValue,
   AzureADBackupAuth,
   ADFederationServicesMFAAdapter,
   NPSExtension,
}
export enum MicrosoftGraphAccessPackageAssignmentFilterByCurrentUserOptions{
   target,
   createdBy,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageAssignmentRequestFilterByCurrentUserOptions{
   target,
   createdBy,
   approver,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageAssignmentState{
   delivering,
   partiallyDelivered,
   delivered,
   expired,
   deliveryFailed,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageCatalogState{
   unpublished,
   published,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageCatalogType{
   userManaged,
   serviceDefault,
   serviceManaged,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageExternalUserLifecycleAction{
   none,
   blockSignIn,
   blockSignInAndDelete,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageFilterByCurrentUserOptions{
   allowedRequestor,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageRequestState{
   submitted,
   pendingApproval,
   delivering,
   delivered,
   deliveryFailed,
   denied,
   scheduled,
   canceled,
   partiallyDelivered,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageRequestType{
   notSpecified,
   userAdd,
   userUpdate,
   userRemove,
   adminAdd,
   adminUpdate,
   adminRemove,
   systemAdd,
   systemUpdate,
   systemRemove,
   onBehalfAdd,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessPackageSubjectType{
   notSpecified,
   user,
   servicePrincipal,
   unknownFutureValue,
}
export enum MicrosoftGraphAccessReviewExpirationBehavior{
   keepAccess,
   removeAccess,
   acceptAccessRecommendation,
   unknownFutureValue,
}
export enum MicrosoftGraphAllowedTargetScope{
   notSpecified,
   specificDirectoryUsers,
   specificConnectedOrganizationUsers,
   specificDirectoryServicePrincipals,
   allMemberUsers,
   allDirectoryUsers,
   allDirectoryServicePrincipals,
   allConfiguredConnectedOrganizationUsers,
   allExternalUsers,
   unknownFutureValue,
}
export enum MicrosoftGraphExpirationPatternType{
   notSpecified,
   noExpiration,
   afterDateTime,
   afterDuration,
}
export enum MicrosoftGraphConnectedOrganizationState{
   configured,
   proposed,
   unknownFutureValue,
}
export enum MicrosoftGraphComplianceStatus{
   unknown,
   notApplicable,
   compliant,
   remediated,
   nonCompliant,
   error,
   conflict,
   notAssigned,
}
export enum MicrosoftGraphInstallIntent{
   available,
   required,
   uninstall,
   availableWithoutEnrollment,
}
export enum MicrosoftGraphManagedAppAvailability{
   global,
   lineOfBusiness,
}
export enum MicrosoftGraphMdmAppConfigKeyType{
   stringType,
   integerType,
   realType,
   booleanType,
   tokenType,
}
export enum MicrosoftGraphMicrosoftStoreForBusinessLicenseType{
   offline,
   online,
}
export enum MicrosoftGraphMobileAppContentFileUploadState{
   success,
   transientError,
   error,
   unknown,
   azureStorageUriRequestSuccess,
   azureStorageUriRequestPending,
   azureStorageUriRequestFailed,
   azureStorageUriRequestTimedOut,
   azureStorageUriRenewalSuccess,
   azureStorageUriRenewalPending,
   azureStorageUriRenewalFailed,
   azureStorageUriRenewalTimedOut,
   commitFileSuccess,
   commitFilePending,
   commitFileFailed,
   commitFileTimedOut,
}
export enum MicrosoftGraphMobileAppPublishingState{
   notPublished,
   processing,
   published,
}
export enum MicrosoftGraphRunAsAccountType{
   system,
   user,
}
export enum MicrosoftGraphVppTokenAccountType{
   business,
   education,
}
export enum MicrosoftGraphWin32LobAppDeliveryOptimizationPriority{
   notConfigured,
   foreground,
}
export enum MicrosoftGraphWin32LobAppFileSystemOperationType{
   notConfigured,
   exists,
   modifiedDate,
   createdDate,
   version,
   sizeInMB,
}
export enum MicrosoftGraphWin32LobAppMsiPackageType{
   perMachine,
   perUser,
   dualPurpose,
}
export enum MicrosoftGraphWin32LobAppNotification{
   showAll,
   showReboot,
   hideAll,
}
export enum MicrosoftGraphWin32LobAppPowerShellScriptRuleOperationType{
   notConfigured,
   string,
   dateTime,
   integer,
   float,
   version,
   boolean,
}
export enum MicrosoftGraphWin32LobAppRegistryRuleOperationType{
   notConfigured,
   exists,
   doesNotExist,
   string,
   integer,
   version,
}
export enum MicrosoftGraphWin32LobAppRestartBehavior{
   basedOnReturnCode,
   allow,
   suppress,
   force,
}
export enum MicrosoftGraphWin32LobAppReturnCodeType{
   failed,
   success,
   softReboot,
   hardReboot,
   retry,
}
export enum MicrosoftGraphWin32LobAppRuleOperator{
   notConfigured,
   equal,
   notEqual,
   greaterThan,
   greaterThanOrEqual,
   lessThan,
   lessThanOrEqual,
}
export enum MicrosoftGraphWin32LobAppRuleType{
   detection,
   requirement,
}
export enum MicrosoftGraphWindowsArchitecture{
   none,
   x86,
   x64,
   arm,
   neutral,
}
export enum MicrosoftGraphWindowsDeviceType{
   none,
   desktop,
   mobile,
   holographic,
   team,
}
export enum MicrosoftGraphInstallState{
   notApplicable,
   installed,
   failed,
   notInstalled,
   uninstallFailed,
   unknown,
}
export enum MicrosoftGraphAndroidRequiredPasswordType{
   deviceDefault,
   alphabetic,
   alphanumeric,
   alphanumericWithSymbols,
   lowSecurityBiometric,
   numeric,
   numericComplex,
   any,
}
export enum MicrosoftGraphAndroidWorkProfileCrossProfileDataSharingType{
   deviceDefault,
   preventAny,
   allowPersonalToWork,
   noRestrictions,
}
export enum MicrosoftGraphAndroidWorkProfileDefaultAppPermissionPolicyType{
   deviceDefault,
   prompt,
   autoGrant,
   autoDeny,
}
export enum MicrosoftGraphAndroidWorkProfileRequiredPasswordType{
   deviceDefault,
   lowSecurityBiometric,
   required,
   atLeastNumeric,
   numericComplex,
   atLeastAlphabetic,
   atLeastAlphanumeric,
   alphanumericWithSymbols,
}
export enum MicrosoftGraphApplicationGuardBlockClipboardSharingType{
   notConfigured,
   blockBoth,
   blockHostToContainer,
   blockContainerToHost,
   blockNone,
}
export enum MicrosoftGraphApplicationGuardBlockFileTransferType{
   notConfigured,
   blockImageAndTextFile,
   blockImageFile,
   blockNone,
   blockTextFile,
}
export enum MicrosoftGraphAppListType{
   none,
   appsInListCompliant,
   appsNotInListCompliant,
}
export enum MicrosoftGraphAppLockerApplicationControlType{
   notConfigured,
   enforceComponentsAndStoreApps,
   auditComponentsAndStoreApps,
   enforceComponentsStoreAppsAndSmartlocker,
   auditComponentsStoreAppsAndSmartlocker,
}
export enum MicrosoftGraphAutomaticUpdateMode{
   userDefined,
   notifyDownload,
   autoInstallAtMaintenanceTime,
   autoInstallAndRebootAtMaintenanceTime,
   autoInstallAndRebootAtScheduledTime,
   autoInstallAndRebootWithoutEndUserControl,
}
export enum MicrosoftGraphBitLockerEncryptionMethod{
   aesCbc128,
   aesCbc256,
   xtsAes128,
   xtsAes256,
}
export enum MicrosoftGraphDefenderCloudBlockLevelType{
   notConfigured,
   high,
   highPlus,
   zeroTolerance,
}
export enum MicrosoftGraphDefenderMonitorFileActivity{
   userDefined,
   disable,
   monitorAllFiles,
   monitorIncomingFilesOnly,
   monitorOutgoingFilesOnly,
}
export enum MicrosoftGraphDefenderPromptForSampleSubmission{
   userDefined,
   alwaysPrompt,
   promptBeforeSendingPersonalData,
   neverSendData,
   sendAllDataWithoutPrompting,
}
export enum MicrosoftGraphDefenderScanType{
   userDefined,
   disabled,
   quick,
   full,
}
export enum MicrosoftGraphDefenderThreatAction{
   deviceDefault,
   clean,
   quarantine,
   remove,
   allow,
   userDefined,
   block,
}
export enum MicrosoftGraphDeviceComplianceActionType{
   noAction,
   notification,
   block,
   retire,
   wipe,
   removeResourceAccessProfiles,
   pushNotification,
}
export enum MicrosoftGraphDeviceThreatProtectionLevel{
   unavailable,
   secured,
   low,
   medium,
   high,
   notSet,
}
export enum MicrosoftGraphDiagnosticDataSubmissionMode{
   userDefined,
   none,
   basic,
   enhanced,
   full,
}
export enum MicrosoftGraphEdgeCookiePolicy{
   userDefined,
   allow,
   blockThirdParty,
   blockAll,
}
export enum MicrosoftGraphEdgeSearchEngineType{
   default,
   bing,
}
export enum MicrosoftGraphEditionUpgradeLicenseType{
   productKey,
   licenseFile,
}
export enum MicrosoftGraphFirewallCertificateRevocationListCheckMethodType{
   deviceDefault,
   none,
   attempt,
   require,
}
export enum MicrosoftGraphFirewallPacketQueueingMethodType{
   deviceDefault,
   disabled,
   queueInbound,
   queueOutbound,
   queueBoth,
}
export enum MicrosoftGraphFirewallPreSharedKeyEncodingMethodType{
   deviceDefault,
   none,
   utF8,
}
export enum MicrosoftGraphInternetSiteSecurityLevel{
   userDefined,
   medium,
   mediumHigh,
   high,
}
export enum MicrosoftGraphIosNotificationAlertType{
   deviceDefault,
   banner,
   modal,
   none,
}
export enum MicrosoftGraphIosUpdatesInstallStatus{
   deviceOsHigherThanDesiredOsVersion,
   sharedDeviceUserLoggedInError,
   notSupportedOperation,
   installFailed,
   installPhoneCallInProgress,
   installInsufficientPower,
   installInsufficientSpace,
   installing,
   downloadInsufficientNetwork,
   downloadInsufficientPower,
   downloadInsufficientSpace,
   downloadRequiresComputer,
   downloadFailed,
   downloading,
   success,
   available,
   idle,
   unknown,
}
export enum MicrosoftGraphMiracastChannel{
   userDefined,
   one,
   two,
   three,
   four,
   five,
   six,
   seven,
   eight,
   nine,
   ten,
   eleven,
   thirtySix,
   forty,
   fortyFour,
   fortyEight,
   oneHundredFortyNine,
   oneHundredFiftyThree,
   oneHundredFiftySeven,
   oneHundredSixtyOne,
   oneHundredSixtyFive,
}
export enum MicrosoftGraphPolicyPlatformType{
   android,
   androidForWork,
   iOS,
   macOS,
   windowsPhone81,
   windows81AndLater,
   windows10AndLater,
   all,
}
export enum MicrosoftGraphPrereleaseFeatures{
   userDefined,
   settingsOnly,
   settingsAndExperimentations,
   notAllowed,
}
export enum MicrosoftGraphRatingAppsType{
   allAllowed,
   allBlocked,
   agesAbove4,
   agesAbove9,
   agesAbove12,
   agesAbove17,
}
export enum MicrosoftGraphRatingAustraliaMoviesType{
   allAllowed,
   allBlocked,
   general,
   parentalGuidance,
   mature,
   agesAbove15,
   agesAbove18,
}
export enum MicrosoftGraphRatingAustraliaTelevisionType{
   allAllowed,
   allBlocked,
   preschoolers,
   children,
   general,
   parentalGuidance,
   mature,
   agesAbove15,
   agesAbove15AdultViolence,
}
export enum MicrosoftGraphRatingCanadaMoviesType{
   allAllowed,
   allBlocked,
   general,
   parentalGuidance,
   agesAbove14,
   agesAbove18,
   restricted,
}
export enum MicrosoftGraphRatingCanadaTelevisionType{
   allAllowed,
   allBlocked,
   children,
   childrenAbove8,
   general,
   parentalGuidance,
   agesAbove14,
   agesAbove18,
}
export enum MicrosoftGraphRatingFranceMoviesType{
   allAllowed,
   allBlocked,
   agesAbove10,
   agesAbove12,
   agesAbove16,
   agesAbove18,
}
export enum MicrosoftGraphRatingFranceTelevisionType{
   allAllowed,
   allBlocked,
   agesAbove10,
   agesAbove12,
   agesAbove16,
   agesAbove18,
}
export enum MicrosoftGraphRatingGermanyMoviesType{
   allAllowed,
   allBlocked,
   general,
   agesAbove6,
   agesAbove12,
   agesAbove16,
   adults,
}
export enum MicrosoftGraphRatingGermanyTelevisionType{
   allAllowed,
   allBlocked,
   general,
   agesAbove6,
   agesAbove12,
   agesAbove16,
   adults,
}
export enum MicrosoftGraphRatingIrelandMoviesType{
   allAllowed,
   allBlocked,
   general,
   parentalGuidance,
   agesAbove12,
   agesAbove15,
   agesAbove16,
   adults,
}
export enum MicrosoftGraphRatingIrelandTelevisionType{
   allAllowed,
   allBlocked,
   general,
   children,
   youngAdults,
   parentalSupervision,
   mature,
}
export enum MicrosoftGraphRatingJapanMoviesType{
   allAllowed,
   allBlocked,
   general,
   parentalGuidance,
   agesAbove15,
   agesAbove18,
}
export enum MicrosoftGraphRatingJapanTelevisionType{
   allAllowed,
   allBlocked,
   explicitAllowed,
}
export enum MicrosoftGraphRatingNewZealandMoviesType{
   allAllowed,
   allBlocked,
   general,
   parentalGuidance,
   mature,
   agesAbove13,
   agesAbove15,
   agesAbove16,
   agesAbove18,
   restricted,
   agesAbove16Restricted,
}
export enum MicrosoftGraphRatingNewZealandTelevisionType{
   allAllowed,
   allBlocked,
   general,
   parentalGuidance,
   adults,
}
export enum MicrosoftGraphRatingUnitedKingdomMoviesType{
   allAllowed,
   allBlocked,
   general,
   universalChildren,
   parentalGuidance,
   agesAbove12Video,
   agesAbove12Cinema,
   agesAbove15,
   adults,
}
export enum MicrosoftGraphRatingUnitedKingdomTelevisionType{
   allAllowed,
   allBlocked,
   caution,
}
export enum MicrosoftGraphRatingUnitedStatesMoviesType{
   allAllowed,
   allBlocked,
   general,
   parentalGuidance,
   parentalGuidance13,
   restricted,
   adults,
}
export enum MicrosoftGraphRatingUnitedStatesTelevisionType{
   allAllowed,
   allBlocked,
   childrenAll,
   childrenAbove7,
   general,
   parentalGuidance,
   childrenAbove14,
   adults,
}
export enum MicrosoftGraphRequiredPasswordType{
   deviceDefault,
   alphanumeric,
   numeric,
}
export enum MicrosoftGraphSafeSearchFilterType{
   userDefined,
   strict,
   moderate,
}
export enum MicrosoftGraphSettingSourceType{
   deviceConfiguration,
   deviceIntent,
}
export enum MicrosoftGraphSharedPCAccountDeletionPolicyType{
   immediate,
   diskSpaceThreshold,
   diskSpaceThresholdOrInactiveThreshold,
}
export enum MicrosoftGraphSharedPCAllowedAccountType{
   guest,
   domain,
}
export enum MicrosoftGraphSiteSecurityLevel{
   userDefined,
   low,
   mediumLow,
   medium,
   mediumHigh,
   high,
}
export enum MicrosoftGraphStateManagementSetting{
   notConfigured,
   blocked,
   allowed,
}
export enum MicrosoftGraphVisibilitySetting{
   notConfigured,
   hide,
   show,
}
export enum MicrosoftGraphWebBrowserCookieSettings{
   browserDefault,
   blockAlways,
   allowCurrentWebSite,
   allowFromWebsitesVisited,
   allowAlways,
}
export enum MicrosoftGraphWeeklySchedule{
   userDefined,
   everyday,
   sunday,
   monday,
   tuesday,
   wednesday,
   thursday,
   friday,
   saturday,
}
export enum MicrosoftGraphWelcomeScreenMeetingInformation{
   userDefined,
   showOrganizerAndTimeOnly,
   showOrganizerAndTimeAndSubject,
}
export enum MicrosoftGraphWindows10EditionType{
   windows10Enterprise,
   windows10EnterpriseN,
   windows10Education,
   windows10EducationN,
   windows10MobileEnterprise,
   windows10HolographicEnterprise,
   windows10Professional,
   windows10ProfessionalN,
   windows10ProfessionalEducation,
   windows10ProfessionalEducationN,
   windows10ProfessionalWorkstation,
   windows10ProfessionalWorkstationN,
}
export enum MicrosoftGraphWindowsDeliveryOptimizationMode{
   userDefined,
   httpOnly,
   httpWithPeeringNat,
   httpWithPeeringPrivateGroup,
   httpWithInternetPeering,
   simpleDownload,
   bypassMode,
}
export enum MicrosoftGraphWindowsSpotlightEnablementSettings{
   notConfigured,
   disabled,
   enabled,
}
export enum MicrosoftGraphWindowsStartMenuAppListVisibilityType{
   userDefined,
   collapse,
   remove,
   disableSettingsApp,
}
export enum MicrosoftGraphWindowsStartMenuModeType{
   userDefined,
   fullScreen,
   nonFullScreen,
}
export enum MicrosoftGraphWindowsUpdateType{
   userDefined,
   all,
   businessReadyOnly,
   windowsInsiderBuildFast,
   windowsInsiderBuildSlow,
   windowsInsiderBuildRelease,
}
export enum MicrosoftGraphWindowsUserAccountControlSettings{
   userDefined,
   alwaysNotify,
   notifyOnAppChanges,
   notifyOnAppChangesWithoutDimming,
   neverNotify,
}
export enum MicrosoftGraphDeviceManagementExchangeConnectorStatus{
   none,
   connectionPending,
   connected,
   disconnected,
}
export enum MicrosoftGraphDeviceManagementExchangeConnectorSyncType{
   fullSync,
   deltaSync,
}
export enum MicrosoftGraphDeviceManagementExchangeConnectorType{
   onPremises,
   hosted,
   serviceToService,
   dedicated,
}
export enum MicrosoftGraphDeviceManagementPartnerAppType{
   unknown,
   singleTenantApp,
   multiTenantApp,
}
export enum MicrosoftGraphDeviceManagementPartnerTenantState{
   unknown,
   unavailable,
   enabled,
   terminated,
   rejected,
   unresponsive,
}
export enum MicrosoftGraphEnablement{
   notConfigured,
   enabled,
   disabled,
}
export enum MicrosoftGraphMdmAuthority{
   unknown,
   intune,
   sccm,
   office365,
}
export enum MicrosoftGraphMobileThreatPartnerTenantState{
   unavailable,
   available,
   enabled,
   unresponsive,
}
export enum MicrosoftGraphVppTokenState{
   unknown,
   valid,
   expired,
   invalid,
   assignedToExternalMDM,
}
export enum MicrosoftGraphVppTokenSyncStatus{
   none,
   inProgress,
   completed,
   failed,
}
export enum MicrosoftGraphWindowsHelloForBusinessPinUsage{
   allowed,
   required,
   disallowed,
}
export enum MicrosoftGraphActionState{
   none,
   pending,
   canceled,
   active,
   done,
   failed,
   notSupported,
}
export enum MicrosoftGraphComplianceState{
   unknown,
   compliant,
   noncompliant,
   conflict,
   error,
   inGracePeriod,
   configManager,
}
export enum MicrosoftGraphDeviceEnrollmentType{
   unknown,
   userEnrollment,
   deviceEnrollmentManager,
   appleBulkWithUser,
   appleBulkWithoutUser,
   windowsAzureADJoin,
   windowsBulkUserless,
   windowsAutoEnrollment,
   windowsBulkAzureDomainJoin,
   windowsCoManagement,
   windowsAzureADJoinUsingDeviceAuth,
   appleUserEnrollment,
   appleUserEnrollmentWithServiceAccount,
}
export enum MicrosoftGraphDeviceManagementExchangeAccessState{
   none,
   unknown,
   allowed,
   blocked,
   quarantined,
}
export enum MicrosoftGraphDeviceManagementExchangeAccessStateReason{
   none,
   unknown,
   exchangeGlobalRule,
   exchangeIndividualRule,
   exchangeDeviceRule,
   exchangeUpgrade,
   exchangeMailboxPolicy,
   other,
   compliant,
   notCompliant,
   notEnrolled,
   unknownLocation,
   mfaRequired,
   azureADBlockDueToAccessPolicy,
   compromisedPassword,
   deviceNotKnownWithManagedApp,
}
export enum MicrosoftGraphDeviceManagementSubscriptionState{
   pending,
   active,
   warning,
   disabled,
   deleted,
   blocked,
   lockedOut,
}
export enum MicrosoftGraphDeviceRegistrationState{
   notRegistered,
   registered,
   revoked,
   keyConflict,
   approvalPending,
   certificateReset,
   notRegisteredPendingEnrollment,
   unknown,
}
export enum MicrosoftGraphManagedDeviceOwnerType{
   unknown,
   company,
   personal,
}
export enum MicrosoftGraphManagedDevicePartnerReportedHealthState{
   unknown,
   activated,
   deactivated,
   secured,
   lowSeverity,
   mediumSeverity,
   highSeverity,
   unresponsive,
   compromised,
   misconfigured,
}
export enum MicrosoftGraphManagementAgentType{
   eas,
   mdm,
   easMdm,
   intuneClient,
   easIntuneClient,
   configurationManagerClient,
   configurationManagerClientMdm,
   configurationManagerClientMdmEas,
   unknown,
   jamf,
   googleCloudDevicePolicyController,
   microsoft365ManagedMdm,
   msSense,
}
export enum MicrosoftGraphEnrollmentState{
   unknown,
   enrolled,
   pendingReset,
   failed,
   notContacted,
}
export enum MicrosoftGraphImportedWindowsAutopilotDeviceIdentityImportStatus{
   unknown,
   pending,
   partial,
   complete,
   error,
}
export enum MicrosoftGraphImportedWindowsAutopilotDeviceIdentityUploadStatus{
   noUpload,
   pending,
   complete,
   error,
}
export enum MicrosoftGraphManagedAppClipboardSharingLevel{
   allApps,
   managedAppsWithPasteIn,
   managedApps,
   blocked,
}
export enum MicrosoftGraphManagedAppDataEncryptionType{
   useDeviceSettings,
   afterDeviceRestart,
   whenDeviceLockedExceptOpenFiles,
   whenDeviceLocked,
}
export enum MicrosoftGraphManagedAppDataStorageLocation{
   oneDriveForBusiness,
   sharePoint,
   box,
   localStorage,
}
export enum MicrosoftGraphManagedAppDataTransferLevel{
   allApps,
   managedApps,
   none,
}
export enum MicrosoftGraphManagedAppFlaggedReason{
   none,
   rootedDevice,
}
export enum MicrosoftGraphManagedAppPinCharacterSet{
   numeric,
   alphanumericAndSymbol,
}
export enum MicrosoftGraphManagedBrowserType{
   notConfigured,
   microsoftEdge,
}
export enum MicrosoftGraphTargetedManagedAppGroupType{
   selectedPublicApps,
   allCoreMicrosoftApps,
   allMicrosoftApps,
   allApps,
}
export enum MicrosoftGraphWindowsInformationProtectionEnforcementLevel{
   noProtection,
   encryptAndAuditOnly,
   encryptAuditAndPrompt,
   encryptAuditAndBlock,
}
export enum MicrosoftGraphWindowsInformationProtectionPinCharacterRequirements{
   notAllow,
   requireAtLeastOne,
   allow,
}
export enum MicrosoftGraphNotificationTemplateBrandingOptions{
   none,
   includeCompanyLogo,
   includeCompanyName,
   includeContactInformation,
}
export enum MicrosoftGraphRemoteAssistanceOnboardingStatus{
   notOnboarded,
   onboarding,
   onboarded,
}
export enum MicrosoftGraphDeviceManagementExportJobLocalizationType{
   localizedValuesAsAdditionalColumn,
   replaceLocalizableValues,
}
export enum MicrosoftGraphDeviceManagementReportFileFormat{
   csv,
   pdf,
}
export enum MicrosoftGraphDeviceManagementReportStatus{
   unknown,
   notStarted,
   inProgress,
   completed,
   failed,
}
export enum MicrosoftGraphDeviceEnrollmentFailureReason{
   unknown,
   authentication,
   authorization,
   accountValidation,
   userValidation,
   deviceNotSupported,
   inMaintenance,
   badRequest,
   featureNotSupported,
   enrollmentRestrictionsEnforced,
   clientDisconnected,
   userAbandonment,
}
export enum MicrosoftGraphApplicationType{
   universal,
   desktop,
}
export enum MicrosoftGraphPostType{
   regular,
   quick,
   strategic,
   unknownFutureValue,
}
export enum MicrosoftGraphServiceHealthClassificationType{
   advisory,
   incident,
   unknownFutureValue,
}
export enum MicrosoftGraphServiceHealthOrigin{
   microsoft,
   thirdParty,
   customer,
   unknownFutureValue,
}
export enum MicrosoftGraphServiceHealthStatus{
   serviceOperational,
   investigating,
   restoringService,
   verifyingService,
   serviceRestored,
   postIncidentReviewPublished,
   serviceDegradation,
   serviceInterruption,
   extendedRecovery,
   falsePositive,
   investigationSuspended,
   resolved,
   mitigatedExternal,
   mitigated,
   resolvedExternal,
   confirmed,
   reported,
   unknownFutureValue,
}
export enum MicrosoftGraphServiceUpdateCategory{
   preventOrFixIssue,
   planForChange,
   stayInformed,
   unknownFutureValue,
}
export enum MicrosoftGraphServiceUpdateSeverity{
   normal,
   high,
   critical,
   unknownFutureValue,
}
export enum MicrosoftGraphBucketAggregationSortProperty{
   count,
   keyAsString,
   keyAsNumber,
   unknownFutureValue,
}
export enum MicrosoftGraphEntityType{
   event,
   message,
   driveItem,
   externalItem,
   site,
   list,
   listItem,
   drive,
   unknownFutureValue,
}
export enum MicrosoftGraphSearchAlterationType{
   suggestion,
   modification,
   unknownFutureValue,
}
export enum MicrosoftGraphPlannerContainerType{
   group,
   unknownFutureValue,
   roster,
}
export enum MicrosoftGraphPlannerPreviewType{
   automatic,
   noPreview,
   checklist,
   description,
   reference,
}
export enum MicrosoftGraphOnenotePatchActionType{
   Replace,
   Append,
   Delete,
   Insert,
   Prepend,
}
export enum MicrosoftGraphOnenotePatchInsertPosition{
   After,
   Before,
}
export enum MicrosoftGraphOnenoteSourceService{
   Unknown,
   OneDrive,
   OneDriveForBusiness,
   OnPremOneDriveForBusiness,
}
export enum MicrosoftGraphOnenoteUserRole{
   None,
   Owner,
   Contributor,
   Reader,
}
export enum MicrosoftGraphOperationStatus{
   NotStarted,
   Running,
   Completed,
   Failed,
}
export enum MicrosoftGraphRoleAssignmentScheduleFilterByCurrentUserOptions{
   principal,
   unknownFutureValue,
}
export enum MicrosoftGraphRoleAssignmentScheduleInstanceFilterByCurrentUserOptions{
   principal,
   unknownFutureValue,
}
export enum MicrosoftGraphRoleAssignmentScheduleRequestFilterByCurrentUserOptions{
   principal,
   createdBy,
   approver,
   unknownFutureValue,
}
export enum MicrosoftGraphRoleEligibilityScheduleFilterByCurrentUserOptions{
   principal,
   unknownFutureValue,
}
export enum MicrosoftGraphRoleEligibilityScheduleInstanceFilterByCurrentUserOptions{
   principal,
   unknownFutureValue,
}
export enum MicrosoftGraphRoleEligibilityScheduleRequestFilterByCurrentUserOptions{
   principal,
   createdBy,
   approver,
   unknownFutureValue,
}
export enum MicrosoftGraphUnifiedRoleManagementPolicyRuleTargetOperations{
   all,
   activate,
   deactivate,
   assign,
   update,
   remove,
   extend,
   renew,
   unknownFutureValue,
}
export enum MicrosoftGraphUnifiedRoleScheduleRequestActions{
   adminAssign,
   adminUpdate,
   adminRemove,
   selfActivate,
   selfDeactivate,
   adminExtend,
   adminRenew,
   selfExtend,
   selfRenew,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintColorMode{
   blackAndWhite,
   grayscale,
   color,
   auto,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintDuplexMode{
   flipOnLongEdge,
   flipOnShortEdge,
   oneSided,
   unknownFutureValue,
}
export enum MicrosoftGraphPrinterFeedOrientation{
   longEdgeFirst,
   shortEdgeFirst,
   unknownFutureValue,
}
export enum MicrosoftGraphPrinterProcessingState{
   unknown,
   idle,
   processing,
   stopped,
   unknownFutureValue,
}
export enum MicrosoftGraphPrinterProcessingStateDetail{
   paused,
   mediaJam,
   mediaNeeded,
   mediaLow,
   mediaEmpty,
   coverOpen,
   interlockOpen,
   outputTrayMissing,
   outputAreaFull,
   markerSupplyLow,
   markerSupplyEmpty,
   inputTrayMissing,
   outputAreaAlmostFull,
   markerWasteAlmostFull,
   markerWasteFull,
   fuserOverTemp,
   fuserUnderTemp,
   other,
   none,
   movingToPaused,
   shutdown,
   connectingToDevice,
   timedOut,
   stopping,
   stoppedPartially,
   tonerLow,
   tonerEmpty,
   spoolAreaFull,
   doorOpen,
   opticalPhotoConductorNearEndOfLife,
   opticalPhotoConductorLifeOver,
   developerLow,
   developerEmpty,
   interpreterResourceUnavailable,
   unknownFutureValue,
   alertRemovalOfBinaryChangeEntry,
   banderAdded,
   banderAlmostEmpty,
   banderAlmostFull,
   banderAtLimit,
   banderClosed,
   banderConfigurationChange,
   banderCoverClosed,
   banderCoverOpen,
   banderEmpty,
   banderFull,
   banderInterlockClosed,
   banderInterlockOpen,
   banderJam,
   banderLifeAlmostOver,
   banderLifeOver,
   banderMemoryExhausted,
   banderMissing,
   banderMotorFailure,
   banderNearLimit,
   banderOffline,
   banderOpened,
   banderOverTemperature,
   banderPowerSaver,
   banderRecoverableFailure,
   banderRecoverableStorage,
   banderRemoved,
   banderResourceAdded,
   banderResourceRemoved,
   banderThermistorFailure,
   banderTimingFailure,
   banderTurnedOff,
   banderTurnedOn,
   banderUnderTemperature,
   banderUnrecoverableFailure,
   banderUnrecoverableStorageError,
   banderWarmingUp,
   binderAdded,
   binderAlmostEmpty,
   binderAlmostFull,
   binderAtLimit,
   binderClosed,
   binderConfigurationChange,
   binderCoverClosed,
   binderCoverOpen,
   binderEmpty,
   binderFull,
   binderInterlockClosed,
   binderInterlockOpen,
   binderJam,
   binderLifeAlmostOver,
   binderLifeOver,
   binderMemoryExhausted,
   binderMissing,
   binderMotorFailure,
   binderNearLimit,
   binderOffline,
   binderOpened,
   binderOverTemperature,
   binderPowerSaver,
   binderRecoverableFailure,
   binderRecoverableStorage,
   binderRemoved,
   binderResourceAdded,
   binderResourceRemoved,
   binderThermistorFailure,
   binderTimingFailure,
   binderTurnedOff,
   binderTurnedOn,
   binderUnderTemperature,
   binderUnrecoverableFailure,
   binderUnrecoverableStorageError,
   binderWarmingUp,
   cameraFailure,
   chamberCooling,
   chamberFailure,
   chamberHeating,
   chamberTemperatureHigh,
   chamberTemperatureLow,
   cleanerLifeAlmostOver,
   cleanerLifeOver,
   configurationChange,
   deactivated,
   deleted,
   dieCutterAdded,
   dieCutterAlmostEmpty,
   dieCutterAlmostFull,
   dieCutterAtLimit,
   dieCutterClosed,
   dieCutterConfigurationChange,
   dieCutterCoverClosed,
   dieCutterCoverOpen,
   dieCutterEmpty,
   dieCutterFull,
   dieCutterInterlockClosed,
   dieCutterInterlockOpen,
   dieCutterJam,
   dieCutterLifeAlmostOver,
   dieCutterLifeOver,
   dieCutterMemoryExhausted,
   dieCutterMissing,
   dieCutterMotorFailure,
   dieCutterNearLimit,
   dieCutterOffline,
   dieCutterOpened,
   dieCutterOverTemperature,
   dieCutterPowerSaver,
   dieCutterRecoverableFailure,
   dieCutterRecoverableStorage,
   dieCutterRemoved,
   dieCutterResourceAdded,
   dieCutterResourceRemoved,
   dieCutterThermistorFailure,
   dieCutterTimingFailure,
   dieCutterTurnedOff,
   dieCutterTurnedOn,
   dieCutterUnderTemperature,
   dieCutterUnrecoverableFailure,
   dieCutterUnrecoverableStorageError,
   dieCutterWarmingUp,
   extruderCooling,
   extruderFailure,
   extruderHeating,
   extruderJam,
   extruderTemperatureHigh,
   extruderTemperatureLow,
   fanFailure,
   faxModemLifeAlmostOver,
   faxModemLifeOver,
   faxModemMissing,
   faxModemTurnedOff,
   faxModemTurnedOn,
   folderAdded,
   folderAlmostEmpty,
   folderAlmostFull,
   folderAtLimit,
   folderClosed,
   folderConfigurationChange,
   folderCoverClosed,
   folderCoverOpen,
   folderEmpty,
   folderFull,
   folderInterlockClosed,
   folderInterlockOpen,
   folderJam,
   folderLifeAlmostOver,
   folderLifeOver,
   folderMemoryExhausted,
   folderMissing,
   folderMotorFailure,
   folderNearLimit,
   folderOffline,
   folderOpened,
   folderOverTemperature,
   folderPowerSaver,
   folderRecoverableFailure,
   folderRecoverableStorage,
   folderRemoved,
   folderResourceAdded,
   folderResourceRemoved,
   folderThermistorFailure,
   folderTimingFailure,
   folderTurnedOff,
   folderTurnedOn,
   folderUnderTemperature,
   folderUnrecoverableFailure,
   folderUnrecoverableStorageError,
   folderWarmingUp,
   hibernate,
   holdNewJobs,
   identifyPrinterRequested,
   imprinterAdded,
   imprinterAlmostEmpty,
   imprinterAlmostFull,
   imprinterAtLimit,
   imprinterClosed,
   imprinterConfigurationChange,
   imprinterCoverClosed,
   imprinterCoverOpen,
   imprinterEmpty,
   imprinterFull,
   imprinterInterlockClosed,
   imprinterInterlockOpen,
   imprinterJam,
   imprinterLifeAlmostOver,
   imprinterLifeOver,
   imprinterMemoryExhausted,
   imprinterMissing,
   imprinterMotorFailure,
   imprinterNearLimit,
   imprinterOffline,
   imprinterOpened,
   imprinterOverTemperature,
   imprinterPowerSaver,
   imprinterRecoverableFailure,
   imprinterRecoverableStorage,
   imprinterRemoved,
   imprinterResourceAdded,
   imprinterResourceRemoved,
   imprinterThermistorFailure,
   imprinterTimingFailure,
   imprinterTurnedOff,
   imprinterTurnedOn,
   imprinterUnderTemperature,
   imprinterUnrecoverableFailure,
   imprinterUnrecoverableStorageError,
   imprinterWarmingUp,
   inputCannotFeedSizeSelected,
   inputManualInputRequest,
   inputMediaColorChange,
   inputMediaFormPartsChange,
   inputMediaSizeChange,
   inputMediaTrayFailure,
   inputMediaTrayFeedError,
   inputMediaTrayJam,
   inputMediaTypeChange,
   inputMediaWeightChange,
   inputPickRollerFailure,
   inputPickRollerLifeOver,
   inputPickRollerLifeWarn,
   inputPickRollerMissing,
   inputTrayElevationFailure,
   inputTrayPositionFailure,
   inserterAdded,
   inserterAlmostEmpty,
   inserterAlmostFull,
   inserterAtLimit,
   inserterClosed,
   inserterConfigurationChange,
   inserterCoverClosed,
   inserterCoverOpen,
   inserterEmpty,
   inserterFull,
   inserterInterlockClosed,
   inserterInterlockOpen,
   inserterJam,
   inserterLifeAlmostOver,
   inserterLifeOver,
   inserterMemoryExhausted,
   inserterMissing,
   inserterMotorFailure,
   inserterNearLimit,
   inserterOffline,
   inserterOpened,
   inserterOverTemperature,
   inserterPowerSaver,
   inserterRecoverableFailure,
   inserterRecoverableStorage,
   inserterRemoved,
   inserterResourceAdded,
   inserterResourceRemoved,
   inserterThermistorFailure,
   inserterTimingFailure,
   inserterTurnedOff,
   inserterTurnedOn,
   inserterUnderTemperature,
   inserterUnrecoverableFailure,
   inserterUnrecoverableStorageError,
   inserterWarmingUp,
   interlockClosed,
   interpreterCartridgeAdded,
   interpreterCartridgeDeleted,
   interpreterComplexPageEncountered,
   interpreterMemoryDecrease,
   interpreterMemoryIncrease,
   interpreterResourceAdded,
   interpreterResourceDeleted,
   lampAtEol,
   lampFailure,
   lampNearEol,
   laserAtEol,
   laserFailure,
   laserNearEol,
   makeEnvelopeAdded,
   makeEnvelopeAlmostEmpty,
   makeEnvelopeAlmostFull,
   makeEnvelopeAtLimit,
   makeEnvelopeClosed,
   makeEnvelopeConfigurationChange,
   makeEnvelopeCoverClosed,
   makeEnvelopeCoverOpen,
   makeEnvelopeEmpty,
   makeEnvelopeFull,
   makeEnvelopeInterlockClosed,
   makeEnvelopeInterlockOpen,
   makeEnvelopeJam,
   makeEnvelopeLifeAlmostOver,
   makeEnvelopeLifeOver,
   makeEnvelopeMemoryExhausted,
   makeEnvelopeMissing,
   makeEnvelopeMotorFailure,
   makeEnvelopeNearLimit,
   makeEnvelopeOffline,
   makeEnvelopeOpened,
   makeEnvelopeOverTemperature,
   makeEnvelopePowerSaver,
   makeEnvelopeRecoverableFailure,
   makeEnvelopeRecoverableStorage,
   makeEnvelopeRemoved,
   makeEnvelopeResourceAdded,
   makeEnvelopeResourceRemoved,
   makeEnvelopeThermistorFailure,
   makeEnvelopeTimingFailure,
   makeEnvelopeTurnedOff,
   makeEnvelopeTurnedOn,
   makeEnvelopeUnderTemperature,
   makeEnvelopeUnrecoverableFailure,
   makeEnvelopeUnrecoverableStorageError,
   makeEnvelopeWarmingUp,
   markerAdjustingPrintQuality,
   markerCleanerMissing,
   markerDeveloperAlmostEmpty,
   markerDeveloperEmpty,
   markerDeveloperMissing,
   markerFuserMissing,
   markerFuserThermistorFailure,
   markerFuserTimingFailure,
   markerInkAlmostEmpty,
   markerInkEmpty,
   markerInkMissing,
   markerOpcMissing,
   markerPrintRibbonAlmostEmpty,
   markerPrintRibbonEmpty,
   markerPrintRibbonMissing,
   markerSupplyAlmostEmpty,
   markerSupplyMissing,
   markerTonerCartridgeMissing,
   markerTonerMissing,
   markerWasteInkReceptacleAlmostFull,
   markerWasteInkReceptacleFull,
   markerWasteInkReceptacleMissing,
   markerWasteMissing,
   markerWasteTonerReceptacleAlmostFull,
   markerWasteTonerReceptacleFull,
   markerWasteTonerReceptacleMissing,
   materialEmpty,
   materialLow,
   materialNeeded,
   mediaDrying,
   mediaPathCannotDuplexMediaSelected,
   mediaPathFailure,
   mediaPathInputEmpty,
   mediaPathInputFeedError,
   mediaPathInputJam,
   mediaPathInputRequest,
   mediaPathJam,
   mediaPathMediaTrayAlmostFull,
   mediaPathMediaTrayFull,
   mediaPathMediaTrayMissing,
   mediaPathOutputFeedError,
   mediaPathOutputFull,
   mediaPathOutputJam,
   mediaPathPickRollerFailure,
   mediaPathPickRollerLifeOver,
   mediaPathPickRollerLifeWarn,
   mediaPathPickRollerMissing,
   motorFailure,
   outputMailboxSelectFailure,
   outputMediaTrayFailure,
   outputMediaTrayFeedError,
   outputMediaTrayJam,
   perforaterAdded,
   perforaterAlmostEmpty,
   perforaterAlmostFull,
   perforaterAtLimit,
   perforaterClosed,
   perforaterConfigurationChange,
   perforaterCoverClosed,
   perforaterCoverOpen,
   perforaterEmpty,
   perforaterFull,
   perforaterInterlockClosed,
   perforaterInterlockOpen,
   perforaterJam,
   perforaterLifeAlmostOver,
   perforaterLifeOver,
   perforaterMemoryExhausted,
   perforaterMissing,
   perforaterMotorFailure,
   perforaterNearLimit,
   perforaterOffline,
   perforaterOpened,
   perforaterOverTemperature,
   perforaterPowerSaver,
   perforaterRecoverableFailure,
   perforaterRecoverableStorage,
   perforaterRemoved,
   perforaterResourceAdded,
   perforaterResourceRemoved,
   perforaterThermistorFailure,
   perforaterTimingFailure,
   perforaterTurnedOff,
   perforaterTurnedOn,
   perforaterUnderTemperature,
   perforaterUnrecoverableFailure,
   perforaterUnrecoverableStorageError,
   perforaterWarmingUp,
   platformCooling,
   platformFailure,
   platformHeating,
   platformTemperatureHigh,
   platformTemperatureLow,
   powerDown,
   powerUp,
   printerManualReset,
   printerNmsReset,
   printerReadyToPrint,
   puncherAdded,
   puncherAlmostEmpty,
   puncherAlmostFull,
   puncherAtLimit,
   puncherClosed,
   puncherConfigurationChange,
   puncherCoverClosed,
   puncherCoverOpen,
   puncherEmpty,
   puncherFull,
   puncherInterlockClosed,
   puncherInterlockOpen,
   puncherJam,
   puncherLifeAlmostOver,
   puncherLifeOver,
   puncherMemoryExhausted,
   puncherMissing,
   puncherMotorFailure,
   puncherNearLimit,
   puncherOffline,
   puncherOpened,
   puncherOverTemperature,
   puncherPowerSaver,
   puncherRecoverableFailure,
   puncherRecoverableStorage,
   puncherRemoved,
   puncherResourceAdded,
   puncherResourceRemoved,
   puncherThermistorFailure,
   puncherTimingFailure,
   puncherTurnedOff,
   puncherTurnedOn,
   puncherUnderTemperature,
   puncherUnrecoverableFailure,
   puncherUnrecoverableStorageError,
   puncherWarmingUp,
   resuming,
   scanMediaPathFailure,
   scanMediaPathInputEmpty,
   scanMediaPathInputFeedError,
   scanMediaPathInputJam,
   scanMediaPathInputRequest,
   scanMediaPathJam,
   scanMediaPathOutputFeedError,
   scanMediaPathOutputFull,
   scanMediaPathOutputJam,
   scanMediaPathPickRollerFailure,
   scanMediaPathPickRollerLifeOver,
   scanMediaPathPickRollerLifeWarn,
   scanMediaPathPickRollerMissing,
   scanMediaPathTrayAlmostFull,
   scanMediaPathTrayFull,
   scanMediaPathTrayMissing,
   scannerLightFailure,
   scannerLightLifeAlmostOver,
   scannerLightLifeOver,
   scannerLightMissing,
   scannerSensorFailure,
   scannerSensorLifeAlmostOver,
   scannerSensorLifeOver,
   scannerSensorMissing,
   separationCutterAdded,
   separationCutterAlmostEmpty,
   separationCutterAlmostFull,
   separationCutterAtLimit,
   separationCutterClosed,
   separationCutterConfigurationChange,
   separationCutterCoverClosed,
   separationCutterCoverOpen,
   separationCutterEmpty,
   separationCutterFull,
   separationCutterInterlockClosed,
   separationCutterInterlockOpen,
   separationCutterJam,
   separationCutterLifeAlmostOver,
   separationCutterLifeOver,
   separationCutterMemoryExhausted,
   separationCutterMissing,
   separationCutterMotorFailure,
   separationCutterNearLimit,
   separationCutterOffline,
   separationCutterOpened,
   separationCutterOverTemperature,
   separationCutterPowerSaver,
   separationCutterRecoverableFailure,
   separationCutterRecoverableStorage,
   separationCutterRemoved,
   separationCutterResourceAdded,
   separationCutterResourceRemoved,
   separationCutterThermistorFailure,
   separationCutterTimingFailure,
   separationCutterTurnedOff,
   separationCutterTurnedOn,
   separationCutterUnderTemperature,
   separationCutterUnrecoverableFailure,
   separationCutterUnrecoverableStorageError,
   separationCutterWarmingUp,
   sheetRotatorAdded,
   sheetRotatorAlmostEmpty,
   sheetRotatorAlmostFull,
   sheetRotatorAtLimit,
   sheetRotatorClosed,
   sheetRotatorConfigurationChange,
   sheetRotatorCoverClosed,
   sheetRotatorCoverOpen,
   sheetRotatorEmpty,
   sheetRotatorFull,
   sheetRotatorInterlockClosed,
   sheetRotatorInterlockOpen,
   sheetRotatorJam,
   sheetRotatorLifeAlmostOver,
   sheetRotatorLifeOver,
   sheetRotatorMemoryExhausted,
   sheetRotatorMissing,
   sheetRotatorMotorFailure,
   sheetRotatorNearLimit,
   sheetRotatorOffline,
   sheetRotatorOpened,
   sheetRotatorOverTemperature,
   sheetRotatorPowerSaver,
   sheetRotatorRecoverableFailure,
   sheetRotatorRecoverableStorage,
   sheetRotatorRemoved,
   sheetRotatorResourceAdded,
   sheetRotatorResourceRemoved,
   sheetRotatorThermistorFailure,
   sheetRotatorTimingFailure,
   sheetRotatorTurnedOff,
   sheetRotatorTurnedOn,
   sheetRotatorUnderTemperature,
   sheetRotatorUnrecoverableFailure,
   sheetRotatorUnrecoverableStorageError,
   sheetRotatorWarmingUp,
   slitterAdded,
   slitterAlmostEmpty,
   slitterAlmostFull,
   slitterAtLimit,
   slitterClosed,
   slitterConfigurationChange,
   slitterCoverClosed,
   slitterCoverOpen,
   slitterEmpty,
   slitterFull,
   slitterInterlockClosed,
   slitterInterlockOpen,
   slitterJam,
   slitterLifeAlmostOver,
   slitterLifeOver,
   slitterMemoryExhausted,
   slitterMissing,
   slitterMotorFailure,
   slitterNearLimit,
   slitterOffline,
   slitterOpened,
   slitterOverTemperature,
   slitterPowerSaver,
   slitterRecoverableFailure,
   slitterRecoverableStorage,
   slitterRemoved,
   slitterResourceAdded,
   slitterResourceRemoved,
   slitterThermistorFailure,
   slitterTimingFailure,
   slitterTurnedOff,
   slitterTurnedOn,
   slitterUnderTemperature,
   slitterUnrecoverableFailure,
   slitterUnrecoverableStorageError,
   slitterWarmingUp,
   stackerAdded,
   stackerAlmostEmpty,
   stackerAlmostFull,
   stackerAtLimit,
   stackerClosed,
   stackerConfigurationChange,
   stackerCoverClosed,
   stackerCoverOpen,
   stackerEmpty,
   stackerFull,
   stackerInterlockClosed,
   stackerInterlockOpen,
   stackerJam,
   stackerLifeAlmostOver,
   stackerLifeOver,
   stackerMemoryExhausted,
   stackerMissing,
   stackerMotorFailure,
   stackerNearLimit,
   stackerOffline,
   stackerOpened,
   stackerOverTemperature,
   stackerPowerSaver,
   stackerRecoverableFailure,
   stackerRecoverableStorage,
   stackerRemoved,
   stackerResourceAdded,
   stackerResourceRemoved,
   stackerThermistorFailure,
   stackerTimingFailure,
   stackerTurnedOff,
   stackerTurnedOn,
   stackerUnderTemperature,
   stackerUnrecoverableFailure,
   stackerUnrecoverableStorageError,
   stackerWarmingUp,
   standby,
   staplerAdded,
   staplerAlmostEmpty,
   staplerAlmostFull,
   staplerAtLimit,
   staplerClosed,
   staplerConfigurationChange,
   staplerCoverClosed,
   staplerCoverOpen,
   staplerEmpty,
   staplerFull,
   staplerInterlockClosed,
   staplerInterlockOpen,
   staplerJam,
   staplerLifeAlmostOver,
   staplerLifeOver,
   staplerMemoryExhausted,
   staplerMissing,
   staplerMotorFailure,
   staplerNearLimit,
   staplerOffline,
   staplerOpened,
   staplerOverTemperature,
   staplerPowerSaver,
   staplerRecoverableFailure,
   staplerRecoverableStorage,
   staplerRemoved,
   staplerResourceAdded,
   staplerResourceRemoved,
   staplerThermistorFailure,
   staplerTimingFailure,
   staplerTurnedOff,
   staplerTurnedOn,
   staplerUnderTemperature,
   staplerUnrecoverableFailure,
   staplerUnrecoverableStorageError,
   staplerWarmingUp,
   stitcherAdded,
   stitcherAlmostEmpty,
   stitcherAlmostFull,
   stitcherAtLimit,
   stitcherClosed,
   stitcherConfigurationChange,
   stitcherCoverClosed,
   stitcherCoverOpen,
   stitcherEmpty,
   stitcherFull,
   stitcherInterlockClosed,
   stitcherInterlockOpen,
   stitcherJam,
   stitcherLifeAlmostOver,
   stitcherLifeOver,
   stitcherMemoryExhausted,
   stitcherMissing,
   stitcherMotorFailure,
   stitcherNearLimit,
   stitcherOffline,
   stitcherOpened,
   stitcherOverTemperature,
   stitcherPowerSaver,
   stitcherRecoverableFailure,
   stitcherRecoverableStorage,
   stitcherRemoved,
   stitcherResourceAdded,
   stitcherResourceRemoved,
   stitcherThermistorFailure,
   stitcherTimingFailure,
   stitcherTurnedOff,
   stitcherTurnedOn,
   stitcherUnderTemperature,
   stitcherUnrecoverableFailure,
   stitcherUnrecoverableStorageError,
   stitcherWarmingUp,
   subunitAdded,
   subunitAlmostEmpty,
   subunitAlmostFull,
   subunitAtLimit,
   subunitClosed,
   subunitCoolingDown,
   subunitEmpty,
   subunitFull,
   subunitLifeAlmostOver,
   subunitLifeOver,
   subunitMemoryExhausted,
   subunitMissing,
   subunitMotorFailure,
   subunitNearLimit,
   subunitOffline,
   subunitOpened,
   subunitOverTemperature,
   subunitPowerSaver,
   subunitRecoverableFailure,
   subunitRecoverableStorage,
   subunitRemoved,
   subunitResourceAdded,
   subunitResourceRemoved,
   subunitThermistorFailure,
   subunitTimingFailure,
   subunitTurnedOff,
   subunitTurnedOn,
   subunitUnderTemperature,
   subunitUnrecoverableFailure,
   subunitUnrecoverableStorage,
   subunitWarmingUp,
   suspend,
   testing,
   trimmerAdded,
   trimmerAlmostEmpty,
   trimmerAlmostFull,
   trimmerAtLimit,
   trimmerClosed,
   trimmerConfigurationChange,
   trimmerCoverClosed,
   trimmerCoverOpen,
   trimmerEmpty,
   trimmerFull,
   trimmerInterlockClosed,
   trimmerInterlockOpen,
   trimmerJam,
   trimmerLifeAlmostOver,
   trimmerLifeOver,
   trimmerMemoryExhausted,
   trimmerMissing,
   trimmerMotorFailure,
   trimmerNearLimit,
   trimmerOffline,
   trimmerOpened,
   trimmerOverTemperature,
   trimmerPowerSaver,
   trimmerRecoverableFailure,
   trimmerRecoverableStorage,
   trimmerRemoved,
   trimmerResourceAdded,
   trimmerResourceRemoved,
   trimmerThermistorFailure,
   trimmerTimingFailure,
   trimmerTurnedOff,
   trimmerTurnedOn,
   trimmerUnderTemperature,
   trimmerUnrecoverableFailure,
   trimmerUnrecoverableStorageError,
   trimmerWarmingUp,
   unknown,
   wrapperAdded,
   wrapperAlmostEmpty,
   wrapperAlmostFull,
   wrapperAtLimit,
   wrapperClosed,
   wrapperConfigurationChange,
   wrapperCoverClosed,
   wrapperCoverOpen,
   wrapperEmpty,
   wrapperFull,
   wrapperInterlockClosed,
   wrapperInterlockOpen,
   wrapperJam,
   wrapperLifeAlmostOver,
   wrapperLifeOver,
   wrapperMemoryExhausted,
   wrapperMissing,
   wrapperMotorFailure,
   wrapperNearLimit,
   wrapperOffline,
   wrapperOpened,
   wrapperOverTemperature,
   wrapperPowerSaver,
   wrapperRecoverableFailure,
   wrapperRecoverableStorage,
   wrapperRemoved,
   wrapperResourceAdded,
   wrapperResourceRemoved,
   wrapperThermistorFailure,
   wrapperTimingFailure,
   wrapperTurnedOff,
   wrapperTurnedOn,
   wrapperUnderTemperature,
   wrapperUnrecoverableFailure,
   wrapperUnrecoverableStorageError,
   wrapperWarmingUp,
}
export enum MicrosoftGraphPrintEvent{
   jobStarted,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintFinishing{
   none,
   staple,
   punch,
   cover,
   bind,
   saddleStitch,
   stitchEdge,
   stapleTopLeft,
   stapleBottomLeft,
   stapleTopRight,
   stapleBottomRight,
   stitchLeftEdge,
   stitchTopEdge,
   stitchRightEdge,
   stitchBottomEdge,
   stapleDualLeft,
   stapleDualTop,
   stapleDualRight,
   stapleDualBottom,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintJobProcessingState{
   unknown,
   pending,
   processing,
   paused,
   stopped,
   completed,
   canceled,
   aborted,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintJobStateDetail{
   uploadPending,
   transforming,
   completedSuccessfully,
   completedWithWarnings,
   completedWithErrors,
   releaseWait,
   interpreting,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintMultipageLayout{
   clockwiseFromTopLeft,
   counterclockwiseFromTopLeft,
   counterclockwiseFromTopRight,
   clockwiseFromTopRight,
   counterclockwiseFromBottomLeft,
   clockwiseFromBottomLeft,
   counterclockwiseFromBottomRight,
   clockwiseFromBottomRight,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintOperationProcessingState{
   notStarted,
   running,
   succeeded,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintOrientation{
   portrait,
   landscape,
   reverseLandscape,
   reversePortrait,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintQuality{
   low,
   medium,
   high,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintScaling{
   auto,
   shrinkToFit,
   fill,
   fit,
   none,
   unknownFutureValue,
}
export enum MicrosoftGraphPrintTaskProcessingState{
   pending,
   processing,
   completed,
   aborted,
   unknownFutureValue,
}
export enum MicrosoftGraphStatus{
   active,
   updated,
   deleted,
   ignored,
   unknownFutureValue,
}
export enum MicrosoftGraphDataPolicyOperationStatus{
   notStarted,
   running,
   complete,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphAlertFeedback{
   unknown,
   truePositive,
   falsePositive,
   benignPositive,
   unknownFutureValue,
}
export enum MicrosoftGraphAlertSeverity{
   unknown,
   informational,
   low,
   medium,
   high,
   unknownFutureValue,
}
export enum MicrosoftGraphAlertStatus{
   unknown,
   newAlert,
   inProgress,
   resolved,
   dismissed,
   unknownFutureValue,
}
export enum MicrosoftGraphConnectionDirection{
   unknown,
   inbound,
   outbound,
   unknownFutureValue,
}
export enum MicrosoftGraphConnectionStatus{
   unknown,
   attempted,
   succeeded,
   blocked,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphEmailRole{
   unknown,
   sender,
   recipient,
   unknownFutureValue,
}
export enum MicrosoftGraphFileHashType{
   unknown,
   sha1,
   sha256,
   md5,
   authenticodeHash256,
   lsHash,
   ctph,
   unknownFutureValue,
}
export enum MicrosoftGraphLogonType{
   unknown,
   interactive,
   remoteInteractive,
   network,
   batch,
   service,
   unknownFutureValue,
}
export enum MicrosoftGraphProcessIntegrityLevel{
   unknown,
   untrusted,
   low,
   medium,
   high,
   system,
   unknownFutureValue,
}
export enum MicrosoftGraphRegistryHive{
   unknown,
   currentConfig,
   currentUser,
   localMachineSam,
   localMachineSecurity,
   localMachineSoftware,
   localMachineSystem,
   usersDefault,
   unknownFutureValue,
}
export enum MicrosoftGraphRegistryOperation{
   unknown,
   create,
   modify,
   delete,
   unknownFutureValue,
}
export enum MicrosoftGraphRegistryValueType{
   unknown,
   binary,
   dword,
   dwordLittleEndian,
   dwordBigEndian,
   expandSz,
   link,
   multiSz,
   none,
   qword,
   qwordlittleEndian,
   sz,
   unknownFutureValue,
}
export enum MicrosoftGraphSecurityNetworkProtocol{
   unknown,
   ip,
   icmp,
   igmp,
   ggp,
   ipv4,
   tcp,
   pup,
   udp,
   idp,
   ipv6,
   ipv6RoutingHeader,
   ipv6FragmentHeader,
   ipSecEncapsulatingSecurityPayload,
   ipSecAuthenticationHeader,
   icmpV6,
   ipv6NoNextHeader,
   ipv6DestinationOptions,
   nd,
   raw,
   ipx,
   spx,
   spxII,
   unknownFutureValue,
}
export enum MicrosoftGraphSecurityResourceType{
   unknown,
   attacked,
   related,
   unknownFutureValue,
}
export enum MicrosoftGraphUserAccountSecurityType{
   unknown,
   standard,
   power,
   administrator,
   unknownFutureValue,
}
export enum MicrosoftGraphBroadcastMeetingAudience{
   roleIsAttendee,
   organization,
   everyone,
   unknownFutureValue,
}
export enum MicrosoftGraphCallDirection{
   incoming,
   outgoing,
}
export enum MicrosoftGraphCallState{
   incoming,
   establishing,
   established,
   hold,
   transferring,
   transferAccepted,
   redirecting,
   terminating,
   terminated,
   unknownFutureValue,
}
export enum MicrosoftGraphCallTranscriptionState{
   notStarted,
   active,
   inactive,
   unknownFutureValue,
}
export enum MicrosoftGraphChangeType{
   created,
   updated,
   deleted,
}
export enum MicrosoftGraphEndpointType{
   default,
   voicemail,
   skypeForBusiness,
   skypeForBusinessVoipPhone,
   unknownFutureValue,
}
export enum MicrosoftGraphLobbyBypassScope{
   organizer,
   organization,
   organizationAndFederated,
   everyone,
   unknownFutureValue,
   invited,
   organizationExcludingGuests,
}
export enum MicrosoftGraphMediaDirection{
   inactive,
   sendOnly,
   receiveOnly,
   sendReceive,
}
export enum MicrosoftGraphMediaState{
   active,
   inactive,
   unknownFutureValue,
}
export enum MicrosoftGraphMeetingChatMode{
   enabled,
   disabled,
   limited,
   unknownFutureValue,
}
export enum MicrosoftGraphModality{
   audio,
   video,
   videoBasedScreenSharing,
   data,
   unknownFutureValue,
}
export enum MicrosoftGraphOnlineMeetingPresenters{
   everyone,
   organization,
   roleIsPresenter,
   organizer,
   unknownFutureValue,
}
export enum MicrosoftGraphOnlineMeetingRole{
   attendee,
   presenter,
   unknownFutureValue,
   producer,
}
export enum MicrosoftGraphRecordingStatus{
   unknown,
   notRecording,
   recording,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphRejectReason{
   none,
   busy,
   forbidden,
   unknownFutureValue,
}
export enum MicrosoftGraphRoutingMode{
   oneToOne,
   multicast,
   unknownFutureValue,
}
export enum MicrosoftGraphRoutingType{
   forwarded,
   lookup,
   selfFork,
   unknownFutureValue,
}
export enum MicrosoftGraphScreenSharingRole{
   viewer,
   sharer,
}
export enum MicrosoftGraphTone{
   tone0,
   tone1,
   tone2,
   tone3,
   tone4,
   tone5,
   tone6,
   tone7,
   tone8,
   tone9,
   star,
   pound,
   a,
   b,
   c,
   d,
   flash,
}
export enum MicrosoftGraphAttestationLevel{
   attested,
   notAttested,
   unknownFutureValue,
}
export enum MicrosoftGraphAuthenticationMethodKeyStrength{
   normal,
   weak,
   unknown,
}
export enum MicrosoftGraphLifecycleEventType{
   missed,
   subscriptionRemoved,
   reauthorizationRequired,
}
export enum MicrosoftGraphCallRecordingStatus{
   success,
   failure,
   initial,
   chunkFinished,
   unknownFutureValue,
}
export enum MicrosoftGraphChannelMembershipType{
   standard,
   private,
   unknownFutureValue,
}
export enum MicrosoftGraphChatMessageImportance{
   normal,
   high,
   urgent,
   unknownFutureValue,
}
export enum MicrosoftGraphChatMessagePolicyViolationDlpActionTypes{
   none,
   notifySender,
   blockAccess,
   blockAccessExternal,
}
export enum MicrosoftGraphChatMessagePolicyViolationUserActionTypes{
   none,
   override,
   reportFalsePositive,
}
export enum MicrosoftGraphChatMessagePolicyViolationVerdictDetailsTypes{
   none,
   allowFalsePositiveOverride,
   allowOverrideWithoutJustification,
   allowOverrideWithJustification,
}
export enum MicrosoftGraphChatMessageType{
   message,
   chatEvent,
   typing,
   unknownFutureValue,
   systemEventMessage,
}
export enum MicrosoftGraphChatType{
   oneOnOne,
   group,
   meeting,
   unknownFutureValue,
}
export enum MicrosoftGraphClonableTeamParts{
   apps,
   tabs,
   settings,
   channels,
   members,
}
export enum MicrosoftGraphGiphyRatingType{
   strict,
   moderate,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamsAppDistributionMethod{
   store,
   organization,
   sideloaded,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamsAppPublishingState{
   submitted,
   rejected,
   published,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamsAsyncOperationStatus{
   invalid,
   notStarted,
   inProgress,
   succeeded,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamsAsyncOperationType{
   invalid,
   cloneTeam,
   archiveTeam,
   unarchiveTeam,
   createTeam,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamSpecialization{
   none,
   educationStandard,
   educationClass,
   educationProfessionalLearningCommunity,
   educationStaff,
   healthcareStandard,
   healthcareCareCoordination,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamVisibilityType{
   private,
   public,
   hiddenMembership,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamworkActivityTopicSource{
   entityUrl,
   text,
}
export enum MicrosoftGraphTeamworkApplicationIdentityType{
   aadApplication,
   bot,
   tenantBot,
   office365Connector,
   outgoingWebhook,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamworkCallEventType{
   call,
   meeting,
   screenShare,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamworkConversationIdentityType{
   team,
   channel,
   chat,
   unknownFutureValue,
}
export enum MicrosoftGraphTeamworkUserIdentityType{
   aadUser,
   onPremiseAadUser,
   anonymousGuest,
   federatedUser,
   personalMicrosoftAccountUser,
   skypeUser,
   phoneUser,
   unknownFutureValue,
   emailUser,
}
export enum MicrosoftGraphScheduleChangeRequestActor{
   sender,
   recipient,
   manager,
   system,
   unknownFutureValue,
}
export enum MicrosoftGraphScheduleChangeState{
   pending,
   approved,
   declined,
   unknownFutureValue,
}
export enum MicrosoftGraphScheduleEntityTheme{
   white,
   blue,
   green,
   purple,
   pink,
   yellow,
   gray,
   darkBlue,
   darkGreen,
   darkPurple,
   darkPink,
   darkYellow,
   unknownFutureValue,
}
export enum MicrosoftGraphTimeOffReasonIconType{
   none,
   car,
   calendar,
   running,
   plane,
   firstAid,
   doctor,
   notWorking,
   clock,
   juryDuty,
   globe,
   cup,
   phone,
   weather,
   umbrella,
   piggyBank,
   dog,
   cake,
   trafficCone,
   pin,
   sunny,
   unknownFutureValue,
}
export enum MicrosoftGraphWorkforceIntegrationEncryptionProtocol{
   sharedSecret,
   unknownFutureValue,
}
export enum MicrosoftGraphWorkforceIntegrationSupportedEntities{
   none,
   shift,
   swapRequest,
   userShiftPreferences,
   openShift,
   openShiftRequest,
   offerShiftRequest,
   unknownFutureValue,
}
export enum MicrosoftGraphMailDestinationRoutingReason{
   none,
   mailFlowRule,
   safeSender,
   blockedSender,
   advancedSpamFiltering,
   domainAllowList,
   domainBlockList,
   notInAddressBook,
   firstTimeSender,
   autoPurgeToInbox,
   autoPurgeToJunk,
   autoPurgeToDeleted,
   outbound,
   notJunk,
   junk,
   unknownFutureValue,
}
export enum MicrosoftGraphThreatAssessmentContentType{
   mail,
   url,
   file,
}
export enum MicrosoftGraphThreatAssessmentRequestSource{
   undefined,
   user,
   administrator,
}
export enum MicrosoftGraphThreatAssessmentResultType{
   checkPolicy,
   rescan,
   unknownFutureValue,
}
export enum MicrosoftGraphThreatAssessmentStatus{
   pending,
   completed,
}
export enum MicrosoftGraphThreatCategory{
   undefined,
   spam,
   phishing,
   malware,
   unknownFutureValue,
}
export enum MicrosoftGraphThreatExpectedAssessment{
   block,
   unblock,
}
export enum MicrosoftGraphTaskStatus{
   notStarted,
   inProgress,
   completed,
   waitingOnOthers,
   deferred,
}
export enum MicrosoftGraphWellknownListName{
   none,
   defaultList,
   flaggedEmails,
   unknownFutureValue,
}
export interface MicrosoftGraphTermStoreStore extends MicrosoftGraphEntity{
  defaultLanguageTag: string
  languageTags: string[]
  groups: MicrosoftGraphTermStoreGroup[]
  sets: MicrosoftGraphTermStoreSet[]
}
export interface MicrosoftGraphTermStoreGroup extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  displayName: string
  parentSiteId: string
  scope: MicrosoftGraphTermStoreTermGroupScope
  sets: MicrosoftGraphTermStoreSet[]
}
export interface MicrosoftGraphTermStoreSet extends MicrosoftGraphEntity{
  createdDateTime: string
  description: string
  localizedNames: MicrosoftGraphTermStoreLocalizedName[]
  properties: MicrosoftGraphKeyValue[]
  children: MicrosoftGraphTermStoreTerm[]
  parentGroup: MicrosoftGraphTermStoreGroup
  relations: MicrosoftGraphTermStoreRelation[]
  terms: MicrosoftGraphTermStoreTerm[]
}
export interface MicrosoftGraphTermStoreRelation extends MicrosoftGraphEntity{
  relationship: MicrosoftGraphTermStoreRelationType
  fromTerm: MicrosoftGraphTermStoreTerm
  set: MicrosoftGraphTermStoreSet
  toTerm: MicrosoftGraphTermStoreTerm
}
export interface MicrosoftGraphTermStoreTerm extends MicrosoftGraphEntity{
  createdDateTime: string
  descriptions: MicrosoftGraphTermStoreLocalizedDescription[]
  labels: MicrosoftGraphTermStoreLocalizedLabel[]
  lastModifiedDateTime: string
  properties: MicrosoftGraphKeyValue[]
  children: MicrosoftGraphTermStoreTerm[]
  relations: MicrosoftGraphTermStoreRelation[]
  set: MicrosoftGraphTermStoreSet
}
export interface MicrosoftGraphTermStoreLocalizedDescription{
  description: string
  languageTag: string
}
export interface MicrosoftGraphTermStoreLocalizedLabel{
  isDefault: boolean
  languageTag: string
  name: string
}
export interface MicrosoftGraphTermStoreLocalizedName{
  languageTag: string
  name: string
}
export enum MicrosoftGraphTermStoreRelationType{
   pin,
   reuse,
   unknownFutureValue,
}
export enum MicrosoftGraphTermStoreTermGroupScope{
   global,
   system,
   siteCollection,
   unknownFutureValue,
}
export interface MicrosoftGraphCallRecordsCallRecord extends MicrosoftGraphEntity{
  endDateTime: string
  joinWebUrl: string
  lastModifiedDateTime: string
  modalities: MicrosoftGraphCallRecordsModality[]
  organizer: MicrosoftGraphIdentitySet
  participants: MicrosoftGraphIdentitySet[]
  startDateTime: string
  type: MicrosoftGraphCallRecordsCallType
  version: number
  sessions: MicrosoftGraphCallRecordsSession[]
}
export interface MicrosoftGraphCallRecordsSession extends MicrosoftGraphEntity{
  callee: MicrosoftGraphCallRecordsEndpoint
  caller: MicrosoftGraphCallRecordsEndpoint
  endDateTime: string
  failureInfo: MicrosoftGraphCallRecordsFailureInfo
  modalities: MicrosoftGraphCallRecordsModality[]
  startDateTime: string
  segments: MicrosoftGraphCallRecordsSegment[]
}
export interface MicrosoftGraphCallRecordsSegment extends MicrosoftGraphEntity{
  callee: MicrosoftGraphCallRecordsEndpoint
  caller: MicrosoftGraphCallRecordsEndpoint
  endDateTime: string
  failureInfo: MicrosoftGraphCallRecordsFailureInfo
  media: MicrosoftGraphCallRecordsMedia[]
  startDateTime: string
}
export interface MicrosoftGraphCallRecordsUserAgent{
  applicationVersion: string
  headerValue: string
}
export interface MicrosoftGraphCallRecordsClientUserAgent extends MicrosoftGraphCallRecordsUserAgent{
  platform: MicrosoftGraphCallRecordsClientPlatform
  productFamily: MicrosoftGraphCallRecordsProductFamily
}
export interface MicrosoftGraphCallRecordsDeviceInfo{
  captureDeviceDriver: string
  captureDeviceName: string
  captureNotFunctioningEventRatio:  | string
  cpuInsufficentEventRatio:  | string
  deviceClippingEventRatio:  | string
  deviceGlitchEventRatio:  | string
  howlingEventCount: number
  initialSignalLevelRootMeanSquare:  | string
  lowSpeechLevelEventRatio:  | string
  lowSpeechToNoiseEventRatio:  | string
  micGlitchRate:  | string
  receivedNoiseLevel: number
  receivedSignalLevel: number
  renderDeviceDriver: string
  renderDeviceName: string
  renderMuteEventRatio:  | string
  renderNotFunctioningEventRatio:  | string
  renderZeroVolumeEventRatio:  | string
  sentNoiseLevel: number
  sentSignalLevel: number
  speakerGlitchRate:  | string
}
export interface MicrosoftGraphCallRecordsDirectRoutingLogRow{
  calleeNumber: string
  callEndSubReason: number
  callerNumber: string
  callType: string
  correlationId: string
  duration: number
  endDateTime: string
  failureDateTime: string
  finalSipCode: number
  finalSipCodePhrase: string
  id: string
  inviteDateTime: string
  mediaBypassEnabled: boolean
  mediaPathLocation: string
  signalingLocation: string
  startDateTime: string
  successfulCall: boolean
  trunkFullyQualifiedDomainName: string
  userDisplayName: string
  userId: string
  userPrincipalName: string
}
export interface MicrosoftGraphCallRecordsEndpoint{
  userAgent: MicrosoftGraphCallRecordsUserAgent
}
export interface MicrosoftGraphCallRecordsFailureInfo{
  reason: string
  stage: MicrosoftGraphCallRecordsFailureStage
}
export interface MicrosoftGraphCallRecordsFeedbackTokenSet{
}
export interface MicrosoftGraphCallRecordsMedia{
  calleeDevice: MicrosoftGraphCallRecordsDeviceInfo
  calleeNetwork: MicrosoftGraphCallRecordsNetworkInfo
  callerDevice: MicrosoftGraphCallRecordsDeviceInfo
  callerNetwork: MicrosoftGraphCallRecordsNetworkInfo
  label: string
  streams: MicrosoftGraphCallRecordsMediaStream[]
}
export interface MicrosoftGraphCallRecordsNetworkInfo{
  bandwidthLowEventRatio:  | string
  basicServiceSetIdentifier: string
  connectionType: MicrosoftGraphCallRecordsNetworkConnectionType
  delayEventRatio:  | string
  dnsSuffix: string
  ipAddress: string
  linkSpeed: number
  macAddress: string
  networkTransportProtocol: MicrosoftGraphCallRecordsNetworkTransportProtocol
  port: number
  receivedQualityEventRatio:  | string
  reflexiveIPAddress: string
  relayIPAddress: string
  relayPort: number
  sentQualityEventRatio:  | string
  subnet: string
  traceRouteHops: MicrosoftGraphCallRecordsTraceRouteHop[]
  wifiBand: MicrosoftGraphCallRecordsWifiBand
  wifiBatteryCharge: number
  wifiChannel: number
  wifiMicrosoftDriver: string
  wifiMicrosoftDriverVersion: string
  wifiRadioType: MicrosoftGraphCallRecordsWifiRadioType
  wifiSignalStrength: number
  wifiVendorDriver: string
  wifiVendorDriverVersion: string
}
export interface MicrosoftGraphCallRecordsMediaStream{
  audioCodec: MicrosoftGraphCallRecordsAudioCodec
  averageAudioDegradation:  | string
  averageAudioNetworkJitter: string
  averageBandwidthEstimate: number
  averageJitter: string
  averagePacketLossRate:  | string
  averageRatioOfConcealedSamples:  | string
  averageReceivedFrameRate:  | string
  averageRoundTripTime: string
  averageVideoFrameLossPercentage:  | string
  averageVideoFrameRate:  | string
  averageVideoPacketLossRate:  | string
  endDateTime: string
  lowFrameRateRatio:  | string
  lowVideoProcessingCapabilityRatio:  | string
  maxAudioNetworkJitter: string
  maxJitter: string
  maxPacketLossRate:  | string
  maxRatioOfConcealedSamples:  | string
  maxRoundTripTime: string
  packetUtilization: number
  postForwardErrorCorrectionPacketLossRate:  | string
  startDateTime: string
  streamDirection: MicrosoftGraphCallRecordsMediaStreamDirection
  streamId: string
  videoCodec: MicrosoftGraphCallRecordsVideoCodec
  wasMediaBypassed: boolean
}
export interface MicrosoftGraphCallRecordsTraceRouteHop{
  hopCount: number
  ipAddress: string
  roundTripTime: string
}
export interface MicrosoftGraphCallRecordsParticipantEndpoint extends MicrosoftGraphCallRecordsEndpoint{
  feedback: MicrosoftGraphCallRecordsUserFeedback
  identity: MicrosoftGraphIdentitySet
}
export interface MicrosoftGraphCallRecordsUserFeedback{
  rating: MicrosoftGraphCallRecordsUserFeedbackRating
  text: string
  tokens: MicrosoftGraphCallRecordsFeedbackTokenSet
}
export interface MicrosoftGraphCallRecordsPstnCallLogRow{
  callDurationSource: MicrosoftGraphCallRecordsPstnCallDurationSource
  calleeNumber: string
  callerNumber: string
  callId: string
  callType: string
  charge: undefined
  conferenceId: string
  connectionCharge: undefined
  currency: string
  destinationContext: string
  destinationName: string
  duration: number
  endDateTime: string
  id: string
  inventoryType: string
  licenseCapability: string
  operator: string
  startDateTime: string
  tenantCountryCode: string
  usageCountryCode: string
  userDisplayName: string
  userId: string
  userPrincipalName: string
}
export interface MicrosoftGraphCallRecordsServiceEndpoint extends MicrosoftGraphCallRecordsEndpoint{
}
export interface MicrosoftGraphCallRecordsServiceUserAgent extends MicrosoftGraphCallRecordsUserAgent{
  role: MicrosoftGraphCallRecordsServiceRole
}
export enum MicrosoftGraphCallRecordsAudioCodec{
   unknown,
   invalid,
   cn,
   pcma,
   pcmu,
   amrWide,
   g722,
   g7221,
   g7221c,
   g729,
   multiChannelAudio,
   muchv2,
   opus,
   satin,
   satinFullband,
   rtAudio8,
   rtAudio16,
   silk,
   silkNarrow,
   silkWide,
   siren,
   xmsRta,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsCallType{
   unknown,
   groupCall,
   peerToPeer,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsClientPlatform{
   unknown,
   windows,
   macOS,
   iOS,
   android,
   web,
   ipPhone,
   roomSystem,
   surfaceHub,
   holoLens,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsFailureStage{
   unknown,
   callSetup,
   midcall,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsMediaStreamDirection{
   callerToCallee,
   calleeToCaller,
}
export enum MicrosoftGraphCallRecordsModality{
   audio,
   video,
   videoBasedScreenSharing,
   data,
   screenSharing,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsNetworkConnectionType{
   unknown,
   wired,
   wifi,
   mobile,
   tunnel,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsNetworkTransportProtocol{
   unknown,
   udp,
   tcp,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsProductFamily{
   unknown,
   teams,
   skypeForBusiness,
   lync,
   unknownFutureValue,
   azureCommunicationServices,
}
export enum MicrosoftGraphCallRecordsPstnCallDurationSource{
   microsoft,
   operator,
}
export enum MicrosoftGraphCallRecordsServiceRole{
   unknown,
   customBot,
   skypeForBusinessMicrosoftTeamsGateway,
   skypeForBusinessAudioVideoMcu,
   skypeForBusinessApplicationSharingMcu,
   skypeForBusinessCallQueues,
   skypeForBusinessAutoAttendant,
   mediationServer,
   mediationServerCloudConnectorEdition,
   exchangeUnifiedMessagingService,
   mediaController,
   conferencingAnnouncementService,
   conferencingAttendant,
   audioTeleconferencerController,
   skypeForBusinessUnifiedCommunicationApplicationPlatform,
   responseGroupServiceAnnouncementService,
   gateway,
   skypeTranslator,
   skypeForBusinessAttendant,
   responseGroupService,
   voicemail,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsUserFeedbackRating{
   notRated,
   bad,
   poor,
   fair,
   good,
   excellent,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsVideoCodec{
   unknown,
   invalid,
   av1,
   h263,
   h264,
   h264s,
   h264uc,
   h265,
   rtvc1,
   rtVideo,
   xrtvc1,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsWifiBand{
   unknown,
   frequency24GHz,
   frequency50GHz,
   frequency60GHz,
   unknownFutureValue,
}
export enum MicrosoftGraphCallRecordsWifiRadioType{
   unknown,
   wifi80211a,
   wifi80211b,
   wifi80211g,
   wifi80211n,
   wifi80211ac,
   wifi80211ax,
   unknownFutureValue,
}
export interface MicrosoftGraphExternalConnectorsConnectionOperation extends MicrosoftGraphEntity{
  error: MicrosoftGraphPublicError
  status: MicrosoftGraphExternalConnectorsConnectionOperationStatus
}
export interface MicrosoftGraphExternalConnectorsExternal{
  connections: MicrosoftGraphExternalConnectorsExternalConnection[]
}
export interface MicrosoftGraphExternalConnectorsExternalConnection extends MicrosoftGraphEntity{
  configuration: MicrosoftGraphExternalConnectorsConfiguration
  description: string
  name: string
  state: MicrosoftGraphExternalConnectorsConnectionState
  groups: MicrosoftGraphExternalConnectorsExternalGroup[]
  items: MicrosoftGraphExternalConnectorsExternalItem[]
  operations: MicrosoftGraphExternalConnectorsConnectionOperation[]
  schema: MicrosoftGraphExternalConnectorsSchema
}
export interface MicrosoftGraphExternalConnectorsExternalGroup extends MicrosoftGraphEntity{
  description: string
  displayName: string
  members: MicrosoftGraphExternalConnectorsIdentity[]
}
export interface MicrosoftGraphExternalConnectorsExternalItem extends MicrosoftGraphEntity{
  acl: MicrosoftGraphExternalConnectorsAcl[]
  content: MicrosoftGraphExternalConnectorsExternalItemContent
  properties: MicrosoftGraphExternalConnectorsProperties
}
export interface MicrosoftGraphExternalConnectorsSchema extends MicrosoftGraphEntity{
  baseType: string
  properties: MicrosoftGraphExternalConnectorsProperty[]
}
export interface MicrosoftGraphExternalConnectorsIdentity extends MicrosoftGraphEntity{
  type: MicrosoftGraphExternalConnectorsIdentityType
}
export interface MicrosoftGraphExternalConnectorsAcl{
  accessType: MicrosoftGraphExternalConnectorsAccessType
  type: MicrosoftGraphExternalConnectorsAclType
  value: string
}
export interface MicrosoftGraphExternalConnectorsConfiguration{
  authorizedAppIds: string[]
}
export interface MicrosoftGraphExternalConnectorsExternalItemContent{
  type: MicrosoftGraphExternalConnectorsExternalItemContentType
  value: string
}
export interface MicrosoftGraphExternalConnectorsProperties{
}
export interface MicrosoftGraphExternalConnectorsProperty{
  aliases: string[]
  isQueryable: boolean
  isRefinable: boolean
  isRetrievable: boolean
  isSearchable: boolean
  labels: MicrosoftGraphExternalConnectorsLabel[]
  name: string
  type: MicrosoftGraphExternalConnectorsPropertyType
}
export enum MicrosoftGraphExternalConnectorsAccessType{
   grant,
   deny,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalConnectorsAclType{
   user,
   group,
   everyone,
   everyoneExceptGuests,
   externalGroup,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalConnectorsConnectionOperationStatus{
   unspecified,
   inprogress,
   completed,
   failed,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalConnectorsConnectionState{
   draft,
   ready,
   obsolete,
   limitExceeded,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalConnectorsExternalItemContentType{
   text,
   html,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalConnectorsIdentityType{
   user,
   group,
   externalGroup,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalConnectorsLabel{
   title,
   url,
   createdBy,
   lastModifiedBy,
   authors,
   createdDateTime,
   lastModifiedDateTime,
   fileName,
   fileExtension,
   unknownFutureValue,
}
export enum MicrosoftGraphExternalConnectorsPropertyType{
   string,
   int64,
   double,
   dateTime,
   boolean,
   stringCollection,
   int64Collection,
   doubleCollection,
   dateTimeCollection,
   unknownFutureValue,
}
export interface MicrosoftGraphODataErrorsODataError{
  error: MicrosoftGraphODataErrorsMainError
}
export interface MicrosoftGraphODataErrorsMainError{
  code: string
  message: string
  target: string
  details: MicrosoftGraphODataErrorsErrorDetails[]
  innererror: MicrosoftGraphODataErrorsInnerError
}
export interface MicrosoftGraphODataErrorsErrorDetails{
  code: string
  message: string
  target: string
}
export interface MicrosoftGraphODataErrorsInnerError{
  "request-id": string
  "client-request-id": string
  "Date": string
}
export interface ODataCountResponse{
}
export interface MicrosoftGraphDriveItemCollectionResponse{
  value: MicrosoftGraphDriveItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphInvitationCollectionResponse{
  value: MicrosoftGraphInvitation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserCollectionResponse{
  value: MicrosoftGraphUser[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphApplicationTemplateCollectionResponse{
  value: MicrosoftGraphApplicationTemplate[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAuthenticationMethodConfigurationCollectionResponse{
  value: MicrosoftGraphAuthenticationMethodConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentityProviderCollectionResponse{
  value: MicrosoftGraphIdentityProvider[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphApplicationCollectionResponse{
  value: MicrosoftGraphApplication[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCertificateBasedAuthConfigurationCollectionResponse{
  value: MicrosoftGraphCertificateBasedAuthConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOrgContactCollectionResponse{
  value: MicrosoftGraphOrgContact[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphContractCollectionResponse{
  value: MicrosoftGraphContract[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceCollectionResponse{
  value: MicrosoftGraphDevice[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDirectoryObjectCollectionResponse{
  value: MicrosoftGraphDirectoryObject[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDirectoryRoleCollectionResponse{
  value: MicrosoftGraphDirectoryRole[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDirectoryRoleTemplateCollectionResponse{
  value: MicrosoftGraphDirectoryRoleTemplate[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDomainDnsRecordCollectionResponse{
  value: MicrosoftGraphDomainDnsRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDomainCollectionResponse{
  value: MicrosoftGraphDomain[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphGroupCollectionResponse{
  value: MicrosoftGraphGroup[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphGroupSettingCollectionResponse{
  value: MicrosoftGraphGroupSetting[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphGroupSettingTemplateCollectionResponse{
  value: MicrosoftGraphGroupSettingTemplate[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOrganizationalBrandingLocalizationCollectionResponse{
  value: MicrosoftGraphOrganizationalBrandingLocalization[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOAuth2PermissionGrantCollectionResponse{
  value: MicrosoftGraphOAuth2PermissionGrant[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOrganizationCollectionResponse{
  value: MicrosoftGraphOrganization[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphResourceSpecificPermissionGrantCollectionResponse{
  value: MicrosoftGraphResourceSpecificPermissionGrant[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphScopedRoleMembershipCollectionResponse{
  value: MicrosoftGraphScopedRoleMembership[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphServicePrincipalCollectionResponse{
  value: MicrosoftGraphServicePrincipal[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSubscribedSkuCollectionResponse{
  value: MicrosoftGraphSubscribedSku[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPlaceCollectionResponse{
  value: MicrosoftGraphPlace[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDriveCollectionResponse{
  value: MicrosoftGraphDrive[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSharedDriveItemCollectionResponse{
  value: MicrosoftGraphSharedDriveItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSiteCollectionResponse{
  value: MicrosoftGraphSite[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSchemaExtensionCollectionResponse{
  value: MicrosoftGraphSchemaExtension[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphGroupLifecyclePolicyCollectionResponse{
  value: MicrosoftGraphGroupLifecyclePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAgreementAcceptanceCollectionResponse{
  value: MicrosoftGraphAgreementAcceptance[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAgreementCollectionResponse{
  value: MicrosoftGraphAgreement[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDataPolicyOperationCollectionResponse{
  value: MicrosoftGraphDataPolicyOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSubscriptionCollectionResponse{
  value: MicrosoftGraphSubscription[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalConnectorsExternalConnectionCollectionResponse{
  value: MicrosoftGraphExternalConnectorsExternalConnection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChatCollectionResponse{
  value: MicrosoftGraphChat[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamCollectionResponse{
  value: MicrosoftGraphTeam[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamsTemplateCollectionResponse{
  value: MicrosoftGraphTeamsTemplate[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDirectoryAuditCollectionResponse{
  value: MicrosoftGraphDirectoryAudit[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphProvisioningObjectSummaryCollectionResponse{
  value: MicrosoftGraphProvisioningObjectSummary[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRestrictedSignInCollectionResponse{
  value: MicrosoftGraphRestrictedSignIn[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSignInCollectionResponse{
  value: MicrosoftGraphSignIn[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppRoleAssignmentCollectionResponse{
  value: MicrosoftGraphAppRoleAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphLicenseDetailsCollectionResponse{
  value: MicrosoftGraphLicenseDetails[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCalendarGroupCollectionResponse{
  value: MicrosoftGraphCalendarGroup[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCalendarCollectionResponse{
  value: MicrosoftGraphCalendar[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEventCollectionResponse{
  value: MicrosoftGraphEvent[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphContactFolderCollectionResponse{
  value: MicrosoftGraphContactFolder[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphContactCollectionResponse{
  value: MicrosoftGraphContact[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMailFolderCollectionResponse{
  value: MicrosoftGraphMailFolder[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMessageCollectionResponse{
  value: MicrosoftGraphMessage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPersonCollectionResponse{
  value: MicrosoftGraphPerson[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExtensionCollectionResponse{
  value: MicrosoftGraphExtension[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedDeviceCollectionResponse{
  value: MicrosoftGraphManagedDevice[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppRegistrationCollectionResponse{
  value: MicrosoftGraphManagedAppRegistration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceManagementTroubleshootingEventCollectionResponse{
  value: MicrosoftGraphDeviceManagementTroubleshootingEvent[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphProfilePhotoCollectionResponse{
  value: MicrosoftGraphProfilePhoto[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserActivityCollectionResponse{
  value: MicrosoftGraphUserActivity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOnlineMeetingCollectionResponse{
  value: MicrosoftGraphOnlineMeeting[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCalendarPermissionCollectionResponse{
  value: MicrosoftGraphCalendarPermission[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMultiValueLegacyExtendedPropertyCollectionResponse{
  value: MicrosoftGraphMultiValueLegacyExtendedProperty[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSingleValueLegacyExtendedPropertyCollectionResponse{
  value: MicrosoftGraphSingleValueLegacyExtendedProperty[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAttachmentCollectionResponse{
  value: MicrosoftGraphAttachment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphInferenceClassificationOverrideCollectionResponse{
  value: MicrosoftGraphInferenceClassificationOverride[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMessageRuleCollectionResponse{
  value: MicrosoftGraphMessageRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOutlookCategoryCollectionResponse{
  value: MicrosoftGraphOutlookCategory[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphColumnDefinitionCollectionResponse{
  value: MicrosoftGraphColumnDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphContentTypeCollectionResponse{
  value: MicrosoftGraphContentType[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBaseItemCollectionResponse{
  value: MicrosoftGraphBaseItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphListCollectionResponse{
  value: MicrosoftGraphList[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRichLongRunningOperationCollectionResponse{
  value: MicrosoftGraphRichLongRunningOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPermissionCollectionResponse{
  value: MicrosoftGraphPermission[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreStoreCollectionResponse{
  value: MicrosoftGraphTermStoreStore[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceCompliancePolicyStateCollectionResponse{
  value: MicrosoftGraphDeviceCompliancePolicyState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceConfigurationStateCollectionResponse{
  value: MicrosoftGraphDeviceConfigurationState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppPolicyCollectionResponse{
  value: MicrosoftGraphManagedAppPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppOperationCollectionResponse{
  value: MicrosoftGraphManagedAppOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPlannerPlanCollectionResponse{
  value: MicrosoftGraphPlannerPlan[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPlannerTaskCollectionResponse{
  value: MicrosoftGraphPlannerTask[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSharedInsightCollectionResponse{
  value: MicrosoftGraphSharedInsight[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTrendingCollectionResponse{
  value: MicrosoftGraphTrending[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUsedInsightCollectionResponse{
  value: MicrosoftGraphUsedInsight[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphNotebookCollectionResponse{
  value: MicrosoftGraphNotebook[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOnenoteOperationCollectionResponse{
  value: MicrosoftGraphOnenoteOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOnenotePageCollectionResponse{
  value: MicrosoftGraphOnenotePage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOnenoteResourceCollectionResponse{
  value: MicrosoftGraphOnenoteResource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSectionGroupCollectionResponse{
  value: MicrosoftGraphSectionGroup[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOnenoteSectionCollectionResponse{
  value: MicrosoftGraphOnenoteSection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphActivityHistoryItemCollectionResponse{
  value: MicrosoftGraphActivityHistoryItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMeetingAttendanceReportCollectionResponse{
  value: MicrosoftGraphMeetingAttendanceReport[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphFido2AuthenticationMethodCollectionResponse{
  value: MicrosoftGraphFido2AuthenticationMethod[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAuthenticationMethodCollectionResponse{
  value: MicrosoftGraphAuthenticationMethod[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodCollectionResponse{
  value: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTemporaryAccessPassAuthenticationMethodCollectionResponse{
  value: MicrosoftGraphTemporaryAccessPassAuthenticationMethod[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsHelloForBusinessAuthenticationMethodCollectionResponse{
  value: MicrosoftGraphWindowsHelloForBusinessAuthenticationMethod[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamsAppInstallationCollectionResponse{
  value: MicrosoftGraphTeamsAppInstallation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphConversationMemberCollectionResponse{
  value: MicrosoftGraphConversationMember[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChatMessageCollectionResponse{
  value: MicrosoftGraphChatMessage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamsTabCollectionResponse{
  value: MicrosoftGraphTeamsTab[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChannelCollectionResponse{
  value: MicrosoftGraphChannel[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamsAsyncOperationCollectionResponse{
  value: MicrosoftGraphTeamsAsyncOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserScopeTeamsAppInstallationCollectionResponse{
  value: MicrosoftGraphUserScopeTeamsAppInstallation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTodoTaskListCollectionResponse{
  value: MicrosoftGraphTodoTaskList[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExtensionPropertyCollectionResponse{
  value: MicrosoftGraphExtensionProperty[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphHomeRealmDiscoveryPolicyCollectionResponse{
  value: MicrosoftGraphHomeRealmDiscoveryPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTokenIssuancePolicyCollectionResponse{
  value: MicrosoftGraphTokenIssuancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTokenLifetimePolicyCollectionResponse{
  value: MicrosoftGraphTokenLifetimePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphClaimsMappingPolicyCollectionResponse{
  value: MicrosoftGraphClaimsMappingPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDelegatedPermissionClassificationCollectionResponse{
  value: MicrosoftGraphDelegatedPermissionClassification[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEndpointCollectionResponse{
  value: MicrosoftGraphEndpoint[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAuthenticationMethodTargetCollectionResponse{
  value: MicrosoftGraphAuthenticationMethodTarget[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse{
  value: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTarget[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphActivityBasedTimeoutPolicyCollectionResponse{
  value: MicrosoftGraphActivityBasedTimeoutPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPermissionGrantPolicyCollectionResponse{
  value: MicrosoftGraphPermissionGrantPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphFeatureRolloutPolicyCollectionResponse{
  value: MicrosoftGraphFeatureRolloutPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphConditionalAccessPolicyCollectionResponse{
  value: MicrosoftGraphConditionalAccessPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyAssignmentCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicyAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPermissionGrantConditionSetCollectionResponse{
  value: MicrosoftGraphPermissionGrantConditionSet[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyRuleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicyRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBitlockerRecoveryKeyCollectionResponse{
  value: MicrosoftGraphBitlockerRecoveryKey[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphThreatAssessmentRequestCollectionResponse{
  value: MicrosoftGraphThreatAssessmentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphThreatAssessmentResultCollectionResponse{
  value: MicrosoftGraphThreatAssessmentResult[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingAppointmentCollectionResponse{
  value: MicrosoftGraphBookingAppointment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingCustomerBaseCollectionResponse{
  value: MicrosoftGraphBookingCustomerBase[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingCustomQuestionCollectionResponse{
  value: MicrosoftGraphBookingCustomQuestion[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingServiceCollectionResponse{
  value: MicrosoftGraphBookingService[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingStaffMemberBaseCollectionResponse{
  value: MicrosoftGraphBookingStaffMemberBase[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingBusinessCollectionResponse{
  value: MicrosoftGraphBookingBusiness[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingCurrencyCollectionResponse{
  value: MicrosoftGraphBookingCurrency[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSubjectRightsRequestCollectionResponse{
  value: MicrosoftGraphSubjectRightsRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAuthoredNoteCollectionResponse{
  value: MicrosoftGraphAuthoredNote[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphConversationCollectionResponse{
  value: MicrosoftGraphConversation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphConversationThreadCollectionResponse{
  value: MicrosoftGraphConversationThread[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOfferShiftRequestCollectionResponse{
  value: MicrosoftGraphOfferShiftRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOpenShiftChangeRequestCollectionResponse{
  value: MicrosoftGraphOpenShiftChangeRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOpenShiftCollectionResponse{
  value: MicrosoftGraphOpenShift[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSchedulingGroupCollectionResponse{
  value: MicrosoftGraphSchedulingGroup[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphShiftCollectionResponse{
  value: MicrosoftGraphShift[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSwapShiftsChangeRequestCollectionResponse{
  value: MicrosoftGraphSwapShiftsChangeRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTimeOffReasonCollectionResponse{
  value: MicrosoftGraphTimeOffReason[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTimeOffRequestCollectionResponse{
  value: MicrosoftGraphTimeOffRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTimeOffCollectionResponse{
  value: MicrosoftGraphTimeOff[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPostCollectionResponse{
  value: MicrosoftGraphPost[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAlertCollectionResponse{
  value: MicrosoftGraphAlert[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSecureScoreControlProfileCollectionResponse{
  value: MicrosoftGraphSecureScoreControlProfile[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSecureScoreCollectionResponse{
  value: MicrosoftGraphSecureScore[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphItemActivityStatCollectionResponse{
  value: MicrosoftGraphItemActivityStat[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphColumnLinkCollectionResponse{
  value: MicrosoftGraphColumnLink[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphListItemCollectionResponse{
  value: MicrosoftGraphListItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserFlowLanguageConfigurationCollectionResponse{
  value: MicrosoftGraphUserFlowLanguageConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentityUserFlowAttributeAssignmentCollectionResponse{
  value: MicrosoftGraphIdentityUserFlowAttributeAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentityProviderBaseCollectionResponse{
  value: MicrosoftGraphIdentityProviderBase[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserFlowLanguagePageCollectionResponse{
  value: MicrosoftGraphUserFlowLanguagePage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentityApiConnectorCollectionResponse{
  value: MicrosoftGraphIdentityApiConnector[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphB2xIdentityUserFlowCollectionResponse{
  value: MicrosoftGraphB2xIdentityUserFlow[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentityUserFlowAttributeCollectionResponse{
  value: MicrosoftGraphIdentityUserFlowAttribute[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphNamedLocationCollectionResponse{
  value: MicrosoftGraphNamedLocation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAdministrativeUnitCollectionResponse{
  value: MicrosoftGraphAdministrativeUnit[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphInternalDomainFederationCollectionResponse{
  value: MicrosoftGraphInternalDomainFederation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleAssignmentCollectionResponse{
  value: MicrosoftGraphUnifiedRoleAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleDefinitionCollectionResponse{
  value: MicrosoftGraphUnifiedRoleDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleAssignmentScheduleInstanceCollectionResponse{
  value: MicrosoftGraphUnifiedRoleAssignmentScheduleInstance[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleAssignmentScheduleRequestCollectionResponse{
  value: MicrosoftGraphUnifiedRoleAssignmentScheduleRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleAssignmentScheduleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleAssignmentSchedule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleEligibilityScheduleInstanceCollectionResponse{
  value: MicrosoftGraphUnifiedRoleEligibilityScheduleInstance[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleEligibilityScheduleRequestCollectionResponse{
  value: MicrosoftGraphUnifiedRoleEligibilityScheduleRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleEligibilityScheduleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleEligibilitySchedule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalDomainNameCollectionResponse{
  value: MicrosoftGraphExternalDomainName[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationCategoryCollectionResponse{
  value: MicrosoftGraphEducationCategory[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationAssignmentResourceCollectionResponse{
  value: MicrosoftGraphEducationAssignmentResource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationSubmissionCollectionResponse{
  value: MicrosoftGraphEducationSubmission[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationOutcomeCollectionResponse{
  value: MicrosoftGraphEducationOutcome[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationSubmissionResourceCollectionResponse{
  value: MicrosoftGraphEducationSubmissionResource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationAssignmentCollectionResponse{
  value: MicrosoftGraphEducationAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationUserCollectionResponse{
  value: MicrosoftGraphEducationUser[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationSchoolCollectionResponse{
  value: MicrosoftGraphEducationSchool[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationRubricCollectionResponse{
  value: MicrosoftGraphEducationRubric[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationClassCollectionResponse{
  value: MicrosoftGraphEducationClass[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphThumbnailSetCollectionResponse{
  value: MicrosoftGraphThumbnailSet[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDriveItemVersionCollectionResponse{
  value: MicrosoftGraphDriveItemVersion[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookCommentCollectionResponse{
  value: MicrosoftGraphWorkbookComment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookNamedItemCollectionResponse{
  value: MicrosoftGraphWorkbookNamedItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookOperationCollectionResponse{
  value: MicrosoftGraphWorkbookOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookTableCollectionResponse{
  value: MicrosoftGraphWorkbookTable[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookWorksheetCollectionResponse{
  value: MicrosoftGraphWorkbookWorksheet[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphListItemVersionCollectionResponse{
  value: MicrosoftGraphListItemVersion[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookCommentReplyCollectionResponse{
  value: MicrosoftGraphWorkbookCommentReply[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookTableColumnCollectionResponse{
  value: MicrosoftGraphWorkbookTableColumn[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookTableRowCollectionResponse{
  value: MicrosoftGraphWorkbookTableRow[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookChartCollectionResponse{
  value: MicrosoftGraphWorkbookChart[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookPivotTableCollectionResponse{
  value: MicrosoftGraphWorkbookPivotTable[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookChartSeriesCollectionResponse{
  value: MicrosoftGraphWorkbookChartSeries[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookChartPointCollectionResponse{
  value: MicrosoftGraphWorkbookChartPoint[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookRangeBorderCollectionResponse{
  value: MicrosoftGraphWorkbookRangeBorder[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookRangeViewCollectionResponse{
  value: MicrosoftGraphWorkbookRangeView[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRoomCollectionResponse{
  value: MicrosoftGraphRoom[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphItemActivityCollectionResponse{
  value: MicrosoftGraphItemActivity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallCollectionResponse{
  value: MicrosoftGraphCall[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallRecordsCallRecordCollectionResponse{
  value: MicrosoftGraphCallRecordsCallRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPresenceCollectionResponse{
  value: MicrosoftGraphPresence[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAudioRoutingGroupCollectionResponse{
  value: MicrosoftGraphAudioRoutingGroup[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCommsOperationCollectionResponse{
  value: MicrosoftGraphCommsOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphParticipantCollectionResponse{
  value: MicrosoftGraphParticipant[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewHistoryInstanceCollectionResponse{
  value: MicrosoftGraphAccessReviewHistoryInstance[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewReviewerCollectionResponse{
  value: MicrosoftGraphAccessReviewReviewer[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemCollectionResponse{
  value: MicrosoftGraphAccessReviewInstanceDecisionItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewStageCollectionResponse{
  value: MicrosoftGraphAccessReviewStage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewInstanceCollectionResponse{
  value: MicrosoftGraphAccessReviewInstance[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewScheduleDefinitionCollectionResponse{
  value: MicrosoftGraphAccessReviewScheduleDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewHistoryDefinitionCollectionResponse{
  value: MicrosoftGraphAccessReviewHistoryDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppConsentRequestCollectionResponse{
  value: MicrosoftGraphAppConsentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserConsentRequestCollectionResponse{
  value: MicrosoftGraphUserConsentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphApprovalStageCollectionResponse{
  value: MicrosoftGraphApprovalStage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphApprovalCollectionResponse{
  value: MicrosoftGraphApproval[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessPackageCollectionResponse{
  value: MicrosoftGraphAccessPackage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessPackageAssignmentPolicyCollectionResponse{
  value: MicrosoftGraphAccessPackageAssignmentPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessPackageAssignmentRequestCollectionResponse{
  value: MicrosoftGraphAccessPackageAssignmentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessPackageAssignmentCollectionResponse{
  value: MicrosoftGraphAccessPackageAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessPackageCatalogCollectionResponse{
  value: MicrosoftGraphAccessPackageCatalog[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphConnectedOrganizationCollectionResponse{
  value: MicrosoftGraphConnectedOrganization[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAgreementFileLocalizationCollectionResponse{
  value: MicrosoftGraphAgreementFileLocalization[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAgreementFileVersionCollectionResponse{
  value: MicrosoftGraphAgreementFileVersion[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRiskDetectionCollectionResponse{
  value: MicrosoftGraphRiskDetection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRiskyUserCollectionResponse{
  value: MicrosoftGraphRiskyUser[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRiskyUserHistoryItemCollectionResponse{
  value: MicrosoftGraphRiskyUserHistoryItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMobileAppAssignmentCollectionResponse{
  value: MicrosoftGraphMobileAppAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMobileAppCategoryCollectionResponse{
  value: MicrosoftGraphMobileAppCategory[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMobileAppContentCollectionResponse{
  value: MicrosoftGraphMobileAppContent[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedEBookCollectionResponse{
  value: MicrosoftGraphManagedEBook[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationCollectionResponse{
  value: MicrosoftGraphManagedDeviceMobileAppConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMobileAppCollectionResponse{
  value: MicrosoftGraphMobileApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphVppTokenCollectionResponse{
  value: MicrosoftGraphVppToken[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidManagedAppProtectionCollectionResponse{
  value: MicrosoftGraphAndroidManagedAppProtection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDefaultManagedAppProtectionCollectionResponse{
  value: MicrosoftGraphDefaultManagedAppProtection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosManagedAppProtectionCollectionResponse{
  value: MicrosoftGraphIosManagedAppProtection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppStatusCollectionResponse{
  value: MicrosoftGraphManagedAppStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMdmWindowsInformationProtectionPolicyCollectionResponse{
  value: MicrosoftGraphMdmWindowsInformationProtectionPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTargetedManagedAppConfigurationCollectionResponse{
  value: MicrosoftGraphTargetedManagedAppConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionPolicyCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedEBookAssignmentCollectionResponse{
  value: MicrosoftGraphManagedEBookAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceInstallStateCollectionResponse{
  value: MicrosoftGraphDeviceInstallState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserInstallStateSummaryCollectionResponse{
  value: MicrosoftGraphUserInstallStateSummary[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationAssignmentCollectionResponse{
  value: MicrosoftGraphManagedDeviceMobileAppConfigurationAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse{
  value: MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatusCollectionResponse{
  value: MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTargetedManagedAppPolicyAssignmentCollectionResponse{
  value: MicrosoftGraphTargetedManagedAppPolicyAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedMobileAppCollectionResponse{
  value: MicrosoftGraphManagedMobileApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionAppLockerFileCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionAppLockerFile[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMobileAppContentFileCollectionResponse{
  value: MicrosoftGraphMobileAppContentFile[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermsAndConditionsCollectionResponse{
  value: MicrosoftGraphTermsAndConditions[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceCompliancePolicyCollectionResponse{
  value: MicrosoftGraphDeviceCompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceCompliancePolicySettingStateSummaryCollectionResponse{
  value: MicrosoftGraphDeviceCompliancePolicySettingStateSummary[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceConfigurationCollectionResponse{
  value: MicrosoftGraphDeviceConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosUpdateDeviceStatusCollectionResponse{
  value: MicrosoftGraphIosUpdateDeviceStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphComplianceManagementPartnerCollectionResponse{
  value: MicrosoftGraphComplianceManagementPartner[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceCategoryCollectionResponse{
  value: MicrosoftGraphDeviceCategory[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceEnrollmentConfigurationCollectionResponse{
  value: MicrosoftGraphDeviceEnrollmentConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceManagementPartnerCollectionResponse{
  value: MicrosoftGraphDeviceManagementPartner[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceManagementExchangeConnectorCollectionResponse{
  value: MicrosoftGraphDeviceManagementExchangeConnector[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMobileThreatDefenseConnectorCollectionResponse{
  value: MicrosoftGraphMobileThreatDefenseConnector[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDetectedAppCollectionResponse{
  value: MicrosoftGraphDetectedApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphImportedWindowsAutopilotDeviceIdentityCollectionResponse{
  value: MicrosoftGraphImportedWindowsAutopilotDeviceIdentity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsAutopilotDeviceIdentityCollectionResponse{
  value: MicrosoftGraphWindowsAutopilotDeviceIdentity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphNotificationMessageTemplateCollectionResponse{
  value: MicrosoftGraphNotificationMessageTemplate[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphResourceOperationCollectionResponse{
  value: MicrosoftGraphResourceOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceAndAppManagementRoleAssignmentCollectionResponse{
  value: MicrosoftGraphDeviceAndAppManagementRoleAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRoleDefinitionCollectionResponse{
  value: MicrosoftGraphRoleDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRemoteAssistancePartnerCollectionResponse{
  value: MicrosoftGraphRemoteAssistancePartner[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTelecomExpenseManagementPartnerCollectionResponse{
  value: MicrosoftGraphTelecomExpenseManagementPartner[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionAppLearningSummaryCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionAppLearningSummary[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionNetworkLearningSummaryCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionNetworkLearningSummary[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermsAndConditionsAcceptanceStatusCollectionResponse{
  value: MicrosoftGraphTermsAndConditionsAcceptanceStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermsAndConditionsAssignmentCollectionResponse{
  value: MicrosoftGraphTermsAndConditionsAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceCompliancePolicyAssignmentCollectionResponse{
  value: MicrosoftGraphDeviceCompliancePolicyAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSettingStateDeviceSummaryCollectionResponse{
  value: MicrosoftGraphSettingStateDeviceSummary[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceComplianceDeviceStatusCollectionResponse{
  value: MicrosoftGraphDeviceComplianceDeviceStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceComplianceScheduledActionForRuleCollectionResponse{
  value: MicrosoftGraphDeviceComplianceScheduledActionForRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceComplianceUserStatusCollectionResponse{
  value: MicrosoftGraphDeviceComplianceUserStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceComplianceSettingStateCollectionResponse{
  value: MicrosoftGraphDeviceComplianceSettingState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceConfigurationAssignmentCollectionResponse{
  value: MicrosoftGraphDeviceConfigurationAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceConfigurationDeviceStatusCollectionResponse{
  value: MicrosoftGraphDeviceConfigurationDeviceStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceConfigurationUserStatusCollectionResponse{
  value: MicrosoftGraphDeviceConfigurationUserStatus[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEnrollmentConfigurationAssignmentCollectionResponse{
  value: MicrosoftGraphEnrollmentConfigurationAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphLocalizedNotificationMessageCollectionResponse{
  value: MicrosoftGraphLocalizedNotificationMessage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRoleAssignmentCollectionResponse{
  value: MicrosoftGraphRoleAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceManagementExportJobCollectionResponse{
  value: MicrosoftGraphDeviceManagementExportJob[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceComplianceActionItemCollectionResponse{
  value: MicrosoftGraphDeviceComplianceActionItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintUsageByPrinterCollectionResponse{
  value: MicrosoftGraphPrintUsageByPrinter[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintUsageByUserCollectionResponse{
  value: MicrosoftGraphPrintUsageByUser[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphServiceHealthCollectionResponse{
  value: MicrosoftGraphServiceHealth[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphServiceHealthIssueCollectionResponse{
  value: MicrosoftGraphServiceHealthIssue[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphServiceUpdateMessageCollectionResponse{
  value: MicrosoftGraphServiceUpdateMessage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphServiceAnnouncementAttachmentCollectionResponse{
  value: MicrosoftGraphServiceAnnouncementAttachment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPlannerBucketCollectionResponse{
  value: MicrosoftGraphPlannerBucket[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintConnectorCollectionResponse{
  value: MicrosoftGraphPrintConnector[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintOperationCollectionResponse{
  value: MicrosoftGraphPrintOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrinterCollectionResponse{
  value: MicrosoftGraphPrinter[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintServiceCollectionResponse{
  value: MicrosoftGraphPrintService[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrinterShareCollectionResponse{
  value: MicrosoftGraphPrinterShare[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintTaskDefinitionCollectionResponse{
  value: MicrosoftGraphPrintTaskDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintJobCollectionResponse{
  value: MicrosoftGraphPrintJob[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintTaskTriggerCollectionResponse{
  value: MicrosoftGraphPrintTaskTrigger[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintServiceEndpointCollectionResponse{
  value: MicrosoftGraphPrintServiceEndpoint[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintTaskCollectionResponse{
  value: MicrosoftGraphPrintTask[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrintDocumentCollectionResponse{
  value: MicrosoftGraphPrintDocument[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAttendanceRecordCollectionResponse{
  value: MicrosoftGraphAttendanceRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamsAppCollectionResponse{
  value: MicrosoftGraphTeamsApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamsAppDefinitionCollectionResponse{
  value: MicrosoftGraphTeamsAppDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChatMessageHostedContentCollectionResponse{
  value: MicrosoftGraphChatMessageHostedContent[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkforceIntegrationCollectionResponse{
  value: MicrosoftGraphWorkforceIntegration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTodoTaskCollectionResponse{
  value: MicrosoftGraphTodoTask[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChecklistItemCollectionResponse{
  value: MicrosoftGraphChecklistItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphLinkedResourceCollectionResponse{
  value: MicrosoftGraphLinkedResource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreGroupCollectionResponse{
  value: MicrosoftGraphTermStoreGroup[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreSetCollectionResponse{
  value: MicrosoftGraphTermStoreSet[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreTermCollectionResponse{
  value: MicrosoftGraphTermStoreTerm[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreRelationCollectionResponse{
  value: MicrosoftGraphTermStoreRelation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallRecordsSessionCollectionResponse{
  value: MicrosoftGraphCallRecordsSession[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallRecordsSegmentCollectionResponse{
  value: MicrosoftGraphCallRecordsSegment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalConnectorsExternalGroupCollectionResponse{
  value: MicrosoftGraphExternalConnectorsExternalGroup[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalConnectorsExternalItemCollectionResponse{
  value: MicrosoftGraphExternalConnectorsExternalItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalConnectorsConnectionOperationCollectionResponse{
  value: MicrosoftGraphExternalConnectorsConnectionOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalConnectorsIdentityCollectionResponse{
  value: MicrosoftGraphExternalConnectorsIdentity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEmailAuthenticationMethodConfigurationCollectionResponse{
  value: MicrosoftGraphEmailAuthenticationMethodConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphFido2AuthenticationMethodConfigurationCollectionResponse{
  value: MicrosoftGraphFido2AuthenticationMethodConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse{
  value: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse{
  value: MicrosoftGraphTemporaryAccessPassAuthenticationMethodConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPolicyBaseCollectionResponse{
  value: MicrosoftGraphPolicyBase[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphStsPolicyCollectionResponse{
  value: MicrosoftGraphStsPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAuthorizationPolicyCollectionResponse{
  value: MicrosoftGraphAuthorizationPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicyCollectionResponse{
  value: MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDirectoryObjectPartnerReferenceCollectionResponse{
  value: MicrosoftGraphDirectoryObjectPartnerReference[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDomainDnsCnameRecordCollectionResponse{
  value: MicrosoftGraphDomainDnsCnameRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDomainDnsMxRecordCollectionResponse{
  value: MicrosoftGraphDomainDnsMxRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDomainDnsSrvRecordCollectionResponse{
  value: MicrosoftGraphDomainDnsSrvRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDomainDnsTxtRecordCollectionResponse{
  value: MicrosoftGraphDomainDnsTxtRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDomainDnsUnavailableRecordCollectionResponse{
  value: MicrosoftGraphDomainDnsUnavailableRecord[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRoomListCollectionResponse{
  value: MicrosoftGraphRoomList[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMailSearchFolderCollectionResponse{
  value: MicrosoftGraphMailSearchFolder[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCalendarSharingMessageCollectionResponse{
  value: MicrosoftGraphCalendarSharingMessage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEventMessageCollectionResponse{
  value: MicrosoftGraphEventMessage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEventMessageRequestCollectionResponse{
  value: MicrosoftGraphEventMessageRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEventMessageResponseCollectionResponse{
  value: MicrosoftGraphEventMessageResponse[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOpenTypeExtensionCollectionResponse{
  value: MicrosoftGraphOpenTypeExtension[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidManagedAppRegistrationCollectionResponse{
  value: MicrosoftGraphAndroidManagedAppRegistration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosManagedAppRegistrationCollectionResponse{
  value: MicrosoftGraphIosManagedAppRegistration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEnrollmentTroubleshootingEventCollectionResponse{
  value: MicrosoftGraphEnrollmentTroubleshootingEvent[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphFileAttachmentCollectionResponse{
  value: MicrosoftGraphFileAttachment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphItemAttachmentCollectionResponse{
  value: MicrosoftGraphItemAttachment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphReferenceAttachmentCollectionResponse{
  value: MicrosoftGraphReferenceAttachment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppProtectionCollectionResponse{
  value: MicrosoftGraphManagedAppProtection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTargetedManagedAppProtectionCollectionResponse{
  value: MicrosoftGraphTargetedManagedAppProtection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppConfigurationCollectionResponse{
  value: MicrosoftGraphManagedAppConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAadUserConversationMemberCollectionResponse{
  value: MicrosoftGraphAadUserConversationMember[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyApprovalRuleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicyApprovalRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicyAuthenticationContextRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyEnablementRuleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicyEnablementRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyExpirationRuleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicyExpirationRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyNotificationRuleCollectionResponse{
  value: MicrosoftGraphUnifiedRoleManagementPolicyNotificationRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEmailFileAssessmentRequestCollectionResponse{
  value: MicrosoftGraphEmailFileAssessmentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphFileAssessmentRequestCollectionResponse{
  value: MicrosoftGraphFileAssessmentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMailAssessmentRequestCollectionResponse{
  value: MicrosoftGraphMailAssessmentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUrlAssessmentRequestCollectionResponse{
  value: MicrosoftGraphUrlAssessmentRequest[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingCustomerCollectionResponse{
  value: MicrosoftGraphBookingCustomer[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingStaffMemberCollectionResponse{
  value: MicrosoftGraphBookingStaffMember[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppleManagedIdentityProviderCollectionResponse{
  value: MicrosoftGraphAppleManagedIdentityProvider[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBuiltInIdentityProviderCollectionResponse{
  value: MicrosoftGraphBuiltInIdentityProvider[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSocialIdentityProviderCollectionResponse{
  value: MicrosoftGraphSocialIdentityProvider[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSamlOrWsFedProviderCollectionResponse{
  value: MicrosoftGraphSamlOrWsFedProvider[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSamlOrWsFedExternalDomainFederationCollectionResponse{
  value: MicrosoftGraphSamlOrWsFedExternalDomainFederation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentityBuiltInUserFlowAttributeCollectionResponse{
  value: MicrosoftGraphIdentityBuiltInUserFlowAttribute[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentityCustomUserFlowAttributeCollectionResponse{
  value: MicrosoftGraphIdentityCustomUserFlowAttribute[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCountryNamedLocationCollectionResponse{
  value: MicrosoftGraphCountryNamedLocation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIpNamedLocationCollectionResponse{
  value: MicrosoftGraphIpNamedLocation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationFeedbackOutcomeCollectionResponse{
  value: MicrosoftGraphEducationFeedbackOutcome[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationPointsOutcomeCollectionResponse{
  value: MicrosoftGraphEducationPointsOutcome[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEducationRubricOutcomeCollectionResponse{
  value: MicrosoftGraphEducationRubricOutcome[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCancelMediaProcessingOperationCollectionResponse{
  value: MicrosoftGraphCancelMediaProcessingOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphInviteParticipantsOperationCollectionResponse{
  value: MicrosoftGraphInviteParticipantsOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMuteParticipantOperationCollectionResponse{
  value: MicrosoftGraphMuteParticipantOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPlayPromptOperationCollectionResponse{
  value: MicrosoftGraphPlayPromptOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRecordOperationCollectionResponse{
  value: MicrosoftGraphRecordOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphStartHoldMusicOperationCollectionResponse{
  value: MicrosoftGraphStartHoldMusicOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphStopHoldMusicOperationCollectionResponse{
  value: MicrosoftGraphStopHoldMusicOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSubscribeToToneOperationCollectionResponse{
  value: MicrosoftGraphSubscribeToToneOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnmuteParticipantOperationCollectionResponse{
  value: MicrosoftGraphUnmuteParticipantOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUpdateRecordingStatusOperationCollectionResponse{
  value: MicrosoftGraphUpdateRecordingStatusOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosVppEBookCollectionResponse{
  value: MicrosoftGraphIosVppEBook[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosMobileAppConfigurationCollectionResponse{
  value: MicrosoftGraphIosMobileAppConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMobileLobAppCollectionResponse{
  value: MicrosoftGraphMobileLobApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidLobAppCollectionResponse{
  value: MicrosoftGraphAndroidLobApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosLobAppCollectionResponse{
  value: MicrosoftGraphIosLobApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWin32LobAppCollectionResponse{
  value: MicrosoftGraphWin32LobApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsMobileMSICollectionResponse{
  value: MicrosoftGraphWindowsMobileMSI[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsUniversalAppXCollectionResponse{
  value: MicrosoftGraphWindowsUniversalAppX[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidStoreAppCollectionResponse{
  value: MicrosoftGraphAndroidStoreApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosStoreAppCollectionResponse{
  value: MicrosoftGraphIosStoreApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosVppAppCollectionResponse{
  value: MicrosoftGraphIosVppApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMacOSOfficeSuiteAppCollectionResponse{
  value: MicrosoftGraphMacOSOfficeSuiteApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppCollectionResponse{
  value: MicrosoftGraphManagedApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedMobileLobAppCollectionResponse{
  value: MicrosoftGraphManagedMobileLobApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAndroidLobAppCollectionResponse{
  value: MicrosoftGraphManagedAndroidLobApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedIOSLobAppCollectionResponse{
  value: MicrosoftGraphManagedIOSLobApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAndroidStoreAppCollectionResponse{
  value: MicrosoftGraphManagedAndroidStoreApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedIOSStoreAppCollectionResponse{
  value: MicrosoftGraphManagedIOSStoreApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMicrosoftStoreForBusinessAppCollectionResponse{
  value: MicrosoftGraphMicrosoftStoreForBusinessApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWebAppCollectionResponse{
  value: MicrosoftGraphWebApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppStatusRawCollectionResponse{
  value: MicrosoftGraphManagedAppStatusRaw[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosVppEBookAssignmentCollectionResponse{
  value: MicrosoftGraphIosVppEBookAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidCompliancePolicyCollectionResponse{
  value: MicrosoftGraphAndroidCompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidWorkProfileCompliancePolicyCollectionResponse{
  value: MicrosoftGraphAndroidWorkProfileCompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosCompliancePolicyCollectionResponse{
  value: MicrosoftGraphIosCompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMacOSCompliancePolicyCollectionResponse{
  value: MicrosoftGraphMacOSCompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10CompliancePolicyCollectionResponse{
  value: MicrosoftGraphWindows10CompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10MobileCompliancePolicyCollectionResponse{
  value: MicrosoftGraphWindows10MobileCompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows81CompliancePolicyCollectionResponse{
  value: MicrosoftGraphWindows81CompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsPhone81CompliancePolicyCollectionResponse{
  value: MicrosoftGraphWindowsPhone81CompliancePolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidCustomConfigurationCollectionResponse{
  value: MicrosoftGraphAndroidCustomConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidGeneralDeviceConfigurationCollectionResponse{
  value: MicrosoftGraphAndroidGeneralDeviceConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidWorkProfileCustomConfigurationCollectionResponse{
  value: MicrosoftGraphAndroidWorkProfileCustomConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAndroidWorkProfileGeneralDeviceConfigurationCollectionResponse{
  value: MicrosoftGraphAndroidWorkProfileGeneralDeviceConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppleDeviceFeaturesConfigurationBaseCollectionResponse{
  value: MicrosoftGraphAppleDeviceFeaturesConfigurationBase[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosDeviceFeaturesConfigurationCollectionResponse{
  value: MicrosoftGraphIosDeviceFeaturesConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMacOSDeviceFeaturesConfigurationCollectionResponse{
  value: MicrosoftGraphMacOSDeviceFeaturesConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEditionUpgradeConfigurationCollectionResponse{
  value: MicrosoftGraphEditionUpgradeConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosCertificateProfileCollectionResponse{
  value: MicrosoftGraphIosCertificateProfile[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosCustomConfigurationCollectionResponse{
  value: MicrosoftGraphIosCustomConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosGeneralDeviceConfigurationCollectionResponse{
  value: MicrosoftGraphIosGeneralDeviceConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosUpdateConfigurationCollectionResponse{
  value: MicrosoftGraphIosUpdateConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMacOSCustomConfigurationCollectionResponse{
  value: MicrosoftGraphMacOSCustomConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMacOSGeneralDeviceConfigurationCollectionResponse{
  value: MicrosoftGraphMacOSGeneralDeviceConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSharedPCConfigurationCollectionResponse{
  value: MicrosoftGraphSharedPCConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10CustomConfigurationCollectionResponse{
  value: MicrosoftGraphWindows10CustomConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10EndpointProtectionConfigurationCollectionResponse{
  value: MicrosoftGraphWindows10EndpointProtectionConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10EnterpriseModernAppManagementConfigurationCollectionResponse{
  value: MicrosoftGraphWindows10EnterpriseModernAppManagementConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10GeneralConfigurationCollectionResponse{
  value: MicrosoftGraphWindows10GeneralConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10SecureAssessmentConfigurationCollectionResponse{
  value: MicrosoftGraphWindows10SecureAssessmentConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows10TeamGeneralConfigurationCollectionResponse{
  value: MicrosoftGraphWindows10TeamGeneralConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindows81GeneralConfigurationCollectionResponse{
  value: MicrosoftGraphWindows81GeneralConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse{
  value: MicrosoftGraphWindowsDefenderAdvancedThreatProtectionConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsPhone81CustomConfigurationCollectionResponse{
  value: MicrosoftGraphWindowsPhone81CustomConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsPhone81GeneralConfigurationCollectionResponse{
  value: MicrosoftGraphWindowsPhone81GeneralConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsUpdateForBusinessConfigurationCollectionResponse{
  value: MicrosoftGraphWindowsUpdateForBusinessConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceEnrollmentLimitConfigurationCollectionResponse{
  value: MicrosoftGraphDeviceEnrollmentLimitConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse{
  value: MicrosoftGraphDeviceEnrollmentPlatformRestrictionsConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse{
  value: MicrosoftGraphDeviceEnrollmentWindowsHelloForBusinessConfiguration[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceAndAppManagementRoleDefinitionCollectionResponse{
  value: MicrosoftGraphDeviceAndAppManagementRoleDefinition[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPrinterCreateOperationCollectionResponse{
  value: MicrosoftGraphPrinterCreateOperation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphKeyValueCollectionResponse{
  value: MicrosoftGraphKeyValue[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTargetResourceCollectionResponse{
  value: MicrosoftGraphTargetResource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphModifiedPropertyCollectionResponse{
  value: MicrosoftGraphModifiedProperty[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphProvisioningStepCollectionResponse{
  value: MicrosoftGraphProvisioningStep[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppliedConditionalAccessPolicyCollectionResponse{
  value: MicrosoftGraphAppliedConditionalAccessPolicy[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAssignedLicenseCollectionResponse{
  value: MicrosoftGraphAssignedLicense[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAssignedPlanCollectionResponse{
  value: MicrosoftGraphAssignedPlan[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphObjectIdentityCollectionResponse{
  value: MicrosoftGraphObjectIdentity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphLicenseAssignmentStateCollectionResponse{
  value: MicrosoftGraphLicenseAssignmentState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOnPremisesProvisioningErrorCollectionResponse{
  value: MicrosoftGraphOnPremisesProvisioningError[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphProvisionedPlanCollectionResponse{
  value: MicrosoftGraphProvisionedPlan[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphServicePlanInfoCollectionResponse{
  value: MicrosoftGraphServicePlanInfo[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAttendeeCollectionResponse{
  value: MicrosoftGraphAttendee[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphLocationCollectionResponse{
  value: MicrosoftGraphLocation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphEmailAddressCollectionResponse{
  value: MicrosoftGraphEmailAddress[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRecipientCollectionResponse{
  value: MicrosoftGraphRecipient[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphInternetMessageHeaderCollectionResponse{
  value: MicrosoftGraphInternetMessageHeader[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPhoneCollectionResponse{
  value: MicrosoftGraphPhone[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphScoredEmailAddressCollectionResponse{
  value: MicrosoftGraphScoredEmailAddress[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWebsiteCollectionResponse{
  value: MicrosoftGraphWebsite[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceActionResultCollectionResponse{
  value: MicrosoftGraphDeviceActionResult[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAddInCollectionResponse{
  value: MicrosoftGraphAddIn[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppRoleCollectionResponse{
  value: MicrosoftGraphAppRole[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphKeyCredentialCollectionResponse{
  value: MicrosoftGraphKeyCredential[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPasswordCredentialCollectionResponse{
  value: MicrosoftGraphPasswordCredential[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRequiredResourceAccessCollectionResponse{
  value: MicrosoftGraphRequiredResourceAccess[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPermissionScopeCollectionResponse{
  value: MicrosoftGraphPermissionScope[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphResourceSpecificPermissionCollectionResponse{
  value: MicrosoftGraphResourceSpecificPermission[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewReviewerScopeCollectionResponse{
  value: MicrosoftGraphAccessReviewReviewerScope[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingCustomerInformationBaseCollectionResponse{
  value: MicrosoftGraphBookingCustomerInformationBase[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingReminderCollectionResponse{
  value: MicrosoftGraphBookingReminder[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingWorkHoursCollectionResponse{
  value: MicrosoftGraphBookingWorkHours[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingQuestionAssignmentCollectionResponse{
  value: MicrosoftGraphBookingQuestionAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPhysicalAddressCollectionResponse{
  value: MicrosoftGraphPhysicalAddress[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSubjectRightsRequestHistoryCollectionResponse{
  value: MicrosoftGraphSubjectRightsRequestHistory[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSubjectRightsRequestStageDetailCollectionResponse{
  value: MicrosoftGraphSubjectRightsRequestStageDetail[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAssignedLabelCollectionResponse{
  value: MicrosoftGraphAssignedLabel[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSettingValueCollectionResponse{
  value: MicrosoftGraphSettingValue[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAlertDetectionCollectionResponse{
  value: MicrosoftGraphAlertDetection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCloudAppSecurityStateCollectionResponse{
  value: MicrosoftGraphCloudAppSecurityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphFileSecurityStateCollectionResponse{
  value: MicrosoftGraphFileSecurityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAlertHistoryStateCollectionResponse{
  value: MicrosoftGraphAlertHistoryState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphHostSecurityStateCollectionResponse{
  value: MicrosoftGraphHostSecurityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphInvestigationSecurityStateCollectionResponse{
  value: MicrosoftGraphInvestigationSecurityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMalwareStateCollectionResponse{
  value: MicrosoftGraphMalwareState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMessageSecurityStateCollectionResponse{
  value: MicrosoftGraphMessageSecurityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphNetworkConnectionCollectionResponse{
  value: MicrosoftGraphNetworkConnection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphProcessCollectionResponse{
  value: MicrosoftGraphProcess[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRegistryKeyStateCollectionResponse{
  value: MicrosoftGraphRegistryKeyState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSecurityResourceCollectionResponse{
  value: MicrosoftGraphSecurityResource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAlertTriggerCollectionResponse{
  value: MicrosoftGraphAlertTrigger[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUriClickSecurityStateCollectionResponse{
  value: MicrosoftGraphUriClickSecurityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserSecurityStateCollectionResponse{
  value: MicrosoftGraphUserSecurityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphVulnerabilityStateCollectionResponse{
  value: MicrosoftGraphVulnerabilityState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphComplianceInformationCollectionResponse{
  value: MicrosoftGraphComplianceInformation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSecureScoreControlStateUpdateCollectionResponse{
  value: MicrosoftGraphSecureScoreControlStateUpdate[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAverageComparativeScoreCollectionResponse{
  value: MicrosoftGraphAverageComparativeScore[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphControlScoreCollectionResponse{
  value: MicrosoftGraphControlScore[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentitySetCollectionResponse{
  value: MicrosoftGraphIdentitySet[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSharePointIdentitySetCollectionResponse{
  value: MicrosoftGraphSharePointIdentitySet[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUserAttributeValuesItemCollectionResponse{
  value: MicrosoftGraphUserAttributeValuesItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCertificateAuthorityCollectionResponse{
  value: MicrosoftGraphCertificateAuthority[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAlternativeSecurityIdCollectionResponse{
  value: MicrosoftGraphAlternativeSecurityId[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSettingTemplateValueCollectionResponse{
  value: MicrosoftGraphSettingTemplateValue[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphVerifiedDomainCollectionResponse{
  value: MicrosoftGraphVerifiedDomain[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPhysicalOfficeAddressCollectionResponse{
  value: MicrosoftGraphPhysicalOfficeAddress[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedRolePermissionCollectionResponse{
  value: MicrosoftGraphUnifiedRolePermission[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRubricLevelCollectionResponse{
  value: MicrosoftGraphRubricLevel[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRubricQualityCollectionResponse{
  value: MicrosoftGraphRubricQuality[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRelatedContactCollectionResponse{
  value: MicrosoftGraphRelatedContact[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRubricQualityFeedbackModelCollectionResponse{
  value: MicrosoftGraphRubricQualityFeedbackModel[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRubricQualitySelectedColumnModelCollectionResponse{
  value: MicrosoftGraphRubricQualitySelectedColumnModel[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWorkbookSortFieldCollectionResponse{
  value: MicrosoftGraphWorkbookSortField[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCalendarSharingMessageActionCollectionResponse{
  value: MicrosoftGraphCalendarSharingMessageAction[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExtensionSchemaPropertyCollectionResponse{
  value: MicrosoftGraphExtensionSchemaProperty[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallRouteCollectionResponse{
  value: MicrosoftGraphCallRoute[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphInvitationParticipantInfoCollectionResponse{
  value: MicrosoftGraphInvitationParticipantInfo[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewScopeCollectionResponse{
  value: MicrosoftGraphAccessReviewScope[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewNotificationRecipientItemCollectionResponse{
  value: MicrosoftGraphAccessReviewNotificationRecipientItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewStageSettingsCollectionResponse{
  value: MicrosoftGraphAccessReviewStageSettings[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppConsentRequestScopeCollectionResponse{
  value: MicrosoftGraphAppConsentRequestScope[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSubjectSetCollectionResponse{
  value: MicrosoftGraphSubjectSet[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIdentitySourceCollectionResponse{
  value: MicrosoftGraphIdentitySource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIpRangeCollectionResponse{
  value: MicrosoftGraphIpRange[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphKeyValuePairCollectionResponse{
  value: MicrosoftGraphKeyValuePair[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionResourceCollectionCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionIPRangeCollectionCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionIPRangeCollection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionProxiedDomainCollectionCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionProxiedDomainCollection[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWindowsInformationProtectionAppCollectionResponse{
  value: MicrosoftGraphWindowsInformationProtectionApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppConfigurationSettingItemCollectionResponse{
  value: MicrosoftGraphAppConfigurationSettingItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWin32LobAppReturnCodeCollectionResponse{
  value: MicrosoftGraphWin32LobAppReturnCode[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphWin32LobAppRuleCollectionResponse{
  value: MicrosoftGraphWin32LobAppRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphComplianceManagementPartnerAssignmentCollectionResponse{
  value: MicrosoftGraphComplianceManagementPartnerAssignment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRolePermissionCollectionResponse{
  value: MicrosoftGraphRolePermission[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOmaSettingCollectionResponse{
  value: MicrosoftGraphOmaSetting[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAppListItemCollectionResponse{
  value: MicrosoftGraphAppListItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceCompliancePolicySettingStateCollectionResponse{
  value: MicrosoftGraphDeviceCompliancePolicySettingState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDeviceConfigurationSettingStateCollectionResponse{
  value: MicrosoftGraphDeviceConfigurationSettingState[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosHomeScreenItemCollectionResponse{
  value: MicrosoftGraphIosHomeScreenItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosHomeScreenPageCollectionResponse{
  value: MicrosoftGraphIosHomeScreenPage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosNotificationSettingsCollectionResponse{
  value: MicrosoftGraphIosNotificationSettings[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosNetworkUsageRuleCollectionResponse{
  value: MicrosoftGraphIosNetworkUsageRule[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphManagedAppPolicyDeploymentSummaryPerAppCollectionResponse{
  value: MicrosoftGraphManagedAppPolicyDeploymentSummaryPerApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphServiceHealthIssuePostCollectionResponse{
  value: MicrosoftGraphServiceHealthIssuePost[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSharingDetailCollectionResponse{
  value: MicrosoftGraphSharingDetail[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphShiftAvailabilityCollectionResponse{
  value: MicrosoftGraphShiftAvailability[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAttendanceIntervalCollectionResponse{
  value: MicrosoftGraphAttendanceInterval[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMediaStreamCollectionResponse{
  value: MicrosoftGraphMediaStream[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChatMessageAttachmentCollectionResponse{
  value: MicrosoftGraphChatMessageAttachment[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChatMessageMentionCollectionResponse{
  value: MicrosoftGraphChatMessageMention[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChatMessageReactionCollectionResponse{
  value: MicrosoftGraphChatMessageReaction[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPreAuthorizedApplicationCollectionResponse{
  value: MicrosoftGraphPreAuthorizedApplication[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphOptionalClaimCollectionResponse{
  value: MicrosoftGraphOptionalClaim[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphResourceAccessCollectionResponse{
  value: MicrosoftGraphResourceAccess[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExcludeTargetCollectionResponse{
  value: MicrosoftGraphExcludeTarget[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse{
  value: MicrosoftGraphAuthenticationMethodsRegistrationCampaignIncludeTarget[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingQuestionAnswerCollectionResponse{
  value: MicrosoftGraphBookingQuestionAnswer[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBookingWorkTimeSlotCollectionResponse{
  value: MicrosoftGraphBookingWorkTimeSlot[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPublicErrorDetailCollectionResponse{
  value: MicrosoftGraphPublicErrorDetail[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphPkcs12CertificateInformationCollectionResponse{
  value: MicrosoftGraphPkcs12CertificateInformation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphResourcePermissionCollectionResponse{
  value: MicrosoftGraphResourcePermission[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphRubricCriterionCollectionResponse{
  value: MicrosoftGraphRubricCriterion[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphLocationConstraintItemCollectionResponse{
  value: MicrosoftGraphLocationConstraintItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAttendeeAvailabilityCollectionResponse{
  value: MicrosoftGraphAttendeeAvailability[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMeetingTimeSuggestionCollectionResponse{
  value: MicrosoftGraphMeetingTimeSuggestion[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTimeSlotCollectionResponse{
  value: MicrosoftGraphTimeSlot[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphScheduleItemCollectionResponse{
  value: MicrosoftGraphScheduleItem[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDisplayNameLocalizationCollectionResponse{
  value: MicrosoftGraphDisplayNameLocalization[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphContentTypeInfoCollectionResponse{
  value: MicrosoftGraphContentTypeInfo[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphDocumentSetContentCollectionResponse{
  value: MicrosoftGraphDocumentSetContent[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessReviewApplyActionCollectionResponse{
  value: MicrosoftGraphAccessReviewApplyAction[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAccessPackageApprovalStageCollectionResponse{
  value: MicrosoftGraphAccessPackageApprovalStage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSettingSourceCollectionResponse{
  value: MicrosoftGraphSettingSource[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosHomeScreenFolderPageCollectionResponse{
  value: MicrosoftGraphIosHomeScreenFolderPage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIosHomeScreenAppCollectionResponse{
  value: MicrosoftGraphIosHomeScreenApp[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphProxiedDomainCollectionResponse{
  value: MicrosoftGraphProxiedDomain[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphResourceActionCollectionResponse{
  value: MicrosoftGraphResourceAction[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphBucketAggregationRangeCollectionResponse{
  value: MicrosoftGraphBucketAggregationRange[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAlteredQueryTokenCollectionResponse{
  value: MicrosoftGraphAlteredQueryToken[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSearchBucketCollectionResponse{
  value: MicrosoftGraphSearchBucket[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSearchAggregationCollectionResponse{
  value: MicrosoftGraphSearchAggregation[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSearchHitCollectionResponse{
  value: MicrosoftGraphSearchHit[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphAggregationOptionCollectionResponse{
  value: MicrosoftGraphAggregationOption[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSortPropertyCollectionResponse{
  value: MicrosoftGraphSortProperty[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphSearchHitsContainerCollectionResponse{
  value: MicrosoftGraphSearchHitsContainer[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphUnifiedApprovalStageCollectionResponse{
  value: MicrosoftGraphUnifiedApprovalStage[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphIntegerRangeCollectionResponse{
  value: MicrosoftGraphIntegerRange[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCertificationControlCollectionResponse{
  value: MicrosoftGraphCertificationControl[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCommsNotificationCollectionResponse{
  value: MicrosoftGraphCommsNotification[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMeetingParticipantInfoCollectionResponse{
  value: MicrosoftGraphMeetingParticipantInfo[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphMediaInfoCollectionResponse{
  value: MicrosoftGraphMediaInfo[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeleconferenceDeviceMediaQualityCollectionResponse{
  value: MicrosoftGraphTeleconferenceDeviceMediaQuality[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphChangeNotificationCollectionResponse{
  value: MicrosoftGraphChangeNotification[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallParticipantInfoCollectionResponse{
  value: MicrosoftGraphCallParticipantInfo[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTeamworkUserIdentityCollectionResponse{
  value: MicrosoftGraphTeamworkUserIdentity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphShiftActivityCollectionResponse{
  value: MicrosoftGraphShiftActivity[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTimeRangeCollectionResponse{
  value: MicrosoftGraphTimeRange[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreLocalizedNameCollectionResponse{
  value: MicrosoftGraphTermStoreLocalizedName[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreLocalizedDescriptionCollectionResponse{
  value: MicrosoftGraphTermStoreLocalizedDescription[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphTermStoreLocalizedLabelCollectionResponse{
  value: MicrosoftGraphTermStoreLocalizedLabel[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallRecordsMediaCollectionResponse{
  value: MicrosoftGraphCallRecordsMedia[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallRecordsMediaStreamCollectionResponse{
  value: MicrosoftGraphCallRecordsMediaStream[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphCallRecordsTraceRouteHopCollectionResponse{
  value: MicrosoftGraphCallRecordsTraceRouteHop[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalConnectorsAclCollectionResponse{
  value: MicrosoftGraphExternalConnectorsAcl[]
  "@odata.nextLink": string
}
export interface MicrosoftGraphExternalConnectorsPropertyCollectionResponse{
  value: MicrosoftGraphExternalConnectorsProperty[]
  "@odata.nextLink": string
}
export interface StringCollectionResponse{
  value: string[]
  "@odata.nextLink": string
}
export interface ReferenceUpdateSchema{
  "@odata.id": string
  "@odata.type": string
}
