exports.COMPOSITE = {

    CONTENT_TYPE: [
        "Story",
        "Worksheet",
        "TextBook",
        "Collection",
        "Course"
    ]
};

exports.COURSE = {

    SEARCH: {
        MISSING_CODE: "ERR_COURSE_SEARCH_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for search course are missing",
        FAILED_CODE: "ERR_COURSE_SEARCH_FAILED",
        FAILED_MESSAGE: "Search course failed"
    },

    CREATE: {
        MISSING_CODE: "ERR_COURSE_CREATE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for create course are missing",
        FAILED_CODE: "ERR_COURSE_CREATE_FAILED",
        FAILED_MESSAGE: "Create course failed"
    },

    UPDATE: {
        MISSING_CODE: "ERR_COURSE_UPDATE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for update course are missing",
        FAILED_CODE: "ERR_COURSE_UPDATE_FAILED",
        FAILED_MESSAGE: "Update course failed"
    },

    REVIEW: {
        MISSING_CODE: "ERR_COURSE_REVIEW_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for review course are missing",
        FAILED_CODE: "ERR_COURSE_REVIEW_FAILED",
        FAILED_MESSAGE: "Review course failed"
    },

    PUBLISH: {
        FAILED_CODE: "ERR_COURSE_PUBLISH_FAILED",
        FAILED_MESSAGE: "Publish course failed"
    },

    GET: {
        FAILED_CODE: "ERR_COURSE_GET_FAILED",
        FAILED_MESSAGE: "Get course failed"
    },

    GET_MY: {
        FAILED_CODE: "ERR_COURSE_GET_MY_FAILED",
        FAILED_MESSAGE: "Get my course failed"
    },

    HIERARCHY: {
        MISSING_CODE: "ERR_COURSE_HIERARCHY_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get course hierarchy are missing",
        FAILED_CODE: "ERR_COURSE_HIERARCHY_FAILED",
        FAILED_MESSAGE: "Get course hierarchy failed"
    },

    MIME_TYPE: "application/vnd.ekstep.content-collection",
    CONTENT_TYPE: "Course"
};

exports.CONTENT = {

    SEARCH: {
        MISSING_CODE: "ERR_CONTENT_SEARCH_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for search content are missing",
        FAILED_CODE: "ERR_CONTENT_SEARCH_FAILED",
        FAILED_MESSAGE: "Search content failed"
    },

    CREATE: {
        MISSING_CODE: "ERR_CONTENT_CREATE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for create content are missing",
        FAILED_CODE: "ERR_CONTENT_CREATE_FAILED",
        FAILED_MESSAGE: "Create content failed"
    },

    UPDATE: {
        MISSING_CODE: "ERR_CONTENT_UPDATE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for update content are missing",
        FAILED_CODE: "ERR_CONTENT_UPDATE_FAILED",
        FAILED_MESSAGE: "Update content failed"
    },

    UPLOAD: {
        MISSING_CODE: "ERR_CONTENT_UPLOAD_FILES_MISSING",
        MISSING_MESSAGE: "Required files for upload content are missing",
        FAILED_CODE: "ERR_CONTENT_UPLOAD_FAILED",
        FAILED_MESSAGE: "Upload content failed"
    },

    REVIEW: {
        MISSING_CODE: "ERR_CONTENT_REVIEW_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for review content are missing",
        FAILED_CODE: "ERR_CONTENT_REVIEW_FAILED",
        FAILED_MESSAGE: "Review content failed"
    },

    PUBLISH: {
        FAILED_CODE: "ERR_CONTENT_PUBLISH_FAILED",
        FAILED_MESSAGE: "Publish content failed"
    },

    GET: {
        MISSING_CODE: "ERR_CONTENT_GET_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get content are missing",
        FAILED_CODE: "ERR_CONTENT_GET_FAILED",
        FAILED_MESSAGE: "Get content failed"
    },

    GET_MY: {
        FAILED_CODE: "ERR_CONTENT_GET_MY_FAILED",
        FAILED_MESSAGE: "Get my content failed"
    },

    RETIRE: {
        MISSING_CODE: "ERR_CONTENT_RETIRE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for retire content are missing",
        FAILED_CODE: "ERR_CONTENT_RETIRE_FAILED",
        FAILED_MESSAGE: "Retire content failed"
    },

    REJECT: {
        MISSING_CODE: "ERR_CONTENT_REJECT_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for reject content are missing",
        FAILED_CODE: "ERR_CONTENT_REJECT_FAILED",
        FAILED_MESSAGE: "Reject content failed"
    },

    FLAG: {
        MISSING_CODE: "ERR_CONTENT_FLAG_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for flag content are missing",
        FAILED_CODE: "ERR_CONTENT_FLAG_FAILED",
        FAILED_MESSAGE: "Flag content failed"
    },
    
    ACCEPT_FLAG: {
        MISSING_CODE: "ERR_CONTENT_ACCEPT_FLAG_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for accept flag are missing",
        FAILED_CODE: "ERR_CONTENT_ACCEPT_FLAG_FAILED",
        FAILED_MESSAGE: "Accept flag for content failed"
    },
    
    REJECT_FLAG: {
        MISSING_CODE: "ERR_CONTENT_REJECT_FLAG_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for reject flag are missing",
        FAILED_CODE: "ERR_CONTENT_REJECT_FLAG_FAILED",
        FAILED_MESSAGE: "Reject flag for content failed"
    },

    UPLOAD_URL: {
        MISSING_CODE: "ERR_CONTENT_UPLOAD_URL_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for upload url are missing",
        FAILED_CODE: "ERR_CONTENT_UPLOAD_URL_FAILED",
        FAILED_MESSAGE: "Upload url for content failed"
    },

    CONTENT_TYPE: [
        "Story",
        "Worksheet",
        "TextBook",
        "Collection"
    ],

    MIME_TYPE: [
        "application/vnd.ekstep.ecml-archive",
        "application/vnd.ekstep.html-archive",
        "application/vnd.android.package-archive",
        "application/vnd.ekstep.content-archive",
        "application/vnd.ekstep.plugin-archive",
        "application/octet-stream",
        "application/msword",
        "application/pdf",
        "video/youtube",
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/tiff",
        "image/bmp",
        "image/gif",
        "image/svg+xml",
        "video/avi",
        "video/mpeg",
        "video/quicktime",
        "video/3gpp",
        "video/mpeg",
        "video/mp4",
        "video/ogg",
        "video/webm",
        "audio/mp3",
        "audio/mp4",
        "audio/mpeg",
        "audio/ogg",
        "audio/webm",
        "audio/x-wav",
        "audio/wav"
    ]
};

