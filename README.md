# Store

# 🚀 منصة BLACK STORE للذكاء الاصطناعي

مرحباً بك في مشروع **بلاك ستور**، المنصة الموحدة لجمع أقوى نماذج الذكاء الاصطناعي في مكان واحد آمن ودائم.

## 💻 كود واجهة الموقع الأساسية (HTML)

يمكنك نسخ هذا الكود ووضعه في ملف `index.html` لتشغيل واجهة المحادثة:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>Black Store AI</title>
    <style>
        body { background-color: #121212; color: white; font-family: sans-serif; text-align: center; padding: 50px; }
        .chat-box { width: 80%; max-width: 600px; margin: auto; background: #1e1e1e; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.5); }
        select, input, button { width: 100%; padding: 10px; margin-top: 10px; border-radius: 5px; border: none; }
        button { background-color: #007bff; color: white; cursor: pointer; }
    </style>
</head>
<body>
    <h1>منصة BLACK STORE للذكاء الاصطناعي</h1>
    <div class="chat-box">
        <select id="ai-select">
            <option value="chatgpt">ChatGPT</option>
            <option value="gemini">Gemini</option>
            <option value="claude">Claude</option>
            <option value="grok">Grok</option>
        </select>
        <div id="chat-output" style="height: 200px; overflow-y: auto; background: #2d2d2d; margin-top: 10px; padding: 10px; text-align: right;">
            مرحباً بك في بلاك ستور.. اختر النموذج واكتب رسالتك.
        </div>
        <input type="text" id="user-input" placeholder="اكتب رسالتك هنا...">
        <button onclick="sendMessage()">إرسال للذكاء الاصطناعي</button>
    </div>
</body>
</html>
```

## 🛠️ الميزات القادمة للمشروع
* تفعيل البحث التلقائي في الإنترنت واستخراج المصادر.
* ربط النماذج الرسمية (ChatGPT, Gemini, Claude, Grok) عبر الـ APIs.
* نظام حماية متطور لمنع البوتات الخارجية.
* 
