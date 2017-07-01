"use strict";



define('umiss-frontend/adapters/application', ['exports', 'ember-data', 'ember', 'umiss-frontend/config/environment', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberData, _ember, _umissFrontendConfigEnvironment, _emberSimpleAuthMixinsDataAdapterMixin) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
    host: _umissFrontendConfigEnvironment['default'].host,
    namespace: 'api',
    authorizer: 'authorizer:drf-token-authorizer',
    pathForType: function pathForType(type) {
      var underscored = _ember['default'].String.underscore(type);
      return _ember['default'].String.pluralize(underscored);
    }
  });
});
define('umiss-frontend/app', ['exports', 'ember', 'umiss-frontend/resolver', 'ember-load-initializers', 'umiss-frontend/config/environment'], function (exports, _ember, _umissFrontendResolver, _emberLoadInitializers, _umissFrontendConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _umissFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _umissFrontendConfigEnvironment['default'].podModulePrefix,
    Resolver: _umissFrontendResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _umissFrontendConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('umiss-frontend/authenticators/drf-token-authenticator', ['exports', 'ember', 'ember-simple-auth/authenticators/base', 'umiss-frontend/config/environment'], function (exports, _ember, _emberSimpleAuthAuthenticatorsBase, _umissFrontendConfigEnvironment) {
  exports['default'] = _emberSimpleAuthAuthenticatorsBase['default'].extend({
    restore: function restore(data) {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        if (!_ember['default'].isEmpty(data.token)) {
          resolve(data);
        } else {
          reject();
        }
      });
    },

    authenticate: function authenticate(username, password) {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        _ember['default'].$.ajax({
          url: _umissFrontendConfigEnvironment['default'].host + '/api-auth-token/',
          type: 'POST',
          data: JSON.stringify({
            username: username,
            password: password
          }),
          contentType: 'application/json;charset=utf-8',
          dataType: 'json'
        }).then(function (response) {
          _ember['default'].run(function () {
            resolve({
              token: response.token
            });
          });
        }, function (xhr, status, error) {
          var response = xhr.responseText;
          _ember['default'].run(function () {
            reject(response);
          });
        });
      });
    }
  });
});
define('umiss-frontend/authorizers/drf-token-authorizer', ['exports', 'ember', 'ember-simple-auth/authorizers/base'], function (exports, _ember, _emberSimpleAuthAuthorizersBase) {
  exports['default'] = _emberSimpleAuthAuthorizersBase['default'].extend({
    session: _ember['default'].inject.service('session'),

    authorize: function authorize(sessionData, block) {
      if (this.get('session.isAuthenticated') && !_ember['default'].isEmpty(sessionData.token)) {
        block('Authorization', 'Token ' + sessionData.token);
      }
    }
  });
});
define('umiss-frontend/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('umiss-frontend/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('umiss-frontend/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _emberBootstrapComponentsBsAccordionItemBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemBody['default'];
    }
  });
});
define('umiss-frontend/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _emberBootstrapComponentsBsAccordionItemTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItemTitle['default'];
    }
  });
});
define('umiss-frontend/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('umiss-frontend/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroup['default'];
    }
  });
});
define('umiss-frontend/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _emberBootstrapComponentsBsButtonGroupButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButtonGroupButton['default'];
    }
  });
});
define('umiss-frontend/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsButton['default'];
    }
  });
});
define('umiss-frontend/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('umiss-frontend/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('umiss-frontend/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('umiss-frontend/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('umiss-frontend/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _emberBootstrapComponentsBsDropdownMenuDivider) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuDivider['default'];
    }
  });
});
define('umiss-frontend/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _emberBootstrapComponentsBsDropdownMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenuItem['default'];
    }
  });
});
define('umiss-frontend/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('umiss-frontend/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _emberBootstrapComponentsBsFormElementControl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControl['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementControlCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlCheckbox['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _emberBootstrapComponentsBsFormElementControlInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlInput['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _emberBootstrapComponentsBsFormElementControlTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementControlTextarea['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _emberBootstrapComponentsBsFormElementErrors) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementErrors['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _emberBootstrapComponentsBsFormElementFeedbackIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementFeedbackIcon['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _emberBootstrapComponentsBsFormElementHelpText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementHelpText['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _emberBootstrapComponentsBsFormElementLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLabel['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontal['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutHorizontalCheckbox['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInline) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInline['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutInlineCheckbox['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVertical) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVertical['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElementLayoutVerticalCheckbox['default'];
    }
  });
});
define('umiss-frontend/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _emberBootstrapComponentsBsModalSimple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalSimple['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _emberBootstrapComponentsBsModalHeaderClose) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderClose['default'];
    }
  });
});
define('umiss-frontend/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _emberBootstrapComponentsBsModalHeaderTitle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeaderTitle['default'];
    }
  });
});
define('umiss-frontend/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('umiss-frontend/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('umiss-frontend/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _emberBootstrapComponentsBsNavLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavLinkTo['default'];
    }
  });
});
define('umiss-frontend/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('umiss-frontend/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('umiss-frontend/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('umiss-frontend/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('umiss-frontend/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('umiss-frontend/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('umiss-frontend/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('umiss-frontend/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('umiss-frontend/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('umiss-frontend/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('umiss-frontend/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('umiss-frontend/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('umiss-frontend/components/ember-chart', ['exports', 'ember-cli-chartjs/components/ember-chart'], function (exports, _emberCliChartjsComponentsEmberChart) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliChartjsComponentsEmberChart['default'];
    }
  });
});
define('umiss-frontend/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('umiss-frontend/components/high-charts', ['exports', 'ember-highcharts/components/high-charts'], function (exports, _emberHighchartsComponentsHighCharts) {
  exports['default'] = _emberHighchartsComponentsHighCharts['default'];
});
define('umiss-frontend/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('umiss-frontend/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),
    actions: {
      invalidateSession: function invalidateSession() {
        this.get('session').invalidate();
      }
    }
  });
});
define('umiss-frontend/controllers/dashboard', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),

    actions: {
      invalidateSession: function invalidateSession() {
        this.get('session').invalidate();
      }
    }
  });
});
define('umiss-frontend/controllers/dashboard/galvanicresistance/index', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Controller.extend({
    moment: _ember['default'].inject.service(),
    chartOptions: _ember['default'].computed('labels', function () {
      return {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Resistência Galvânica do paciente'
        },
        xAxis: {
          categories: this.get('labels')
        },
        yAxis: {
          title: {
            text: 'Resistência Galvânica'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        }
      };
    }),

    data: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return item.get('resistance');
      });
    }),

    labels: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return (0, _moment['default'])(item.get('created')).format("DD-MM, HH:mm:ss");
      });
    }),

    chartData: _ember['default'].computed('data', 'model', 'labels', function () {
      return [{
        name: 'Paciente',
        data: this.get('data')
      }];
    }),

    theme: {
      colors: ['#258be2', '#666666', '#f45b5b', '#8085e9', '#8d4654', '#7798bf', '#aaeeee', '#ff0066', '#eeaaee', '#55bf3b', '#df5353', '#7798bf', '#aaeeee'],
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [[0, '#2a2a2b'], [1, '#3e3e40']]
        },
        style: {
          fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
      },
      title: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase',
          fontSize: '20px'
        }
      },
      subtitle: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase'
        }
      },
      xAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
          style: {
            color: '#A0A0A3'

          }
        }
      },
      yAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            color: '#B0B0B3'
          },
          marker: {
            lineColor: '#333'
          }
        },
        boxplot: {
          fillColor: '#505053'
        },
        candlestick: {
          lineColor: 'white'
        },
        errorbar: {
          color: 'white'
        }
      },
      legend: {
        itemStyle: {
          color: '#E0E0E3'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#606063'
        }
      },
      credits: {
        style: {
          color: '#666'
        }
      },
      labels: {
        style: {
          color: '#707073'
        }
      },

      drilldown: {
        activeAxisLabelStyle: {
          color: '#F0F0F3'
        },
        activeDataLabelStyle: {
          color: '#F0F0F3'
        }
      },

      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
            fill: '#505053'
          }
        }
      },

      // scroll charts
      rangeSelector: {
        buttonTheme: {
          fill: '#505053',
          stroke: '#000000',
          style: {
            color: '#CCC'
          },
          states: {
            hover: {
              fill: '#707073',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            },
            select: {
              fill: '#000003',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            }
          }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
        },
        labelStyle: {
          color: 'silver'
        }
      },

      navigator: {
        handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
        },
        xAxis: {
          gridLineColor: '#505053'
        }
      },

      scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
      },

      // special colors for some of the
      legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
      background2: '#505053',
      dataLabelsColor: '#B0B0B3',
      textColor: '#C0C0C0',
      contrastTextColor: '#F0F0F3',
      maskColor: 'rgba(255,255,255,0.3)'
    }
  });
});
define('umiss-frontend/controllers/dashboard/heartbeat/index', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Controller.extend({
    chartOptions: _ember['default'].computed('labels', function () {
      return {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Batimentos por minuto'
        },
        xAxis: {
          categories: this.get('labels')
        },
        yAxis: {
          title: {
            text: 'BPM'
          }
        },
        tooltip: {
          valueSuffix: 'BPM'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        }
      };
    }),

    data: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return item.get('beats');
      });
    }),

    labels: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return (0, _moment['default'])(item.get('created')).format("DD-MM, HH:mm:ss");
      });
    }),

    chartData: _ember['default'].computed('data', 'model', 'labels', function () {
      return [{
        name: 'Paciente',
        data: this.get('data')
      }];
    }),

    theme: {
      colors: ['#258be2', '#666666', '#f45b5b', '#8085e9', '#8d4654', '#7798bf', '#aaeeee', '#ff0066', '#eeaaee', '#55bf3b', '#df5353', '#7798bf', '#aaeeee'],
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [[0, '#2a2a2b'], [1, '#3e3e40']]
        },
        style: {
          fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
      },
      title: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase',
          fontSize: '20px'
        }
      },
      subtitle: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase'
        }
      },
      xAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
          style: {
            color: '#A0A0A3'

          }
        }
      },
      yAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            color: '#B0B0B3'
          },
          marker: {
            lineColor: '#333'
          }
        },
        boxplot: {
          fillColor: '#505053'
        },
        candlestick: {
          lineColor: 'white'
        },
        errorbar: {
          color: 'white'
        }
      },
      legend: {
        itemStyle: {
          color: '#E0E0E3'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#606063'
        }
      },
      credits: {
        style: {
          color: '#666'
        }
      },
      labels: {
        style: {
          color: '#707073'
        }
      },

      drilldown: {
        activeAxisLabelStyle: {
          color: '#F0F0F3'
        },
        activeDataLabelStyle: {
          color: '#F0F0F3'
        }
      },

      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
            fill: '#505053'
          }
        }
      },

      // scroll charts
      rangeSelector: {
        buttonTheme: {
          fill: '#505053',
          stroke: '#000000',
          style: {
            color: '#CCC'
          },
          states: {
            hover: {
              fill: '#707073',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            },
            select: {
              fill: '#000003',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            }
          }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
        },
        labelStyle: {
          color: 'silver'
        }
      },

      navigator: {
        handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
        },
        xAxis: {
          gridLineColor: '#505053'
        }
      },

      scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
      },

      // special colors for some of the
      legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
      background2: '#505053',
      dataLabelsColor: '#B0B0B3',
      textColor: '#C0C0C0',
      contrastTextColor: '#F0F0F3',
      maskColor: 'rgba(255,255,255,0.3)'
    }
  });
});
define('umiss-frontend/controllers/dashboard/skintemperature/index', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports['default'] = _ember['default'].Controller.extend({
    theme: {
      colors: ['#258be2', '#666666', '#f45b5b', '#8085e9', '#8d4654', '#7798bf', '#aaeeee', '#ff0066', '#eeaaee', '#55bf3b', '#df5353', '#7798bf', '#aaeeee'],
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [[0, '#2a2a2b'], [1, '#3e3e40']]
        },
        style: {
          fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
      },
      title: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase',
          fontSize: '20px'
        }
      },
      subtitle: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase'
        }
      },
      xAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
          style: {
            color: '#A0A0A3'

          }
        }
      },
      yAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            color: '#B0B0B3'
          },
          marker: {
            lineColor: '#333'
          }
        },
        boxplot: {
          fillColor: '#505053'
        },
        candlestick: {
          lineColor: 'white'
        },
        errorbar: {
          color: 'white'
        }
      },
      legend: {
        itemStyle: {
          color: '#E0E0E3'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#606063'
        }
      },
      credits: {
        style: {
          color: '#666'
        }
      },
      labels: {
        style: {
          color: '#707073'
        }
      },

      drilldown: {
        activeAxisLabelStyle: {
          color: '#F0F0F3'
        },
        activeDataLabelStyle: {
          color: '#F0F0F3'
        }
      },

      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
            fill: '#505053'
          }
        }
      },

      // scroll charts
      rangeSelector: {
        buttonTheme: {
          fill: '#505053',
          stroke: '#000000',
          style: {
            color: '#CCC'
          },
          states: {
            hover: {
              fill: '#707073',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            },
            select: {
              fill: '#000003',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            }
          }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
        },
        labelStyle: {
          color: 'silver'
        }
      },

      navigator: {
        handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
        },
        xAxis: {
          gridLineColor: '#505053'
        }
      },

      scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
      },

      // special colors for some of the
      legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
      background2: '#505053',
      dataLabelsColor: '#B0B0B3',
      textColor: '#C0C0C0',
      contrastTextColor: '#F0F0F3',
      maskColor: 'rgba(255,255,255,0.3)'
    },

    chartOptions: _ember['default'].computed('labels', function () {
      return {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Temperatura corporal do paciente.'
        },
        xAxis: {
          categories: this.get('labels')
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        }
      };
    }),

    data: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return item.get('temperature');
      });
    }),

    labels: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return (0, _moment['default'])(item.get('created')).format("DD-MM, HH:mm:ss");
      });
    }),

    chartData: _ember['default'].computed('data', 'model', 'labels', function () {
      return [{
        name: 'Paciente',
        data: this.get('data')
      }];
    })
  });
});
define('umiss-frontend/controllers/foo', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    chartOptions: _ember['default'].computed('labels', function () {
      return {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Temperatura corporal do paciente.'
        },
        xAxis: {
          categories: this.get('labels')
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },
        tooltip: {
          valueSuffix: '°C'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        }
      };
    }),

    data: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return item.get('temperature');
      });
    }),

    labels: _ember['default'].computed('model', function () {
      return this.get('model').map(function (item) {
        return moment(item.get('created')).format("DD-MM, HH:mm:ss");
      });
    }),

    chartData: _ember['default'].computed('data', 'model', 'labels', function () {
      return [{
        name: 'Paciente',
        data: this.get('data')
      }];
    })
  });
});
define('umiss-frontend/controllers/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    session: _ember['default'].inject.service('session'),

    actions: {
      authenticate: function authenticate() {
        var _this = this;

        var _getProperties = this.getProperties('username', 'password');

        var username = _getProperties.username;
        var password = _getProperties.password;

        this.get('session').authenticate('authenticator:drf-token-authenticator', username, password)['catch'](function (reason) {
          _this.set('error', reason);
        });
      }
    }
  });
});
define('umiss-frontend/helpers/app-version', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _umissFrontendConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('umiss-frontend/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('umiss-frontend/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('umiss-frontend/helpers/is-after', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/is-before', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/is-between', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/is-same-or-after', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/is-same-or-before', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/is-same', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-add', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-calendar', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('umiss-frontend/helpers/moment-format', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-from-now', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-from', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-subtract', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-to-date', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-to-now', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-to', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('umiss-frontend/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('umiss-frontend/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('umiss-frontend/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('umiss-frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('umiss-frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('umiss-frontend/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('umiss-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'umiss-frontend/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _umissFrontendConfigEnvironment) {
  var _config$APP = _umissFrontendConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('umiss-frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('umiss-frontend/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('umiss-frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _emberDataSetupContainer, _emberDataIndex) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('umiss-frontend/initializers/ember-simple-auth', ['exports', 'umiss-frontend/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _umissFrontendConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _umissFrontendConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _umissFrontendConfigEnvironment['default'].rootURL || _umissFrontendConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('umiss-frontend/initializers/export-application-global', ['exports', 'ember', 'umiss-frontend/config/environment'], function (exports, _ember, _umissFrontendConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_umissFrontendConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _umissFrontendConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_umissFrontendConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('umiss-frontend/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('umiss-frontend/initializers/load-bootstrap-config', ['exports', 'umiss-frontend/config/environment', 'ember-bootstrap/config'], function (exports, _umissFrontendConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_umissFrontendConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('umiss-frontend/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('umiss-frontend/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("umiss-frontend/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _emberDataInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInstanceInitializersInitializeStoreService["default"]
  };
});
define('umiss-frontend/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('umiss-frontend/models/galvanic-resistance', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    owner: _emberData['default'].attr('string'),
    created: _emberData['default'].attr('string'),
    resistance: _emberData['default'].attr('number'),
    is_critical: _emberData['default'].attr('boolean')
  });
});
define('umiss-frontend/models/heart-beat', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    owner: _emberData['default'].attr('string'),
    created: _emberData['default'].attr('string'),
    beats: _emberData['default'].attr('number'),
    is_critical: _emberData['default'].attr('boolean')
  });
});
define('umiss-frontend/models/monitor', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    username: _emberData['default'].attr('string'),
    password: _emberData['default'].attr('string'),
    token: _emberData['default'].attr('string')
  });
});
define('umiss-frontend/models/skin-temperature', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    owner: _emberData['default'].attr('string'),
    created: _emberData['default'].attr('string'),
    temperature: _emberData['default'].attr('number'),
    is_critical: _emberData['default'].attr('boolean')
  });
});
define('umiss-frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('umiss-frontend/router', ['exports', 'ember', 'umiss-frontend/config/environment'], function (exports, _ember, _umissFrontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _umissFrontendConfigEnvironment['default'].locationType,
    rootURL: _umissFrontendConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('dashboard', { path: '/' }, function () {
      this.route('skintemperature', function () {});
      this.route('galvanicresistance', function () {});
      this.route('heartbeat', function () {});
    });
    this.route('login');
    this.route('signup');
    this.route('foo');
  });

  exports['default'] = Router;
});
define('umiss-frontend/routes/application', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin', 'umiss-frontend/config/environment'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin, _umissFrontendConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
    session: _ember['default'].inject.service(),
    // authenticatedAjax: Ember.inject.service(),
    sessionAuthenticated: function sessionAuthenticated() {
      this._super.apply(this, arguments);
      this.loadMonitor();
    },
    loadMonitor: function loadMonitor() {
      var _this = this;

      if (!this.get('session.isAuthenticated'))
        // {
        return;
      // }
      // const url = ENV.host + '/api/monitors/me';
      // const request = this.get('authenticatedAjax').request(url);
      // request.then((monitorData) => {
      // this.store.pushPayload(monitorData);
      // const monitor = this.store.peekRecord('monitor', monitorData.data.id);
      this.store.findRecord('monitor', 'me').then(function (monitor) {
        _this.set('session.currentMonitor', monitor);
      });
    },
    beforeModel: function beforeModel() {
      this.loadMonitor();
    }
  });
});
define('umiss-frontend/routes/dashboard', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {});
});
define('umiss-frontend/routes/dashboard/galvanicresistance/index', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin', 'umiss-frontend/config/environment'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin, _umissFrontendConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.get('store').findAll('galvanic-resistance');
    },

    afterModel: function afterModel(model) {
      var n1 = model.content.length;
      var store = this.store;
      var that = this;
      var fn = function fn() {
        _ember['default'].run.later(function () {
          that.store.findAll('galvanic-resistance', { reload: true }).then(function (value) {
            var cont = that.controller;
            if (n1 != value.content.length) {
              cont.set('model', []);
              cont.set('model', value);
              n1 = value.content.length;
            }
          }, function (reason) {});
          fn();
        }, _umissFrontendConfigEnvironment['default'].requestTime);
      };
      fn();
    }
  });
});
define('umiss-frontend/routes/dashboard/heartbeat/index', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin', 'umiss-frontend/config/environment'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin, _umissFrontendConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.get('store').findAll('heart-beat');
    },

    afterModel: function afterModel(model) {
      var n1 = model.content.length;
      var store = this.store;
      var that = this;
      var fn = function fn() {
        _ember['default'].run.later(function () {
          that.store.findAll('heart-beat', { reload: true }).then(function (value) {
            var cont = that.controller;
            if (n1 != value.content.length) {
              cont.set('model', []);
              cont.set('model', value);
              n1 = value.content.length;
            }
          }, function (reason) {});
          fn();
        }, _umissFrontendConfigEnvironment['default'].requestTime);
      };
      fn();
    }
  });
});
define('umiss-frontend/routes/dashboard/skintemperature/index', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin', 'umiss-frontend/config/environment'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin, _umissFrontendConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.get('store').findAll('skin-temperature');
    },

    afterModel: function afterModel(model) {
      var n1 = model.content.length;
      var store = this.store;
      var that = this;
      var fn = function fn() {
        _ember['default'].run.later(function () {
          that.store.findAll('skin-temperature', { reload: true }).then(function (value) {
            var cont = that.controller;
            if (n1 != value.content.length) {
              cont.set('model', []);
              cont.set('model', value);
              n1 = value.content.length;
            }
          }, function (reason) {});
          fn();
        }, _umissFrontendConfigEnvironment['default'].requestTime);
      };
      fn();
    }
  });
});
define('umiss-frontend/routes/foo', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin', 'umiss-frontend/config/environment'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin, _umissFrontendConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
    model: function model() {
      return this.get('store').findAll('skin-temperature');
    },

    afterModel: function afterModel(model) {
      var n1 = model.content.length;
      var store = this.store;
      var that = this;
      var fn = function fn() {
        _ember['default'].run.later(function () {
          that.store.findAll('skin-temperature', { reload: true }).then(function (value) {
            var cont = that.controller;
            if (n1 != value.content.length) {
              cont.set('model', []);
              cont.set('model', value);
              n1 = value.content.length;
            }
          }, function (reason) {});
          fn();
        }, _umissFrontendConfigEnvironment['default'].requestTime);
      };
      fn();
    }
  });
});
define('umiss-frontend/routes/login', ['exports', 'ember', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsUnauthenticatedRouteMixin) {
  exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsUnauthenticatedRouteMixin['default'], {});
});
define('umiss-frontend/routes/signup', ['exports', 'ember', 'umiss-frontend/config/environment'], function (exports, _ember, _umissFrontendConfigEnvironment) {
  exports['default'] = _ember['default'].Route.extend({
    ajax: _ember['default'].inject.service(),
    session: _ember['default'].inject.service(),

    actions: {
      signup: function signup(username, password, token) {
        var _this = this;

        this.controller.set('isSigningUp', true);
        _ember['default'].$.ajax({
          url: _umissFrontendConfigEnvironment['default'].host + '/api/monitors',
          type: 'POST',
          data: {
            username: username,
            password: password,
            token: token
          }
        }).then(function (response) {
          _this.get('session').authenticate('authenticator:drf-token-authenticator', username, password);
          _this.controller.set('SignedUp', true);
        })['catch'](function (response) {
          _this.controller.set('error', true);
          _this.controller.set('isSigningUp', false);
        });
        // .finally((response) => this.controller.set('isSigningUp', false));
      }
    }
  });
});
define('umiss-frontend/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({
    keyForAttribute: function keyForAttribute(attr) {
      return Ember.String.underscore(attr);
    }
  });
});
define('umiss-frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('umiss-frontend/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _emberCookiesServicesCookies) {
  exports['default'] = _emberCookiesServicesCookies['default'];
});
define('umiss-frontend/services/moment', ['exports', 'ember', 'umiss-frontend/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _umissFrontendConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_umissFrontendConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('umiss-frontend/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('umiss-frontend/services/socket-io', ['exports', 'ember-websockets/services/socket-io'], function (exports, _emberWebsocketsServicesSocketIo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWebsocketsServicesSocketIo['default'];
    }
  });
});
define('umiss-frontend/services/websockets', ['exports', 'ember-websockets/services/websockets'], function (exports, _emberWebsocketsServicesWebsockets) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWebsocketsServicesWebsockets['default'];
    }
  });
});
define('umiss-frontend/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define("umiss-frontend/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+ugnje2g", "block": "{\"statements\":[[\"block\",[\"bs-navbar\"],null,[[\"fluid\"],[[\"get\",[\"fluid\"]]]],16],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            Cadastrar\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"signup\"],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"            Logar\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"login\"],null,2]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"item\"],null,null,3],[\"block\",[\"nav\",\"item\"],null,null,1]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"invalidateSession\"]],[\"flush-element\"],[\"text\",\"\\n            Sair\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"a\",[]],[\"flush-element\"],[\"text\",\"\\n          Bem vindo, \"],[\"append\",[\"unknown\",[\"session\",\"currentMonitor\",\"username\"]],false],[\"text\",\"!\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            Temperatura Corporal\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"dashboard.skintemperature\"],null,7]],\"locals\":[]},{\"statements\":[[\"text\",\"            Resistência Galvânica\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"dashboard.galvanicresistance\"],null,9]],\"locals\":[]},{\"statements\":[[\"text\",\"            Batimento Cardíaco\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"link-to\"],[\"dashboard.heartbeat\"],null,11]],\"locals\":[]},{\"statements\":[[\"block\",[\"nav\",\"item\"],null,null,12],[\"block\",[\"nav\",\"item\"],null,null,10],[\"block\",[\"nav\",\"item\"],null,null,8],[\"block\",[\"nav\",\"item\"],null,null,6],[\"block\",[\"nav\",\"item\"],null,null,5]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"session\",\"isAuthenticated\"]]],null,13,4]],\"locals\":[\"nav\"]},{\"statements\":[[\"block\",[\"navbar\",\"nav\"],null,null,14]],\"locals\":[]},{\"statements\":[[\"block\",[\"navbar\",\"content\"],null,null,15]],\"locals\":[\"navbar\"]}],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/application.hbs" } });
});
define("umiss-frontend/templates/dashboard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wB8t2KSM", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/dashboard.hbs" } });
});
define("umiss-frontend/templates/dashboard/galvanicresistance/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "oUI8zzsg", "block": "{\"statements\":[[\"append\",[\"helper\",[\"high-charts\"],null,[[\"chartOptions\",\"content\"],[[\"get\",[\"chartOptions\"]],[\"get\",[\"chartData\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/dashboard/galvanicresistance/index.hbs" } });
});
define("umiss-frontend/templates/dashboard/heartbeat/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4C4VnIDb", "block": "{\"statements\":[[\"append\",[\"helper\",[\"high-charts\"],null,[[\"chartOptions\",\"content\"],[[\"get\",[\"chartOptions\"]],[\"get\",[\"chartData\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/dashboard/heartbeat/index.hbs" } });
});
define("umiss-frontend/templates/dashboard/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "J8D3Eyp1", "block": "{\"statements\":[[\"open-element\",\"center\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container jumbotron\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"/assets/images/logopi2.png\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/dashboard/index.hbs" } });
});
define("umiss-frontend/templates/dashboard/skintemperature/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "G2B05yfJ", "block": "{\"statements\":[[\"append\",[\"helper\",[\"high-charts\"],null,[[\"chartOptions\",\"content\"],[[\"get\",[\"chartOptions\"]],[\"get\",[\"chartData\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/dashboard/skintemperature/index.hbs" } });
});
define("umiss-frontend/templates/foo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jMXFaYP7", "block": "{\"statements\":[[\"append\",[\"helper\",[\"high-charts\"],null,[[\"chartOptions\",\"content\"],[[\"get\",[\"chartOptions\"]],[\"get\",[\"chartData\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/foo.hbs" } });
});
define("umiss-frontend/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BHeD/P+q", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container jumbotron\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"open-element\",\"center\",[]],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"bs-form\"],null,[[\"formLayout\",\"model\",\"onSubmit\"],[[\"get\",[\"formLayout\"]],[\"get\",[null]],[\"helper\",[\"action\"],[[\"get\",[null]],\"authenticate\"],null]]],1],[\"block\",[\"if\"],[[\"get\",[\"error\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"flush-element\"],[\"text\",\"\\n        Usuário ou senha inválido.\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"form\",\"element\"],null,[[\"controlType\",\"label\",\"property\",\"required\"],[\"username\",\"Usuário\",\"username\",true]]],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"form\",\"element\"],null,[[\"controlType\",\"label\",\"property\",\"required\"],[\"password\",\"Senha\",\"password\",true]]],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"bs-button\"],null,[[\"defaultText\",\"type\",\"buttonType\"],[\"Logar\",\"primary\",\"submit\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"form\"]}],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/login.hbs" } });
});
define("umiss-frontend/templates/signup", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fZFFjQvc", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container jumbotron\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signup\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"open-element\",\"center\",[]],[\"flush-element\"],[\"text\",\"Cadastrar\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Login\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"class\"],[\"username\",[\"get\",[\"username\"]],\"form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Senha\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"type\",\"value\",\"class\"],[\"password\",\"password\",[\"get\",[\"password\"]],\"form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"label\",[]],[\"flush-element\"],[\"text\",\"Token da Cadeira\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"id\",\"value\",\"class\"],[\"token\",[\"get\",[\"token\"]],\"form-control\"]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info\"],[\"dynamic-attr\",\"disabled\",[\"unknown\",[\"isSigningUp\"]],null],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signup\",[\"get\",[\"username\"]],[\"get\",[\"password\"]],[\"get\",[\"token\"]]]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isSigningUp\"]]],null,2,1],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"error\"]]],null,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-danger\"],[\"flush-element\"],[\"text\",\"\\n        Usuário já cadastrado.\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        Cadastrar\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        Cadastrando...\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "umiss-frontend/templates/signup.hbs" } });
});
define('umiss-frontend/themes/umiss-theme', ['exports'], function (exports) {
  exports['default'] = {
    colors: ['#258be2', '#666666', '#f45b5b', '#8085e9', '#8d4654', '#7798bf', '#aaeeee', '#ff0066', '#eeaaee', '#55bf3b', '#df5353', '#7798bf', '#aaeeee'],
    chart: {
      backgroundColor: null,
      style: {
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
      }
    },
    title: {
      style: {
        color: 'black',
        // fontSize: '18px',
        fontWeight: 'bold'
      }
    },
    subtitle: {
      style: {
        color: 'black'
      }
    },
    tooltip: {
      borderWidth: 0,
      style: {
        fontSize: '16px'
      }
    },
    legend: {
      itemStyle: {
        fontWeight: 'bold',
        fontSize: '14px'
      }
    },
    xAxis: {
      labels: {
        style: {
          color: '#6e6e70',
          fontSize: '16px'
        }
      },
      title: {
        style: {
          fontSize: '14px'
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          color: '#6e6e70',
          fontSize: '16px'
        }
      },
      title: {
        style: {
          fontSize: '14px'
        }
      }
    },
    plotOptions: {
      series: {
        shadow: true
      },
      candlestick: {
        lineColor: '#404048'
      }
    },
    navigator: {
      xAxis: {
        gridLineColor: '#D0D0D8'
      }
    },
    rangeSelector: {
      buttonTheme: {
        fill: 'white',
        stroke: '#C0C0C8',
        'stroke-width': 1,
        states: {
          select: {
            fill: '#D0D0D8'
          }
        }
      }
    },
    scrollbar: {
      trackBorderColor: '#C0C0C8'
    },
    background2: '#E0E0E8',
    global: {
      timezoneOffset: new Date().getTimezoneOffset()
    },
    credits: {
      enabled: false
    }
  };
});
define('umiss-frontend/utils/chart-object', ['exports', 'ember-cli-chartjs/utils/chart-object'], function (exports, _emberCliChartjsUtilsChartObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliChartjsUtilsChartObject['default'];
    }
  });
});


define('umiss-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'umiss-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("umiss-frontend/app")["default"].create({"name":"umiss-frontend","version":"0.0.0+5e4332f8"});
}
//# sourceMappingURL=umiss-frontend.map