exports.REQUEST = {

    PARAMS: {
        MISSING_CID_CODE: "ERR_REQUEST_FIELDS_CID_MISSING",
        MISSING_CID_MESSAGE: "Required fields consumer id is missing"
    },
    DB_ERROR: {
        DB_ERROR_CODE: "DB_CONNECTION_FAILED",
        DB_ERROR_MESSAGE: "MongoDB not connected"
    }

};

exports.RESPONSE_CODE = {
    CLIENT_ERROR: "CLIENT_ERROR",
    SERVER_ERROR: "SERVER_ERROR",
    SUCCESS: "OK",
    RESOURSE_NOT_FOUND: "RESOURCE_NOT_FOUND"
};

exports.API_VERSION = {
    V1: "1.0"
};

exports.SERVICE = {
    NAME: "ContentService"
};

exports.UTILS = {
    UPLOAD: {
        MISSING_CODE: "ERR_MEDIA_UPLOAD_FILES_MISSING",
        MISSING_MESSAGE: "Required files for upload media are missing",
        FAILED_CODE: "ERR_MEDIA_UPLOAD_FAILED",
        FAILED_MESSAGE: "Upload media failed"
    },
    RESOURCE_BUNDLE: {
        MISSING_CODE: "ERR_GET_RESOURCE_BUNDLE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get resource language are missing",
        FAILED_CODE: "ERR_GET_RESOURCE_BUNDLE_FAILED",
        FAILED_MESSAGE: "Get resource bundle failed"
    }
};

exports.NOTES= {

    CREATE: {
        MISSING_CODE: "ERR_NOTE_CREATE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for create notes are missing",
        FAILED_CODE: "ERR_NOTE_CREATE_FAILED",
        FAILED_MESSAGE: "Create notes failed"
    },
    
    GET: {
        MISSING_CODE: "ERR_NOTE_GET_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get note detail are missing",
        FAILED_CODE: "ERR_NOTE_GET_FAILED",
        FAILED_MESSAGE: "Get note detail failed"
    },
    
    UPDATE: {
        MISSING_CODE: "ERR_NOTE_UPDATE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for update note are missing",
        FAILED_CODE: "ERR_NOTE_UPDATE_FAILED",
        FAILED_MESSAGE: "Update note failed"
    },
    
    SEARCH: {
        MISSING_CODE: "ERR_NOTE_SEARCH_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for search note are missing",
        FAILED_CODE: "ERR_NOTE_SEARCH_FAILED",
        FAILED_MESSAGE: "Search note failed"
    },
    
    DELETE: {
        MISSING_CODE: "ERR_NOTE_DELETE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for delete note are missing",
        FAILED_CODE: "ERR_NOTE_DELETE_FAILED",
        FAILED_MESSAGE: "Delete note failed"
    }
};

