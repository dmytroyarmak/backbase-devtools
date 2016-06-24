console.log("panel.js");

var portalModelXml = '<Application><Portal><Page Description="" TemplateName="LaunchpadPageTemplate" bd_seo_canonical="" bd_seo_description="" bd_seo_locale="" bd_seo_robots="" behaviors="be.perspective.Manager be.portalClientExt.PortalManagerPreferencesForm" bundleName="dashboard" client-template="page" defaultAccount="" enableSEO="true" enableTimeout="true" httpCacheTimeout="0" locale="en" maskAccountNumber="false" preferredBalanceView="available" preferredName="Lisa" themeName="theme-retail" thumbnailUrl="$(contextRoot)/static/pages/[BBHOST]/page-launchpad-base/icon.png" title="Home" version="1.0.5"><Widget Description="" TemplateName="Standard_Widget" area="0" containerType="fixed" icon="" launcherIcon="arrow-left" locale="en" logoURL="$(contextRoot)/static/widgets/[BBHOST]/widget-navbar-advanced/media/soc-gen-logo.png" mobileLogoURL="$(contextRoot)/static/widgets/[BBHOST]/widget-navbar-advanced/media/soc-gen-logo.png" navDepth="1" navRoot="2a66c759-1c69-46f4-81ed-351cb97c99ce" navShow="false" navSticky="false" navTemplate="$(contextRoot)/static/widgets/[BBHOST]/widget-navbar-advanced/templates/mustache_top_level.html" navigationIconAnimationHook="arrow" order="0.0" preferenceService="$(servicesPath)/services/rest/v1/party-data-management/party" profileImgBg="#CCC" profileTitle="MY BANKING" profileTitleLink="my-banking" scrollSetting="normal" showNotificationsBadge="false" showPageTitle="false" showParent="false" showProfileInfo="true" signinLink="sign-in" src="$(contextRoot)/static/widgets/[BBHOST]/widget-navbar-advanced/index.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-navbar-advanced/icon.png" title="Navigation - Advanced" version="3.2.8" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html"/> <Container Description="Area that will be manageable on regular pages. Items can be reordered, added and deleted." TemplateName="ManageableArea" area="0" autoExtend="true" config="$(contextRoot)/static/backbase.com.2013.aurora/containers/ManageableArea/config.xml" isManageableArea="true" order="1.0" thumbnailUrl="$(contextRoot)/static/backbase.com.2013.aurora/containers/ManageableArea/media/ManageableArea-icon.png" title="Manageable Area" viewNamespace="http://backbase.com/2013/aurora"><Widget Description="" TemplateName="Standard_Widget" area="0" banner="cs:@portalRepository:6495213d-f49d-406d-be5e-04590fb2658f" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="cover" height="500" icon="" link="7fa30b24-8339-4ab2-a3ef-06f5a167a57a" locale="en" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/soc-gen-jumbotron.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1466090196234"/> <Container TemplateName="SimplePageLayoutContainer" area="0" config="$(contextRoot)/static/containers/[BBHOST]/container-simple-page-layout/config.xml" csr="false" layoutType="fixed" layoutTypeList="Fixed layout,fixed;Fluid layout,fluid;Custom,custom" order="1.0" thumbnailUrl="$(contextRoot)/static/containers/[BBHOST]/container-simple-page-layout/icon.png" title="Simple Page Layout" version="1.0.3" verticalPosition="middle" verticalPositionList="Align top,top;Align middle,middle" viewNamespace="launchpad"><Container TemplateName="ColumnsContainer" area="0" columns="3,3,3,3" columnsCSSClasses="col-sm-3,col-sm-3,col-sm-3,col-sm-3" config="$(contextRoot)/static/containers/[BBHOST]/column-layout/config.xml" csr="false" gridSize="12.0" order="0.0" thumbnailUrl="$(contextRoot)/static/containers/[BBHOST]/column-layout/icon.png" title="Columns" version="1.1.1" viewNamespace="launchpad"><Widget Description="" TemplateName="Standard_Widget" area="3" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" height="" icon="" locale="en" media="cs:@portalRepository:55158143-1cb7-465e-8b45-734e57d210b0" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/thumbnail.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464787570393"/> <Widget Description="" TemplateName="Standard_Widget" area="0" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" height="" icon="" link="955e139a-a360-4937-ae67-97272c5678c0" locale="en" media="cs:@portalRepository:a6b7d03d-73dd-4278-98df-ecb385809957" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/thumbnail.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1466078161608"/> <Widget Description="" TemplateName="Standard_Widget" area="1" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" height="" icon="" link="9337f1f0-5ea3-4db0-ad2d-6ccbcb5b4417" locale="en" media="cs:@portalRepository:1e1b2e3f-1539-4f32-91b5-cd91b743ea56" order="1.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/thumbnail.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464786984038"/> <Widget Description="" TemplateName="Standard_Widget" area="2" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" height="" icon="" link="c793b913-2e4a-4f4f-a391-b9b45d370e4a" locale="en" media="cs:@portalRepository:abaa9b8d-57bb-45a4-b81f-6d56c0daccf3" order="1.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/thumbnail.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464787167151"/></Container></Container> <Widget Description="" TemplateName="Standard_Widget" area="0" banner="cs:@portalRepository:2c1cd1bc-4faa-4f66-8fd6-878662326646" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="cover" height="200" icon="" locale="en" order="2.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/callout-with-image.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464788422280"/> <Widget Description="" TemplateName="Standard_Widget" area="0" banner="cs:@portalRepository:5104c943-9597-4990-9884-758b7ebcc11c" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" height="200" icon="" locale="en" order="3.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/callout.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464789252283"/> <Container TemplateName="SimplePageLayoutContainer" area="0" config="$(contextRoot)/static/containers/[BBHOST]/container-simple-page-layout/config.xml" csr="false" layoutType="fixed" layoutTypeList="Fixed layout,fixed;Fluid layout,fluid;Custom,custom" order="5.0" thumbnailUrl="$(contextRoot)/static/containers/[BBHOST]/container-simple-page-layout/icon.png" title="Simple Page Layout" version="1.0.3" verticalPosition="top" verticalPositionList="Align top,top;Align middle,middle" viewNamespace="launchpad"><Container TemplateName="ColumnsContainer" area="0" columns="4,4,4" columnsCSSClasses="col-sm-4,col-sm-4,col-sm-4" config="$(contextRoot)/static/containers/[BBHOST]/column-layout/config.xml" csr="false" gridSize="12.0" order="0.0" thumbnailUrl="$(contextRoot)/static/containers/[BBHOST]/column-layout/icon.png" title="Columns" version="1.1.1" viewNamespace="launchpad"><Widget Description="Basic widget to display structured content instance" TemplateName="Standard_Widget" area="0" contentRef="cs:@portalRepository:831053e9-2c8c-4818-ac2c-c1dfaf6404c6" linkBase="retail-demo/article" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/index.html" templateUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/templates/article-featured.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/icon.png" title="Structured Content" version="1.0.8" widgetChrome="$(contextRoot)/static/backbase.com.2012.aurora/html/chromes/widget_none.html"/> <Widget Description="Basic widget to display structured content instance" TemplateName="Standard_Widget" area="2" contentRef="cs:@portalRepository:63599595-f497-460a-9642-c4a42efadec9" linkBase="retail-demo/article" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/index.html" templateUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/templates/article-featured.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/icon.png" title="Structured Content" version="1.0.8" widgetChrome="$(contextRoot)/static/backbase.com.2012.aurora/html/chromes/widget_none.html"/> <Widget Description="Basic widget to display structured content instance" TemplateName="Standard_Widget" area="1" contentRef="cs:@portalRepository:39168b6d-b971-454d-b30b-d66284855d14" linkBase="retail-demo/article" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/index.html" templateUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/templates/article-featured.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-structured-content/icon.png" title="Structured Content" version="1.0.8" widgetChrome="$(contextRoot)/static/backbase.com.2012.aurora/html/chromes/widget_none.html"/></Container></Container></Container> <Container Description="" TemplateName="footerLayoutContainer" area="0" config="$(contextRoot)/static/containers/[BBHOST]/container-footer-layout/config.xml" csr="false" order="2.0" thumbnailUrl="$(contextRoot)/static/containers/[BBHOST]/container-footer-layout/media/icon.png" title="Footer Layout" version="1.0.0" viewNamespace="templates_footerLayoutContainer"><Widget Description="" TemplateName="Standard_Widget" area="0" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" height="" icon="" image="cs:@portalRepository:cdbe8c1c-811d-4717-a7ba-ad587e5806e6" locale="en" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/soc-gen-footer-logo.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464956058069"/> <Widget Description="" TemplateName="Standard_Widget" area="2" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" footer="cs:@portalRepository:c52cc8cf-b1d0-4794-9e5b-5207dd02d285" height="" icon="" link_1459356275851="d19f9d39-48ec-42b7-adda-ccc421525618" locale="en" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/soc-gen-footer-text.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464957226148"/> <Widget Description="" TemplateName="Standard_Widget" area="3" bgImageContainer="widget" bgImageScroll="scroll" bgImageSize="auto" footer="cs:@portalRepository:00ce7c82-29c5-4b98-8b6f-14d29e05312f" height="" icon="" locale="en" order="0.0" src="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/index.html" templateUrl="$(contextRoot)/static/features/[BBHOST]/content-templates/templates/soc-gen-footer-text.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-advanced-content-template/icon.png" title="Advanced Content Templates" version="2.3.6" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html" widgetContentsUpdated="1464957904573"/> <Widget Description="" TemplateName="Standard_Widget" area="1" icon="" locale="en" navDepth="2" navRoot="d3257481-f213-4be0-990c-9bc180d46245" navTemplate="$(contextRoot)/static/widgets/[BBHOST]/widget-navfooter/templates/mustache_top_level.html" order="1.0" showParent="false" src="$(contextRoot)/static/widgets/[BBHOST]/widget-navfooter/index.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/widget-navfooter/icon.png" title="Navigation - Footer" version="3.0.7" widgetChrome="$(contextRoot)/static/features/[BBHOST]/chromes/blank/chrome-blank.html"/></Container> <Widget TemplateName="Standard_Widget" area="0" order="3.0" src="$(contextRoot)/static/widgets/[BBHOST]/shc-wealth-widget-profile-info/index.html" thumbnailUrl="$(contextRoot)/static/widgets/[BBHOST]/shc-wealth-widget-profile-info/icon.png" title="Widget Profile Info" version="100.0.0" widgetChrome="$(contextRoot)/static/backbase.com.2012.aurora/html/chromes/widget_none.html"/></Page></Portal></Application>';
