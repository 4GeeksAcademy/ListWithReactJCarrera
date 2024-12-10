export const TodoAPI = {
    encodeGetParams: function (p) { 
      return Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");
    },
    
    
    baseUrl: "https://playground.4geeks.com/todo",
    request: async function(options) {
        options = {
            url: "/",
            method: "get",
            params: {},
            ...options
        };

        switch (options.method) {
            case "get":
            case "delete":
                options.url += TodoAPI.encodeGetParams(options.params);
                break;
            case "post":
                options.body = JSON.stringify(options.params);
                break;
            
            
        }

        const result = await fetch(`${TodoAPI.baseUrl}${options.url}`, {
            headers: {
            "Content-Type": "application/json",
          },
            method: options.method,
            body: options.body
        });
        
        return await result.json();
            
    },
    get: async function (options){
        return await TodoAPI.request({
            ...options,
            method: "get",
        })
    },
    delete: async function (options){
        return await TodoAPI.request({
            ...options,
            method: "delete",
        })
    },
    post: async function (options) {
        return await TodoAPI.request({
            ...options,
            method: "post",
        })
    }
    
    
}