exports.DOMAIN= {

    GET_DOMAINS: {
        FAILED_CODE: "ERR_GET_DOMAINS_FAILED",
        FAILED_MESSAGE: "Get domains failed"
    },
    
    GET_DOMAIN_BY_ID: {
        MISSING_CODE: "ERR_GET_DOMAIN_BY_ID_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get domain are missing",
        FAILED_CODE: "ERR_GET_DOMAIN_BY_ID_FAILED",
        FAILED_MESSAGE: "Get domain failed"
    },
    
    GET_OBJECTS: {
        MISSING_CODE: "ERR_GET_OBJECTS_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get objects are missing",
        FAILED_CODE: "ERR_GET_OBJECT_FAILED",
        FAILED_MESSAGE: "Get objects failed"
    },
    
    GET_OBJECT_BY_ID: {
        MISSING_CODE: "ERR_GET_OBJECT_BY_ID_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get object are missing",
        FAILED_CODE: "ERR_GET_OBJECT_BY_ID_FAILED",
        FAILED_MESSAGE: "Get object failed"
    },
    
    GET_CONCEPT_BY_ID: {
        MISSING_CODE: "ERR_GET_CONCEPT_BY_ID_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for get concept are missing",
        FAILED_CODE: "ERR_GET_CONCEPT_BY_ID_FAILED",
        FAILED_MESSAGE: "Get concept failed"
    },
    
    SEARCH_OBJECT_TYPE: {
        MISSING_CODE: "ERR_SEARCH_OBJECT_TYPE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for search object type are missing",
        FAILED_CODE: "ERR_SEARCH_OBJECT_TYPE_FAILED",
        FAILED_MESSAGE: "Search object type failed"
    },
    
    CREATE_OBJECT_TYPE: {
        MISSING_CODE: "ERR_CREATE_OBJECT_TYPE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for create object type are missing",
        FAILED_CODE: "ERR_CREATE_OBJECT_TYPE_FAILED",
        FAILED_MESSAGE: "Create object type failed"
    },
    
    UPDATE_OBJECT_TYPE: {
        MISSING_CODE: "ERR_UPDATE_OBJECT_TYPE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for update object type are missing",
        FAILED_CODE: "ERR_UPDATE_OBJECT_TYPE_FAILED",
        FAILED_MESSAGE: "Update object type failed"
    },
    
    RETIRE_OBJECT_TYPE: {
        MISSING_CODE: "ERR_RETIRE_OBJECT_TYPE_FIELDS_MISSING",
        MISSING_MESSAGE: "Required fields for retire object type are missing",
        FAILED_CODE: "ERR_RETIRE_OBJECT_TYPE_FAILED",
        FAILED_MESSAGE: "Retire object type failed"
    }
};

exports.EMAIL = {
    CREATE_FLAG: {
        FAILED_CODE: "ERR_SEND_CREATE_FLAG_EMAIL",
        FAILED_MESSAGE: "Sending email failed for create flag",
        SUBJECT: "Flag raised for your content: Content Type: {{Content type}}, Title: {{Content title}} ",
        BODY: "Your content is flagged by another user. Details:<br><br>"+
            "<b>Content Type: </b>{{Content type}}<br>"+
            "<b>Title: </b>{{Content title}}<br>"+
            "<b>Flag(s) Raised: </b>{{Flag reason}}<br>"+
            "<b>Content Status: </b>{{Content status}}<br>"
    },
    ACCEPT_FLAG: {
        FAILED_CODE: "ERR_SEND_ACCEPT_FLAG_EMAIL",
        FAILED_MESSAGE: "Sending email failed for accept flag",
        SUBJECT: "Reviewer has flagged your content: {{Content type}} ",
        BODY: "Your content has been flagged by the reviewer. Details:<br><br>"+
            "<b>Content Type: </b>{{Content type}}<br>"+
            "<b>Title: </b>{{Content title}}<br>"+
            "<b>Flag(s) Raised: </b>{{Flag reason}}<br>"
    },
    REJECT_FLAG: {
        FAILED_CODE: "ERR_SEND_REJECT_FLAG_EMAIL",
        FAILED_MESSAGE: "Sending email failed for reject flag",
        SUBJECT: "Congratulations, your content is live! Content Type: {{Content type}}, Title: {{Content title}}",
        BODY: "Congratulations! The content that you had submitted has been accepted for publication. It is now available through the Genie app. Details:<br>"+
            "<b>Content Type: </b>{{Content type}}<br><br>"+
            "<b>Title: </b>{{Content title}}<br>"+
            "<b>Status: </b>{{Content status}}<br>"
    }
};

exports.HEALTH_CHECK = {
    EK_STEP: {
        NAME: "ekstep.api",
        FAILED_CODE: "EK_STEP_HEALTH_FAILED",
        FAILED_MESSAGE: "Ekstep service is not healthy"
    },
    LEARNER_SERVICE: {
        NAME: "learnerservice.api",
        FAILED_CODE: "LEARNER_SERVICE_HEALTH_FAILED",
        FAILED_MESSAGE: "Learner service is not healthy"
    },
    MONGODB_CONNECTION: {
        NAME: "mongodb",
        FAILED_CODE: "MONGODB_CONNECTION_HEALTH_FAILED",
        FAILED_MESSAGE: "MongoDb is not connected"
    }
}