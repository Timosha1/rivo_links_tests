interface StrategyFeatureItem {
    name: string;
    description: string;
    image: string;
}

interface Links {
    websites: string[];
    twitter: string[];
    discord: string[];
}

interface Tag {
    [index: number]: string;
}

interface StrategyFeatures {
    [index: number]: StrategyFeatureItem;
}

interface TitleInfo {
    name: string;
    header: string;
    cardDescription: string;
    asset: string;
    protocol: string;
    ticker: string;
    address: string;
    tokenAddress: string;
    address2: string;
    chainName: string;
    tvlChainName: string;
    logo: string;
    protocolLogo: string;
    protocolName: string;
    tags: Tag;
    strategyFeatures: StrategyFeatures;
    typeStrategy: string;
    volatility: string;
    isArchived: boolean;
    links: Links;
    boosters: any[];
    typeStrategyDetails: string;
    volatilityDetails: string;
    rewardCollection: string;
    archiveDescription: string | null;
    archiveStrategyRecommendation: string;
    swapProviders: string[];
    walletType: string;
    isIndex: boolean;
    youtubeLink: string;
    yieldSchemeLogo: string;
    whyInvestDescr: string;
    assetsAddrs: string;
    mainTags: string[];
    wantTokens: string[];
    recommendedTokens: string[];
    expirationDate: string;
    withdrawalTime: string;
}

interface BalanceInfo {
    value: string;
    valueQuote: string;
    roi: string;
    roiPercent: string;
    ticker: string;
    precision: number;
}

interface EditorInfo {
    name: string;
    job: string;
    ava: string;
    text: string;
}

interface DescriptionInfo {
    text: string;
    tags: string[];
    editor: EditorInfo;
    yieldMechanism: string;
    protocolDescription: string;
}

interface LPBreakdownItem {
    logo: string;
    ticker: string;
    value: string;
}

interface LPBreakdown {
    [index: number]: LPBreakdownItem;
}


interface RiskScore {
    simplicity: number;
    longevity: number;
    protocolSafety: number;
    volatility: number;
}

interface RisksAndAudits {
    audit: string;
    riskLevel: string;
    riskScore: string;
    riskScoreNumber: string;
    score: RiskScore;
}

interface ProsAndCons {
    pros: string[];
    cons: string[];
}

export interface StrategyItem {
    title: TitleInfo;
    balance: BalanceInfo;
    description: DescriptionInfo;
    lpBreakdown: LPBreakdown;
    risksAndAudits: RisksAndAudits;
    ProsAndCons: ProsAndCons;
}

export interface ApiResponse {
    [index: number]: StrategyItem;
}