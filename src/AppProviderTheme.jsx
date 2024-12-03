import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import opexpertLOGO from './assets/images/opexpertLOGO.png';
import TableBase from './TableBase';
import { DashboardLayout as ToolpadDashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';


// Main menu icons

import {
    Home as HomeIcon,
    Settings as SettingsIcon,
    Storage as StorageIcon,
    Group as GroupIcon,
    IntegrationInstructions as IntegrationInstructionsIcon,
    AutoMode as AutoModeIcon,
  } from '@mui/icons-material';
  
  // setting menu icons  
  
  import {
   
    BuildCircle as BuildCircleIcon,
    Api as ApiIcon,
    ListAlt as ListAltIcon,
    Code as CodeIcon,
    PictureAsPdf as PictureAsPdfIcon,
    Email as EmailIcon,
  }from '@mui/icons-material';
  
  
  // Resource menu icons
  
  import {
    AccountCircle as AccountIcon,
    LocationOn as LocationIcon,
    Inventory as AssetIcon,
    Key as AccessIcon,
    MiscellaneousServices as ServicesIcon,
    Usb as PortsIcon,
    SettingsApplications as ProcessIcon,
    Public as IpAddressIcon,
    Apps as ApplicationsIcon,
    Search as ServiceDiscoveryIcon,
    SwapHoriz as ProxyIcon,
  } from '@mui/icons-material';
  
  // collaboration menu icons
  
  import {
    Event as CalendarIcon,
    ReportProblem as IncidentsIcon,
    Assignment as ProjectsIcon,
    Build as WorkOrdersIcon,
    Security as CisControlsIcon,
    Description as DocumentsIcon,
    Notes as NotesIcon,
  } from '@mui/icons-material';
  
  // Integration menu icon 
  import {
    Storage as DataSourceIcon,
    InsertChart as IntegrationReportsIcon,
    CameraAlt as SnapshotReportsIcon,
    PieChart as ChartMakerIcon,
    Description as ReportGeneratorIcon,
    Schedule as ScheduledReportsIcon,
    Build as RuleBuilderIcon,
    Security as VaptIcon,
  } from '@mui/icons-material';
  
  // Automation menu icons  
  
  import {
    Work as JobsIcon,
    CalendarToday as SchedulesIcon,
    NotificationsActive as TriggersIcon,
  } from '@mui/icons-material';
import { padding } from '@mui/system';
  

const NAVIGATION = [
    // Add navigation items (same as before)
    {
      kind: 'header',
      title: 'Main',
    },
    {
      segment: 'home',
      title: 'Home',
      icon: <HomeIcon />,
    },
    {
      segment: 'dashboard',
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
   
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Tools',
    },
    {
      segment: 'settings',
      title: 'Settings',
      icon: <SettingsIcon />,
      children: [
        {
          segment: 'workflow',
          title: 'Workflow',
          icon: <BuildCircleIcon />,
        },
        {
          segment: 'api-functions',
          title: 'API Functions',
          icon: <ApiIcon  />,
        },
       
        {
          segment: 'system-logs',
          title: 'System Logs',
          icon: <ListAltIcon   />,
        },
        {
          segment: 'html-templates',
          title: 'HTML - Templates',
          icon: <CodeIcon   />,
        },
        {
          segment: 'pdf-templates',
          title: 'PDF - Templates',
          icon: <PictureAsPdfIcon   />,
        },
        {
          segment: 'email-templates',
          title: 'Email - Templates',
          icon: <EmailIcon  />,
        },
      ],
    },
  
  
  
    {
      segment: 'resources',
      title: 'Resources',
      icon: <StorageIcon />,
      children: [
        {
          segment: 'accounts',
          title: 'Accounts',
          icon: <AccountIcon  />,
        },
        {
          segment: 'locations',
          title: 'Locations',
          icon: <LocationIcon  />,
        },
        {
          segment: 'assets',
          title: 'Assets',
          icon: <AssetIcon  />,
        },
        {
          segment: 'access',
          title: 'Access',
          icon: <AccessIcon  />,
        },
        {
          segment: 'services',
          title: 'Services',
          icon: <ServicesIcon  />,
        },
        {
          segment: 'ports',
          title: 'Ports',
          icon: <PortsIcon  />,
        },
        {
          segment: 'process',
          title: 'Process',
          icon: <ProcessIcon  />,
        },
        {
          segment: 'ip-address',
          title: 'IP Address',
          icon: <IpAddressIcon  />,
        },
        {
          segment: 'applications',
          title: 'Applications',
          icon: <ApplicationsIcon  />,
        },
        {
          segment: 'service-discovery',
          title: 'Service Discovery',
          icon: <ServiceDiscoveryIcon  />,
        },
        {
          segment: 'proxy',
          title: 'Proxy',
          icon: <ProxyIcon  />,
        },
      
      ],
    },
  
  
  
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Team',
    },
  
    {
      segment: 'collaboration',
      title: 'Collaboration',
      icon: <GroupIcon />,
      children: [
        {
          segment: 'calendar',
          title: 'Calendar',
          icon: <CalendarIcon />,
        },
        {
          segment: 'incidents',
          title: 'Incidents',
          icon: <IncidentsIcon  />,
        },
        {
          segment: 'projects',
          title: 'Projects',
          icon: <ProjectsIcon   />,
        },
        {
          segment: 'work-orders',
          title: 'Work Orders',
          icon: <WorkOrdersIcon   />,
        },
        {
          segment: 'cis-controls',
          title: 'CIS Controls',
          icon: <CisControlsIcon   />,
        },
        {
          segment: 'documents',
          title: 'Documents',
          icon: <DocumentsIcon   />,
        },
        {
          segment: 'notes',
          title: 'Notes',
          icon: <NotesIcon    />,
        },
      ],
    },
  
    {
      kind: 'divider',
    },
    {
      kind: 'header',
      title: 'Workflow',
    },
  
  
  
  
    {
      segment: 'integrations',
      title: 'Integrations',
      icon: <IntegrationInstructionsIcon />,
      children: [
        {
          segment: 'data-source',
          title: 'Data Source',
          icon: <DataSourceIcon  />,
        },
     
        {
          segment: 'integration-reports',
          title: 'Integration Reports',
          icon: <IntegrationReportsIcon  />,
        },
        {
          segment: 'snapshot-reports',
          title: 'Snapshot Reports',
          icon: <SnapshotReportsIcon  />,
        },
        {
          segment: 'chart-maker',
          title: 'Chart Maker',
          icon: <ChartMakerIcon  />,
        },
        {
          segment: 'report-generator',
          title: 'Report Generator',
          icon: <ReportGeneratorIcon  />,
        },
        {
          segment: 'scheduled-reports',
          title: 'Scheduled Reports',
          icon: <ScheduledReportsIcon  />,
        },
        {
          segment: 'rule-builder',
          title: 'Rule Builder',
          icon: <RuleBuilderIcon  />,
        },
        {
          segment: 'vapt',
          title: 'VAPT',
          icon: <VaptIcon  />,
        },
      
      ],
    },
  
  
  
  
    {
      segment: 'automation',
      title: 'Automation',
      icon: <AutoModeIcon />,
      children: [
        {
          segment: 'jobs',
          title: 'Jobs',
          icon: <JobsIcon  />,
        },
        {
          segment: 'schedules',
          title: 'Schedules',
          icon: <SchedulesIcon  />,
        },
        {
          segment: 'Triggers',
          title: 'Triggers',
          icon: <TriggersIcon   />,
        },
      ],
    },
  
  ];
  

const customTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#F9F9FE',
          paper: '#EEEEF9',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#141d2a',
          paper: '#1c273a',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function AppProviderTheme(props) {
  const { window } = props;

  const router = useDemoRouter('/page');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start

    

    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={customTheme}
      window={demoWindow}


      branding={{
        logo:  <img src={opexpertLOGO} alt="OpExpert" />,
        title: '',
      }}
      

    >

        
      <ToolpadDashboardLayout defaultSidebarCollapsed>
        <PageContainer style={{maxWidth:"1450px"}}>
   
      


      <TableBase />


     
 
        
      </PageContainer>
      </ToolpadDashboardLayout>

  
    
    </AppProvider>
    // preview-end
  );
}

AppProviderTheme.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default AppProviderTheme;