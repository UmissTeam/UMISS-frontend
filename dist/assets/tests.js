'use strict';

define('umiss-frontend/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/drf-token-authenticator.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'authenticators/drf-token-authenticator.js should pass ESLint\n\n33:24 - \'error\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('authorizers/drf-token-authorizer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/drf-token-authorizer.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/dashboard.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/dashboard/galvanicresistance/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/dashboard/galvanicresistance/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/dashboard/heartbeat/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/dashboard/heartbeat/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/dashboard/skintemperature/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/dashboard/skintemperature/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/foo.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/foo.js should pass ESLint\n\n38:58 - \'moment\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('models/galvanic-resistance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/galvanic-resistance.js should pass ESLint\n\n');
  });

  QUnit.test('models/heart-beat.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/heart-beat.js should pass ESLint\n\n');
  });

  QUnit.test('models/monitor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/monitor.js should pass ESLint\n\n');
  });

  QUnit.test('models/skin-temperature.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/skin-temperature.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n3:8 - \'ENV\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/dashboard.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/dashboard.js should pass ESLint\n\n');
  });

  QUnit.test('routes/dashboard/galvanicresistance/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboard/galvanicresistance/index.js should pass ESLint\n\n12:9 - \'store\' is assigned a value but never used. (no-unused-vars)\n23:21 - \'reason\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/dashboard/heartbeat/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboard/heartbeat/index.js should pass ESLint\n\n12:9 - \'store\' is assigned a value but never used. (no-unused-vars)\n23:21 - \'reason\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/dashboard/skintemperature/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/dashboard/skintemperature/index.js should pass ESLint\n\n12:9 - \'store\' is assigned a value but never used. (no-unused-vars)\n23:21 - \'reason\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/foo.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/foo.js should pass ESLint\n\n12:9 - \'store\' is assigned a value but never used. (no-unused-vars)\n23:21 - \'reason\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/signup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/signup.js should pass ESLint\n\n19:16 - \'response\' is defined but never used. (no-unused-vars)\n23:17 - \'response\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/application.js should pass ESLint\n\n5:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('themes/umiss-theme.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'themes/umiss-theme.js should pass ESLint\n\n');
  });
});
define('umiss-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('umiss-frontend/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }
});
/* global wait */
define('umiss-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'umiss-frontend/tests/helpers/start-app', 'umiss-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _umissFrontendTestsHelpersStartApp, _umissFrontendTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _umissFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _umissFrontendTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('umiss-frontend/tests/helpers/resolver', ['exports', 'umiss-frontend/resolver', 'umiss-frontend/config/environment'], function (exports, _umissFrontendResolver, _umissFrontendConfigEnvironment) {

  var resolver = _umissFrontendResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _umissFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _umissFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('umiss-frontend/tests/helpers/start-app', ['exports', 'ember', 'umiss-frontend/app', 'umiss-frontend/config/environment'], function (exports, _ember, _umissFrontendApp, _umissFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _umissFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _umissFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('umiss-frontend/tests/test-helper', ['exports', 'umiss-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _umissFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_umissFrontendTestsHelpersResolver['default']);
});
define('umiss-frontend/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/galvanicresistance-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/galvanicresistance-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/heartbeats-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/heartbeats-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/monitor-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/monitor-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/skin-temperature-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/skin-temperature-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dashboard-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dashboard/galvanicresistance/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard/galvanicresistance/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dashboard/heartbeat/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard/heartbeat/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/dashboard/skintemperature/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/dashboard/skintemperature/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/heartbeats-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/heartbeats-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/signup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });
});
define('umiss-frontend/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('umiss-frontend/tests/unit/controllers/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('umiss-frontend/tests/unit/models/galvanicresistance-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('galvanicresistance', 'Unit | Model | galvanicresistance', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('umiss-frontend/tests/unit/models/heartbeats-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('heartbeats', 'Unit | Model | heartbeats', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('umiss-frontend/tests/unit/models/monitor-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('umiss-frontend/tests/unit/models/skin-temperature-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('skin-temperature', 'Unit | Model | skin temperature', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('umiss-frontend/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/routes/dashboard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard', 'Unit | Route | dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/routes/dashboard/galvanicresistance/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard/galvanicresistance/index', 'Unit | Route | dashboard/galvanicresistance/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/routes/dashboard/heartbeat/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard/heartbeat/index', 'Unit | Route | dashboard/heartbeat/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/routes/dashboard/skintemperature/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:dashboard/skintemperature/index', 'Unit | Route | dashboard/skintemperature/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/routes/heartbeats-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:heartbeats', 'Unit | Route | heartbeats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/routes/signup-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:signup', 'Unit | Route | signup', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('umiss-frontend/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
require('umiss-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
