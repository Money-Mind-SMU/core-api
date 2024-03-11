const assert = require('assert');
const sinon = require('sinon');
const { User } = require('../../database/models');
const jwt = require('../../helpers/jwt');
const controllerUser = require('../controllerUser');

describe('Update Profile API', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should update user profile', async () => {
    const fakeUserId = 1;

    const req = {
      user: { id: fakeUserId },
      body: { name: 'John Doe' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    // Mocking Sequelize's update method
    sinon.stub(User, 'update').resolves([1]);

    await controllerUser.updatedProfile(req, res);

    assert.strictEqual(res.status.calledOnceWith(200), true);
    assert.strictEqual(
      res.json.calledOnceWith({
        message: 'Successfully update user profile',
        data: { name: 'John Doe' },
      }),
      true
    );
  });

  it('should handle missing name in the request body', async () => {
    const req = {
      user: { id: 1 },
      body: {},
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await controllerUser.updatedProfile(req, res);

    assert.strictEqual(res.status.calledOnceWith(400), true);
    assert.strictEqual(
      res.json.calledOnceWith({ error: 'Name is required for updating profile' }),
      true
    );
  });

  it('should handle user not found in the database', async () => {
    const fakeUserId = 1;

    const req = {
      user: { id: fakeUserId },
      body: { name: 'John Doe' },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    // Mocking Sequelize's update method to return 0
    sinon.stub(User, 'update').resolves([0]);

    await controllerUser.updatedProfile(req, res);

    assert.strictEqual(res.status.calledOnceWith(404), true);
    assert.strictEqual(res.json.calledOnceWith({ error: 'User not found' }), true);
  });

  // Add more test cases for other scenarios
});