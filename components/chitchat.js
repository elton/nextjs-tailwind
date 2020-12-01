// Copyright 2020 Elton Zheng
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export default function ChitChat() {
  return (
    <div class='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
      <div class='flex-shrink-0'>
        <img class='h-12 w-12' src='/images/chat.svg' alt='chat logo' />
      </div>
      <div>
        <div class='text-xl font-medium text-black'>ChitChat</div>
        <p class='text-gray-500'>You have a new message!</p>
      </div>
    </div>
  );
}
