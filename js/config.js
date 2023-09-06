/**
 * This file lets you connect your different backend services to Monster UI and
 * exposes other settings like whitelabeling that can be set for the entire UI.
 *
 * This minimal, working example is designed to get you up and running in no
 * time when Monster UI is installed on the same server running Kazoo and the
 * APIs are accessible at the default location (`:8000/v2/`).
 *
 * If that is not the case, you will need to hook up your Kazoo server with the
 * `api.'default'` property and you should be good to go.
 *
 * For a full list and description of configurable options, head over to:
 * https://docs.2600hz.com/ui/docs/configuration/
 */
define({
	 api: { 'default': 'https://portal.aurus.com.do/v2/', provisioner:'https://phoneprov:phoneprov01@portal.aurus.com.do/p/api/', socket: 'wss://portal.aurus.com.do/' },
//	api: { 'default': 'https://portal.aurus.com.do/v2/', socket: 'wss://portal.aurus.com.do/' },
	addressbooksapp: {
                        create_default_addressbook: true,
                        default_addressbook_name: "Default list"
        },
	whitelabel: {
		companyName: '2600Hz',
		applicationTitle: 'Monster UI',
		callReportEmail: 'support@2600hz.com',
		nav: {
			help: 'http://wiki.2600hz.com'
		},
		port: {
			loa: 'http://ui.zswitch.net/Editable.LOA.Form.pdf',
			resporg: 'http://ui.zswitch.net/Editable.Resporg.Form.pdf'
		},
		countryCode: 'US',
		domain: 'sip.aurus.com.do',
		hasMetaflowsEnabled: true ,
		logoutTimer: 30 ,
		allowAnyOwnedNumberAsCallerID: false ,
		hide_port: true,
                        hide_powered: true,
                        hide_credits: true
/*		sso_providers: [
                                {
                                   "url":"https://accounts.google.com/o/oauth2/auth",
                                   "authenticate_photoUrl":false,
                                   "name":"google",
                                   "friendly_name":"Google",
                                   "params":{
                                          "client_id":"com",
                                          "response_type":"code",
                                          "scopes":[
                                                 "openid",
                                                 "profile",
                                                 "email"
                                          ],
                                          "include_granted_scopes":true
                                   }
                                }
                        ] */

	},

	 webrtc: {
                        websocketServers: ['wss://portal.aurus.com.do:5065','wss://portal.aurus.com.do:5065'],
                        disableVideo: true,
                        callSound: 'https://portal.aurus.com.do/apps/webrtc/metadata/music/incoming.mp3',
                        notificationIcon: 'https://portal.aurus.com.do/apps/webrtc/metadata/icon/WebRTC-Phone.png',
                        dtmfSoundsPath: 'https://portal.aurus.com.do/apps/webrtc/metadata/music'
        },
	disableBraintree: true,
	hide_registration: true,
	kazooClusterId: "6cc87ecda93c0b59b9f4a1b43a8babdd",
	allowedExtraDeviceTypes: [ 'teams','mobile'],
	provisioner: { brands:   {
	"grandstream": {
		"keyFunctions":["1","2","3"]

		}
           }
	} ,
	 resellerId: '6c1c26b0607d929b9207bbcff125ab69'
});
