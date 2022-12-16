import Head from 'next/head';
import Image from 'next/image';
import { Grid } from '@mui/material';
import Trophy from '../components/Admin/Dashboard/Trophy';
import DepositWithdraw from '../components/Admin/Dashboard/Trophy';
import StatisticsCard from '../components/Admin/Dashboard/StatisticsCard';
import WeeklyOverview from '../components/Admin/Dashboard/WeeklyOverview';
import TotalEarning from '../components/Admin/Dashboard/TotalEarning';
import SalesByCountries from '../components/Admin/Dashboard/SalesByCountries';
import Table from '../components/Admin/Dashboard/Table';
import CardStatisticsVerticalComponent from '../components/Admin/Dashboard/card-stats-vertical';
import {
  Poll,
  CurrencyUsd,
  HelpCircleOutline,
  BriefcaseVariantOutline,
} from 'mdi-material-ui';
import Sidebar from '../components/Admin/Sidebar';


export default function Home({ children }) {
  return (
    <Sidebar>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        {/* <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="$25.6k"
                icon={<Poll />}
                color="success"
                trendNumber="+42%"
                title="Total Profit"
                subtitle="Weekly Profit"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="$78"
                title="Refunds"
                trend="negative"
                color="secondary"
                trendNumber="-15%"
                subtitle="Past Month"
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="862"
                trend="negative"
                trendNumber="-18%"
                title="New Project"
                subtitle="Yearly Project"
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="15"
                color="warning"
                trend="negative"
                trendNumber="-18%"
                subtitle="Last Week"
                title="Sales Queries"
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid> */}
      </Grid>
    </Sidebar>
  );
}
