require "test_helper"

class InvitationsControllerTest < ActionDispatch::IntegrationTest
  test "should get accept" do
    get invitations_accept_url
    assert_response :success
  end

  test "should get reject" do
    get invitations_reject_url
    assert_response :success
  end
end
