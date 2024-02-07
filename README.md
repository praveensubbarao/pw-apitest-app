# pw-apitest-app
testing api with playwright

# test user data
testpsubbarao
testpsubbarao@test.com / letmein1

# to kill any npx playwright report errors
sudo killall -9 node

# run test
npx playwright test workingWithAPI.spec.ts -g "has\s+title$"

