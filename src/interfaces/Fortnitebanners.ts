export default interface FortniteBanners {
  data: Array<{
    id: string;
    devName: string;
    name: string;
    description: string;
    category: string;
    fullUsageRights: boolean;
    images: {
      smallIcon: string;
      icon: string;
    };
  }>;
}
