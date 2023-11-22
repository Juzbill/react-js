import { Box, Typography } from "@mui/material";
import Link from "next/link";
const CustomerNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Box
        className="homewrapper"
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#f2f7ff",
          marginTop: "-30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "1008px",
            alignItems: "center",
            marginTop: "12px",
            marginLeft: "16px",
            height: "40px",
            borderRadius: "4px",
            background: "#fff",
          }}
        >
          <Box className="customer" sx={{ width: "137px" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#06f",
                fontWeight: 500,
                marginLeft: "24px",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              <Link href={"/app/parties/customers"}> Customers </Link>
            </Typography>
          </Box>
          <Box className="groups" sx={{ width: "137px" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#1A1A1A",
                fontWeight: 500,
                padding: " 12px 24px",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              <Link href={"/app/parties/customers/customerGroup"}>Groups</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      {children}
    </div>
  );
};

export default CustomerNav;
