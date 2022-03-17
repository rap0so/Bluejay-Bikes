const { Box } = require('@chakra-ui/react');

const ShareSvg = () => (
  <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5523 5.857L7.02001 3.37153V16.4898C7.02001 17.0371 7.45654 17.4768 7.99997 17.4768C8.5434 17.4768 8.97992 17.0371 8.97992 16.4898V3.3805L11.4476 5.86597C11.6347 6.0544 11.8931 6.1531 12.1425 6.1531C12.392 6.1531 12.6414 6.0544 12.8374 5.86597C13.2205 5.48014 13.2205 4.85204 12.8374 4.46621L8.68594 0.293859C8.66812 0.275914 8.64139 0.248995 8.61467 0.23105C8.60576 0.222077 8.58794 0.213104 8.57903 0.204131C8.57012 0.195158 8.55231 0.186186 8.5434 0.177213C8.52558 0.16824 8.51667 0.159267 8.49885 0.150294C8.48995 0.141322 8.47213 0.132349 8.46322 0.123376C8.4454 0.114403 8.43649 0.10543 8.41868 0.10543C8.40086 0.0964576 8.38304 0.0874848 8.37413 0.078512C8.35632 0.0695392 8.34741 0.0695392 8.32959 0.0605664C8.31177 0.0515936 8.30286 0.0515936 8.28505 0.0426208C8.26723 0.033648 8.25832 0.033648 8.2405 0.033648C8.22268 0.033648 8.21378 0.0246752 8.19596 0.0246752C8.17814 0.0246752 8.16032 0.0157024 8.14251 0.0157024C8.12469 0.0157024 8.11578 0.0067296 8.09796 0.0067296C8.0356 -0.0022432 7.96433 -0.0022432 7.90197 0.0067296C7.88415 0.0067296 7.87525 0.0067296 7.85743 0.0157024C7.83961 0.0157024 7.82179 0.0246752 7.80398 0.0246752C7.78616 0.0246752 7.76834 0.033648 7.75943 0.033648C7.74162 0.033648 7.73271 0.0426208 7.71489 0.0426208C7.69707 0.0515936 7.68816 0.0515936 7.67035 0.0605664C7.65253 0.0695392 7.64362 0.0695392 7.6258 0.078512C7.60799 0.0874848 7.59908 0.0874848 7.58126 0.0964576C7.56344 0.10543 7.55453 0.114403 7.53672 0.114403C7.52781 0.123376 7.50999 0.132349 7.50108 0.141322C7.48326 0.150294 7.47435 0.159267 7.45654 0.16824C7.43872 0.177213 7.42981 0.186186 7.41199 0.195158C7.40309 0.204131 7.38527 0.213104 7.37636 0.222077C7.34963 0.240022 7.33182 0.257968 7.30509 0.284886L3.16255 4.46621C2.77948 4.85204 2.77948 5.48014 3.16255 5.86597C3.54562 6.24283 4.16923 6.24283 4.5523 5.857Z"
      fill="#51312D"
    />
    <path
      d="M13.2205 8.72836H12.0356C11.4922 8.72836 11.0557 9.16803 11.0557 9.71537C11.0557 10.2627 11.4922 10.7024 12.0356 10.7024H13.2205C13.6659 10.7024 14.0401 11.0703 14.0401 11.5279V21.2006C14.0401 21.6492 13.6748 22.0261 13.2205 22.0261H2.77951C2.33408 22.0261 1.95991 21.6582 1.95991 21.2006V11.5279C1.95991 11.0792 2.32517 10.7024 2.77951 10.7024H3.96437C4.50779 10.7024 4.94432 10.2627 4.94432 9.71537C4.94432 9.16803 4.50779 8.72836 3.96437 8.72836H2.77951C1.24722 8.72836 0 9.98456 0 11.5279V21.2006C0 22.7439 1.24722 24.0001 2.77951 24.0001H13.2205C14.7528 24.0001 16 22.7439 16 21.2006V11.5279C15.9911 9.98456 14.7528 8.72836 13.2205 8.72836Z"
      fill="#51312D"
    />
  </svg>
);

const ShareIcon = () => (
  <Box
    pos="absolute"
    top="20px"
    right="20px"
    w="40px"
    h="40px"
    border="2px solid"
    borderColor="brand.main"
    bgColor="#fff"
    borderRadius="50%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    cursor="pointer">
    <ShareSvg />
  </Box>
);

export default ShareIcon;
