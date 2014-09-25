# prestissimo

a Simple presto(http://prestodb.io/) GUI

# install & run

```bash
# assume that you already installed npm, bower and sails globally
npm install
bower install
sails lift
# sails lift --prod (production env)
```
# development

## folder layout
```
(root) --- api -- (backend code, sails(http://sailsjs.org/))
         |       |
         |       |- controllers
         |       |
         |       |- models
         |       |
         |       |- policies
         |       | 
         |       |- responses
         |       |
         |       |- services
         |
         |- app -- (frontend code, angular(https://angularjs.org/))
         |       |
         |       |- controllers
         |       |
         |       |- models
         |
         |- assets 
         |
 (omit others, mostly auto generated)
         |
         |- views (attached to both sails and angular)
```
## grunt workflow
(TBD)

## adding dependencies
(TBD)

# deployment
(TBD)